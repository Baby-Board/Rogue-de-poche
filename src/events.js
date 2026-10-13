/* ================= Map events ("Rencontre") ================= */
const teamHit=p=>run.heroes.forEach(h=>{if(h.alive)h.hp=Math.max(1,h.hp-Math.round(maxHp(h)*p))});
const teamHeal=p=>run.heroes.forEach(h=>healPct(h,p));
function evItem(minR){const L=zoneLevel(run.pos.r);const w=DROPW.hard.slice();let r=rollR(w);if(minR!=null)r=Math.max(minR,r);const it=genItem({L,tier:tierOf(run.w,run.z),r,set:Math.random()<.7?setOf(run.w,run.z):VAG});addInv(it);return it}
const itTxt=it=>`<b class="r${it.r}">${it.name}</b> (${RAR[it.r].l})`;
function upgradeEquipped(pickLow){const l=[];run.heroes.forEach(h=>Object.values(h.eq).forEach(x=>{if(x&&x.r<FORGE_MAX)l.push(x)}));if(!l.length)return null;const it=pickLow?l.sort((a,b)=>a.r-b.r)[0]:pick(l);forgeItem(it);return it}
const goldAmt=k=>Math.round(k*(1+run.w*1.4)*(1+run.z*.35));
const EVENTS=[
 {id:'louche',ban:'shop',t:'Un marchand louche',x:"Sous une capuche trouée, un marchand ouvre un sac qui cliquette. « Un objet mystère, l'ami ? Satisfait ou… pas remboursé. »",c:[
  {l:()=>`Acheter un objet mystère (${goldAmt(40)} écus)`,ok:()=>run.gold>=goldAmt(40),no:'Pas assez d’écus',f:()=>{run.gold-=goldAmt(40);meta.cnt.spent+=goldAmt(40);const it=evItem(Math.random()<.5?2:null);return`Le sac contenait : ${itTxt(it)}.`}},
  {l:()=>'Le menacer',f:()=>{if(Math.random()<.5){const g=goldAmt(35);run.gold+=g;return`Il lâche sa bourse et détale : +${g} écus.`}teamHit(.15);return"Il sort une lame cachée. L'équipe perd 15 % de ses PV avant qu'il ne s'enfuie."}},
  {l:()=>'Passer son chemin',f:()=>'Le marchand hausse les épaules et disparaît dans la brume.'}]},
 {id:'autel',ban:'sanct',t:'Un autel maudit',x:"Une pierre noire suinte une lueur violette. Les objets posés dessus semblent… s'améliorer.",c:[
  {l:()=>'Y poser un objet porté (−20 % PV à toute l’équipe)',f:()=>{const it=upgradeEquipped(false);teamHit(.2);return it?`${itTxt(it)} gagne une rareté. L'autel se nourrit de votre vitalité.`:"Aucun objet porté ne peut être amélioré. L'autel prend quand même son dû."}},
  {l:()=>'Prier à genoux',f:()=>{teamHeal(.25);return"Une chaleur étrange : l'équipe récupère 25 % de ses PV."}},
  {l:()=>'Ne pas y toucher',f:()=>'Sage décision, peut-être.'}]},
 {id:'blesse',ban:'msg',t:'Un voyageur blessé',x:"Un homme gît au bord du chemin, une flèche dans l'épaule. Il serre une sacoche contre lui.",c:[
  {l:()=>'Le soigner (−1 potion)',ok:()=>run.potions>0,no:'Plus de potion',f:()=>{run.potions--;const it=evItem(2);return`Reconnaissant, il vous offre ${itTxt(it)}.`}},
  {l:()=>'Fouiller sa sacoche',f:()=>{const g=goldAmt(30);run.gold+=g;run.nextMod='enrages';return`+${g} écus. Ses compagnons vous ont vus : le prochain combat sera contre des ennemis Enragés.`}},
  {l:()=>'Passer',f:()=>'Vous le laissez à son sort.'}]},
 {id:'source',ban:'sanct',t:'Une source scintillante',x:"Une eau claire jaillit d'un rocher couvert de runes. Elle sent la menthe… et un peu le soufre.",c:[
  {l:()=>'Boire',f:()=>{if(Math.random()<.65){teamHeal(.5);return"Délicieux : l'équipe récupère 50 % de ses PV."}teamHit(.12);return"Âcre ! L'équipe perd 12 % de ses PV."}},
  {l:()=>'Remplir une fiole (+1 potion)',f:()=>{run.potions++;return'Une potion de plus dans le sac.'}},
  {l:()=>'Repartir',f:()=>'La source continue de murmurer.'}]},
 {id:'coffre',ban:'loot',t:'Un coffre piégé',x:"Un coffre cerclé de fer, à moitié enterré. Un fil brille près de la serrure.",c:[
  {l:()=>'Le forcer (−10 % PV)',f:()=>{teamHit(.1);const a=evItem(),b=evItem();return`Le piège claque, mais le coffre cède : ${itTxt(a)} et ${itTxt(b)}.`}},
  {l:()=>run.heroes.some(h=>['assassin','artificier'].includes(h.cls))?'Le désamorcer (piégeur dans l’équipe)':'Tenter de le désamorcer',f:()=>{const pro=run.heroes.some(h=>['assassin','artificier'].includes(h.cls)&&h.alive);if(pro||Math.random()<.4){const a=evItem(),b=evItem(1);return`Clic. Le piège est neutralisé : ${itTxt(a)} et ${itTxt(b)}.`}teamHit(.2);return"Raté : l'aiguille empoisonnée vous coûte 20 % de PV, et le coffre se verrouille."}},
  {l:()=>'Le laisser',f:()=>'Mieux vaut ne pas tenter le diable.'}]},
 {id:'pierre',ban:'msg',t:'Une pierre de veille',x:"Une haute pierre levée, couverte de noms d'aventuriers. Certains brillent encore.",c:[
  {l:()=>'Méditer devant elle',f:()=>{const lines=[];run.heroes.forEach(h=>giveXp(h,xpNeed(h.lvl)*.8,lines));return'Les héros gagnent de l’expérience.'+(lines.length?' '+lines.join(' '):'')}},
  {l:()=>'Graver vos noms',f:()=>{run.alphaB+=2;return`Les monstres alpha vous chercheront : ${alphaChance()} % par monstre pour le reste de la run.`}},
  {l:()=>'Continuer',f:()=>'Vous reprenez la route.'}]},
 {id:'des',ban:'taverne',t:'Des joueurs de dés',x:"Trois gobelins hilares jouent aux dés sur un tonneau. « Une partie ? Double ou rien ! »",c:[
  {l:()=>`Parier ${Math.floor(run.gold*.3)} écus`,ok:()=>run.gold>=10,no:'Bourse trop légère',f:()=>{const m=Math.floor(run.gold*.3);if(Math.random()<.5){run.gold+=m;return`Double six ! +${m} écus.`}run.gold-=m;return`Les dés sont pipés… −${m} écus.`}},
  {l:()=>'Les regarder jouer',f:()=>{const g=goldAmt(8);run.gold+=g;return`Vous ramassez une pièce tombée sous le tonneau : +${g} écus.`}},
  {l:()=>'Partir',f:()=>'Leurs rires vous suivent longtemps.'}]},
 {id:'forgeron',ban:'forge',t:'Un forgeron errant',x:"Une enclume sur une charrette, un vieux forgeron qui fume la pipe. « Je vous arrange ça pour rien, j'm'ennuie. »",c:[
  {l:()=>'Améliorer l’objet porté le plus faible',f:()=>{const it=upgradeEquipped(true);return it?`${itTxt(it)} gagne une rareté.`:'Aucun objet porté ne peut être amélioré (rien d’équipé, ou déjà mythique).'}},
  {l:()=>`Lui acheter une pièce (${goldAmt(60)} écus)`,ok:()=>run.gold>=goldAmt(60),no:'Pas assez d’écus',f:()=>{run.gold-=goldAmt(60);meta.cnt.spent+=goldAmt(60);const it=evItem(3);return`Il vous tend ${itTxt(it)}.`}},
  {l:()=>'Le remercier et partir',f:()=>'Il retourne à sa pipe.'}]},
 {id:'embuscade',ban:'boss',t:'Une embuscade',x:"Des silhouettes surgissent des fourrés et vous encerclent. Pas le temps de réfléchir longtemps.",c:[
  {l:()=>'Combattre (combat dur)',f:()=>({fight:1})},
  {l:()=>'Fuir (−15 % PV)',f:()=>{teamHit(.15);return'Vous réussissez à fuir, non sans quelques blessures.'}}]},
 {id:'fontaine',ban:'sanct',t:'Une fontaine des vœux',x:"Le fond du bassin est tapissé de pièces. Une inscription : « Qui donne reçoit. »",c:[
  {l:()=>`Jeter ${goldAmt(20)} écus`,ok:()=>run.gold>=goldAmt(20),no:'Pas assez d’écus',f:()=>{run.gold-=goldAmt(20);if(Math.random()<.55){const it=evItem(2);return`L'eau scintille et dépose ${itTxt(it)} à vos pieds.`}run.potions++;return'Une bulle remonte : +1 potion.'}},
  {l:()=>'Repêcher des pièces',f:()=>{const g=goldAmt(25);run.gold+=g;run.nextMod='robustes';return`+${g} écus… mais la fontaine vous maudit : le prochain combat sera contre des ennemis Robustes.`}},
  {l:()=>'Faire un vœu silencieux',f:()=>{teamHeal(.15);return"Rien ne se passe. Pourtant, l'équipe se sent un peu mieux (+15 % PV)."}}]},
];
function startEvent(){const done=run.evSeen||[];const pool=EVENTS.filter(e=>!done.includes(e.id));const ev=pick(pool.length?pool:EVENTS);run.evSeen=done.concat(ev.id).slice(-6);run.ev={id:ev.id,res:null};run.phase='event'}
function vEvent(){const E=EVENTS.find(e=>e.id===run.ev.id);const R=run.ev.res;
  return`${runBar()}<div class="screen">${placeBan(E.ban)}<div class="head ph">${emblem('event')}<div><h2 class="gilt">${E.t}</h2><small>Rencontre</small></div></div>
  <p class="txt">${E.x}</p>
  ${R?`<div class="evres">${R}</div><div class="dock"><div><button class="btn main" data-a="evok">Continuer</button></div></div>`
   :`<div class="stack">${E.c.map((c,i)=>{const ok=!c.ok||c.ok();return`<button class="opt evc" data-a="evc" data-v="${i}" ${ok?'':'disabled'}><div><b>${c.l()}</b>${ok?'':`<small>${c.no}</small>`}</div></button>`}).join('')}</div>`}
  </div>`}

/* ================= Daily challenge ================= */
const todayKey=()=>{const d=new Date();return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
function seeded(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
function withSeed(seed,fn){const old=Math.random;Math.random=seeded(seed);try{return fn()}finally{Math.random=old}}
function dailyCfg(){const key=todayKey();const s=hashRes('daily-'+key);const rnd=seeded(s);const w=Math.floor(rnd()*meta.unlocked);
  const cls=shuffleR(ORDER.slice(),rnd).slice(0,2);const mods=MODS.filter(m=>m.k!=='nombreux');const mod=mods[Math.floor(rnd()*mods.length)];return{key,seed:s,w,star:3,cls,mod:mod.k}}
function shuffleR(a,rnd){for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function startDaily(){const D=dailyCfg();ui.world=D.w;ui.star=D.star;ui._noLoot=1;try{startRun(D.cls)}finally{ui._noLoot=0}run.daily={key:D.key,seed:D.seed,mod:D.mod,kills:0};
  run.rows=withSeed(D.seed+run.z*977,genMap);meta.daily=meta.daily||{};const R=meta.daily[D.key]=meta.daily[D.key]||{best:0,tries:0};R.tries++;saveMeta();saveRun()}
function dailyScore(win){const d=run.daily;return(run.z*(MAPR+2)+run.pos.r)*50+(d.kills||0)*10+Math.round(run.gold/10)+(win?3000:0)}
/* Butin du jour : palier selon le score du défi (bronze = joué, argent ≥ 1 500, or = victoire), utilisé au départ de la prochaine run normale. Non cumulable. */
const LOOTT=[{k:'b',n:'Bronze',c:'#d08a4a',d:'1 potion + 100 écus'},{k:'s',n:'Argent',c:'#cfd8e0',d:'1 potion + 100 écus + 1 objet rare'},{k:'g',n:'Or',c:'#f4cd4f',d:'1 potion + 100 écus + 1 objet épique ou légendaire'}];
const lootTier=(sc,win)=>win?2:sc>=1500?1:0;
function dailyEnd(win){if(!run||!run.daily||run.daily.scored)return;const sc=dailyScore(win);run.daily.score=sc;run.daily.scored=1;const key=run.daily.key;const R=meta.daily[key]=meta.daily[key]||{best:0,tries:1};run.daily.prev=R.best;R.best=Math.max(R.best,sc);
  const c=meta.cnt;c.dailyPlayed=(c.dailyPlayed||0)+1;if(win)c.dailyWins=(c.dailyWins||0)+1;c.dailyBest=Math.max(c.dailyBest||0,sc);
  if(c.dailyLastDay!==key){const y=new Date(key+'T12:00:00');y.setDate(y.getDate()-1);const yk=`${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,'0')}-${String(y.getDate()).padStart(2,'0')}`;c.dailyStreak=c.dailyLastDay===yk?(c.dailyStreak||0)+1:1;c.dailyLastDay=key;c.dailyStreakMax=Math.max(c.dailyStreakMax||0,c.dailyStreak)}
  const t=lootTier(sc,win);run.daily.loot=t;const L=meta.dailyLoot;if(!L||L.used||L.t<t||L.key!==key)meta.dailyLoot={key,t,used:0};
  saveMeta()}
function applyDailyLoot(){const L=meta.dailyLoot;if(!L||L.used||ui._noLoot)return;L.used=1;const T=LOOTT[L.t];run.potions++;run.gold+=100;let it=null;
  if(L.t>=1){it=genItem({tier:tierOf(run.w,0),r:L.t===2?(Math.random()<.5?2:3):1,set:setOf(run.w,0)});addInv(it)}
  const msg=run.dailyLootMsg=`Butin du jour (${T.n}) : +1 potion, +100 écus${it?', '+it.name+' ('+RAR[it.r].l.toLowerCase()+') dans le sac':''}.`;setTimeout(()=>toast(msg),400);saveMeta()}

/* ================= Save export / import ================= */
function saveCode(){const data={v:1,meta,run};const json=JSON.stringify(data);return btoa(unescape(encodeURIComponent(json)))}
function loadCode(code){const json=decodeURIComponent(escape(atob(code.trim())));const d=JSON.parse(json);if(!d||!d.meta||!d.meta.worlds)throw new Error('bad');return d}
function shSave(){return sheet('Sauvegarde',`<p class="mute" style="margin:0">Ta progression (talismans, reliques, bestiaire, succès, mondes) et la run en cours tiennent dans un code. Garde-le précieusement : il te permet de tout récupérer sur un autre téléphone ou après avoir vidé le navigateur.</p>
  <span class="lab">Exporter</span>
  <textarea class="code" id="savecode" readonly rows="4">${saveCode()}</textarea>
  <div class="row2"><button class="btn" data-a="copysave">Copier le code</button><button class="btn" data-a="dlsave">Télécharger le fichier</button></div>
  <span class="lab">Importer</span>
  <textarea class="code" id="loadcode" rows="4" placeholder="Colle ici un code de sauvegarde"></textarea>
  <label class="btn" style="cursor:pointer">Choisir un fichier<input type="file" id="loadfile" accept=".txt,.rdp,text/plain" hidden></label>
  <button class="btn main" data-a="loadsave">Charger cette sauvegarde</button>
  <p class="mute" style="margin:0;font-size:13px">Charger remplace toute la progression actuelle de ce téléphone.</p>`)}
