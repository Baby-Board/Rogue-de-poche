/* ================= Rendering ================= */
const app=document.getElementById('app'),modal=document.getElementById('modal');
let enterT=0;
function render(){
  const scr=ui.screen==='run'&&run?run.phase:ui.screen;let h='';
  if(ui.screen==='home')h=vHome();else if(ui.screen==='pick')h=vPick();
  else switch(run.phase){case'map':h=vMap();break;case'combat':h=vCombat();break;case'loot':h=vLoot();break;case'taverne':h=vTaverne();break;case'shop':h=vShop();break;case'forge':h=vForge();break;case'msg':h=vMsg();break;case'event':h=vEvent();break;case'end':h=vEnd();break}
  const changed=scr!==ui.lastScreen;const snap=snapToks();
  app.innerHTML=h;renderModal();
  if(changed){app.classList.add('enter');clearTimeout(enterT);enterT=setTimeout(()=>app.classList.remove('enter'),600);
    window.scrollTo(0,0);if(scr==='map'){const n=document.querySelector('.node.cur');n&&n.scrollIntoView({block:'center'})}ui.lastScreen=scr}
  ambient(run&&ui.screen==='run'?run.w:ui.world);
  if(ui.screen==='home'){const c=document.querySelector('.wc.sel');if(c&&c.parentElement)c.parentElement.scrollLeft=c.offsetLeft-(c.parentElement.clientWidth-c.clientWidth)/2}
  flushFx(snap,changed&&scr==='combat',changed&&scr)}
function oldFlushFx(){const q=fxq;fxq=[];const off={};q.forEach(f=>{const el=document.querySelector(`[data-uid="${f.id}"]`);if(!el)return;off[f.id]=(off[f.id]||0)+1;const s=document.createElement('span');s.className='float '+f.cls;s.textContent=f.txt;s.style.top=(12+((off[f.id]-1)%3)*20)+'%';s.style.animationDelay=((off[f.id]-1)*.13)+'s';el.appendChild(s);if(f.cls==='dmg'||f.cls==='crit'){el.classList.remove('hit');void el.offsetWidth;el.classList.add('hit')}setTimeout(()=>s.remove(),1400)})}
const hpPct=u=>Math.round(u.hp/maxHp(u)*100);
const els=cls=>CLASSES[cls].els.map(elIco).join('');
function ava(u,extra=''){
  if(u.side==='h')return`<span class="ava ${extra}">${classMed(u.cls)}<span class="lv">${u.lvl}</span></span>`;
  const P=portraitOf(u);return`<span class="ava e ${P?'pt':''} ${u.alpha?'alpha':''} ${u.boss?'boss':''} ${extra}" style="--elc:${ELC[u.el]}">${P||`<span class="em">${u.icon}</span>`}</span>`}
function portraitOf(u){const n=u.pname||String(u.name||'').replace(/ (alpha|[A-F])$/,'').replace(/ alpha$/,'');return PAINT[n]?`<img class="pimg" src="${PAINT[n]}" alt="" draggable="false">`:PORTRAIT[n]||null}
const clsAva=(cls,extra='')=>`<span class="ava ${extra}">${classMed(cls)}</span>`;
const coin=()=>ico('coin');
const stars=n=>`<span class="st">${'★'.repeat(n)}</span>`;
function zoneTitle(){return WORLDS[run.w].zones[run.z][0]}
function runBar(){return`<header class="bar"><div class="where"><b class="gilt">${zoneTitle()}</b><span>Monde ${run.w+1} · zone ${run.z+1}/${ZONES} · ${stars(run.star)}</span></div><button class="pill pot" data-a="sheet" data-v="potion" aria-label="Potions">${ico('potion')}${run.potions}</button><span class="pill gold">${coin()}${fmt(run.gold)}</span><button class="ibtn" data-a="sheet" data-v="menu" aria-label="Menu">${ico('menu')}</button></header>`}
const TOOLS=[['stats','stats','Caract.'],['form','form','Formation'],['inv','bag','Sac'],['relics','relic','Reliques'],['best','paw','Bestiaire'],['quests','trophy','Succès'],['talis','gem','Talismans'],['enc','book','Classes']];
const runTools=()=>`<nav class="iconbar" style="margin-bottom:10px">${TOOLS.map(([k,i,l])=>`<button class="ib" data-a="sheet" data-v="${k}">${ico(i)}${l}${k==='inv'&&run.inv.length?`<b>${run.inv.length}</b>`:''}</button>`).join('')}</nav>`;

/* ---------- Home ---------- */
function dailyCard(has){const D=dailyCfg(),R=(meta.daily||{})[D.key],M=MODS.find(m=>m.k===D.mod),W=WORLDS[D.w];
  return`<div class="daily"><div class="dl-top"><span class="dl-badge">Défi du jour</span><span class="dl-date">${D.key.split('-').reverse().join('/')}</span></div>
   <div class="dl-mid"><span class="dl-team">${D.cls.map(c=>`<span class="ava sm">${classMed(c)}</span>`).join('')}</span><div><b>${W.n} · ${'★'.repeat(D.star)}</b><small>${CLASSES[D.cls[0]].n} + ${CLASSES[D.cls[1]].n} · tous les combats : ${M.n} (${M.d})</small></div></div>
   <div class="dl-bot"><span>${R?`Meilleur score : <b>${fmt(R.best)}</b> · ${R.tries} essai${R.tries>1?'s':''}`:'Même carte et même équipe pour tout le monde aujourd’hui.'}</span><button class="btn main sm" data-a="daily" ${has?'disabled':''}>${has?'Run en cours':'Relever'}</button></div></div>`}
function vHome(){
  const has=run&&run.phase!=='end';const wsel=has?run.w:ui.world;const M=meta.worlds[wsel],W=WORLDS[wsel];
  const nT=Object.keys(meta.talis).length,nR=Object.keys(meta.relics).filter(k=>RELART[k]).length,nA=Object.keys(meta.alphas).length,nQ=Object.keys(meta.quests).filter(q=>QUESTS[q]).length;
  const ownT=TALIS.filter(t=>meta.talis[t.id]).map(t=>t.id),ownR=Object.keys(meta.relics).filter(k=>RELART[k]);
  const fan=(arr,cls)=>`<span class="fan ${cls}">${arr.slice(-3).map((h,i,a)=>`<span style="--k:${i-(a.length-1)/2}">${h}</span>`).join('')}</span>`;
  const tal=ownT.length?fan(ownT.map(k=>TALART[k]),''):fan([TALART.lune,TALART.mousse,TALART.braise],'ghost');
  const rel=ownR.length?fan(ownR.map(k=>RELART[k]),''):fan([RELART['0_1'],RELART['0_0'],RELART['0_3']],'ghost');
  const alph=Object.keys(meta.alphas).slice(-3).map(k=>{const [w,i]=k.split('_').map(Number);const r=WORLDS[w]&&WORLDS[w].roster[i];return r?PORTRAIT[r[0]]:''}).filter(Boolean);
  const best=fan(alph.length?alph:[PORTRAIT[WORLDS[0].roster[0][0]]],alph.length?'round':'round ghost');
  const tiles=[['talis','Talismans',`${nT} / ${TALIS.length}`,tal],['relics','Reliques',`${nR} / ${WORLDS.length*ZONES}`,rel],['best','Bestiaire',`${nA} alphas`,best],
    ['enc','Classes',`${ORDER.length} classes`,fan(['lame','passeuse','rempart'].map(c=>classMed(c)),'round')],['quests','Succès',`${nQ} / ${Object.keys(QUESTS).length}`,`<span class="tico">${ico('trophy')}</span>`],['rules','Règles','Comment jouer',`<span class="tico">${ico('scroll')}</span>`]];
  return`<div class="home2">
  <header class="hero2">${scene(wsel)}<div class="hero2-in"><h1 class="gilt">Rogue de Poche</h1><p>Deux rangées, quatre éléments, cinq mondes.</p></div></header>
  <section class="wsel" aria-label="Mondes">${WORLDS.map((Wd,i)=>{const Mi=meta.worlds[i],lock=i>=meta.unlocked,sel=i===wsel;const al=Wd.roster.filter((_,k)=>meta.alphas[i+'_'+k]).length,rl=Wd.zones.filter((_,z)=>meta.relics[i+'_'+z]).length;
    return`<button class="wc ${sel?'sel':''} ${lock?'locked':''}" ${lock||has?'disabled':`data-a="world" data-v="${i}"`} aria-pressed="${sel}">
      <span class="wc-art">${scene(i)}</span><span class="wc-num">${['I','II','III','IV','V'][i]}</span>
      <span class="wc-txt"><b>${Wd.n}</b><small>${lock?`${ico('lock')} Termine le monde ${i} pour l'ouvrir`:`Niveaux ${Wd.lv[0]} à ${Wd.lv[1]}`}</small>
      ${lock?'':`<span class="wc-stats"><span>${Mi.zoneMax}/${ZONES} zones</span><span>${Mi.wins} victoire${Mi.wins>1?'s':''}</span><span>${al}/${Wd.roster.length} alphas</span><span>${rl}/${ZONES} reliques</span></span>`}</span>
      <span class="wc-stars">${[1,2,3,4,5].map(s=>`<i class="${s<=(Mi.bestStar||0)?'won':''}"></i>`).join('')}</span></button>`}).join('')}</section>
  ${has?`<div class="runcard"><div class="rc-team">${run.heroes.map(h=>`<span class="ava sm">${classMed(h.cls)}<span class="lv">${h.lvl}</span></span>`).join('')}</div><div><b>Run en cours</b><small>${WORLDS[run.w].zones[run.z][0]} · zone ${run.z+1}/${ZONES} · ${stars(run.star)}</small><button class="rc-x" data-a="confirm" data-v="abandon">Abandonner la run</button></div></div>`
   :(wsel<meta.unlocked?`<div class="diff"><span class="dlab">Difficulté</span><div class="stars2" role="group" aria-label="Difficulté">${[1,2,3,4,5].map(s=>`<button class="st2 ${s<=ui.star?'on':''} ${s>M.starMax?'lock':''}" ${s<=M.starMax?`data-a="star" data-v="${s}"`:'disabled'} aria-label="${s} étoile${s>1?'s':''}">${s>M.starMax?ico('lock'):ico('star')}</button>`).join('')}</div><small>${STAR_DESC[ui.star-1]}${M.starMax<5?` · gagne en ${'★'.repeat(M.starMax)} pour débloquer la suivante`:''}</small></div>`:'')}
  ${dailyCard(has)}
  <section class="coll">${tiles.map(([k,n,sub,art])=>`<button class="ct" data-a="sheet" data-v="${k}"><span class="ct-art">${art}</span><b>${n}</b><small>${sub}</small></button>`).join('')}</section>
  <button class="savelink" data-a="sheet" data-v="save">Sauvegarde · exporter ou importer ta progression</button>
  <div class="dock">${has&&ui.confirm==='abandon'?`<div class="confirm"><p>Abandonner la run en cours ? Tu perds les héros, l'équipement et les écus.</p><div class="row2"><button class="btn" data-a="confirm" data-v="">Annuler</button><button class="btn main danger" data-a="abandon">Abandonner</button></div></div>`:''}<div ${has&&ui.confirm==='abandon'?'hidden':''}>${has?`<button class="btn ghost" data-a="confirm" data-v="abandon">Abandonner</button><button class="btn main" data-a="continue">Continuer la run</button>`:`<button class="btn main" data-a="play">Jouer · ${'★'.repeat(ui.star)}</button>`}</div></div>
</div>`}

function vPick(){const sel=ui.pick;return`<div class="pick">
  <header class="pagehead"><h2 class="gilt">Équipe de départ</h2><p>Choisis 2 classes. Tu pourras en recruter d'autres en taverne, jusqu'à 4 héros.</p></header>
  <div class="cards">${ORDER.map(c=>{const k=CLASSES[c],on=sel.includes(c);return`<button class="ccard ${on?'on':''}" data-a="pickc" data-v="${c}" aria-pressed="${on}"><div class="top">${clsAva(c)}<div><b>${k.n}</b><br><span class="tag ${k.row}">${k.role}</span> ${els(c)}</div></div><p>${k.blurb}</p></button>`}).join('')}</div>
  <div class="dock"><div><button class="btn ghost" data-a="home">Retour</button><button class="btn main" data-a="start" ${sel.length===2?'':'disabled'}>Partir (${sel.length}/2)</button></div></div></div>`}

/* ---------- Map ---------- */
function teamPanel(){return`<div class="team">${run.heroes.map(h=>`<button class="trow ${h.alive?'':'ko'}" data-a="sheet" data-v="stats">${ava(h,'sm')}<div class="meta"><div class="nm"><b>${h.name}</b>${els(h.cls)}<span class="hpn">${h.alive?`${h.hp} / ${maxHp(h)}`:'K.O.'}</span></div><div class="mini-hp"><i style="width:${hpPct(h)}%"></i></div></div></button>`).join('')}</div>`}
const ROSE='<svg class="rose" viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><path d="M50 2 56 44 98 50 56 56 50 98 44 56 2 50 44 44z"/><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width=".8" stroke-dasharray="2 4"/></g></svg>';
const leadHero2=()=>run.heroes.filter(h=>h.alive).sort((a,b)=>(a.row===b.row?0:a.row==='front'?-1:1)||(a.slot||0)-(b.slot||0))[0]||run.heroes[0];
/* ink doodles on the parchment: trees, hills, rocks, a river — deterministic per zone, kept away from the nodes */
function mapDeco(H,rows,y){let s=hashRes(run.w+'-'+run.z+'-deco');const rnd=()=>{s=(s*1103515245+12345)>>>0;return(s>>>8)/16777216};
  const pts=[];rows.forEach((row,r)=>row.forEach(nd=>pts.push([nd.x*3.9,y(r)])));const far=(x,yy)=>pts.every(([a,b])=>Math.hypot(a-x,b-yy)>46);
  const ink='#5a3d22';let o='';
  const river=[];let rx=40+rnd()*300;for(let yy=150;yy<=H;yy+=40){rx=clamp(rx+(rnd()-.5)*90,10,380);river.push([rx,yy])}
  o+=`<path d="M${river.map(p=>p.join(' ')).join(' L')}" stroke="#4a7a8a" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".22"/>`;
  for(let k=0;k<70;k++){const x=6+rnd()*378,yy=150+rnd()*(H-170);if(!far(x,yy))continue;const t=rnd();
    if(t<.45)o+=`<g transform="translate(${x.toFixed(0)} ${yy.toFixed(0)})" opacity=".55"><path d="M0-12 7 2H-7z" fill="#6f8a4a" stroke="${ink}" stroke-width="1"/><path d="M0-6 8 6H-8z" fill="#5f7a3a" stroke="${ink}" stroke-width="1"/><path d="M0 6v4" stroke="${ink}" stroke-width="1.6"/></g>`;
    else if(t<.7)o+=`<path d="M${(x-16).toFixed(0)} ${yy.toFixed(0)}q8-12 16-12t16 12" stroke="${ink}" stroke-width="1.3" fill="#c9b080" opacity=".5"/>`;
    else if(t<.85)o+=`<g opacity=".5"><path d="M${(x-12).toFixed(0)} ${(yy+6).toFixed(0)}l8-16 6 8 5-6 9 14z" fill="#b8a58a" stroke="${ink}" stroke-width="1.1"/></g>`;
    else o+=`<circle cx="${x.toFixed(0)}" cy="${yy.toFixed(0)}" r="2" fill="${ink}" opacity=".35"/><circle cx="${(x+6).toFixed(0)}" cy="${(yy+3).toFixed(0)}" r="1.4" fill="${ink}" opacity=".3"/>`}
  return o}
function vMap(){
  const rows=run.rows,rowH=88,top=120,H=top+(rows.length-1)*rowH+70,y=r=>top+r*rowH,cur=run.pos;
  const avail=cur.r<rows.length-1?rows[cur.r][cur.i].l:[];
  let lines='';rows.forEach((row,r)=>row.forEach((nd,i)=>nd.l.forEach(j=>{const b=rows[r+1][j];const a1=run.visited.indexOf(r+':'+i),a2=run.visited.indexOf((r+1)+':'+j);const walked=a1>=0&&a2===a1+1;const open=r===cur.r&&i===cur.i;const y1=y(r),y2=y(r+1),ym=(y1+y2)/2;
    lines+=`<path d="M${nd.x} ${y1}C${nd.x} ${ym} ${b.x} ${ym} ${b.x} ${y2}" class="${walked?'walked':open?'open':''}" vector-effect="non-scaling-stroke"/>`})));
  let nodes='';rows.forEach((row,r)=>row.forEach((nd,i)=>{const key=r+':'+i,isCur=r===cur.r&&i===cur.i,isAv=r===cur.r+1&&avail.includes(i),done=run.visited.includes(key)&&!isCur,N=NODE[nd.t],picked=ui.mapSel===key;
    const B=WORLDS[run.w].zones[run.z][2];const inner=nd.t==='boss'?(PORTRAIT[B[0]]||ico('boss')):ico(nd.t);const lead=isCur?leadHero2():null;
    nodes+=`<button class="node t-${nd.t} ${isCur?'cur':isAv?(picked?'avail picked':'avail'):done?'done':'locked'}" style="left:${nd.x}%;top:${y(r)}px" ${isAv?`data-a="mapsel" data-v="${key}"`:'tabindex="-1"'} aria-label="${N.n}">${inner}${lead?`<span class="pawn">${classMed(lead.cls)}</span>`:''}${isCur||picked||nd.t==='boss'?`<span class="nl">${isCur?'Vous êtes ici':nd.t==='boss'?B[0]:N.n}</span>`:''}</button>`}));
  let info='';if(ui.mapSel){const [r,i]=ui.mapSel.split(':').map(Number);const nd=rows[r][i],N=NODE[nd.t];const mod=nd.mod&&MODS.find(m=>m.k===nd.mod);
    const d=mod?`Ennemis ${mod.d}. Butin : 3 à 6 objets, dont au moins un épique.`:nd.t==='boss'?`Boss : ${WORLDS[run.w].zones[run.z][2][0]} ${WORLDS[run.w].zones[run.z][2][1]}. La victoire soigne toute l'équipe.`:N.d;
    info=`<div class="nodeinfo"><span class="node t-${nd.t}">${ico(nd.t)}</span><div class="meta"><b>${N.n}${mod?` · ${mod.n}`:''}</b><small>${d}</small></div><button class="btn main sm" data-a="go" data-v="${ui.mapSel}">Y aller</button></div>`}
  return`${runBar()}${runTools()}${teamPanel()}
  <div class="mapwrap parch" style="height:${H}px">${scene(run.w,'top')}${ROSE}<svg class="mapdeco" style="height:${H}px" viewBox="0 0 390 ${H}" preserveAspectRatio="none" aria-hidden="true">${mapDeco(H,rows,y)}</svg><svg class="mapsvg" style="height:${H}px" viewBox="0 0 100 ${H}" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>${nodes}<span class="mtitle">${zoneTitle()}</span></div>
  ${info||`<p class="maphint"><span>Touche une case qui scintille pour voir ce qu'elle contient.</span><span>Niveau ${zoneLevel(0)}–${zoneLevel(7)}</span><span>Alphas ${alphaChance()} %</span></p>`}`}

/* ---------- Combat ---------- */
function resChips(u){const l=EL.filter(e=>u.res[e]);if(!l.length)return'';return`<span class="chip res">${l.map(e=>`<span class="${u.res[e]<0?'neg':''}">${elIco(e)}${u.res[e]>0?'+':''}${u.res[e]}</span>`).join('')}</span>`}
function stChips(u){const s=u.st,o=[];
  if(s.poison)o.push(`<span class="chip p">☠${s.poison.v}·${s.poison.t}</span>`);if(s.stun)o.push(`<span class="chip d">💫</span>`);if(s.taunt)o.push(`<span class="chip b">📣</span>`);if(s.invis)o.push(`<span class="chip b">👤</span>`);
  if(s.thorns)o.push(`<span class="chip b">↩${s.thorns}</span>`);if(s.weak)o.push(`<span class="chip d">↘ −25%</span>`);if(s.bomb)o.push(`<span class="chip d">💣${s.bomb}</span>`);if(s.buff)o.push(`<span class="chip d">▲${s.buff}%</span>`);
  if(s.focus)o.push(`<span class="chip b">◎ crit</span>`);if(s.elan)o.push(`<span class="chip b">Élan ${s.elan}</span>`);if(s.cri)o.push(`<span class="chip b">+30%</span>`);if(s.sab)o.push(`<span class="chip b">⏳${s.sab}</span>`);if(s.colere)o.push(`<span class="chip b">Colère ×${s.colere}</span>`);
  if(s.chance)o.push(`<span class="chip b">🍀${s.chance}</span>`);if(s.ambush)o.push(`<span class="chip b">🗡+50%</span>`);if(s.bonusPA)o.push(`<span class="chip b">+${s.bonusPA} PA</span>`);if(s.paLoss)o.push(`<span class="chip d">−${s.paLoss} PA</span>`);
  if(s.trap)o.push(`<span class="chip d">🪤</span>`);if(s.guardBy)o.push(`<span class="chip s">🛡 protégé</span>`);if(s.smoke)o.push(`<span class="chip b">💨</span>`);if(s.howl)o.push(`<span class="chip b">+15%</span>`);if(s.rage)o.push(`<span class="chip b">Rage ${s.rage}</span>`);if(s.planted)o.push(`<span class="chip b">🔱</span>`);if(s.blindBack)o.push(`<span class="chip d">🙈 avant</span>`);if(s.sight)o.push(`<span class="chip b">🦅 vue ${s.sight}</span>`);if(s.critBuff)o.push(`<span class="chip b">+15% crit · ${s.critBuff}</span>`);
  if(s.echo)o.push(`<span class="chip d">⧗ Écho ${s.echo}</span>`);if(s.portals)o.push(`<span class="chip b">🌀 ${s.portals}</span>`);if(s.trapCnt)o.push(`<span class="chip b">🪤×${s.trapCnt}</span>`);if(s.pfDisc)o.push(`<span class="chip b">🎲 −${s.pfDisc} PA</span>`);
  if(s.decoy)o.push(`<span class="chip b">🪆 leurre</span>`);if(s.resq)o.push(`<span class="chip b">−2 PA aux explosions</span>`);if(s.galva)o.push(`<span class="chip b">✚ ×${s.galva.t}</span>`);if(s.cadran)o.push(`<span class="chip b">⏳ +2 PA ×${s.cadran}</span>`);if(s.premo)o.push(`<span class="chip b">+3 PA</span>`);
  if(s.b)for(const k in s.b){const b=s.b[k],t=`<small>·${b.t}</small>`;const L={dmg:b.v>0?`▲ +${b.v}%`:`↘ ${b.v}%`,crit:`+${b.v}% crit`,res:`+${b.v}% rés`,tk:`${b.v}% subis`,esq:`💨 +${b.v}%`,critTk:`+${b.v}% crit subis`,mark:`🔯 +${b.v}%`,valkyr:'🪽 couvre l’arrière',chakra:'🪤 +50%',aig:'🪡 trotteuse'}[b.c];if(L)o.push(`<span class="chip ${(b.c==='dmg'&&b.v<0)||['critTk','mark','aig'].includes(b.c)?'d':'b'}">${L}${t}</span>`)}
  if(C()){run.heroes.forEach(h=>{if(h.alive&&(h.st.prey===u.id||h.st.flair===u.id))o.push(`<span class="chip d">🎯 proie</span>`)})}
  return o.join('')}
function unitCard(u,tg){
  const c=C(),isT=tg&&tg.includes(u),isCur=c&&c.cur===u.id,sh=u.st.shield||0,m=maxHp(u);
  return`<button class="unit ${u.side} ${u.alpha?'alpha':''} ${u.boss?'boss':''} ${u.alive?'':'ko'} ${isCur?'cur':''} ${isT?'tgt':''}" data-uid="${u.id}" data-a="${isT?'target':'inspect'}" data-v="${u.id}">
   <div class="u-head">${ava(u)}<div class="u-id"><b>${u.name}</b><small>${u.side==='h'?els(u.cls):`${elIco(u.el)} ${u.boss?'Boss':u.melee?'Mêlée':'Distance'} · niv. ${u.lvl}`}</small></div></div>
   <div class="hpbar"><i style="width:${Math.round(u.hp/m*100)}%"></i>${sh?`<s style="width:${Math.min(100,Math.round(sh/m*100))}%"></s>`:''}<em>${u.alive?`${u.hp} / ${m}${sh?` · 🛡${sh}`:''}`:'K.O.'}</em></div>
   <div class="chips">${u.side==='e'&&u.alive?`<span class="chip intent">${intentText(u)}</span>${resChips(u)}`:''}${stChips(u)}</div></button>`}
function rowsOf(list,lbl,tg,showDead,marks){const L=(showDead?list:list.filter(u=>u.alive)).sort((a,b)=>(a.slot||0)-(b.slot||0));const mk=marks?`<div class="rowfx">${marks}</div>`:'';if(!L.length)return mk;return`${mk}<div class="urow"><span class="rl">${lbl}</span>${L.map(u=>unitCard(u,tg)).join('')}</div>`}
function rowMarks(side,row){const c=C();if(!c)return'';const o=[];
  if(side==='e'){(c.traps||[]).filter(x=>x.row===row).forEach(x=>o.push(`<span class="chip d">🪤 ${TRAPN[x.kind]}</span>`));if(c.lance&&c.lance.row===row)o.push(`<span class="chip b">🔱 Lance · ${c.lance.dur}</span>`)}
  else if(c.aegis&&c.aegis.row===row)o.push(`<span class="chip s">🏰 Bastion ${c.aegis.hp}/${c.aegis.max}</span>`);
  return o.join('')}
const spellKind=s=>s.wpn?'wpn':s.heal?'k-heal':s.base?'k-dmg':'k-buf';
/* ---------- Combat : diorama ---------- */
function tokenOf(u,tg,size){const c=C(),isT=tg&&tg.includes(u),isCur=c&&c.cur===u.id,m=maxHp(u),p=u.alive?clamp(Math.round(u.hp/m*100),0,100):0,sh=u.st.shield||0;
  const face=u.side==='h'?classMed(u.cls):(portraitOf(u)||`<span class="em">${u.icon}</span>`);const pips=stChips(u);const mm=u.side==='e'&&/ ([A-F])$/.exec(u.name),nm=mm?u.name.slice(0,-2):u.name;
  return`<button class="tok ${u.side} ${size} ${u.alive?'':'ko'} ${isCur?'cur':''} ${isT?'tgt':''} ${u.boss?'boss':''} ${u.alpha?'alpha':''}" data-uid="${u.id}" data-a="${isT?'target':'inspect'}" data-v="${u.id}" style="--elc:${u.side==='e'?ELC[u.el]:'#c99a45'}" aria-label="${u.name}">
   ${u.side==='e'&&u.alive?`<span class="intent">${intentText(u)}</span>`:''}
   <span class="ring" style="--p:${p};--lag:${p}">${sh&&u.alive?`<span class="shr" style="--q:${Math.min(100,Math.round(sh/m*100))}"></span>`:''}<span class="face">${face}</span>${u.side==='h'?`<span class="lv">${u.lvl}</span>`:mm?`<span class="lv tag">${mm[1]}</span>`:''}${u.alpha?'<span class="crown"></span>':''}</span>
   <span class="plate"><b>${nm}</b><em>${u.alive?`${u.hp} / ${m}${sh?` · 🛡${sh}`:''}`:'K.O.'}</em></span>
   ${pips&&u.alive?`<span class="tpips">${pips}</span>`:''}</button>`}
function stageRow(list,size,marks,showDead){const L=(showDead?list:list.filter(u=>u.alive)).sort((a,b)=>(a.slot||0)-(b.slot||0));return`${marks?`<div class="rowfx">${marks}</div>`:''}${L.length?`<div class="trow2 ${size} ${L.length>=4?'n4':''}">${L.map(u=>tokenOf(u,ui._tg,size)).join('')}</div>`:''}`}
const SPART={dmg:'<path d="M5 19 17 7" stroke="#fff6e0" stroke-width="2.6" stroke-linecap="round"/><path d="M15.5 4.5 20 4l-.5 4.5z" fill="#fff6e0"/><path d="M4 15l5 5M3.6 20.4l2-2" stroke="var(--ec)" stroke-width="2.4" stroke-linecap="round"/>',
 aoe:'<path d="M3 16c5-8 13-8 18 0" stroke="#fff6e0" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M6 19c4-4 8-4 12 0" stroke="var(--ec)" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="8" r="2.2" fill="#fff6e0"/>',
 heal:'<path d="M12 20s-7-4.2-7-9.3A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 7 2.3C19 15.8 12 20 12 20z" fill="#fff6e0"/><path d="M12 10.5v6M9 13.5h6" stroke="#2f8a50" stroke-width="2" stroke-linecap="round"/>',
 buf:'<path d="M12 3l2.3 5.6 6 .5-4.6 3.9 1.4 5.9L12 15.8 6.9 18.9l1.4-5.9L3.7 9.1l6-.5z" fill="#fff6e0"/>',
 ally:'<path d="M12 3 19 6v5c0 4.6-3 8-7 9.5C8 19 5 15.6 5 11V6z" fill="#fff6e0"/><path d="M12 7v9M8.5 11h7" stroke="var(--ec)" stroke-width="2"/>',
 trap:'<path d="M4 17h16M6 17l3-6 3 6 3-6 3 6" stroke="#fff6e0" stroke-width="2.2" fill="none" stroke-linejoin="round"/><circle cx="12" cy="6" r="2" fill="var(--ec)"/>',
 wpn:'<path d="M6 18 18 6" stroke="#e8dcc2" stroke-width="3" stroke-linecap="round"/><path d="M4.5 13.5l6 6" stroke="#c9a24c" stroke-width="2.6" stroke-linecap="round"/>'};
function spellArt(S,id,h){if(S.wpn&&h&&h.eq.arme)return itemSvg(h.eq.arme);if(SPELLART[id])return SPELLART[id];const k=S.wpn?'wpn':S.trap?'trap':S.heal?'heal':S.base?(['all','row'].includes(S.tg)?'aoe':'dmg'):(['ally','allyOther','allAllies','allyKO'].includes(S.tg)?'ally':'buf');return`<svg viewBox="0 0 24 24" aria-hidden="true">${SPART[k]}</svg>`}
function oiTok(u,cls){const m=u.side==='e'&&/ ([A-F])$/.exec(u.name);return`<span class="oi ${u.side} ${cls}">${ava(u)}${m?`<span class="otag">${m[1]}</span>`:''}${cls==='now'?`<small>${u.side==='h'?'à toi':'joue'}</small>`:''}</span>`}
function vCombat(){
  const c=C();const cu=unit(c.cur);const hero=cu&&cu.side==='h'&&cu.alive&&!busy&&!c.over?cu:null;
  let tg=null,selSp=null;if(hero&&ui.sel){selSp=spellOf(hero,ui.sel);tg=validTargets(hero,ui.sel)}ui._tg=tg;
  const upcoming=c.order.slice(c.idx).map(unit).filter(u=>u&&u.alive);
  const mod=c.mod&&MODS.find(m=>m.k===c.mod);
  const E=c.enemies,H=run.heroes;
  const stage=`<div class="stage">
    <div class="ord2" aria-label="Ordre de jeu">${upcoming.map((u,i)=>oiTok(u,i===0?'now':'')).join('')}<span class="osep" aria-label="Tour suivant"><b>T${c.round+1}</b></span>${nextOrder().map(u=>oiTok(u,'nx')).join('')}</div>
    <div class="ordmeta"><span class="rtag">Tour ${c.round}</span>${mod?`<span class="modtag">${ico('hard')} ${mod.n} : ${mod.d}</span>`:''}</div>
    <div class="foes2">${stageRow(E.filter(e=>e.row==='back'),'sm',rowMarks('e','back'))}${stageRow(E.filter(e=>e.row==='front'),'lg',rowMarks('e','front'))}</div>
    <div class="front2"><span>Ligne de front</span></div>
    <div class="team2">${(rowMarks('h','front')+rowMarks('h','back'))?`<div class="rowfx">${rowMarks('h','front')}${rowMarks('h','back')}</div>`:''}<div class="trow2 heroes">${H.filter(h=>h.row==='front').sort((a,b)=>(a.slot||0)-(b.slot||0)).map(u=>tokenOf(u,tg,'md')).join('')}${H.some(h=>h.row==='back')&&H.some(h=>h.row==='front')?'<span class="rsep" title="Avant | Arrière"></span>':''}${H.filter(h=>h.row==='back').sort((a,b)=>(a.slot||0)-(b.slot||0)).map(u=>tokenOf(u,tg,'sm')).join('')}</div></div>
  </div>`;
  const lastLog=c.log.filter(l=>!l.includes('class="rd"')).slice(-2).map(l=>`<div>${l}</div>`).join('')||'<div>Le combat commence.</div>';
  const firstFoe=foesOf(hero||H[0]).find(e=>e.row==='front')||foesOf(hero||H[0])[0];
  let panel;
  if(hero){
    let hint;if(selSp){const ft=tg&&tg.find(x=>x.side==='e')||(selSp.heal?null:firstFoe);const rg=spellRange(hero,selSp,ft);
      hint=`<b>${selSp.n}</b>${rg?` · <span class="${rg.heal?'hl':'dm'}">${rg.heal?'✚':'⚔'} ${rangeTxt(rg)}</span>${rg.e?' '+elIco(rg.e):''}${ft&&!rg.heal&&rg.e?` <small>sur ${ft.name}</small>`:''}`:''} · <small>${selSp.txt}</small> <span class="act">${tg?'Touche une cible qui brille.':'Touche encore la carte pour lancer.'}</span>`}
    else if(!anyCastable(hero)){hint='<b>Plus aucun PA utilisable : le tour passe…</b>';autoPass(hero)}
    else hint='<small>Choisis une carte, puis une cible. Appui long sur une carte ou un combattant pour le détail.</small>';
    const S0=hstats(hero),ec=ELC[CLASSES[hero.cls].els[0]];
    panel=`<div class="who2">${ava(hero,'sm')}<b class="gilt">${hero.name}</b><span class="gems">${Array.from({length:Math.max(S0.pa,hero.pa)},(_,i)=>`<i class="${i<hero.pa?'on':''}"></i>`).join('')}</span><span class="panum">${hero.pa}<small>PA</small></span><button class="endbtn" data-a="end">Fin du tour</button></div>
     <div class="hint2">${hint}</div>
     <div class="hand2">${spellIds(hero).map(id=>{const S=spellOf(hero,id),br=blockReason(hero,id);const rg=S.base?spellRange(hero,S,S.heal?null:firstFoe):null;
       return`<button class="scard ${spellKind(S)} ${ui.sel===id?'sel':''}" data-a="spell" data-v="${id}" ${br?'aria-disabled="true"':''} style="--ec:${S.heal?'#5fcf86':S.base?ec:'#6db8ef'}"><span class="pa">${costOf(hero,id)}</span><span class="art">${spellArt(S,id,hero)}</span><b>${S.n}</b><small>${br||(rg?`${rg.heal?'✚':'⚔'} ${rangeTxt(rg)}`:TGL[S.tg])}</small></button>`}).join('')}</div>`}
  else panel=`<div class="waiting">${c.over?'Fin du combat':cu?`${ava(cu,'sm')} Tour de ${cu.name}`:''} <span class="dots"><i></i><i></i><i></i></span></div>`;
  return`<div class="backdrop dio">${scene(run.w)}</div><div class="floor2"></div><div class="combat dio">${runBar()}${stage}</div>
   <section class="panel dio"><div>${panel}<button class="logline log" data-a="sheet" data-v="log" aria-label="Journal">${lastLog}</button></div></section>`}

/* ---------- Items ---------- */
function statChips(st){return Object.entries(st).map(([k,v])=>`<span class="chip ${STC[k]||''}">${k[0]==='r'&&k.length===2?elIco(k[1]):''}+${v} ${STL[k]}</span>`).join('')}
function itemHTML(it,extra=''){return`<div class="it-top"><span class="it-ico">${itemSvg(it)}</span><div style="min-width:0;flex:1"><b class="r${it.r}">${it.name}</b><small>T${it.tier} · ${SLOTS[it.slot]} · <span class="r${it.r}">${RAR[it.r].l}</span> · ${it.setN}</small></div>${extra}</div><div class="chips">${statChips(it.st)}${it.w?`<span class="chip">⚔ ${it.w.a}–${it.w.b} · ${it.w.pa} PA</span>`:''}</div>`}
function itemBtn(it,extra=''){return`<button class="item ir${it.r}" data-a="item" data-v="${it.id}">${itemHTML(it,extra)}</button>`}
const price=n=>`<span class="price">${coin()}${fmt(n)}</span>`;
const emblem=(k,red)=>`<span class="emblem ${red?'red':''}">${ico(k)}</span>`;

/* ---------- Screens ---------- */
function relicDrop(R){if(!R)return'';const [w,z]=R.k.split('_').map(Number);
  if(R.got)return`<div class="reldrop"><span class="rshine"></span><i class="rart">${RELART[R.k]||RELIC[z][0]}</i><div><small>Relique trouvée</small><b>${relicName(w,z)}</b><em>${relicTxt(w,z)} pour toute l’équipe</em><span>Ajoutée à ta collection, active à chaque run.</span></div></div>`;
  return`<div class="reldrop off"><i>${ico('relic')}</i><div><small>Relique de la zone</small><b>${R.had?relicName(w,z):'Pas cette fois'}</b><span>${R.had?'Déjà dans ta collection.':'Le boss peut encore la lâcher lors d’une prochaine visite. La prospection augmente les chances.'}</span></div></div>`}
const placeBan=k=>BAN[k]?`<div class="pban"><img class="bimg" src="${BAN[k]}" alt="" draggable="false"></div>`:PLACE[k]?`<div class="pban">${PLACE[k]}</div>`:'';
function vLoot(){const L=run.loot;const boss=L.kind==='boss';return`${runBar()}<div class="screen">${placeBan(boss?'boss':'loot')}<div class="head ph">${emblem(boss?'boss':'chest')}<div><h2 class="gilt">${boss?'Donjon vaincu':'Butin !'}</h2><small>${boss?WORLDS[run.w].zones[run.z][2][0]:L.kind==='hard'?'Combat dur remporté':'Victoire'}</small></div></div>
  ${relicDrop(L.relic)}
  <div class="lines">${L.lines.map(l=>`<div>${l}</div>`).join('')}</div>
  ${L.items.length?`<span class="lab">${L.items.length} pièce${L.items.length>1?'s':''} d'équipement</span><div class="stack loot">${L.items.map(it=>itemBtn(it)).join('')}</div><p class="mute" style="margin:0;font-size:13.5px">Touche un objet pour le comparer et l'équiper. Tout est rangé dans le sac.</p>`:'<p class="mute" style="margin:0">Aucun objet cette fois. La prospection augmente les chances de butin.</p>'}
  <div class="dock"><div><button class="btn main" data-a="lootok">Continuer</button></div></div></div>`}
function vTaverne(){const t=run.tav,full=run.heroes.length>=4;return`${runBar()}<div class="screen">${placeBan('taverne')}<div class="head ph">${emblem('taverne')}<div><h2 class="gilt">Taverne</h2><small>Un feu, une soupe, des rumeurs</small></div></div>
  ${t.done?`<p class="txt">${t.done}</p>`:`<p class="txt">Une seule chose avant de repartir.</p>
  <button class="opt" data-a="tavheal">${emblem('potion')}<div><b>Se soigner</b><small>Toute l'équipe récupère 50 % de ses PV max. Les héros K.O. se relèvent.</small></div></button>
  ${full?'<p class="mute" style="margin:0">L\'équipe est au complet (4 héros).</p>':`<span class="lab">Ou recruter</span><div class="cards">${t.opts.map(c=>{const k=CLASSES[c];return`<button class="ccard" data-a="recruit" data-v="${c}"><div class="top">${clsAva(c)}<div><b>${k.n}</b><br><span class="tag ${k.row}">${k.role}</span> ${els(c)}</div></div><p>${k.blurb}</p></button>`}).join('')}</div>`}`}
  <div class="dock"><div><button class="btn ${t.done?'main':''}" data-a="leave">Repartir</button></div></div></div>`}
function vShop(){const s=run.shop;const tab=ui.shopTab;const greens=run.inv.filter(x=>x.r===0);return`${runBar()}<div class="screen">${placeBan('shop')}<div class="head ph">${emblem('shop')}<div><h2 class="gilt">Comptoir</h2><small>Tout est d'occasion, rien n'est maudit</small></div></div>
  <div class="tabs"><button class="tab ${tab==='buy'?'on':''}" data-a="shoptab" data-v="buy">Acheter</button><button class="tab ${tab==='sell'?'on':''}" data-a="shoptab" data-v="sell">Vendre (${run.inv.length})</button></div>
  ${tab==='buy'?`<div class="stack">${s.items.map((x,i)=>`<button class="item ir${x.it.r} ${x.sold?'sold':''}" data-a="buy" data-v="${i}" ${x.sold||run.gold<x.price?'disabled':''}>${itemHTML(x.it,x.sold?'<span class="price">Vendu</span>':price(x.price))}</button>`).join('')}</div>`
  :`${greens.length?`<button class="btn" data-a="sellgreen">Vendre tous les objets verts (${greens.length}) · ${coin()} ${fmt(greens.reduce((s,x)=>s+sellPrice(x),0))}</button>`:''}${run.inv.length?`<div class="stack">${sortedInv().map(it=>itemBtn(it,price(sellPrice(it)))).join('')}</div><p class="mute" style="margin:0;font-size:13.5px">Touche un objet pour le vendre. Les objets équipés ne sont pas listés.</p>`:'<p class="mute">Le sac est vide.</p>'}`}
  <div class="dock"><div><button class="btn" data-a="leave">Repartir</button></div></div></div>`}
function allItems(){const l=run.inv.slice();run.heroes.forEach(h=>Object.values(h.eq).forEach(x=>x&&l.push(x)));return l}
function vForge(){const l=allItems().filter(x=>x.r<FORGE_MAX).sort((a,b)=>b.tier-a.tier||b.r-a.r);return`${runBar()}<div class="screen">${placeBan('forge')}<div class="head ph">${emblem('forge')}<div><h2 class="gilt">Forge</h2><small>L'enclume chante encore</small></div></div>
  <p class="txt">Fais monter un objet d'une rareté contre des écus, jusqu'à <span class="r4">Mythique</span>. Ses caractéristiques augmentent et il gagne un effet. Le <span class="r5">Divin</span> ne s'obtient qu'en butin.</p>
  <div class="stack">${l.map(it=>{const c=forgeCost(it),eq=run.heroes.find(h=>h.eq[it.slot]&&h.eq[it.slot].id===it.id);return`<button class="item ir${it.r}" data-a="forge" data-v="${it.id}" ${run.gold<c?'disabled':''}>${itemHTML(it,price(c))}<small>${eq?`Porté par ${eq.name} · `:''}deviendra <span class="r${it.r+1}">${RAR[it.r+1].l}</span></small></button>`}).join('')||'<p class="mute">Rien à forger.</p>'}</div>
  <div class="dock"><div><button class="btn" data-a="leave">Repartir</button></div></div></div>`}
const MSG_ICO={'🗿':'sanct','🏁':'start'};
function vMsg(){const m=run.msg;const zi=WORLDS[run.w].zones.findIndex(z=>z[0]===m.title);return`${runBar()}<div class="screen">${zi>=0?`<div class="pban">${scene(run.w)}</div>`:placeBan(m.icon==='🗿'?'sanct':'msg')}<div class="head ph">${emblem(MSG_ICO[m.icon]||(zi>=0?'start':'scrollmsg'))}<div><h2 class="gilt">${m.title}</h2>${zi>=0?`<small>Zone ${zi+1} sur ${ZONES}</small>`:''}</div></div><p class="txt">${m.text}</p><div class="dock"><div><button class="btn main" data-a="msgok">Continuer</button></div></div></div>`}
function vEnd(){const win=run.result==='win';return`<div class="endscr"><div class="banner">${scene(run.w)}</div>${emblem(win?'trophy':'skull2',!win)}<h2 class="gilt">${win?'Run réussie !':'Défaite'}</h2>
  <p>${win?`${WORLDS[run.w].n} est vaincu en ${'★'.repeat(run.star)}.${run.star<5?' L’étoile suivante est débloquée.':''}`:`L'équipe est tombée dans ${zoneTitle()} (zone ${run.z+1}/${ZONES}). Les héros, l'équipement et les écus sont perdus.`}</p>
  <div class="team" style="width:100%">${run.heroes.map(h=>`<div class="trow">${ava(h,'sm')}<div class="meta"><div class="nm"><b>${h.name}</b>${els(h.cls)}<span class="hpn">niveau ${h.lvl}</span></div></div></div>`).join('')}</div>
  ${run.daily?`<div class="daily end"><span class="dl-badge">Défi du jour</span><b class="dl-score">${fmt(run.daily.score||0)}</b><small>${(run.daily.score||0)>(run.daily.prev||0)?'Nouveau record du jour !':`Record du jour : ${fmt(run.daily.prev)}`}</small><small class="mute">Zone ${run.z+1} · ${run.daily.kills||0} monstres vaincus · ${fmt(run.gold)} écus</small></div>`:''}
  <p class="mute">Talismans, bestiaire, reliques et succès sont conservés.</p>
  <button class="btn main" data-a="endok">Retour à l'accueil</button></div>`}
function sortedInv(){const l=run.inv.slice();const so=Object.keys(SLOTS);return ui.invSort==='type'?l.sort((a,b)=>so.indexOf(a.slot)-so.indexOf(b.slot)||b.r-a.r):l.sort((a,b)=>b.tier-a.tier||b.r-a.r)}
