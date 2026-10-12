/* ================= State ================= */
const META_KEY='rdp2_meta',RUN_KEY='rdp2_run';
const CNT0={runs:0,runsEnded:0,wins:0,hardWins:0,flawless:0,bossKills:0,maxHit:0,crits:0,alphaKills:0,portals:0,sanct:0,sold:0,maxInv:0,spent:0,bought:0,setDone:0,potions:0,tavHeals:0,revives:0,forgeLeg:0,maxGold:0,maxTeam:0,bestStarWin:0,kills:0};
function freshMeta(){return{unlocked:1,worlds:WORLDS.map(()=>({starMax:1,zoneMax:0,wins:0,runs:0})),alphas:{},relics:{},talis:{},quests:{},armory:{},cnt:{...CNT0}}}
let meta=store.get(META_KEY,null)||freshMeta();
meta.cnt=Object.assign({...CNT0},meta.cnt);
let run=store.get(RUN_KEY,null);
/* migrate: relics used to be equippable items */
if(run){const isR=x=>x&&(x.relic||x.set==='relic');(run.inv||[]).filter(isR).forEach(x=>{if(x.relic)meta.relics[x.relic]=1});run.inv=(run.inv||[]).filter(x=>!isR(x));(run.heroes||[]).forEach(h=>{for(const s in h.eq)if(isR(h.eq[s])){meta.relics[h.eq[s].relic]=1;h.eq[s]=null}});if(run.loot)run.loot.items=(run.loot.items||[]).filter(x=>!isR(x));store.set(RUN_KEY,run);store.set(META_KEY,meta)}
let ui={screen:'home',world:0,star:1,sel:null,modal:null,confirm:null,pick:[],lastScreen:null,mapSel:null,invHero:0,itemId:null,inspect:null,encCls:'lame',bestW:0,bestZ:null,questT:null,form:null,shopTab:'buy',invSort:'tier'};
ui.world=Math.min(meta.unlocked-1,store.get('rdp2_ui_w',0));ui.star=meta.worlds[ui.world].starMax;
let busy=false,timer=null,fxq=[];
const saveRun=()=>{run?store.set(RUN_KEY,run):store.del(RUN_KEY)};
const saveMeta=()=>store.set(META_KEY,meta);
function later(fn,ms){clearTimeout(timer);timer=setTimeout(fn,ms)}
function toast(msg){const box=document.getElementById('toasts');const d=document.createElement('div');d.className='toast';d.textContent=msg;box.appendChild(d);setTimeout(()=>d.remove(),3200)}

/* ================= Talismans ================= */
function relB(){const B={hp:0,crit:0,dmg:0,res:0,pp:0,soin:0};for(const k in meta.relics){const [w,z]=k.split('_').map(Number);if(WORLDS[w]&&RELFX[z])B[RELFX[z][0]]+=relicVal(w,z)}return B}
function talB(){const T={hp:0,dmg:0,pp:0,crit:0,pa:0,res:0,potion:0,gold:0,stat:0,pierce:0};const o=meta.talis;
  if(o.mousse)T.hp+=8;if(o.braise)T.dmg+=5;if(o.rosee)T.pp+=Math.min(30,5*((meta.cnt.bestR??0)+1));if(o.brise)T.crit+=10;if(o.ambre)T.pa+=1;if(o.pierre)T.res+=5;if(o.pelerin)T.potion+=1;if(o.or)T.gold+=30;if(o.grenat)T.stat+=8;if(o.givre)T.pierce+=8;const B=relB();T.hp+=B.hp;T.crit+=B.crit;T.dmg+=B.dmg;T.res+=B.res;T.pp+=B.pp;T.soin=B.soin;return T}
const hasT=k=>!!meta.talis[k];
function checkQuests(){let changed=false;
  TALIS.forEach(t=>{t.q.forEach(q=>{if(!meta.quests[q]&&QUESTS[q][1](meta)){meta.quests[q]=1;changed=true;toast('Quête réussie : '+QUESTS[q][0])}});
    if(!meta.talis[t.id]&&t.q.every(q=>meta.quests[q])){meta.talis[t.id]=1;changed=true;toast(`${t.i} ${t.n} obtenu ! ${t.b}`)}});
  if(changed)saveMeta()}

/* ================= Heroes ================= */
const xpNeed=l=>26*l;
const sc=u=>1+(u.lvl||1)*.045;
function newHero(cls,lvl){const c=CLASSES[cls];const h={id:'h'+(run.uid++),side:'h',cls,name:c.n,icon:c.i,lvl,xp:0,hp:1,row:c.row,slot:0,eq:{arme:null,coiffe:null,cape:null,anneau:null},alive:true,st:{},used:{},cd:{},pc:{},ptt:{},tcd:{},pa:6};h.hp=maxHp(h);return h}
function hstats(h){
  const c=CLASSES[h.cls],L=h.lvl,T=talB();
  const base={t:0,f:0,e:0,a:0,vita:Math.round(c.vit*L)};c.els.forEach(e=>base[e]+=Math.round(4.8*(L-1)));
  const it={t:0,f:0,e:0,a:0,vita:0,crit:0,pp:0,pui:0,soin:0,init:0,pa:0,res:{t:0,f:0,e:0,a:0}};const sets={},setMinR={};
  for(const x of Object.values(h.eq))if(x){for(const k in x.st){const v=x.st[k];if(k==='adapt')c.els.forEach(e=>it[e]+=v);else if(k[0]==='r'&&k.length===2)it.res[k[1]]+=v;else it[k]=(it[k]||0)+v}if(x.set&&x.set!=='relic'){sets[x.set]=(sets[x.set]||0)+1;setMinR[x.set]=Math.min(setMinR[x.set]??9,x.r)}}
  const setPA=Math.max(0,...Object.keys(sets).map(k=>sets[k]>=4?(setMinR[k]>=4?2:1):0));
  const tot=k=>k==='vita'?base[k]+it[k]:Math.round((base[k]+it[k])*(1+T.stat/100));const vita=base.vita+it.vita;
  return{base,it,t:tot('t'),f:tot('f'),e:tot('e'),a:tot('a'),vita,
    hp:Math.round((50+vita+tot('t')*.25)*(1+T.hp/100)),
    crit:Math.min(60,5+tot('a')/12+it.crit+T.crit),critD:30+tot('a')/6,esq:Math.min(25,tot('a')/20),
    pp:Math.round(100+tot('e')/2+it.pp+T.pp),soin:tot('f')*.42+it.soin+(T.soin||0),pui:it.pui+T.dmg,
    res:{t:it.res.t+T.res,f:it.res.f+T.res,e:it.res.e+T.res,a:it.res.a+T.res},
    pa:6+setPA+it.pa+T.pa,init:c.init+it.init+Math.floor(L/10),setPA}}
const maxHp=u=>u.side==='h'?hstats(u).hp:u.hpMax;
function heroCap(){return WORLDS[run.w].lv[1]}
function giveXp(h,n,lines){if(h.lvl>=heroCap())return;h.xp+=Math.round(n);while(h.xp>=xpNeed(h.lvl)&&h.lvl<heroCap()){const before=maxHp(h);h.xp-=xpNeed(h.lvl);h.lvl++;meta.cnt.maxLvl=Math.max(meta.cnt.maxLvl||0,h.lvl);if(h.alive)h.hp+=maxHp(h)-before;lines&&lines.push(`${h.name} passe niveau ${h.lvl}.`)}if(h.lvl>=heroCap())h.xp=0}
function healPct(h,p){if(!h.alive)return;h.hp=Math.min(maxHp(h),h.hp+Math.round(maxHp(h)*p))}
function checkSets(){run.heroes.forEach(h=>{if(hstats(h).setPA)meta.cnt.setDone=Math.max(meta.cnt.setDone,1)})}

/* ================= Items ================= */
const tierOf=(w,z)=>w*ZONES+z+1;
/* niveau fixe d'un palier : milieu de la zone → même objet + même rareté = même Adapt. */
const tierLevel=t=>{const w=Math.min(WORLDS.length-1,Math.floor((t-1)/ZONES)),z=(t-1)%ZONES,[lo,hi]=WORLDS[w].lv;return Math.round(lo+(hi-lo)*(z+.5)/ZONES)};
function setOf(w,z){const b=WORLDS[w].zones[z][2][0];return{k:w+'_'+z,n:'Panoplie '+de(b),sfx:de(b)}}
const VAG={k:'vag',n:'Panoplie du Vagabond',sfx:'du Vagabond'};
const POOLS={arme:['crit','vita','pui','pp'],coiffe:['vita','pp','res','init','res'],cape:['vita','pp','crit','res','soin'],anneau:['crit','vita','pui','res','init']};
function affix(k,L,rm,taken){if(k==='res'){const e=shuffle(EL).find(x=>!taken.includes('r'+x));return['r'+e,Math.max(1,Math.round((R(1,3)+L/50)*rm))]}
  const v={vita:(4+L*.6)*rm,crit:R(1,2)*rm+L/60,pp:(3+L*.12)*rm,pui:(2+L*.12)*rm,soin:(3+L*.15)*rm,init:(2+L*.05)*rm}[k];return[k,Math.max(1,Math.round(v))]}
function genItem(o){
  const slot=o.slot||pick(Object.keys(SLOTS)),r=o.r,rm=RAR[r].m,L=o.tier?tierLevel(o.tier):o.L,set=o.set||VAG;
  const st={adapt:Math.max(1,Math.round((2+L*.35)*rm))};
  shuffle(POOLS[slot]).forEach(k=>{if(Object.keys(st).length>=RAR[r].n)return;if(k!=='res'&&st[k])return;const [kk,v]=affix(k,L,rm,Object.keys(st));st[kk]=v});if(r===5&&Math.random()<.4)st.pa=1;
  const it={id:'i'+(run.uid++),slot,r,st,set:set.k,setN:set.n,tier:o.tier,L,name:(slot==='arme'?spick(WBASE,set.k+'w'):spick(IBASE[slot],set.k+slot))+' '+set.sfx};
  if(slot==='arme'){const a=6+r+R(0,2),b=a+R(3,5),pa=spick([3,3,4],set.k+'pa');it.w={a:pa===4?Math.round(a*1.35):a,b:pa===4?Math.round(b*1.35):b,pa}}
  return it}
function genRelic(w,z,L){const b=WORLDS[w].zones[z][2][0];const it=genItem({L,tier:tierOf(w,z),r:4,set:{k:'relic',n:'Relique',sfx:''},slot:Object.keys(SLOTS)[z%4]});
  for(const k in it.st)it.st[k]=Math.round(it.st[k]*1.2);it.name=RELIC[z]+' '+de(b);it.relic=w+'_'+z;it.setN='Relique';if(it.w){it.w.a+=2;it.w.b+=3}return it}
function spick(list,key){return list[hashRes(key)%list.length]}
function rollR(w){let x=Math.random()*w.reduce((s,v)=>s+v,0);for(let i=0;i<w.length;i++){if((x-=w[i])<0)return i}return 0}
const DROPW={fight:[55,28,12,4,.8,.08],hard:[22,32,25,13,6,.8],boss:[20,30,26,15,7,1],shop:[40,35,18,6,1,0]};
const sellPrice=it=>Math.round(6*it.tier*(it.r+1)*(it.relic?3:1));
const buyPrice=it=>sellPrice(it)*3;
const forgeCost=it=>Math.round(30*it.tier*(it.r+1));
function forgeItem(it){const rm0=RAR[it.r].m;it.r++;const f=RAR[it.r].m/rm0;for(const k in it.st)it.st[k]=Math.max(1,Math.round(it.st[k]*f));
  const keys=Object.keys(it.st);if(keys.length<RAR[it.r].n){for(const k of shuffle(POOLS[it.slot])){if(k!=='res'&&it.st[k])continue;const [kk,v]=affix(k,it.L,RAR[it.r].m,keys);if(!it.st[kk]){it.st[kk]=v;break}}}
  if(it.w){it.w.a+=1;it.w.b+=1}if(it.r>=3)meta.cnt.forgeLeg++;noteArmory(it)}
function addInv(it){run.inv.push(it);noteArmory(it);meta.cnt.maxInv=Math.max(meta.cnt.maxInv,run.inv.length)}
function noteArmory(it){meta.cnt.bestR=Math.max(meta.cnt.bestR??-1,it.r);const k=it.name;meta.armory[k]=Math.max(meta.armory[k]??-1,it.r);if(it.relic)meta.relics[it.relic]=1}
function equip(h,it){const before=maxHp(h);const old=h.eq[it.slot];run.inv=run.inv.filter(x=>x.id!==it.id);h.eq[it.slot]=it;if(old)run.inv.push(old);const after=maxHp(h);if(h.alive)h.hp=clamp(h.hp+(after-before),1,after);checkSets();checkQuests()}
function unequip(h,slot){const it=h.eq[slot];if(!it)return;const before=maxHp(h);h.eq[slot]=null;run.inv.push(it);const after=maxHp(h);if(h.alive)h.hp=clamp(h.hp+(after-before),1,after)}
function findItem(id){let it=run.inv.find(x=>x.id===id);if(it)return{it,where:'inv'};for(const h of run.heroes)for(const s in h.eq)if(h.eq[s]&&h.eq[s].id===id)return{it:h.eq[s],where:h};return null}

/* ================= Map ================= */
const MAPR=12;
function nodeType(r){const w=[['fight',52],['hard',r>=2?14:0],['taverne',8],['sanct',4],['portal',5],['shop',6],['forge',5],['event',9]];let x=Math.random()*w.reduce((s,v)=>s+v[1],0);for(const [k,v] of w){if((x-=v)<0)return k}return'fight'}
function genMap(){const rows=[[{t:'start',l:[]}]];
  for(let r=1;r<=MAPR;r++){const n=R(2,3)+(Math.random()<.2?1:0),row=[];for(let i=0;i<n;i++)row.push({t:nodeType(r),l:[]});rows.push(row)}
  rows.push([{t:'boss',l:[]}]);
  rows.forEach(row=>row.forEach((nd,i)=>{nd.x=clamp(Math.round((i+1)/(row.length+1)*100+(row.length>1?R(-5,5):0)),10,90);if(nd.t==='hard')nd.mod=pick(MODS).k}));
  for(let r=0;r<rows.length-1;r++){const A=rows[r],B=rows[r+1];A.forEach((nd,i)=>{if(A.length===1){nd.l=B.map((_,k)=>k);return}if(B.length===1){nd.l=[0];return}const j=Math.round(i*(B.length-1)/(A.length-1));nd.l=[j];if(Math.random()<.45){const j2=j+(Math.random()<.5?-1:1);if(j2>=0&&j2<B.length)nd.l.push(j2)}});
    B.forEach((nd,j)=>{if(!A.some(a=>a.l.includes(j))){let best=0,bd=1e9;A.forEach((a,i)=>{const d=Math.abs(a.x-nd.x);if(d<bd){bd=d;best=i}});A[best].l.push(j)}})}
  return rows}
const zoneLevel=(r=0)=>{const [lo,hi]=WORLDS[run.w].lv;return Math.round(lo+(hi-lo)*(run.z+r/(MAPR+2))/ZONES)};
const diffMul=(r=0)=>(1+.18*(run.star-1))*(1+.035*(run.w*ZONES+run.z+r/(MAPR+2)))*(run.w===0&&run.z<2?.65+.2*run.z:1);
function starterKit(h,L,w){if(w===0)return;const t=tierOf(w,0);Object.keys(SLOTS).forEach(s=>{const it=genItem({L,tier:t,r:1,slot:s,set:VAG});addInv(it);equip(h,it)})}

function startRun(classes){
  const w=ui.world,T=talB();
  run={uid:1,w,star:ui.star,z:0,rows:null,pos:{r:0,i:0},visited:['0:0'],heroes:[],inv:[],gold:0,potions:3+T.potion,potMax:3+T.potion,alphaB:0,phase:'map',combat:null};
  run.rows=genMap();
  classes.forEach((c,i)=>{const h=newHero(c,WORLDS[w].lv[0]);h.slot=run.heroes.filter(x=>x.row===h.row).length;run.heroes.push(h)});
  // starter gear
  run.heroes.forEach(h=>starterKit(h,WORLDS[w].lv[0],w));
  meta.cnt.runs++;meta.worlds[w].runs++;meta.cnt.maxTeam=Math.max(meta.cnt.maxTeam,run.heroes.length);saveMeta();saveRun()}
function enterNode(r,i){const nd=run.rows[r][i];run.pos={r,i};run.visited.push(r+':'+i);ui.mapSel=null;
  let t=nd.t;
  if(t==='portal'){meta.cnt.portals++;t=pick(['fight','fight','hard','taverne','shop','forge','sanct','event','event']);toast('Le portail mène à : '+NODE[t].n);if(t==='hard')nd.mod=pick(MODS).k}
  switch(t){
    case'fight':case'hard':case'boss':return startCombat(t,nd.mod);
    case'taverne':run.tav={opts:shuffle(ORDER.filter(c=>!run.heroes.some(h=>h.cls===c))).slice(0,3),done:false};run.phase='taverne';break;
    case'sanct':run.alphaB+=2;meta.cnt.sanct++;run.msg={icon:'🗿',title:'Sanctuaire',text:`Une statue couverte d'offrandes. Les monstres alpha apparaissent plus souvent pour le reste de la run (${alphaChance()} % par monstre).`};run.phase='msg';break;
    case'shop':{const L=zoneLevel(r),tr=tierOf(run.w,run.z);run.shop={items:Array.from({length:5},()=>{const it=genItem({L,tier:tr,r:rollR(DROPW.shop),set:Math.random()<.7?setOf(run.w,run.z):VAG});return{it,price:buyPrice(it),sold:false}})};ui.shopTab='buy';run.phase='shop';break}
    case'forge':run.phase='forge';break;
    case'event':startEvent();break;
  }
  checkQuests();saveRun();render()}
const alphaChance=()=>2+run.alphaB;

/* ================= Combat helpers ================= */
const C=()=>run.combat;
const allUnits=()=>run.heroes.concat(C()?C().enemies:[]);
const unit=id=>allUnits().find(u=>u.id===id);
const heroesAlive=()=>run.heroes.filter(h=>h.alive);
const foesOf=u=>(u.side==='h'?C().enemies:run.heroes).filter(x=>x.alive);
const alliesOf=u=>(u.side==='h'?run.heroes:C().enemies).filter(x=>x.alive);
const frontFoes=u=>{const f=foesOf(u);const fr=f.filter(x=>x.row==='front');return fr.length?fr:f};
const rowOf=t=>(t.side==='h'?run.heroes:C().enemies).filter(x=>x.alive&&x.row===t.row);
function log(s){const c=C();if(!c)return;c.log.push(s);if(c.log.length>80)c.log.shift()}
function fx(u,txt,cls){fxq.push({id:u.id,txt,cls})}
function fxA(o){fxq.push(o)}
const sab=u=>{u.st.sab=Math.min(5,(u.st.sab||0)+1)};
const rage=u=>{u.st.rage=Math.min(5,(u.st.rage||0)+1);fx(u,'Rage '+u.st.rage,'buff')};
function tshield(t,v,turns){v=Math.round(v);if(!t.alive||!v)return;shield(t,v);(t.st.tsh=t.st.tsh||[]).push({v,t:turns})}
function shield(t,v){if(!t.alive)return;v=Math.round(v);t.st.shield=(t.st.shield||0)+v;fx(t,'+'+v+' 🛡','shield')}
function heal(src,t,a,b,o={}){if(!t||!t.alive)return;let v=R(Math.round(a),Math.round(b));if(src.side==='h'&&!o.raw)v=Math.round(v*sc(src)*(1+hstats(src).soin/100));const real=Math.min(v,maxHp(t)-t.hp);t.hp+=real;if(t.side==='h')meta.cnt.healed=(meta.cnt.healed||0)+real;fx(t,'+'+v,'heal');log(`${t.name} récupère <b class="h">${v}</b> PV.`)}
function poison(src,t,v,turns){v=Math.round(src.side==='h'?v*(1+hstats(src).pui/100):v);const p=t.st.poison||{v:0,t:0};t.st.poison={v:p.v+v,t:Math.max(p.t,turns)};fx(t,'☠ '+v,'debuff');log(`${t.name} est empoisonné (${t.st.poison.v}/tour).`)}
function resOf(t,e){return (t.side==='h'?hstats(t).res[e]:t.res[e])+bsum(t,'res')}
function esq(t){if(t.side!=='h')return 0;return hstats(t).esq+(t.st.smoke?20:0)+bsum(t,'esq')}
/* timed buffs: t = number of the holder's turn ends it lasts (+1 if given during its own turn) */
function addB(u,k,c,v,t,x){if(!u||!u.alive)return;const cur=C()&&C().cur===u.id;u.st.b=u.st.b||{};u.st.b[k]=Object.assign({c,v,t:t+(cur?1:0)},x||{})}
function bsum(u,c){let s=0;const b=u&&u.st&&u.st.b;if(b)for(const k in b)if(b[k].c===c)s+=b[k].v;return s}
function tickB(u){const b=u.st.b;if(b)for(const k in b){if(--b[k].t<=0)delete b[k]}const c=C();if(c&&c.aegis&&c.aegis.by===u.id&&--c.aegis.t<=0){c.aegis=null;log('Le bastion se dissipe.')}}
function rollCrit(u){const S=hstats(u);return Math.random()*100<Math.min(75,S.crit+bsum(u,'crit'))}
function worstEl(t){let w='t',v=1e9;EL.forEach(e=>{const r=resOf(t,e);if(r<v){v=r;w=e}});return w}
function freeSlot(row,pref){const occ=new Set(C().enemies.filter(x=>x.alive&&x.row===row).map(x=>x.slot||0));if(!occ.has(pref))return pref;let i=0;while(occ.has(i))i++;return i}
const oppRow=r=>r==='front'?'back':'front';
function moveRow(t){if(!t||!t.alive)return;const to=oppRow(t.row);t.slot=freeSlot(to,t.slot||0);t.row=to;fx(t,to==='back'?'⇡ arrière':'⇣ avant','debuff');log(`${t.name} bascule en rangée ${to==='back'?'arrière':'avant'}.`);trapCheck(t)}
function echo(x){if(!x.alive)return;x.st.echo=Math.min(4,(x.st.echo||0)+1);fx(x,'Écho '+x.st.echo,'debuff');const a=x.st.b&&x.st.b.aig;if(a){const u=unit(a.by);if(u&&u.alive)hit(u,x,7,10)}}
function bascule(t){const to=oppRow(t.row);const o=C().enemies.find(x=>x.alive&&x.row===to&&(x.slot||0)===(t.slot||0));
  if(!o)return moveRow(t);o.row=t.row;t.row=to;log(`${t.name} et ${o.name} échangent leur place.`);fx(t,'⇅','debuff');fx(o,'⇅','debuff');trapCheck(t);trapCheck(o);echo(t);echo(o)}
const TRAPN={fosse:'Fosse',eclats:'Chausse-trappe'};
function placeTrap(u,row,kind){const c=C();c.traps=(c.traps||[]).filter(x=>!(x.row===row&&x.kind===kind));c.traps.push({row,kind,by:u.id});log(`${u.name} piège la rangée ${row==='back'?'arrière':'avant'} (${TRAPN[kind]}).`);fx(u,'🪤','buff')}
function trapCheck(t){const c=C();if(!c.traps||!t.alive)return;const tr=c.traps.filter(x=>x.row===t.row);if(!tr.length)return;c.traps=c.traps.filter(x=>x.row!==t.row);
  tr.forEach(x=>{const u=unit(x.by);if(!u||!u.alive||!t.alive)return;const ch=1+bsum(u,'chakra')/100;log(`${TRAPN[x.kind]} se déclenche sous ${t.name} !`);
    if(x.kind==='fosse'){const n=rowOf(t).filter(y=>y!==t).length;hit(u,t,10,14,{mult:ch*(1+.3*n)})}
    else{const rest=rowOf(t).filter(y=>y!==t);hit(u,t,8,11,{mult:ch});rest.forEach(y=>hit(u,y,8,11,{mult:ch*.5,noCrit:1}))}
    u.st.trapCnt=(u.st.trapCnt||0)+1})}
function sweepList(u,t,kind){const c=C();if(!c||!t)return[t].filter(Boolean);if(kind==='s'&&c.lance&&c.lance.by===u.id&&c.lance.row==='back')return foesOf(u);return rowOf(t)}
function lanceSweep(u,t,a,b,kind){const c=C(),row=t.row,list=sweepList(u,t,kind),n=list.length;
  list.forEach(x=>hit(u,x,a,b,{mult:kind==='f'?1+.15*n:1}));
  if(kind==='m'&&u.alive)shield(u,6*sc(u)*n);
  const L=c.lance;if(L&&L.by===u.id&&(L.row===row||kind==='s'&&L.row==='back')){L.dur--;if(L.dur<=0){c.lance=null;if(u.alive){shield(u,maxHp(u)*.15);log('La lance se brise et te protège.')}}}}
function detonate(u){const c=C();foesOf(u).filter(e=>e.st.bomb).forEach(e=>{const b=e.st.bomb;e.st.bomb=0;const row=rowOf(e).filter(x=>x!==e);
  const hitB=(x,lo,hi,o)=>{const r=hit(u,x,lo,hi,o);if(u.st.resq&&x.alive){x.st.paLoss=(x.st.paLoss||0)+2;fx(x,'−2 PA','debuff')}return r};
  if(e.alive)hitB(e,8*b,12*b);row.forEach(x=>hitB(x,4*b,6*b,{noCrit:1}))})}
function heroMult(h,S,e){return 1+(S[e]+S.pui)/100+(e!=='f'?S.f*.002:0)}
function bestEl(h,t,S){let best=null,bv=-1e9;CLASSES[h.cls].els.forEach(e=>{const v=heroMult(h,S,e)*(1-clamp(t?resOf(t,e):0,-50,60)/100);if(v>bv){bv=v;best=e}});return best}
/* Every damage modifier except the crit roll, shared by real hits and by the previews shown on spells. */
function dmgMult(src,t,el,o={},S){
  S=S||(src.side==='h'?hstats(src):null);
  let m=S?(CLASSES[src.cls].els.includes(el)?heroMult(src,S,el):Math.max(...CLASSES[src.cls].els.map(x=>heroMult(src,S,x)))):(1+(src.st.buff||0)/100)*(src.turnMul||1);
  m*=1+bsum(src,'dmg')/100;
  if(src.side==='h'&&C()){const P=run.heroes.find(h=>h.alive&&h.st.portals);if(P){const n=P.st.portals;if(P===src)m*=1+.02*n;else if(src.row===P.row)m*=1+.01*n}}
  if(t&&t.st.b)for(const k in t.st.b){const b=t.st.b[k];if(b.c==='mark'){const by=unit(b.by);if(src.id===b.by||(by&&src.side==='h'&&src.row===by.row))m*=1+b.v/100}}
  if(t)m*=1+bsum(t,'tk')/100;
  if(src.st.elan)m*=1+.1*src.st.elan;
  if(src.st.cri)m*=1.3;
  if(src.st.howl)m*=1.15;
  if(src.st.rage)m*=1+.1*src.st.rage;
  if(t&&src.st.prey&&src.st.prey===t.id)m*=1.25;
  if(src.st.ambush&&!o.noCrit)m*=1.5;
  if(o.mult)m*=o.mult;
  if(src.st.weak)m*=.75;
  let res=t?resOf(t,el):0;if(o.pierce&&res>0)res/=2;if(S&&t&&hasT('givre'))res-=8;
  return m*(1-clamp(res,-50,60)/100)}
function hit(src,t,a,b,o={}){
  if(!t||!t.alive)return null;
  if(src.side==='e'&&t.side==='h'&&t.st.guardBy){const g=unit(t.st.guardBy);if(g&&g.alive&&g!==t){t=g}}
  if(src.side==='e'&&t.side==='h'&&t.st.decoy){delete t.st.decoy;fx(t,'Leurre !','buff');log(`Le leurre de ${t.name} encaisse le coup.`);return{d:0}}
  if(src.side==='e'&&!o.aoe){const ev=esq(t);if(ev&&Math.random()*100<ev){fxA({k:'hit',s:src.id,t:t.id,el:src.el,miss:1});fx(t,'Esquive','buff');log(`${t.name} esquive.`);return{d:0}}}
  const S=src.side==='h'?hstats(src):null;
  const el=o.el||(S?bestEl(src,t,S):src.el);
  let mult=dmgMult(src,t,el,o,S);
  if(src.st.ambush&&!o.noCrit)src.st.ambush=0;
  let crit=false;
  if(!o.noCrit){const cc=S?Math.min(75,S.crit+(src.st.chance||0)*10+(src.st.critBuff?15:0)+bsum(src,'crit')):(src.alpha?10:5);if(src.st.focus){crit=true;src.st.focus=0}else crit=Math.random()*100<cc}
  if(crit)mult*=1+((S?S.critD:30)+bsum(t,'critTk'))/100;
  let d=Math.max(1,Math.round(R(Math.round(a),Math.round(b))*mult));const d0=d;
  if(src.side==='e'&&t.side==='h'){const c=C();
    if(c.aegis&&c.aegis.row===t.row){const a2=Math.min(c.aegis.hp,d);c.aegis.hp-=a2;d-=a2;log(`Le bastion encaisse ${a2}.`);if(c.aegis.hp<=0){c.aegis=null;log('Le bastion tombe.')}if(!d){fx(t,'🏰 '+a2,'shield');return{d:0,crit}}}
    if(t.row==='back'){const v=heroesAlive().find(x=>x!==t&&bsum(x,'valkyr'));if(v){const s2=Math.round(d/2);d-=s2;const ab=Math.min(v.st.shield||0,s2);if(ab)v.st.shield-=ab;v.hp=Math.max(0,v.hp-(s2-ab));fx(v,'-'+s2,'dmg');log(`${v.name} encaisse ${s2} à la place de ${t.name}.`);if(v.hp<=0)ko(v)}}}
  const abs=Math.min(t.st.shield||0,d);if(abs)t.st.shield-=abs;
  const real=d-abs;t.hp=Math.max(0,t.hp-real);
  if(t.side==='h'){t.st.taken=(t.st.taken||0)+real;meta.cnt.taken=(meta.cnt.taken||0)+real}
  if(S&&real>0&&(src.turns||0)<=1)src.st.dealtT1=1;
  if(S&&real>0&&hasT('agate'))heroesAlive().forEach(a=>{if(a!==src)a.st.b=Object.assign(a.st.b||{},{agate:{c:'dmg',v:5,t:Math.max(1,(a.st.b&&a.st.b.agate&&a.st.b.agate.t)||0,C()&&C().cur===a.id?2:1)}})});
  if(S){if(crit)meta.cnt.crits++;if(d>meta.cnt.maxHit)meta.cnt.maxHit=d;
    if(real>0&&src.alive&&run.heroes.some(h=>h.alive&&h.st.flair===t.id)){const v=Math.round(real*.15);if(v){src.hp=Math.min(maxHp(src),src.hp+v);fx(src,'+'+v,'heal')}}}
  fxA({k:'hit',s:src.id,t:t.id,el,crit,real,d,rg:src.side==='e'?!src.melee:src.row==='back'});fx(t,real?'-'+d:'🛡 '+abs,crit?'crit':real?'dmg':'shield');
  log(`${src.name} → ${t.name} : <b class="${crit?'c':'d'}">${d}</b> ${elIco(el)}${crit?' critique':''}${abs?` (${abs} absorbés)`:''}`);
  if(t.hp<=0){ko(t);if(S&&t.side==='e'&&src.alive&&hasT('onyx'))shield(src,maxHp(src)*.2)}
  if(t.alive&&t.st.thorns&&src!==t&&src.alive){const th=t.st.thorns;src.hp=Math.max(0,src.hp-th);fx(src,'-'+th,'dmg');log(`${t.name} renvoie ${th} dégâts.`);if(src.hp<=0)ko(src)}
  return{d,crit,real,el}}
function ko(u){u.alive=false;u.hp=0;const keep=u.side==='e'?{}:{};u.st=keep;log(`<b class="d">${u.name} est K.O.</b>`);
  if(u.side==='h'){const c=C();if(c)c.anyKO=true;run.heroes.forEach(h=>{if(h.st.guardBy===u.id)delete h.st.guardBy})}
  else{meta.cnt.kills++;if(run.daily)run.daily.kills=(run.daily.kills||0)+1;meta.cnt.killsEl=meta.cnt.killsEl||{};meta.cnt.killsEl[u.el]=(meta.cnt.killsEl[u.el]||0)+1;if(u.alpha&&u.key){if(!meta.alphas[u.key])toast(`Alpha vaincu : ${u.name} ajouté au bestiaire`);meta.alphas[u.key]=1;meta.cnt.alphaKills++}}}

/* ================= Enemies ================= */
function hashRes(name){let h=7;for(const ch of name)h=(h*31+ch.charCodeAt(0))|0;return h>>>0}
function mkEnemy(def,L,o={}){
  const A=def.boss?null:ARCH[def.arch];const sm=diffMul(run.pos.r);const n=run.heroes.length;
  let hp=29*(1+.08*L)*(def.boss?4.6:A.hp)*sm*(.55+.225*n),d=8*(1+.06*L)*(def.boss?1.25:A.d)*sm;
  const res={t:0,f:0,e:0,a:0};const h=hashRes(def.n);EL.forEach((e,i)=>{res[e]=((h>>(i*4))&15)-5});res[def.el]=def.boss?25:20;res[OPP[def.el]]=-15;
  const alpha=!def.boss&&Math.random()*100<alphaChance();
  if(alpha){hp*=1.6;d*=1.25;EL.forEach(e=>res[e]+=5)}
  let init=(def.boss?12:A.init)+R(0,3)+Math.floor(L/10);
  const m=o.mod;
  if(m==='veloces'){init+=4;d*=1.15}if(m==='robustes')hp*=1.35;if(m==='enrages')d*=1.25;if(m==='cuirasses')EL.forEach(e=>res[e]+=15);
  const mv=def.boss?BOSSMV[def.cyc]:A.mv;
  return{id:'e'+(run.uid++),side:'e',key:def.key,name:def.n+(alpha?' alpha':''),pname:def.n,icon:def.i,lvl:L,hpMax:Math.round(hp),hp:Math.round(hp),dmgB:d,res,init,el:def.el,row:def.boss?'front':A.row,melee:def.boss?1:(A.row==='front'),mv,mi:R(0,mv.length-1),alpha,boss:!!def.boss,regen:m==="regen",alive:true,st:{}}}
function rosterDef(idx){const W=WORLDS[run.w];const r=W.roster[idx];return{n:r[0],i:r[1],arch:r[2],el:r[3],key:run.w+'_'+idx}}
const starExtra=s=>(s>=2?1:0)+(s>=4?1:0);
const STAR_DESC=['Normal','+1 monstre par combat, ennemis +18 %','+1 monstre, ennemis +36 %','+2 monstres, ennemis +54 %','+2 monstres, ennemis +72 %, un modificateur de combat dur sur chaque combat'];
function startCombat(kind,mod){
  const Z=WORLDS[run.w].zones[run.z],L=zoneLevel(run.pos.r);
  let defs=[];
  const extra=starExtra(run.star);
  let eMod=kind==='hard'?mod:null;if(!eMod&&run.nextMod){eMod=run.nextMod;delete run.nextMod}if(!eMod&&run.daily)eMod=run.daily.mod;if(!eMod&&run.star>=5)eMod=pick(MODS.filter(m=>m.k!=='nombreux')).k;
  if(kind==='boss'){const b=Z[2];defs=[{n:b[0],i:b[1],el:b[2],cyc:b[3],boss:1}];shuffle(Z[3]).slice(0,Math.min(4,Math.min(2,run.heroes.length-1)+extra)).forEach(i=>defs.push(rosterDef(i)))}
  else{let k=run.pos.r<=1?2:(Math.random()<.5?2:3);if(kind==='hard')k=3;if(eMod==='nombreux')k++;k=Math.min(5,k+extra);for(let i=0;i<k;i++)defs.push(rosterDef(pick(Z[3])))}
  const es=defs.map(d=>mkEnemy(d,L,{mod:eMod}));
  const cnt={};es.forEach(e=>cnt[e.name]=(cnt[e.name]||0)+1);const seen={};es.forEach(e=>{if(cnt[e.name]>1){seen[e.name]=(seen[e.name]||0)+1;e.name+=' '+'ABCDEF'[seen[e.name]-1]}});
  ['front','back'].forEach(r=>es.filter(e=>e.row===r).forEach((e,i)=>e.slot=i));
  run.heroes.forEach(h=>{h.st={};h.used={};h.cd={};h.pc={};h.ptt={};h.tcd={};h.turns=0});
  run.combat={kind,mod:eMod,L,enemies:es,traps:[],lance:null,aegis:null,order:[],idx:-1,round:0,log:[],cur:null,over:false,anyKO:false};
  run.phase='combat';ui.sel=null;
  if(es.some(e=>e.alpha))toast('Un monstre alpha est apparu !');
  log(`<span class="rd">— ${kind==='boss'?'Donjon':kind==='hard'?'Combat dur':'Combat'} · niveau ${L} —</span>`);
  saveRun();nextTurn()}
const stat=(u,k)=>u.side==='h'?hstats(u)[k]:u[k];
function heroEndTurn(h){const c=C();if(hasT('quartz')&&(h.turns||0)===1&&!h.st.dealtT1){addB(h,'quartz','dmg',5,9999);log(`${h.name} a pris le temps de viser : +5 % de dégâts pour le combat.`)}if(hasT('lierre')){const n=c.enemies.filter(e=>e.alive&&e.row==='front').length;if(n)shield(h,maxHp(h)*.03*n)}
  if(hasT('perle'))heroesAlive().filter(a=>a.row===h.row).forEach(a=>{const v=Math.round(maxHp(a)*.03);if(a.hp<maxHp(a))heal(h,a,v,v,{raw:1})})}
const leadHero=()=>heroesAlive().slice().sort((a,b)=>(a.row===b.row?0:a.row==='front'?-1:1)||(a.slot||0)-(b.slot||0))[0];
function nextOrder(){let o=allUnits().filter(u=>u.alive).sort((a,b)=>stat(b,'init')-stat(a,'init')||(a.side==='h'?-1:1));if(hasT('cauchemar')){const L=leadHero();if(L){o=o.filter(x=>x!==L);o.unshift(L)}}return o}
function buildOrder(){const c=C();c.round++;c.order=allUnits().filter(u=>u.alive).sort((a,b)=>stat(b,'init')-stat(a,'init')||(a.side==='h'?-1:1)).map(u=>u.id);if(hasT('cauchemar')){const L=leadHero();if(L){c.order=c.order.filter(x=>x!==L.id);c.order.unshift(L.id)}}c.idx=0;log(`<span class="rd">Tour ${c.round}</span>`)}
function startTurn(u){
  if(u.st.poison){const p=u.st.poison;u.hp=Math.max(0,u.hp-p.v);fx(u,'☠ -'+p.v,'debuff');log(`${u.name} subit ${p.v} de poison.`);p.t--;if(p.t<=0)delete u.st.poison;if(u.hp<=0){ko(u);return}}
  if(u.regen&&u.hp<u.hpMax){const v=Math.round(u.hpMax*.06);u.hp=Math.min(u.hpMax,u.hp+v);fx(u,'+'+v,'heal')}
  if(u.st.tsh){u.st.tsh.forEach(x=>x.t--);const gone=u.st.tsh.filter(x=>x.t<=0).reduce((a,x)=>a+x.v,0);u.st.tsh=u.st.tsh.filter(x=>x.t>0);if(gone)u.st.shield=Math.max(0,(u.st.shield||0)-gone);if(!u.st.tsh.length)delete u.st.tsh}
  if(u.st.shield){const keep=(u.st.tsh||[]).reduce((a,x)=>a+x.v,0),cur=u.st.shield;u.st.shield=Math.min(cur,keep)+Math.floor(Math.max(0,cur-keep)/2)}
  ['taunt','invis','thornsT','weak','smoke','howl','blindBack','sight','critBuff'].forEach(k=>{if(u.st[k]){u.st[k]--;if(u.st[k]<=0)delete u.st[k]}});
  if(!u.st.thornsT)delete u.st.thorns;
  delete u.st.elan;delete u.st.cri;delete u.st.tourb;delete u.st.taken;delete u.st.resq;delete u.st.pfDisc;
  if(u.st.galva&&u.alive){const g=u.st.galva;const v=Math.min(g.v,maxHp(u)-u.hp);if(v>0){u.hp+=v;fx(u,'+'+v,'heal')}if(--g.t<=0)delete u.st.galva}
  if(u.tcd)for(const k in u.tcd){u.tcd[k]--;if(u.tcd[k]<=0)delete u.tcd[k]}
  if(u.side==='h')run.heroes.forEach(h=>{if(h.st.guardBy===u.id)delete h.st.guardBy});
  if(u.cd)for(const k in u.cd){u.cd[k]--;if(u.cd[k]<=0)delete u.cd[k]}
  u.used={};u.ptt={};u.turns=(u.turns||0)+1;
  if(u.side==='h'&&u.alive){if(hasT('lune')&&!u.st.luneUsed&&u.hp<maxHp(u)*.2){u.st.luneUsed=1;const v=Math.round(maxHp(u)*.2);heal(u,u,v,v,{raw:1});log(`Le talisman de Lune veille sur ${u.name}.`)}
    if(hasT('corail')&&(u.turns||0)%2===1){const v=Math.round(maxHp(u)*.08);heal(u,u,v,v,{raw:1})}}
  const xPA=(u.st.cadran?2:0)+(u.st.premo?3:0);if(u.st.cadran&&--u.st.cadran<=0)delete u.st.cadran;delete u.st.premo;
  if(u.side==='h')u.pa=Math.max(1,hstats(u).pa+(u.st.bonusPA||0)+xPA-(u.st.paLoss||0));
  else u.turnMul=1-.15*Math.min(4,u.st.paLoss||0);
  delete u.st.bonusPA;delete u.st.paLoss}
function nextTurn(){
  clearTimeout(timer);const c=C();if(!c||c.over)return;
  if(checkEnd())return;
  const pv=c.cur&&unit(c.cur);c.cur=null;if(pv&&pv.alive){tickB(pv);if(pv.side==='h')heroEndTurn(pv)}
  c.idx++;if(c.idx>=c.order.length)buildOrder();
  const u=unit(c.order[c.idx]);
  if(!u||!u.alive)return nextTurn();
  c.cur=u.id;startTurn(u);
  if(!u.alive){render();if(checkEnd())return;busy=true;return later(()=>{busy=false;nextTurn()},600)}
  if(u.st.stun){delete u.st.stun;log(`${u.name} est étourdi et passe son tour.`);fx(u,'💫','debuff');busy=true;render();saveRun();return later(()=>{busy=false;nextTurn()},700)}
  if(u.side==='e'){busy=true;render();saveRun();later(()=>enemyAct(u),RM()?650:700)}
  else{busy=false;ui.sel=null;render();saveRun();if(!anyCastable(u))autoPass(u)}}
function checkEnd(){const c=C();if(!c||c.over)return true;if(!c.enemies.some(e=>e.alive)){c.over=true;fxA({k:'ban',txt:'Victoire !',sub:c.kind==='boss'?'Le gardien est tombé':'',cls:'win'});later(victory,RM()?700:2300);render();return true}if(!heroesAlive().length){c.over=true;fxA({k:'ban',txt:'Défaite',sub:'L’équipe est à terre',cls:'lose'});later(defeat,RM()?900:2400);render();return true}return false}
function pickHero(e,melee){if(e.st.blindBack)melee=true;let l=heroesAlive().filter(h=>!h.st.invis);if(!l.length)return null;const tt=l.filter(h=>h.st.taunt);if(tt.length)return pick(tt);if(melee){const f=l.filter(h=>h.row==='front');if(f.length)l=f}return pick(l)}
const curMove=e=>e.mv[e.mi%e.mv.length];
function moveVals(e,mv){const d=e.dmgB*(mv[1]||1)*(1+(e.st.buff||0)/100)*(1-.15*Math.min(4,e.st.paLoss||0))*(e.st.weak?.75:1)*(1+bsum(e,'dmg')/100);return[Math.max(1,Math.round(d*.85)),Math.max(1,Math.round(d*1.15))]}
function enemyAct(e){
  if(!run||run.phase!=='combat'||!C()||C().over)return;
  if(!e.alive){busy=false;return nextTurn()}
  if(e.st.trap){const u=unit(e.st.trap);delete e.st.trap;log(`Le piège se déclenche sous ${e.name} !`);if(u)hit(u,e,10,14);if(!e.alive){render();saveRun();if(checkEnd())return;return later(()=>{busy=false;nextTurn()},600)}}
  const mv=curMove(e),k=mv[0],d=e.dmgB*(mv[1]||1);fxA({k:'act',s:e.id});
  const lo=Math.max(1,Math.round(d*.85)),hi=Math.max(1,Math.round(d*1.15));
  switch(k){
    case'atk':{const t=pickHero(e,e.melee);if(t)hit(e,t,lo,hi);break}
    case'shot':{const t=pickHero(e,false);if(t)hit(e,t,lo,hi);break}
    case'multi':for(let i=0;i<mv[2];i++){const t=pickHero(e,e.melee);if(t)hit(e,t,lo,hi)}break;
    case'aoe':log(`${e.name} frappe toute l'équipe !`);heroesAlive().filter(h=>!h.st.invis).forEach(t=>hit(e,t,lo,hi,{aoe:1}));break;
    case'poison':{const t=pickHero(e,e.melee);if(t)poison(e,t,d,mv[2]);break}
    case'shield':alliesOf(e).forEach(x=>shield(x,d*1.2));log(`${e.name} protège ses alliés.`);break;
    case'guard':shield(e,d*1.4);log(`${e.name} se met en garde.`);break;
    case'heal':{const t=alliesOf(e).sort((x,y)=>x.hp/x.hpMax-y.hp/y.hpMax)[0];const v=Math.round(t.hpMax*.14*(mv[1]||1));heal(e,t,v,v);break}
    case'buff':e.st.buff=(e.st.buff||0)+mv[1];fx(e,`+${mv[1]}%`,'buff');log(`${e.name} enrage : +${mv[1]} % dégâts.`);break;
    case'stun':{const t=pickHero(e,e.melee);if(t){hit(e,t,lo,hi);if(t.alive){t.st.stun=1;fx(t,'Étourdi','debuff');log(`${t.name} est étourdi.`)}}break}
    case'weak':{const t=pickHero(e,e.melee);if(t){hit(e,t,lo,hi);if(t.alive){t.st.weak=2;fx(t,'Affaibli','debuff')}}break}
  }
  e.mi++;e.turnMul=1;busy=false;render();saveRun();
  if(checkEnd())return;
  busy=true;later(()=>{busy=false;nextTurn()},RM()?550:800)}
function intentText(e){const mv=curMove(e),k=mv[0];const [lo,hi]=moveVals(e,mv);const el=elIco(e.el);
  return{atk:`⚔ ${lo}–${hi}${el}`,shot:`🏹 ${lo}–${hi}${el}`,multi:`⚔ ${lo}–${hi}${el}×${mv[2]}`,aoe:`✸ ${lo}–${hi}${el} tous`,poison:`☠ ${Math.round(e.dmgB*mv[1])}×${mv[2]}`,shield:`🛡 alliés`,guard:`🛡 garde`,heal:`✚ soin`,buff:`▲ +${mv[1]}%`,stun:`💫 ${lo}–${hi}${el}`,weak:`↘ ${lo}–${hi}${el}`}[k]}
const INTENT_LONG={atk:'Attaque la ligne avant',shot:"Tire sur n'importe quelle rangée",multi:'Attaque plusieurs fois',aoe:"Frappe toute l'équipe",poison:'Empoisonne une cible',shield:'Bouclier à tous ses alliés',guard:'Se donne un bouclier',heal:"Soigne l'allié le plus blessé",buff:'Augmente ses dégâts',stun:'Frappe et étourdit (tour perdu)',weak:'Frappe et affaiblit (−25 % dégâts)'};

/* --- hero spells --- */
function weaponSpell(h){const w=h.eq.arme;if(w&&w.w)return{n:w.name,pa:w.w.pa,tg:'front',base:[w.w.a,w.w.b],txt:'Attaque d’arme.',wpn:1,fn:(u,t)=>hit(u,t,w.w.a,w.w.b)};return{n:'Coup de poing',pa:2,tg:'front',base:[3,5],txt:'Sans arme.',wpn:1,fn:(u,t)=>hit(u,t,3,5)}}
const spellOf=(h,id)=>id==='_arme'?weaponSpell(h):SP[id];
const spellIds=h=>CLASSES[h.cls].sp.concat('_arme');
function targetsFor(h,sp){switch(sp.tg){
  case'front':{const l=foesOf(h).filter(x=>!x.st.invis);if(h.st.sight)return l;let f=l.filter(x=>x.row==='front');const L=sp.lance&&C().lance;if(L&&L.by===h.id)f=f.concat(l.filter(x=>x.row===L.row&&!f.includes(x)));return f.length?f:l}
  case'unit':return heroesAlive().concat(foesOf(h));
  case'any':return foesOf(h);
  case'prey':return foesOf(h).filter(x=>x.id===h.st.prey);
  case'ally':return heroesAlive();
  case'allyOther':return heroesAlive().filter(x=>x!==h);
  case'allyKO':return run.heroes.filter(x=>!x.alive);
  default:return null}}
const costOf=(h,id)=>{const sp=spellOf(h,id);return sp.cost?sp.cost(h):sp.pa};
function validTargets(h,id){const sp=spellOf(h,id);const t=targetsFor(h,sp);if(!t)return null;return t.filter(x=>!(sp.ptt&&h.ptt[id+'|'+x.id])&&!(sp.tcd&&h.tcd&&h.tcd[id+'|'+x.id]))}
function blockReason(h,id){const sp=spellOf(h,id);if(sp.pt&&(h.used[id]||0)>=sp.pt)return sp.pt>1?`Déjà ${sp.pt}× ce tour`:'Déjà lancé ce tour';if(sp.pc&&h.pc[id])return'Déjà lancé ce combat';if(sp.cd&&h.cd[id])return`Recharge : ${Math.min(h.cd[id],sp.cd)} tour${Math.min(h.cd[id],sp.cd)>1?'s':''}`;if(h.pa<costOf(h,id))return'PA insuffisants';if(sp.need&&!sp.need(h))return sp.needTxt||'Aucune bombe';const t=validTargets(h,id);if(t&&!t.length)return sp.tg==='prey'?'Pas de Proie':'Aucune cible';return null}
const anyCastable=h=>h.alive&&spellIds(h).some(s=>!blockReason(h,s));
function cast(h,id,t){
  const sp=spellOf(h,id);if(blockReason(h,id))return;const vt=validTargets(h,id);if(vt&&!vt.includes(t))return;
  h._paBefore=h.pa;h.pa-=costOf(h,id);if(sp.pt)h.used[id]=(h.used[id]||0)+1;if(sp.tcd&&t){h.tcd=h.tcd||{};h.tcd[id+'|'+t.id]=sp.tcd+1}if(sp.pc)h.pc[id]=1;if(sp.cd)h.cd[id]=sp.cd+1;if(sp.ptt&&t)h.ptt[id+'|'+t.id]=1;
  if(!sp.base&&!sp.wpn)meta.cnt.support=(meta.cnt.support||0)+1;
  log(`<i>${h.name}</i> lance ${sp.n}.`);fxA({k:'act',s:h.id});
  sp.fn(h,t);ui.sel=null;render();saveRun();
  if(checkEnd())return;
  if(!h.alive)return later(()=>endHeroTurn(true),600);
  if(!anyCastable(h))autoPass(h)}
let autoT=null;
function autoPass(h){clearTimeout(autoT);const id=h.id;autoT=setTimeout(()=>{const c=C();if(c&&!c.over&&c.cur===id&&!busy)endHeroTurn(true)},RM()?450:750)}
function endHeroTurn(auto){const c=C();if(!c||c.over||busy)return;const u=unit(c.cur);if(!u||u.side!=='h')return;if(auto&&u.alive)log(`${u.name} n'a plus rien à jouer.`);ui.sel=null;nextTurn()}
function spellRange(h,sp,t){if(!sp.base)return null;const S=hstats(h);
  if(sp.heal){const m=sc(h)*(1+S.soin/100);const pb=sp.pv?(sp.pv(h,t)||{}).base:null;if(pb)return{lo:Math.round(pb[0]*m),hi:Math.round(pb[1]*m),heal:1};return{lo:Math.round(sp.base[0]*m),hi:Math.round(sp.base[1]*m),heal:1}}
  const pv=sp.pv?sp.pv(h,t)||{}:{};const base=pv.base||sp.base;const e=pv.el||bestEl(h,t,S);const m=dmgMult(h,t,e,{mult:pv.mult,pierce:sp.pierce},S);
  const r={lo:Math.max(1,Math.round(base[0]*m)),hi:Math.max(1,Math.round(base[1]*m)),e};
  if(sp.alt){r.lo2=Math.max(1,Math.round(sp.alt[0]*m));r.hi2=Math.max(1,Math.round(sp.alt[1]*m))}
  return r}
function rangeTxt(r){if(!r)return'';return r.lo2!=null?`${r.lo2}–${r.hi2} ou ${r.lo}–${r.hi}`:`${r.lo}–${r.hi}`}

/* --- end of combat --- */
function victory(){
  const c=C();if(!c)return;busy=false;const kind=c.kind,L=c.L,T=talB();const lines=[];
  const pps=run.heroes.map(h=>hstats(h).pp);const ppF=pps.reduce((s,v)=>s+v,0)/pps.length/100;
  meta.cnt.wins++;if(c.enemies.length>=5)meta.cnt.big5=(meta.cnt.big5||0)+1;if(run.heroes.some(h=>h.alive&&h.hp<maxHp(h)*.1))meta.cnt.lowWin=(meta.cnt.lowWin||0)+1;if(kind==='hard'){meta.cnt.hardWins++;if(!c.anyKO)meta.cnt.flawless++}
  const gold=Math.round(R(6,10)*(1+L/8)*ppF*(kind==='hard'?1.5:1)*(kind==='boss'?3:1)*(1+T.gold/100));run.gold+=gold;meta.cnt.maxGold=Math.max(meta.cnt.maxGold,run.gold);
  const xpF=(kind==='hard'?1.4:1)*(kind==='boss'?2.5:1);
  lines.push(`+${fmt(gold)} écus ${ico('coin')}`);
  run.heroes.forEach(h=>{const g=xpNeed(h.lvl)*clamp(.6+.3*(L-h.lvl),.15,3)*xpF;giveXp(h,g,lines);h.st={}});
  const rnd=p=>Math.random()<p*ppF?1:0;
  const geo=(n,p)=>{while(n<6&&Math.random()<Math.min(.8,p*ppF))n++;return n};
  let n=kind==='boss'?geo(4,.55):kind==='hard'?geo(3,.55):geo(2,.45);if(kind!=='boss'&&c.enemies.length>=4&&n<6)n++;
  const w=DROPW[kind].slice();w[0]=w[0]/Math.max(.5,ppF);
  const items=[];for(let i=0;i<n;i++){const it=genItem({L,tier:tierOf(run.w,run.z),r:(kind==='hard'&&i===0)?Math.max(2,rollR(w)):rollR(w),set:Math.random()<.65?setOf(run.w,run.z):VAG});addInv(it);items.push(it)}
  const rk=run.w+'_'+run.z;let relic=null;if(kind==='boss'){const had=!!meta.relics[rk];if(!had&&Math.random()<.35*ppF){meta.relics[rk]=1;relic={k:rk,got:1}}else relic={k:rk,got:0,had}}
  if(kind==='boss'){meta.cnt.bossKills++;run.heroes.forEach(h=>{h.alive=true;h.hp=maxHp(h)});run.potions=Math.min(run.potMax,run.potions+1);lines.push("Toute l'équipe est remise sur pied.")}
  run.combat=null;run.loot={kind,lines,items,relic};run.phase='loot';
  updateZoneMax();checkQuests();saveMeta();saveRun();render()}
function updateZoneMax(){const W=meta.worlds[run.w];W.zoneMax=Math.max(W.zoneMax||0,run.z+1)}
function defeat(){busy=false;dailyEnd(false);run.phase='end';run.result='defeat';meta.cnt.runsEnded++;updateZoneMax();checkQuests();saveRun();saveMeta();render()}
function afterLoot(){const k=run.loot.kind;run.loot=null;
  if(k==='boss'){
    if(run.z>=ZONES-1){winRun();return}
    run.z++;run.rows=run.daily?withSeed(run.daily.seed+run.z*977,genMap):genMap();run.pos={r:0,i:0};run.visited=['0:0'];run.alphaB=Math.max(0,run.alphaB);
    const Z=WORLDS[run.w].zones[run.z];run.msg={icon:Z[1],title:Z[0],text:`Zone ${run.z+1} sur ${ZONES}. Niveau des monstres : ${zoneLevel(0)}–${zoneLevel(MAPR+1)}. Le donjon t'attend au bout de la carte.`};run.phase='msg'}
  else run.phase='map';
  saveRun();render()}
function winRun(){dailyEnd(true);const W=meta.worlds[run.w];W.wins++;W.bestStar=Math.max(W.bestStar||0,run.star);if(run.heroes.length>=4)meta.cnt.win4=(meta.cnt.win4||0)+1;if(!run.daily)W.starMax=Math.max(W.starMax,Math.min(5,run.star+1));meta.cnt.bestStarWin=Math.max(meta.cnt.bestStarWin,run.star);meta.cnt.runsEnded++;
  if(run.w+1<WORLDS.length&&meta.unlocked<run.w+2){meta.unlocked=run.w+2;toast('Nouveau monde débloqué : '+WORLDS[run.w+1].n)}
  run.phase='end';run.result='win';checkQuests();saveMeta();saveRun();render()}
