/* ================= Actions ================= */
const A={
  world:v=>{ui.world=+v;ui.star=meta.worlds[ui.world].starMax;store.set('rdp2_ui_w',ui.world);render()},
  star:v=>{ui.star=+v;render()},
  play:()=>{ui.pick=[];ui.screen='pick';render()},
  pickc:c=>{const p=ui.pick;const i=p.indexOf(c);if(i>=0)p.splice(i,1);else{if(p.length>=2)p.shift();p.push(c)}render()},
  start:()=>{if(ui.pick.length!==2)return;startRun(ui.pick);ui.screen='run';render()},
  continue:()=>{ui.screen='run';ui.confirm=null;render();resume()},
  home:()=>{ui.screen='home';ui.modal=null;ui.confirm=null;clearTimeout(timer);busy=false;render()},
  menuabandon:()=>{ui.modal=null;ui.screen='home';ui.confirm='abandon';render()},
  confirm:v=>{ui.confirm=v||null;render()},
  abandon:()=>{clearTimeout(timer);busy=false;meta.cnt.runsEnded++;run.phase='end';updateZoneMax();checkQuests();saveMeta();run=null;saveRun();ui.confirm=null;render()},
  endok:()=>{run=null;saveRun();ui.screen='home';ui.star=meta.worlds[ui.world].starMax;render()},
  sheet:v=>{ui.modal=v;if(v==='inv'||v==='item'){}if(v==='best'&&run)ui.bestW=run.w;render()},
  close:()=>{ui.modal=null;ui.form=null;render()},
  mapsel:v=>{ui.mapSel=ui.mapSel===v?null:v;render()},
  go:v=>{const [r,i]=v.split(':').map(Number);enterNode(r,i)},
  spell:id=>{const c=C();const h=unit(c.cur);if(!h||h.side!=='h'||busy)return;if(blockReason(h,id))return;const sp=spellOf(h,id);
    if(ui.sel===id&&!targetsFor(h,sp))return cast(h,id,null);ui.sel=ui.sel===id?null:id;render()},
  target:id=>{const c=C();const h=unit(c.cur);if(!h||!ui.sel||busy)return;const t=unit(id);const sp=spellOf(h,ui.sel);const vt=validTargets(h,ui.sel);if(!vt||!vt.includes(t))return;cast(h,ui.sel,t)},
  spellpick:id=>{ui.modal=null;const c=C();const h=c&&unit(c.cur);if(!h||busy||blockReason(h,id))return render();const sp=spellOf(h,id);if(!targetsFor(h,sp))return cast(h,id,null);ui.sel=id;render()},
  inspect:id=>{ui.inspect=id;ui.modal='inspect';render()},
  end:()=>{clearTimeout(timer);endHeroTurn(false)},
  lootok:()=>afterLoot(),
  evc:v=>{const E=EVENTS.find(e=>e.id===run.ev.id);const c=E.c[+v];if(!c||(c.ok&&!c.ok()))return;const r=c.f();if(r&&r.fight){run.ev=null;startCombat('hard',pick(MODS.filter(m=>m.k!=='nombreux')).k);return}run.ev.res=r;checkQuests();saveMeta();saveRun();render()},
  evok:()=>{run.ev=null;run.phase='map';saveRun();render()},
  daily:()=>{if(run&&run.phase!=='end')return;startDaily();ui.screen='run';render()},
  copysave:()=>{const t=document.getElementById('savecode');const v=t.value;(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast('Code copié'),()=>{t.select();try{document.execCommand('copy');toast('Code copié')}catch(e){toast('Sélectionne le code et copie-le')}})},
  dlsave:()=>{const b=new Blob([saveCode()],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='rogue-de-poche-'+todayKey()+'.txt';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)},
  loadsave:()=>{const v=(document.getElementById('loadcode')||{}).value||'';if(!v.trim())return toast('Colle d’abord un code ou choisis un fichier');let d;try{d=loadCode(v)}catch(e){return toast('Code invalide')}
    if(ui.confirm!=='load'){ui.confirm='load';toast('Touche encore « Charger » pour confirmer : la progression actuelle sera remplacée');ui._pending=v;return}
    meta=Object.assign(freshMeta(),d.meta);meta.cnt=Object.assign({...CNT0},meta.cnt);run=d.run||null;saveMeta();saveRun();ui.confirm=null;ui.modal=null;ui.screen='home';toast('Sauvegarde chargée');render()},
  msgok:()=>{run.msg=null;run.phase='map';saveRun();render()},
  leave:()=>{run.tav=null;run.shop=null;run.phase='map';ui.modal=null;saveRun();render()},
  tavheal:()=>{run.heroes.forEach(h=>{if(!h.alive){h.alive=true;h.hp=0}h.hp=Math.min(maxHp(h),h.hp+Math.round(maxHp(h)*.5));h.st={}});meta.cnt.tavHeals++;run.tav.done="L'équipe mange, boit et dort. Chacun récupère la moitié de ses PV max.";checkQuests();saveRun();render()},
  recruit:c=>{if(run.heroes.length>=4)return;meta.cnt.recruits=(meta.cnt.recruits||0)+1;const lv=Math.max(...run.heroes.map(h=>h.lvl));const h=newHero(c,Math.max(WORLDS[run.w].lv[0],lv-1));normSlots();const used=run.heroes.filter(x=>x.row===h.row).map(x=>x.slot);let s=0;while(used.includes(s))s++;if(s>3){h.row=h.row==='front'?'back':'front';const u2=run.heroes.filter(x=>x.row===h.row).map(x=>x.slot);s=0;while(u2.includes(s))s++}h.slot=s;run.heroes.push(h);
    starterKit(h,h.lvl,run.w);
    meta.cnt.maxTeam=Math.max(meta.cnt.maxTeam,run.heroes.length);run.tav.done=`${CLASSES[c].n} rejoint l'équipe au niveau ${h.lvl}, ${run.w?'avec une panoplie de départ':'sans équipement'}. Place-le dans la Formation si besoin.`;checkQuests();saveMeta();saveRun();render()},
  sellgreen:()=>{if(run.phase!=='shop')return;const g=run.inv.filter(x=>x.r===0);const p=g.reduce((s,x)=>s+sellPrice(x),0);run.gold+=p;meta.cnt.sold+=g.length;run.inv=run.inv.filter(x=>x.r!==0);meta.cnt.maxGold=Math.max(meta.cnt.maxGold,run.gold);toast(`${g.length} objets vendus : +${fmt(p)} ✦`);checkQuests();saveMeta();saveRun();render()},
  shoptab:v=>{ui.shopTab=v;render()},
  buy:i=>{const x=run.shop.items[+i];if(x.sold||run.gold<x.price)return;run.gold-=x.price;meta.cnt.spent+=x.price;meta.cnt.bought++;x.sold=true;addInv(x.it);toast(x.it.name+' ajouté au sac');checkQuests();saveMeta();saveRun();render()},
  item:id=>{ui.itemId=id;ui.modal='item';render()},
  invh:i=>{ui.invHero=+i;render()},
  invsort:v=>{ui.invSort=v;render()},
  equip:id=>{const f=findItem(id);const h=run.heroes[ui.invHero]||run.heroes[0];if(!f||f.where!=='inv')return;equip(h,f.it);ui.modal=run.phase==='loot'?null:'inv';saveMeta();saveRun();render()},
  unequip:id=>{const f=findItem(id);if(!f||f.where==='inv')return;unequip(f.where,f.it.slot);ui.modal='inv';saveRun();render()},
  sell:id=>{const f=findItem(id);if(!f||f.where!=='inv'||run.phase!=='shop')return;const p=sellPrice(f.it);run.gold+=p;run.inv=run.inv.filter(x=>x.id!==id);meta.cnt.sold++;meta.cnt.maxGold=Math.max(meta.cnt.maxGold,run.gold);ui.modal=null;toast(`${f.it.name} vendu : +${fmt(p)} écus`);checkQuests();saveMeta();saveRun();render()},
  forge:id=>{const f=findItem(id);if(!f||f.it.r>=FORGE_MAX)return;const c=forgeCost(f.it);if(run.gold<c)return;const h=f.where!=='inv'?f.where:null;const before=h?maxHp(h):0;run.gold-=c;meta.cnt.spent+=c;forgeItem(f.it);if(h&&h.alive)h.hp=clamp(h.hp+maxHp(h)-before,1,maxHp(h));toast(`${f.it.name} devient ${RAR[f.it.r].l} !`);checkQuests();saveMeta();saveRun();render()},
  drink:id=>{const h=run.heroes.find(x=>x.id===id);if(!h||!h.alive||!run.potions||run.phase==='combat')return;run.potions--;healPct(h,.35);meta.cnt.potions++;checkQuests();saveMeta();saveRun();render()},
  formslot:v=>{const [row,i]=v.split(':');const s=+i;const occ=run.heroes.find(x=>x.row===row&&x.slot===s);
    if(!ui.form){if(occ)ui.form=occ.id;return render()}
    const h=run.heroes.find(x=>x.id===ui.form);if(!h){ui.form=null;return render()}
    if(occ&&occ!==h){occ.row=h.row;occ.slot=h.slot}h.row=row;h.slot=s;ui.form=null;saveRun();render()},
  questT:v=>{ui.questT=ui.questT===v?null:v;ui.modal='quests';render()},
  bestw:v=>{ui.bestW=+v;ui.bestZ=null;render()},
  bestz:v=>{ui.bestZ=ui.bestZ===+v?null:+v;render()},
  enc:v=>{ui.encCls=v;render()},
};
/* appui long : fiche du sort (cartes) */
let lpT=null,lpX=0,lpY=0,lpFired=0;
document.addEventListener('pointerdown',e=>{const c=e.target.closest('.scard');if(!c)return;lpX=e.clientX;lpY=e.clientY;clearTimeout(lpT);
  lpT=setTimeout(()=>{lpFired=Date.now();try{navigator.vibrate&&navigator.vibrate(12)}catch(_){}ui.spInfo=c.dataset.v;ui.modal='spell';render()},430)});
const lpCancel=()=>clearTimeout(lpT);
document.addEventListener('pointerup',lpCancel);document.addEventListener('pointercancel',lpCancel);
document.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-lpX,e.clientY-lpY)>10)clearTimeout(lpT)});
document.addEventListener('contextmenu',e=>{if(e.target.closest('.scard'))e.preventDefault()});
document.addEventListener('click',e=>{if(Date.now()-lpFired<700&&e.target.closest('.scard')){e.stopPropagation();e.preventDefault()}},true);
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled||b.getAttribute('aria-disabled')==='true')return;const f=A[b.dataset.a];if(f)f(b.dataset.v)});
document.addEventListener('change',e=>{if(e.target&&e.target.id==='loadfile'&&e.target.files[0]){const r=new FileReader();r.onload=()=>{const t=document.getElementById('loadcode');if(t)t.value=String(r.result).trim();toast('Fichier chargé, touche « Charger »')};r.readAsText(e.target.files[0])}});
modal.addEventListener('click',e=>{if(e.target===modal){ui.modal=null;ui.form=null;render()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ui.modal){ui.modal=null;render()}});
function resume(){
  if(!run||run.phase!=='combat'||!C())return;const c=C();
  if(c.over){return later(()=>{c.enemies.some(e=>e.alive)?defeat():victory()},300)}
  const u=unit(c.cur);
  if(!u||!u.alive){busy=false;return later(nextTurn,300)}
  if(u.side==='e'){busy=true;render();later(()=>enemyAct(u),600)}
  else{busy=false;render();if(!anyCastable(u))autoPass(u)}}

/* ================= Boot ================= */
function boot(data){if(data&&data.run){run=data.run;ui.screen=data.screen||'home'}checkQuests();render();if(ui.screen==='run')resume()}
try{window.claude?.hot?.snapshot?.(()=>({run,screen:ui.screen}))}catch(e){}
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data??{});
