'use strict';
/* ================= Utilities ================= */
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};
const fmt=n=>Math.round(n).toLocaleString('fr-FR');
const de=s=>/^[aeiouyéèêàâîôûœh]/i.test(s)?"d'"+s:'de '+s;

/* ================= Elements ================= */
const EL=['t','f','e','a'];
const ELN={t:'Terre',f:'Feu',e:'Eau',a:'Air'};
const ELI={t:'🪨',f:'🔥',e:'💧',a:'🌀'};
const STN={t:'Force',f:'Intelligence',e:'Chance',a:'Agilité'};
const OPP={t:'a',a:'t',f:'e',e:'f'};

/* ================= Classes ================= */
const CLASSES={
  lame:{n:'Lame',i:'🤺',role:'Mêlée',row:'front',els:['t','e'],vit:3.6,init:12,blurb:'Bretteuse : relance ses coups dans le tour, reprend son souffle et frappe de plus en plus fort avec Colère.',sp:['tourbillon','entaille','colere','cri','souffle']},
  archere:{n:'Archère',i:'🏹',role:'Distance',row:'back',els:['f','a'],vit:1.9,init:14,blurb:"Archère : ouvre sa ligne de vue pour atteindre l'arrière et brouille celle d'en face.",sp:['punitive','braise','balayant','pluie','visee','aigle']},
  rempart:{n:'Rempart',i:'🛡️',role:'Mêlée',row:'front',els:['t','e'],vit:4.6,init:7,blurb:"Gardien : couvre une rangée d'un bastion, renforce l'avant et ouvre la vue à l'arrière.",sp:['rp_guet','rp_ralli','rp_voile','rp_engourdi','rp_bastion','rp_fortin']},
  soigneuse:{n:'Soigneuse',i:'🌸',role:'Distance',row:'back',els:['f','e'],vit:2.2,init:11,blurb:'Chanteuse : soigne en frappant, remet sur pied et redonne des PA.',sp:['so_avide','so_double','so_restaure','so_choeur','so_elan','so_eveil']},
  chrono:{n:'Chronomancien',i:'⏳',role:'Distance',row:'back',els:['e','t'],vit:2,init:14,blurb:"Fait basculer les ennemis d'une rangée à l'autre, accumule des Échos et vole des PA.",sp:['ch_trotteuse','ch_grain','ch_bascule','ch_echo','ch_horloge','ch_avance']},
  artificier:{n:'Artificier',i:'💣',role:'Distance',row:'back',els:['f','e'],vit:2.1,init:12,blurb:"Colle jusqu'à 5 bombes par cible, puis met le feu aux poudres.",sp:['ar_bombe','ar_feu','ar_retour','ar_ressort','ar_leurre','ar_poudre']},
  assassin:{n:'Assassin',i:'🗡️',role:'Mêlée',row:'front',els:['a','f'],vit:2.6,init:13,blurb:'Piégeur : pose des pièges sur les rangées, y pousse les ennemis, puis achève.',sp:['as_grace','as_croc','as_fosse','as_eclats','as_souffle','as_nappe']},
  flambeur:{n:'Flambeur',i:'🎲',role:'Mêlée',row:'front',els:['a','e'],vit:3,init:10,blurb:'Joueur : tout son kit dépend des coups critiques et du hasard.',sp:['fl_quitte','fl_esbroufe','fl_leche','fl_griffe','fl_roue','fl_brelan']},
  lancier:{n:'Lancier',i:'🔱',role:'Mêlée',row:'front',els:['t','f'],vit:3.4,init:11,blurb:'Plante sa lance dans une rangée ennemie et la balaie, puis la rappelle pour se soigner.',sp:['la_fournaise','la_maree','la_serpent','la_lance','la_rappel','la_aile']},
  traqueur:{n:'Traqueur',i:'🐾',role:'Mêlée',row:'front',els:['t','a'],vit:3.2,init:9,blurb:"Flaire une proie que toute l'équipe draine, monte en Rage puis la consomme pour se soigner.",sp:['tq_flair','tq_peau','tq_ripaille','tq_grond','tq_fauche','tq_repos']},
  passeuse:{n:'Passeuse',i:'🌀',role:'Distance',row:'back',els:['f','t'],vit:2.2,init:12,blurb:'Ouvre des failles qui renforcent sa rangée, puis scelle et ronge ses cibles.',sp:['pa_rayon','pa_raille','pa_vrille','pa_faille','pa_conv','pa_sceau']},
};
const ORDER=Object.keys(CLASSES);

/* Spell targets: front (ligne avant ennemie), any, prey, ally, allyOther, allyKO ; instants: self, allAllies, all, row */
const TGL={unit:'Allié ou ennemi',front:'Ennemi (ligne avant)',any:'Ennemi (toute rangée)',prey:'La Proie (toute rangée)',ally:'Allié',allyOther:'Autre allié',allyKO:'Allié K.O.',self:'Soi-même',allAllies:"Toute l'équipe",all:'Tous les ennemis',row:'Rangée avant ennemie'};
const SP={
  tourbillon:{n:'Tourbillon',pa:2,tg:'front',base:[8,12],pv:u=>{const k=u.st.tourb||0;return{base:[8+6*k,12+6*k]}},txt:'Frappe la cible. Chaque Tourbillon lancé ajoute +6 aux dégâts de base du sort jusqu’à la fin du tour.',fn:(u,t)=>{const k=u.st.tourb||0;hit(u,t,8+6*k,12+6*k);u.st.tourb=k+1;fx(u,'Tourbillon +'+6*(k+1),'buff')}},
  entaille:{n:'Entaille',pa:3,tg:'front',base:[11,15],txt:"+1 Élan : +10 % de dégâts jusqu'à la fin du tour.",fn:(u,t)=>{hit(u,t,11,15);u.st.elan=(u.st.elan||0)+1}},
  colere:{n:'Colère',pa:4,tg:'front',cd:2,base:[20,26],pv:u=>({mult:1+.25*(u.st.colere||0)}),txt:'Gros coup. +25 % de dégâts pour chaque Colère déjà lancée pendant le combat.',fn:(u,t)=>{const k=u.st.colere||0;hit(u,t,20,26,{mult:1+.25*k});u.st.colere=k+1;if(k)fx(u,'Colère ×'+(k+1),'buff')}},
  cri:{n:'Cri de guerre',pa:1,tg:'self',pt:1,txt:'+30 % de dégâts ce tour. 1×/tour.',fn:u=>{u.st.cri=1;fx(u,'+30%','buff')}},
  bond:{n:'Bond',pa:2,tg:'any',pt:1,base:[7,10],txt:"Saute sur n'importe quelle rangée. 1×/tour.",fn:(u,t)=>hit(u,t,7,10)},
  souffle:{n:'Second souffle',pa:0,tg:'self',cd:3,need:u=>(u.turns||0)>=2,needTxt:'À partir du 2e tour',txt:'Gagne 3 PA. Utilisable à partir de ton 2e tour.',fn:u=>{u.pa+=3;fx(u,'+3 PA','buff');log(`${u.name} reprend son souffle : +3 PA.`)}},
  fleche:{n:'Flèche ardente',pa:3,tg:'any',base:[9,12],txt:'Tir sur toute rangée.',fn:(u,t)=>hit(u,t,9,12)},
  punitive:{n:'Trait punitif',pa:4,tg:'front',base:[10,14],pv:u=>({mult:1+.08*u.pa}),txt:'Récompense une barre de PA pleine : +8 % de dégâts par PA disponible avant le lancer.',fn:(u,t)=>hit(u,t,10,14,{mult:1+.08*(u._paBefore||0)})},
  pluie:{n:'Pluie de flèches',pa:5,tg:'all',pt:1,base:[6,8],txt:'Touche tous les ennemis. 1×/tour.',fn:u=>foesOf(u).forEach(t=>hit(u,t,6,8))},
  braise:{n:'Trait de braise',pa:3,tg:'front',base:[8,11],txt:"Frappe la cible, puis éclabousse pour moitié les 2 ennemis les plus proches de la rangée arrière. Si la cible y est déjà, ses 2 voisins encaissent le coup entier.",fn:(u,t)=>{const r=hit(u,t,8,11);const back=foesOf(u).filter(x=>x.row==='back'&&x!==t).sort((a,b)=>Math.abs((a.slot||0)-(t.slot||0))-Math.abs((b.slot||0)-(t.slot||0))).slice(0,2);const full=t.row==='back';back.forEach(x=>hit(u,x,8,11,{mult:full?1:.5,noCrit:1}))}},
  balayant:{n:'Regard balayant',pa:3,tg:'any',cd:2,base:[4,6],txt:"Balaye toute la rangée de la cible, rangée arrière comprise. Les ennemis touchés ne peuvent plus viser la rangée arrière à leur prochain tour.",fn:(u,t)=>{(C().enemies.filter(x=>x.alive&&x.row===t.row)).forEach(x=>{hit(u,x,4,6);if(x.alive){x.st.blindBack=2;fx(x,'Vue brouillée','debuff')}})}},
  visee:{n:'Visée stable',pa:2,tg:'self',pt:1,txt:'+15 % de coup critique pendant 3 tours.',fn:u=>{u.st.critBuff=3;fx(u,'+15 % crit','buff')}},
  aigle:{n:"Vue d'aigle",pa:2,tg:'self',cd:3,txt:"Pendant 2 tours, ses tirs de ligne avant atteignent aussi la rangée arrière, même si l'avant adverse tient encore.",fn:u=>{u.st.sight=2;fx(u,"Vue d'aigle",'buff')}},
  faucon:{n:'Œil de faucon',pa:1,tg:'self',pt:1,txt:'Le prochain coup est critique. 1×/tour.',fn:u=>{u.st.focus=1;fx(u,'Visée','buff')}},
  barrage:{n:'Tir de barrage',pa:3,tg:'any',base:[6,9],txt:"Affaiblit la cible (−25 % dégâts) jusqu'à la fin de son prochain tour.",fn:(u,t)=>{hit(u,t,6,9);if(t.alive){t.st.weak=2;fx(t,'Affaibli','debuff')}}},
  coupbouclier:{n:'Coup de bouclier',pa:3,tg:'front',base:[8,11],txt:'Frappe et donne un bouclier (8, augmente avec le niveau).',fn:(u,t)=>{hit(u,t,8,11);shield(u,8*sc(u))}},
  provoc:{n:'Provocation',pa:2,tg:'self',pt:1,txt:"Attire tous les coups jusqu'à ton prochain tour, +6 bouclier. 1×/tour.",fn:u=>{u.st.taunt=1;shield(u,6*sc(u));fx(u,'Provoque','buff')}},
  muraille:{n:'Muraille',pa:3,tg:'allAllies',pt:1,txt:"Bouclier de 8 à toute l'équipe. 1×/tour.",fn:u=>alliesOf(u).forEach(a=>shield(a,8*sc(u)))},
  riposte:{n:'Riposte',pa:2,tg:'self',pt:1,txt:"Renvoie 5 dégâts par coup reçu jusqu'à ton prochain tour. 1×/tour.",fn:u=>{u.st.thorns=Math.round(5*sc(u));u.st.thornsT=1;fx(u,'Riposte','buff')}},
  sacrifice:{n:'Sacrifice',pa:3,tg:'allyOther',pt:1,txt:"Prend les coups destinés à un allié jusqu'à ton prochain tour. 1×/tour.",fn:(u,t)=>{t.st.guardBy=u.id;fx(t,'Protégé','buff');log(`${u.name} protège ${t.name}.`)}},
  soin:{n:'Mot soignant',pa:3,tg:'ally',base:[12,16],heal:1,txt:'Soigne un allié.',fn:(u,t)=>heal(u,t,12,16)},
  piquant:{n:'Mot piquant',pa:2,tg:'any',base:[6,9],txt:'Petit tir sur toute rangée.',fn:(u,t)=>hit(u,t,6,9)},
  stimulant:{n:'Mot stimulant',pa:2,tg:'allyOther',pt:1,txt:'Un allié gagne +2 PA à son prochain tour. 1×/tour.',fn:(u,t)=>{t.st.bonusPA=(t.st.bonusPA||0)+2;fx(t,'+2 PA','buff')}},
  vie:{n:'Mot de vie',pa:5,tg:'allyKO',pc:1,txt:'Relève un allié K.O. à 40 % PV. 1×/combat.',fn:(u,t)=>{t.alive=true;t.hp=Math.round(maxHp(t)*.4);t.st={};fx(t,'Debout !','heal');log(`${t.name} est relevé.`);meta.cnt.revives++}},
  lien:{n:'Mot de lien',pa:3,tg:'allAllies',pt:1,base:[5,7],heal:1,txt:"Soigne toute l'équipe. 1×/tour.",fn:u=>alliesOf(u).forEach(a=>heal(u,a,5,7))},
  aiguille:{n:'Aiguille',pa:3,tg:'any',base:[8,11],txt:'Retire 1 PA à la cible. +1 Sablier.',fn:(u,t)=>{hit(u,t,8,11);if(t.alive)t.st.paLoss=(t.st.paLoss||0)+1;sab(u)}},
  ralentir:{n:'Ralentir',pa:2,tg:'any',txt:'Retire 2 PA à la cible (−15 % de dégâts par PA). +1 Sablier.',fn:(u,t)=>{t.st.paLoss=(t.st.paLoss||0)+2;fx(t,'−2 PA','debuff');sab(u)}},
  fracas:{n:'Fracas',pa:4,tg:'any',base:[5,7],pv:u=>({base:[5+7*(u.st.sab||0),7+7*(u.st.sab||0)]}),txt:'+7 dégâts par Sablier, puis les consomme.',fn:(u,t)=>{const s=u.st.sab||0;hit(u,t,5+7*s,7+7*s);u.st.sab=0}},
  arret:{n:'Arrêt du temps',pa:4,tg:'any',cd:3,txt:'La cible passe son prochain tour. Recharge 3 tours.',fn:(u,t)=>{t.st.stun=1;fx(t,'Figé','debuff');log(`${t.name} est figé.`)}},
  retour:{n:'Retour',pa:2,tg:'ally',pt:1,heal:1,txt:'Rend à un allié les PV perdus depuis son dernier tour. 1×/tour.',fn:(u,t)=>{const v=t.st.taken||0;if(v)heal(u,t,v,v,{raw:1});else fx(t,'Rien à rendre','buff')}},
  bombe:{n:'Bombe collante',pa:2,tg:'any',base:[2,3],txt:'Pose une bombe sur la cible (max 3).',fn:(u,t)=>{hit(u,t,2,3);if(t.alive){t.st.bomb=Math.min(3,(t.st.bomb||0)+1);fx(t,'💣','debuff')}}},
  petard:{n:'Pétard',pa:3,tg:'any',base:[8,11],txt:'Tir sur toute rangée.',fn:(u,t)=>hit(u,t,8,11)},
  detonation:{n:'Détonation',pa:4,tg:'all',pt:1,need:u=>foesOf(u).some(e=>e.st.bomb),base:[9,12],pv:u=>{const b=C()?Math.max(0,...foesOf(u).map(e=>e.st.bomb||0)):0;return{base:[9*Math.max(1,b),12*Math.max(1,b)]}},txt:'Chaque bombe explose sur son porteur, puis 2 dégâts par bombe à tous. 1×/tour.',fn:u=>{let tot=0;foesOf(u).forEach(e=>{const b=e.st.bomb||0;if(b){tot+=b;e.st.bomb=0;hit(u,e,9*b,12*b)}});if(tot)foesOf(u).forEach(e=>hit(u,e,2*tot,2*tot,{noCrit:1}))}},
  grenaille:{n:'Grenaille',pa:4,tg:'row',base:[6,9],txt:'Touche toute la ligne avant ennemie.',fn:u=>frontFoes(u).forEach(t=>hit(u,t,6,9))},
  fumigene:{n:'Fumigène',pa:3,tg:'allAllies',pt:1,txt:"+20 % d'esquive à l'équipe jusqu'à leur prochain tour. 1×/tour.",fn:u=>alliesOf(u).forEach(a=>{a.st.smoke=2;fx(a,'Esquive +20%','buff')})},
  venin:{n:'Venin',pa:3,tg:'front',base:[3,5],txt:'Empoisonne : 5 dégâts par tour pendant 3 tours (augmente avec le niveau).',fn:(u,t)=>{hit(u,t,3,5);if(t.alive)poison(u,t,5*sc(u),3)}},
  dague:{n:'Dague',pa:3,tg:'front',base:[9,13],pv:(u,t)=>({mult:t&&t.st.poison?1.5:1}),txt:'+50 % sur une cible empoisonnée.',fn:(u,t)=>hit(u,t,9,13,{mult:t.st.poison?1.5:1})},
  ombre:{n:'Ombre',pa:2,tg:'self',pt:1,txt:"Invisible jusqu'à ton prochain tour. Prochain coup +50 %. 1×/tour.",fn:u=>{u.st.invis=1;u.st.ambush=1;fx(u,'Invisible','buff')}},
  execution:{n:'Exécution',pa:4,tg:'front',pt:1,base:[11,15],pv:(u,t)=>({mult:t&&t.hp/maxHp(t)<.35?2:1}),txt:'Dégâts doublés si la cible a moins de 35 % PV. 1×/tour.',fn:(u,t)=>hit(u,t,11,15,{mult:t.hp/maxHp(t)<.35?2:1})},
  piege:{n:'Piège',pa:2,tg:'any',pt:1,base:[10,14],txt:"Piège la cible : sa prochaine action déclenche les dégâts. 1×/tour.",fn:(u,t)=>{t.st.trap=u.id;fx(t,'Piégé','debuff')}},
  pileface:{n:'Pile ou face',pa:3,tg:'front',base:[18,22],alt:[3,4],txt:'Une chance sur deux : 18–22, sinon 3–4.',fn:(u,t)=>Math.random()<.5?hit(u,t,18,22):hit(u,t,3,4)},
  griffe:{n:'Griffe',pa:3,tg:'front',base:[9,12],txt:'Coup critique : rend 2 PA.',fn:(u,t)=>{const r=hit(u,t,9,12);if(r&&r.crit){u.pa+=2;fx(u,'+2 PA','buff')}}},
  roue:{n:'Roue de fortune',pa:4,tg:'self',pt:1,txt:"Au hasard : soin de l'équipe, 9 dégâts à tous les ennemis, ou +4 PA. 1×/tour.",fn:u=>{const r=R(0,2);if(r===0){log('La roue tombe sur Soin.');alliesOf(u).forEach(a=>heal(u,a,9,9))}else if(r===1){log('La roue tombe sur Ravage.');foesOf(u).forEach(e=>hit(u,e,9,9))}else{u.pa+=4;fx(u,'+4 PA','buff');log('La roue tombe sur Élan : +4 PA.')}}},
  trefle:{n:'Trèfle',pa:1,tg:'self',pt:1,txt:'+10 % de critique pour le combat (max 3). 1×/tour.',fn:u=>{u.st.chance=Math.min(3,(u.st.chance||0)+1);fx(u,'+10% crit','buff')}},
  toutourien:{n:'Tout ou rien',pa:5,tg:'front',pt:1,base:[14,18],txt:'Si le coup est critique, il frappe aussi toute la rangée. 1×/tour.',fn:(u,t)=>{const r=hit(u,t,14,18);if(r&&r.crit)rowOf(t).filter(x=>x!==t).forEach(x=>hit(u,x,14,18,{noCrit:1}))}},
  estoc:{n:'Estoc',pa:3,tg:'front',base:[10,13],txt:'Coup de lance.',fn:(u,t)=>hit(u,t,10,13)},
  planter:{n:'Lance plantée',pa:2,tg:'self',pc:1,txt:'Plante la lance : Balayage fait +50 % pour tout le combat. 1×/combat.',fn:u=>{u.st.planted=1;fx(u,'Lance plantée','buff')}},
  balayage:{n:'Balayage',pa:4,tg:'row',base:[8,11],pv:u=>({mult:u.st.planted?1.5:1}),txt:'Balaye toute la ligne avant ennemie.',fn:u=>frontFoes(u).forEach(t=>hit(u,t,8,11,{mult:u.st.planted?1.5:1}))},
  charge:{n:'Charge',pa:3,tg:'any',pt:1,base:[8,10],txt:"Atteint n'importe quelle rangée. 1×/tour.",fn:(u,t)=>hit(u,t,8,10)},
  garde:{n:'Garde haute',pa:2,tg:'self',pt:1,txt:"Bouclier de 10 et renvoie 4 dégâts par coup reçu jusqu'à ton prochain tour. 1×/tour.",fn:u=>{shield(u,10*sc(u));u.st.thorns=Math.round(4*sc(u));u.st.thornsT=1}},
  marque:{n:'Marque',pa:1,tg:'any',txt:'Désigne la Proie : +25 % de tes dégâts contre elle.',fn:(u,t)=>{u.st.prey=t.id;fx(t,'Proie','debuff')}},
  morsure:{n:'Morsure',pa:3,tg:'front',base:[9,12],txt:'Sur la Proie : +1 Rage (+10 % dégâts, max 5).',fn:(u,t)=>{hit(u,t,9,12);if(u.st.prey===t.id)rage(u)}},
  curee:{n:'Curée',pa:4,tg:'front',pt:1,base:[12,16],txt:'+1 Rage. 1×/tour.',fn:(u,t)=>{hit(u,t,12,16);rage(u)}},
  hurlement:{n:'Hurlement',pa:2,tg:'allAllies',pt:1,txt:"+15 % de dégâts à l'équipe jusqu'à leur prochain tour. 1×/tour.",fn:u=>alliesOf(u).forEach(a=>{a.st.howl=2;fx(a,'+15%','buff')})},
  bondchasse:{n:'Bond de chasse',pa:2,tg:'prey',pt:1,base:[7,9],txt:'Frappe la Proie où qu’elle soit. 1×/tour.',fn:(u,t)=>hit(u,t,7,9)},
};


/* ---- class kits (mechanics inspired by the original, names and numbers our own) ---- */
Object.assign(SP,{
  /* Flambeur */
  fl_quitte:{n:'Quitte ou double',pa:3,cost:u=>Math.max(1,3-(u.st.pfDisc||0)),tg:'front',pt:4,base:[6,10],txt:'Chaque coup critique réduit de 1 PA le coût du prochain lancer (minimum 1). Un coup normal remet le coût à 3.',fn:(u,t)=>{const r=hit(u,t,6,10);if(r&&r.crit){u.st.pfDisc=(u.st.pfDisc||0)+1;fx(u,'−1 PA','buff')}else delete u.st.pfDisc}},
  fl_esbroufe:{n:'Esbroufe',pa:4,tg:'front',pt:1,base:[7,11],pv:(u,t)=>({el:t?worstEl(t):null}),txt:"Frappe dans l'élément le plus faible de la cible. Sur un critique, enchaîne un second coup dans ton meilleur élément.",fn:(u,t)=>{const r=hit(u,t,7,11,{el:worstEl(t)});if(r&&r.crit&&t.alive)hit(u,t,7,11)}},
  fl_leche:{n:'Lèche-plaie',pa:3,tg:'front',pt:2,base:[5,9],txt:"L'allié le plus blessé de ta ligne avant récupère 65 % des dégâts infligés.",fn:(u,t)=>{const r=hit(u,t,5,9);if(r&&r.real){const l=heroesAlive().filter(h=>h.row==='front');const a=(l.length?l:heroesAlive()).sort((x,y)=>x.hp/maxHp(x)-y.hp/maxHp(y))[0];const v=Math.round(r.real*.65);if(a&&v)heal(u,a,v,v,{raw:1})}}},
  fl_griffe:{n:'Griffe taquine',pa:3,tg:'front',base:[8,11],txt:'La rangée de la cible subit +5 % de dégâts critiques pendant 2 tours (rafraîchi, ne se cumule pas).',fn:(u,t)=>{const row=rowOf(t);hit(u,t,8,11);row.filter(x=>x.alive).forEach(x=>addB(x,'griffe','critTk',5,2))}},
  fl_roue:{n:'Roue du sort',pa:3,tg:'self',cd:3,txt:"3 tours d'une face au hasard : +10 % de dégâts pour toi, +10 % de critique pour ta rangée, ou un bouclier de 15 % des PV à ta ligne avant. Sur un critique, deux tirages qui se cumulent.",fn:u=>{const n=rollCrit(u)?2:1;if(n>1)fx(u,'Double tirage !','crit');for(let i=0;i<n;i++){const f=R(0,2);if(f===0){addB(u,'roueD'+i,'dmg',10,3);fx(u,'+10 % dégâts','buff');log('La roue tombe sur Fortune : +10 % de dégâts.')}else if(f===1){rowOf(u).forEach(a=>addB(a,'roueC'+i,'crit',10,3));log('La roue tombe sur Veine : +10 % de critique pour la rangée.')}else{heroesAlive().filter(a=>a.row==='front').forEach(a=>shield(a,maxHp(a)*.15));log('La roue tombe sur Garde : bouclier à la ligne avant.')}}}},
  fl_brelan:{n:'Brelan protecteur',pa:2,tg:'ally',cd:4,txt:'Bouclier de 20 % des PV max de l’allié, 40 % sur un critique.',fn:(u,t)=>{const c=rollCrit(u);shield(t,maxHp(t)*(c?.4:.2));if(c)fx(t,'Brelan !','crit')}},
  /* Lancier */
  la_fournaise:{n:'Fournaise',pa:4,tg:'front',lance:1,pt:1,base:[8,12],pv:(u,t)=>({mult:1+.15*sweepList(u,t,'f').length}),txt:'Balaie toute la rangée de la cible (ou celle de ta lance). +15 % par ennemi touché.',fn:(u,t)=>lanceSweep(u,t,8,12,'f')},
  la_maree:{n:"Marée d'acier",pa:4,tg:'front',lance:1,pt:1,base:[8,12],txt:'Balaie toute la rangée de la cible (ou celle de ta lance). +6 de bouclier par ennemi touché.',fn:(u,t)=>lanceSweep(u,t,8,12,'m')},
  la_serpent:{n:'Serpent de fer',pa:4,tg:'front',lance:1,pt:1,base:[8,12],txt:'Balaie toute la rangée de la cible (ou celle de ta lance). Si ta lance est plantée en rangée arrière, touche tous les ennemis.',fn:(u,t)=>lanceSweep(u,t,8,12,'s')},
  la_lance:{n:"Lance d'ancrage",pa:1,tg:'any',pt:2,txt:"Plante ta lance dans la rangée de la cible : tes balayages peuvent viser cette rangée. Elle tient 2 balayages puis se brise en te donnant un bouclier. Une seule lance à la fois.",fn:(u,t)=>{C().lance={row:t.row,dur:2,by:u.id};fx(t,'🔱 lance','debuff');log(`${u.name} plante sa lance en rangée ${t.row==='back'?'arrière':'avant'}.`)}},
  la_rappel:{n:'Rappel',pa:2,tg:'self',pt:1,need:u=>C()&&C().lance&&C().lance.by===u.id,needTxt:'Pas de lance plantée',txt:'Rappelle ta lance : bouclier de 15 % de tes PV, plus un soin de 8 % de tes PV par solidité restante.',fn:u=>{const L=C().lance;C().lance=null;shield(u,maxHp(u)*.15);if(L.dur>0){const v=Math.round(maxHp(u)*.08*L.dur);heal(u,u,v,v,{raw:1})}log(`${u.name} rappelle sa lance.`)}},
  la_aile:{n:'Aile protectrice',pa:2,tg:'self',cd:2,txt:"Jusqu'à la fin de ton prochain tour, tu encaisses la moitié des dégâts visant tes alliés de la rangée arrière.",fn:u=>{addB(u,'aile','valkyr',1,1);fx(u,'Aile','buff')}},
  /* Rempart */
  rp_guet:{n:'Guet',pa:3,tg:'front',cd:3,base:[8,11],txt:"Pendant 2 tours, ta rangée arrière ignore la ligne avant ennemie et inflige +5 % de dégâts.",fn:(u,t)=>{hit(u,t,8,11);heroesAlive().filter(a=>a.row==='back').forEach(a=>{a.st.sight=3;addB(a,'guet','dmg',5,2);fx(a,'Guet','buff')})}},
  rp_ralli:{n:'Ralliement',pa:3,tg:'front',base:[8,11],txt:'Ta ligne avant inflige +10 % de dégâts à son prochain tour, +15 % si elle compte au moins 2 héros.',fn:(u,t)=>{hit(u,t,8,11);const f=heroesAlive().filter(a=>a.row==='front');const v=f.length>=2?15:10;f.forEach(a=>{addB(a,'ralli','dmg',v,1);fx(a,'+'+v+'%','buff')})}},
  rp_voile:{n:"Sphère d'isolement",pa:3,tg:'any',base:[8,11],txt:'La cible ne peut pas viser ta rangée arrière à son prochain tour.',fn:(u,t)=>{hit(u,t,8,11);if(t.alive){t.st.blindBack=2;fx(t,'Isolé','debuff')}}},
  rp_engourdi:{n:'Engourdissement',pa:4,tg:'front',cd:2,base:[5,9],txt:'La cible commence son prochain tour avec −2 PA (−30 % de dégâts).',fn:(u,t)=>{hit(u,t,5,9);if(t.alive){t.st.paLoss=(t.st.paLoss||0)+2;fx(t,'−2 PA','debuff')}}},
  rp_bastion:{n:'Bastion',pa:4,tg:'ally',cd:4,txt:"Pendant 2 tours, un bastion doté de tes PV actuels couvre la rangée de l'allié : il intercepte tous les coups qui la visent. Il ne peut pas être ciblé.",fn:(u,t)=>{C().aegis={row:t.row,hp:u.hp,max:u.hp,t:3,by:u.id};fx(t,'🏰 Bastion','shield');log(`${u.name} élève un bastion devant la rangée ${t.row==='back'?'arrière':'avant'}.`)}},
  rp_fortin:{n:'Fortin',pa:2,tg:'self',cd:2,txt:'Pendant 2 tours, ta ligne avant gagne +10 % de résistances, +15 % si elle compte au moins 2 héros.',fn:u=>{const f=heroesAlive().filter(a=>a.row==='front');const v=f.length>=2?15:10;f.forEach(a=>{addB(a,'fortin','res',v,2);fx(a,'+'+v+'% rés','buff')})}},
  /* Traqueur */
  tq_flair:{n:'Flair',pa:1,tg:'any',txt:"Désigne la Proie pour tout le combat (une seule à la fois). Toute l'équipe récupère 15 % des dégâts qu'elle lui inflige.",fn:(u,t)=>{u.st.flair=t.id;fx(t,'Proie','debuff')}},
  tq_peau:{n:'Peau dure',pa:3,tg:'front',base:[8,12],txt:"−10 % de dégâts subis jusqu'à la fin de ton prochain tour. +1 Rage.",fn:(u,t)=>{hit(u,t,8,12);addB(u,'peau','tk',-10,1);rage(u)}},
  tq_ripaille:{n:'Ripaille',pa:4,tg:'front',cd:1,base:[9,13],pv:(u,t)=>({mult:1+.5*(t?rowOf(t).filter(x=>x!==t).length:0)}),txt:'+50 % par autre ennemi vivant dans la rangée de la cible. +1 Rage.',fn:(u,t)=>{const n=rowOf(t).filter(x=>x!==t).length;hit(u,t,9,13,{mult:1+.5*n});rage(u)}},
  tq_grond:{n:'Grondement',pa:4,tg:'front',cd:2,base:[10,14],txt:'La cible ne peut pas viser ta rangée arrière à son prochain tour. +1 Rage.',fn:(u,t)=>{hit(u,t,10,14);if(t.alive){t.st.blindBack=2;fx(t,'Intimidé','debuff')}rage(u)}},
  tq_fauche:{n:'Fauchage',pa:4,tg:'front',cd:2,base:[7,10],txt:'Balaie la rangée de la cible et repousse la cible principale en rangée arrière. +1 Rage.',fn:(u,t)=>{rowOf(t).forEach(x=>hit(u,x,7,10));if(t.alive&&t.row==='front')moveRow(t);rage(u)}},
  tq_repos:{n:'Repos du fauve',pa:2,tg:'self',heal:1,base:[8,12],need:u=>(u.st.rage||0)>=1,needTxt:'Pas de Rage',pv:u=>({base:[8*Math.max(1,u.st.rage||0),12*Math.max(1,u.st.rage||0)]}),txt:'Consomme toute la Rage : soin de 8–12 par charge.',fn:u=>{const r=u.st.rage||0;u.st.rage=0;heal(u,u,8*r,12*r)}},
  /* Assassin */
  as_grace:{n:'Coup de grâce',pa:4,tg:'front',base:[9,13],pv:u=>({mult:1+.15*(u.st.trapCnt||0)}),txt:'+15 % par coup de piège porté depuis le dernier Coup de grâce, puis le compteur repart à zéro.',fn:(u,t)=>{hit(u,t,9,13,{mult:1+.15*(u.st.trapCnt||0)});u.st.trapCnt=0}},
  as_croc:{n:'Croc-en-jambe',pa:2,tg:'any',pt:2,base:[3,5],txt:"Fait basculer la cible dans l'autre rangée (déclenche les pièges qui s'y trouvent).",fn:(u,t)=>{hit(u,t,3,5);if(t.alive)moveRow(t)}},
  as_fosse:{n:'Fosse',pa:3,tg:'any',pt:2,base:[10,14],trap:1,txt:"Piège la rangée de la cible. Il se déclenche sur le premier ennemi qu'on y fait entrer : +30 % par autre ennemi vivant dans cette rangée.",fn:(u,t)=>placeTrap(u,t.row,'fosse')},
  as_eclats:{n:'Chausse-trappe à éclats',pa:3,tg:'any',pt:2,base:[8,11],trap:1,txt:"Piège la rangée de la cible. Il se déclenche sur le premier ennemi qu'on y fait entrer, et éclabousse le reste de la rangée pour moitié.",fn:(u,t)=>placeTrap(u,t.row,'eclats')},
  as_souffle:{n:'Souffle retenu',pa:2,tg:'self',cd:2,txt:"Tes pièges infligent +50 % jusqu'à la fin de ton prochain tour, même déclenchés par un allié.",fn:u=>{addB(u,'souffle','chakra',50,1);fx(u,'Pièges +50%','buff')}},
  as_nappe:{n:"Nappe d'ombre",pa:3,tg:'ally',cd:5,txt:"Pendant 2 tours, la rangée de l'allié gagne +25 % d'esquive.",fn:(u,t)=>rowOf(t).forEach(a=>{addB(a,'nappe','esq',25,2);fx(a,'💨 +25%','buff')})},
  /* Artificier */
  ar_bombe:{n:'Bombe collante',pa:2,tg:'any',pt:2,need:u=>foesOf(u).some(e=>(e.st.bomb||0)<5),needTxt:'Toutes les cibles sont pleines',txt:'Colle une bombe sur la cible, sans dégâts (5 maximum par cible).',fn:(u,t)=>{t.st.bomb=Math.min(5,(t.st.bomb||0)+1);fx(t,'💣'+t.st.bomb,'debuff')}},
  ar_feu:{n:'Mise à feu',pa:3,tg:'all',base:[8,12],need:u=>foesOf(u).some(e=>e.st.bomb),needTxt:'Aucune bombe',pv:u=>{const b=C()?Math.max(1,...foesOf(u).map(e=>e.st.bomb||0)):1;return{base:[8*b,12*b]}},txt:'Chaque bombe explose : 8–12 par bombe sur son porteur, et moitié sur le reste de sa rangée.',fn:u=>detonate(u)},
  ar_retour:{n:'Lame-retour',pa:3,tg:'front',pt:1,base:[9,13],txt:"Frappe la cible, puis l'ennemi derrière elle, puis revient sur la cible pour moitié.",fn:(u,t)=>{hit(u,t,9,13);const o=t.row==='front'?'back':'front';const b=foesOf(u).filter(x=>x.row===o).sort((a,b)=>Math.abs((a.slot||0)-(t.slot||0))-Math.abs((b.slot||0)-(t.slot||0)))[0];if(b)hit(u,b,9,13);if(t.alive)hit(u,t,9,13,{mult:.5})}},
  ar_ressort:{n:'Ressort sauteur',pa:1,tg:'any',cd:3,txt:"Fait basculer un ennemi dans l'autre rangée.",fn:(u,t)=>moveRow(t)},
  ar_leurre:{n:'Leurre',pa:2,tg:'self',cd:5,txt:'Un double encaisse entièrement le prochain coup direct qui te vise (pas le poison).',fn:u=>{u.st.decoy=1;fx(u,'Leurre','buff')}},
  ar_poudre:{n:'Poudre aveuglante',pa:2,tg:'self',cd:1,txt:'Ce tour-ci, chaque ennemi touché par une explosion de bombe perd aussi 2 PA à son prochain tour.',fn:u=>{u.st.resq=1;fx(u,'Poudre','buff')}},
  /* Chronomancien */
  ch_trotteuse:{n:'Trotteuse',pa:2,tg:'front',pt:2,ptt:1,base:[7,10],txt:"Jusqu'à son prochain tour, chaque Écho que reçoit la cible la blesse à nouveau.",fn:(u,t)=>{hit(u,t,7,10);if(t.alive)addB(t,'aig','aig',1,1,{by:u.id})}},
  ch_grain:{n:'Grain volé',pa:4,tg:'front',base:[5,8],txt:'Vole 2 PA : tu les gagnes tout de suite, la cible les perd à son prochain tour.',fn:(u,t)=>{hit(u,t,5,8);if(t.alive){t.st.paLoss=(t.st.paLoss||0)+2;fx(t,'−2 PA','debuff')}u.pa+=2;fx(u,'+2 PA','buff')}},
  ch_bascule:{n:'Bascule',pa:1,tg:'any',ptt:1,txt:"Envoie la cible dans l'autre rangée. Si la place est occupée, les deux ennemis s'échangent et reçoivent chacun un Écho.",fn:(u,t)=>bascule(t)},
  ch_echo:{n:'Écho brisé',pa:5,tg:'front',cd:1,base:[8,12],pv:(u,t)=>({mult:1+.5*Math.min(4,t&&t.st.echo||0)}),txt:'+50 % par Écho sur la cible (4 maximum), puis les consomme.',fn:(u,t)=>{const n=Math.min(4,t.st.echo||0);hit(u,t,8,12,{mult:1+.5*n});if(t.alive)delete t.st.echo}},
  ch_horloge:{n:'Horloge partagée',pa:4,tg:'self',cd:4,txt:'Pendant 2 tours, ta rangée gagne +2 PA au début de chaque tour.',fn:u=>rowOf(u).forEach(a=>{a.st.cadran=2;fx(a,'+2 PA ×2','buff')})},
  ch_avance:{n:'Avance',pa:2,tg:'self',need:u=>!u.st.premo,needTxt:'Déjà préparé',txt:'+3 PA à ton prochain tour (ne se cumule pas).',fn:u=>{u.st.premo=1;fx(u,'+3 PA','buff')}},
  /* Soigneuse */
  so_avide:{n:'Chant avide',pa:4,tg:'front',base:[8,12],txt:"Chaque allié récupère 25 % des dégâts infligés.",fn:(u,t)=>{const r=hit(u,t,8,12);if(r&&r.real){const v=Math.round(r.real*.25);if(v)heroesAlive().forEach(a=>heal(u,a,v,v,{raw:1}))}}},
  so_double:{n:'Chant double',pa:3,tg:'unit',base:[6,9],txt:"Soigne un allié, ou frappe un ennemi de n'importe quelle rangée.",fn:(u,t)=>t.side==='h'?heal(u,t,6,9):hit(u,t,6,9)},
  so_restaure:{n:'Chant restaurateur',pa:6,tg:'ally',cd:4,txt:"Rend tous ses PV manquants à l'allié.",fn:(u,t)=>{const v=maxHp(t)-t.hp;heal(u,t,v,v,{raw:1})}},
  so_choeur:{n:'Chœur',pa:2,tg:'allAllies',cd:2,heal:1,base:[8,12],txt:"Soigne toute l'équipe.",fn:u=>heroesAlive().forEach(a=>heal(u,a,8,12))},
  so_elan:{n:"Chant d'élan",pa:3,tg:'ally',cd:2,txt:"Bouclier de 15 % des PV max, puis soin de 5 % des PV max au début de chacun de ses 3 prochains tours.",fn:(u,t)=>{shield(t,maxHp(t)*.15);t.st.galva={t:3,v:Math.max(1,Math.round(maxHp(t)*.05))}}},
  so_eveil:{n:"Chant d'éveil",pa:2,tg:'allyOther',tcd:3,txt:'Un allié gagne +2 PA à son prochain tour. Même allié : 3 tours d’attente.',fn:(u,t)=>{t.st.bonusPA=(t.st.bonusPA||0)+2;fx(t,'+2 PA','buff')}},
  /* Passeuse */
  pa_rayon:{n:"Rayon d'éther",pa:3,tg:'front',pt:2,base:[4,7],txt:'Balaie la ligne avant ennemie. Les dégâts infligés soignent ta ligne avant (partagés).',fn:u=>{let tot=0;frontFoes(u).forEach(x=>{const r=hit(u,x,4,7);if(r)tot+=r.real||0});const f=heroesAlive().filter(a=>a.row==='front');const l=f.length?f:[u];const v=Math.round(tot/l.length);if(v)l.forEach(a=>heal(u,a,v,v,{raw:1}))}},
  pa_raille:{n:'Raillerie',pa:4,tg:'front',base:[9,13],txt:'La cible inflige −5 % de dégâts à son prochain tour, −10 % avec 3 failles ou plus.',fn:(u,t)=>{hit(u,t,9,13);if(t.alive){const v=(u.st.portals||0)>=3?10:5;addB(t,'raille','dmg',-v,1);fx(t,'−'+v+'%','debuff')}}},
  pa_vrille:{n:'Vrille',pa:5,tg:'front',base:[11,15],txt:'Avec 3 failles ou plus, empoisonne aussi la cible : la moitié du coup, répartie sur 2 tours.',fn:(u,t)=>{const r=hit(u,t,11,15);if(r&&r.d&&t.alive&&(u.st.portals||0)>=3){t.st.poison={v:(t.st.poison?t.st.poison.v:0)+Math.max(1,Math.round(r.d/4)),t:Math.max(2,t.st.poison?t.st.poison.t:0)};fx(t,'☠','debuff');log(`${t.name} est rongé.`)}}},
  pa_faille:{n:'Faille',pa:1,tg:'self',pt:2,need:u=>(u.st.portals||0)<4,needTxt:'4 failles ouvertes',txt:'Ouvre une faille (4 maximum) : +2 % de dégâts pour toi et +1 % pour les alliés de ta rangée, par faille.',fn:u=>{u.st.portals=(u.st.portals||0)+1;fx(u,'🌀 '+u.st.portals,'buff')}},
  pa_conv:{n:'Convergence',pa:2,tg:'self',cd:3,txt:'Ta rangée gagne +2 PA à son prochain tour, +3 avec 3 failles ou plus.',fn:u=>{const v=(u.st.portals||0)>=3?3:2;rowOf(u).forEach(a=>{a.st.bonusPA=(a.st.bonusPA||0)+v;fx(a,'+'+v+' PA','buff')})}},
  pa_sceau:{n:'Sceau',pa:2,tg:'any',cd:1,txt:'Marque la cible 2 tours : toi et ta rangée lui infligez +5 %, +10 % avec 3 failles ou plus.',fn:(u,t)=>{const v=(u.st.portals||0)>=3?10:5;addB(t,'sceau','mark',v,2,{by:u.id});fx(t,'Sceau +'+v+'%','debuff')}},
});

/* ================= Monsters & worlds ================= */
const ARCH={
  brute:{hp:1.1,d:1,init:8,row:'front',mv:[['atk',1],['atk',1.15],['multi',.6,2]]},
  tank:{hp:1.75,d:.8,init:4,row:'front',mv:[['atk',1],['guard',1.3],['atk',1.1]]},
  rapide:{hp:.8,d:.7,init:19,row:'front',mv:[['multi',.55,3],['atk',1]]},
  tireur:{hp:.8,d:1,init:14,row:'back',mv:[['shot',1],['shot',1.2]]},
  mage:{hp:.9,d:.9,init:11,row:'back',mv:[['aoe',.55],['shot',1]]},
  soigneur:{hp:.9,d:.7,init:12,row:'back',mv:[['heal',1],['shot',1]]},
  toxique:{hp:.9,d:.8,init:13,row:'front',mv:[['poison',.5,3],['atk',1]]},
};
const BOSSMV={
  A:[['atk',1.3],['aoe',.65],['buff',20],['multi',.7,2],['stun',.9]],
  B:[['aoe',.75],['heal',1.2],['poison',.6,3],['atk',1.35]],
  C:[['multi',.6,3],['shield',1.4],['aoe',.7],['weak',1.1]],
};
/* roster: [nom, icône, archétype, élément] ; zones: [nom, icône, [boss, icône, élément, cycle], [indices du roster]] */
const WORLDS=[
  {n:'Vallée de Brumelande',pic:'🌾',bg:'#355a3a',lv:[1,50],
   roster:[['Sanglier épineux','🐗','brute','t'],['Marcassin','🐖','rapide','t'],['Champignon sauteur','🍄','toxique','e'],['Gelée verte','🦠','soigneur','e'],['Rat des greniers','🐀','rapide','a'],['Frelon des haies','🐝','tireur','a'],['Renard chapardeur','🦊','brute','a'],['Luciole ardente','🐞','mage','f'],['Brigand','🥷','brute','f'],['Tortue moussue','🐢','tank','t']],
   zones:[['Prairie des Moulins','🌻',['Épouvantail grimaçant','🎃','f','A'],[0,1,2,5]],['Bois de Grisdent','🌳',['Grisdent','🐗','t','A'],[0,1,6,9]],['Gouffre des Gelées','🕳️',['Reine Gelée','🫧','e','B'],[2,3,4,9]],['Clairière des Lucioles','✨',['Grande Luciole','🌟','f','B'],[5,7,3,6]],['Ruines de Corberive','🏚️',['Corbeau-Liche','🦅','a','C'],[4,5,6,8]],['Fort des Brigands','🏰',['Capitaine Balafre','🏴‍☠️','f','C'],[8,7,6,9]]]},
  {n:"Marais d'Ombrevase",pic:'🪷',bg:'#2f4a45',lv:[50,100],
   roster:[['Vipère des joncs','🐍','toxique','e'],['Moustique géant','🦟','rapide','a'],['Noyé','🧟','tank','e'],['Feu-follet','🕯️','soigneur','f'],['Caïman','🐊','brute','e'],['Sangsue','🪱','toxique','t'],['Sorcière des joncs','🧙','mage','f'],['Papillon de nuit','🦋','rapide','a'],['Héron pêcheur','🦩','tireur','a'],['Racine animée','🌿','tank','t']],
   zones:[['Rives troubles','🌊',['Hydre de vase','🐲','e','A'],[0,1,4,8]],['Saulaie noire','🌲',['Saule gémissant','🌳','t','C'],[5,9,3,7]],['Tourbière fumante','♨️',['Chaudronnière','🫕','f','B'],[6,3,5,1]],['Village englouti','🛖',['Bourgmestre noyé','⚓','e','A'],[2,4,0,8]],['Île aux Hérons','🏝️',['Grand Héron','🦢','a','C'],[8,7,1,9]],['Cœur du Marais','💚',['Mère des Marais','🐸','e','B'],[6,2,4,0]]]},
  {n:'Citadelle de Cendre',pic:'🌋',bg:'#4a2c26',lv:[100,150],
   roster:[['Squelette','💀','brute','t'],['Spectre','👻','tireur','a'],['Chauve-souris de suie','🦇','rapide','a'],['Élémentaire de braise','🔥','mage','f'],["Golem d'obsidienne",'🗿','tank','t'],['Scorpion de lave','🦂','toxique','f'],['Araignée de cendre','🕷️','toxique','e'],['Soldat de cendre','🪖','brute','f'],['Liche apprentie','🧛','soigneur','e'],["Molosse d'os",'🦴','rapide','t']],
   zones:[['Remparts calcinés','🧱',['Sentinelle de fer','🤖','t','A'],[0,7,1,9]],['Forges éteintes','⚒️',['Forgeron maudit','🔨','f','B'],[3,4,5,7]],['Cryptes','⚰️',['Liche ancienne','☠️','e','C'],[0,1,8,6]],['Nid des cendres','🕸️',['Reine-Araignée','🕷️','e','A'],[6,2,5,9]],['Salle du trône','🪑',['Roi déchu','👑','a','C'],[7,8,4,1]],['Sommet de la tour','🗼',['Dragon de cendre','🐉','f','A'],[3,4,2,5]]]},
  {n:'Cimes de Givre',pic:'🏔️',bg:'#2f4660',lv:[150,200],
   roster:[['Loup blanc','🐺','brute','a'],['Yéti','🦍','tank','t'],['Ours des neiges','🐻','brute','t'],['Harfang','🦉','tireur','a'],['Élémentaire de glace','🧊','mage','e'],['Mammouth','🦣','tank','t'],['Chamane du givre','🧙','soigneur','e'],['Phoque des glaces','🦭','rapide','e'],['Bouquetin','🐐','rapide','t'],['Esprit du blizzard','🌨️','mage','a']],
   zones:[['Col venteux','🌬️',['Grand Bouquetin','🐏','t','A'],[8,0,3,7]],['Lac gelé','🧊',['Léviathan de glace','🐋','e','B'],[7,4,6,1]],['Forêt de givre','🌲',['Roi-Loup','❄️','a','C'],[0,2,3,9]],['Grottes de cristal','💎',['Golem de cristal','🔷','e','A'],[4,1,5,6]],['Village des chamanes','⛺',['Grande Chamane','🔮','e','B'],[6,9,2,8]],['Pic du blizzard','🏔️',['Titan des glaces','🗻','a','C'],[5,9,1,0]]]},
  {n:'Abysses Stellaires',pic:'🌌',bg:'#25264a',lv:[200,250],
   roster:[['Méduse astrale','🪼','mage','e'],['Kraken juvénile','🦑','brute','e'],['Requin-lame','🦈','rapide','e'],["Crabe d'airain",'🦀','tank','t'],['Poisson-lanterne','🐡','tireur','f'],['Pieuvre des songes','🐙','soigneur','a'],['Nautile','🐚','tank','t'],['Corail vivant','🪸','toxique','f'],['Étoile filante','✨','rapide','a'],['Astronome noyé','🔭','tireur','a']],
   zones:[["Récif d'argent",'🐠',['Baleine lunaire','🐳','e','A'],[3,2,4,6]],['Jardin de corail','🪸',['Reine-Corail','🌺','f','B'],[7,5,0,3]],['Fosse obscure','🕳️',['Kraken ancien','🦑','e','C'],[1,2,4,7]],['Cité engloutie','🏛️',['Prince des marées','🧜','e','A'],[9,5,6,1]],['Nébuleuse','🌠',['Gardien stellaire','💫','a','B'],[8,0,9,4]],["Trône des abysses",'🌌',["Dévoreur d'étoiles",'🌑','a','C'],[8,1,5,0]]]},
];
const ZONES=6;
const NODE={start:{i:'⛺',n:'Départ',d:'Point de départ.'},fight:{i:'⚔️',n:'Combat',d:'Un groupe de monstres.'},hard:{i:'💀',n:'Combat dur',d:'Ennemis renforcés, meilleur butin.'},boss:{i:'👑',n:'Donjon',d:'Le boss de la zone.'},taverne:{i:'🍺',n:'Taverne',d:'Soin ou recrutement.'},sanct:{i:'🗿',n:'Sanctuaire',d:'Plus de monstres alpha pour la run.'},portal:{i:'🌀',n:'Portail',d:"La rencontre n'est révélée qu'en arrivant."},shop:{i:'💰',n:'Comptoir',d:'Acheter et revendre des objets.'},forge:{i:'⚒️',n:'Forge',d:"Monter un objet d'une rareté."},event:{i:'❔',n:'Rencontre',d:'Un événement imprévu et un choix à faire.'}};
const MODS=[{k:'veloces',n:'Véloces',d:'+4 initiative et +1 PA (+15 % dégâts)'},{k:'robustes',n:'Robustes',d:'+35 % PV'},{k:'enrages',n:'Enragés',d:'+25 % dégâts'},{k:'cuirasses',n:'Cuirassés',d:'+15 % à toutes les résistances'},{k:'regen',n:'Régénérants',d:'Récupèrent 6 % PV par tour'},{k:'nombreux',n:'Nombreux',d:'Un monstre de plus'}];

/* ================= Items ================= */
const SLOTS={arme:'Arme',coiffe:'Coiffe',cape:'Cape',anneau:'Anneau'};
const SLOT_ICON={arme:'⚔️',coiffe:'🎩',cape:'🧥',anneau:'💍'};
const WBASE=['Épée','Bâton','Arc','Dague','Marteau','Hache','Baguette','Pelle'];
const IBASE={coiffe:['Coiffe','Chapeau','Heaume','Capuche'],cape:['Cape','Manteau','Pèlerine'],anneau:['Anneau','Bague','Chevalière']};
const RAR=[{l:'Commun',m:1,n:2},{l:'Rare',m:1.2,n:3},{l:'Épique',m:1.45,n:4},{l:'Légendaire',m:1.75,n:5},{l:'Mythique',m:2.1,n:5},{l:'Divin',m:2.6,n:6}];
const FORGE_MAX=4;
const STL={adapt:'★ Adapt.',vita:'Vita',crit:'% Crit',pp:'PP',pui:'% Puiss.',soin:'% Soins',init:'Init.',rt:'% Terre',rf:'% Feu',re:'% Eau',ra:'% Air',pa:'PA'};
const STC={adapt:'g',vita:'',crit:'d',pp:'',pui:'d',soin:'b',init:'',rt:'el-t',rf:'el-f',re:'el-e',ra:'el-a',pa:'g'};
const RELIC=['Cœur','Œil','Croc','Couronne','Sceau','Larme'];
/* Relics are a permanent collection: one per zone boss, each a small team-wide bonus that applies to every run. */
const RELFX=[['hp',1.5,'% PV max'],['crit',1,'% de critique'],['dmg',1,'% de dégâts'],['res',1,'% de résistances'],['pp',4,' prospection'],['soin',3,'% de soins']];
const relicVal=(w,z)=>Math.round(RELFX[z][1]*(1+.5*w)*10)/10;
const relicName=(w,z)=>RELIC[z]+' '+de(WORLDS[w].zones[z][2][0]);
const relicTxt=(w,z)=>'+'+String(relicVal(w,z)).replace('.',',')+RELFX[z][2];

/* ================= Talismans & quests ================= */
const TALIS=[
  {id:'mousse',n:'Talisman de Mousse',b:'+8 % de PV max.',q:['first_run','win10','team3','boss1']},
  {id:'lierre',n:'Talisman de Lierre',b:"À la fin de son tour, chaque héros reçoit un bouclier de 3 % de ses PV max par ennemi en ligne avant.",q:['kills100','kills500','big5','hard5']},
  {id:'lune',n:'Talisman de Lune',b:'Une fois par combat, un héros sous 20 % de ses PV récupère 20 % de ses PV max au début de son tour.',q:['lowWin','potion10','revive5']},
  {id:'braise',n:'Talisman de Braise',b:'+5 % de dégâts finaux.',q:['hit100','hit300','boss5','boss15']},
  {id:'brise',n:'Talisman de Brise',b:'+10 % de chance de coup critique.',q:['crit50','crit250','crit1000']},
  {id:'pierre',n:'Talisman de Pierre',b:'+5 % de résistance dans chaque élément.',q:['taken1000','taken10000','set4','flawless']},
  {id:'grenat',n:'Talisman de Grenat',b:'+8 % en Force, Intelligence, Chance et Agilité.',q:['world1','world2','world3','lvl100']},
  {id:'givre',n:'Talisman de Givre',b:'Tes coups ignorent 8 points de résistance ennemie.',q:['el_t','el_f','el_e','el_a']},
  {id:'perle',n:'Talisman de Perle',b:'À la fin de son tour, chaque héros soigne les alliés de sa rangée de 3 % de leurs PV max.',q:['heal500','heal3000','heal10000']},
  {id:'agate',n:"Talisman d'Agate",b:"Quand un héros inflige des dégâts, ses alliés gagnent +5 % de dégâts jusqu'à la fin de leur prochain tour. Non cumulable.",q:['team4','recruit5','win4']},
  {id:'onyx',n:"Talisman d'Onyx",b:'Quand un héros abat un ennemi, il reçoit un bouclier de 20 % de ses PV max.',q:['alpha3','alpha20','kills1000']},
  {id:'quartz',n:'Talisman de Quartz',b:"Si un héros n'inflige aucun dégât pendant son premier tour, il gagne +5 % de dégâts finaux pour le reste du combat.",q:['support50','support300','support1000']},
  {id:'corail',n:'Talisman de Corail',b:'Un tour sur deux, chaque héros récupère 8 % de ses PV max au début de son tour.',q:['win25','win100','w2z4']},
  {id:'rosee',n:'Talisman de Rosée',b:'+5 prospection par rang de rareté du meilleur objet jamais trouvé (jusqu’à +30).',q:['sell10','inv30','spend500','buy3','rare4']},
  {id:'or',n:"Talisman d'Or",b:'+30 % d’écus.',q:['forgeleg','gold2000','relic1']},
  {id:'pelerin',n:'Talisman du Pèlerin',b:'+1 potion par run.',q:['portal3','sanct3','tav10']},
  {id:'ambre',n:"Talisman d'Ambre",b:'+1 PA à toute l’équipe.',q:['best_0','best_1','best_2','best_3','best_4']},
  {id:'cauchemar',n:'Talisman du Cauchemar',b:'Le premier héros de la formation joue toujours en premier.',q:['star5_0','star5_1','star5_2','star5_3','star5_4']},
];
const QN=(n,s)=>n.toLocaleString('fr-FR')+' '+s;
const QUESTS={
  first_run:['Terminer une run (victoire ou défaite)',m=>m.cnt.runsEnded>=1],
  win10:['Gagner 10 combats',m=>m.cnt.wins>=10],
  win25:['Gagner 25 combats',m=>m.cnt.wins>=25],
  win100:['Gagner 100 combats',m=>m.cnt.wins>=100],
  team3:['Avoir 3 héros dans l’équipe',m=>m.cnt.maxTeam>=3],
  team4:['Avoir 4 héros dans l’équipe',m=>m.cnt.maxTeam>=4],
  recruit5:['Recruter 5 héros en taverne',m=>(m.cnt.recruits||0)>=5],
  win4:['Gagner un monde avec 4 héros',m=>(m.cnt.win4||0)>=1],
  boss1:['Vaincre un boss de donjon',m=>m.cnt.bossKills>=1],
  boss5:['Vaincre 5 boss de donjon',m=>m.cnt.bossKills>=5],
  boss15:['Vaincre 15 boss de donjon',m=>m.cnt.bossKills>=15],
  kills100:['Vaincre 100 monstres',m=>m.cnt.kills>=100],
  kills500:['Vaincre 500 monstres',m=>m.cnt.kills>=500],
  kills1000:['Vaincre 1 000 monstres',m=>m.cnt.kills>=1000],
  big5:['Gagner un combat contre 5 ennemis ou plus',m=>(m.cnt.big5||0)>=1],
  hard5:['Gagner 5 combats durs',m=>m.cnt.hardWins>=5],
  hit100:['Infliger un coup de 100 dégâts ou plus',m=>m.cnt.maxHit>=100],
  hit300:['Infliger un coup de 300 dégâts ou plus',m=>m.cnt.maxHit>=300],
  flawless:['Gagner un combat dur sans aucun K.O.',m=>m.cnt.flawless>=1],
  lowWin:['Gagner un combat avec un héros sous 10 % de ses PV',m=>(m.cnt.lowWin||0)>=1],
  potion10:['Boire 10 potions',m=>m.cnt.potions>=10],
  revive5:['Relever 5 alliés',m=>m.cnt.revives>=5],
  crit50:['Réussir 50 coups critiques',m=>m.cnt.crits>=50],
  crit250:['Réussir 250 coups critiques',m=>m.cnt.crits>=250],
  crit1000:['Réussir 1 000 coups critiques',m=>m.cnt.crits>=1000],
  taken1000:['Encaisser 1 000 dégâts au total',m=>(m.cnt.taken||0)>=1000],
  taken10000:['Encaisser 10 000 dégâts au total',m=>(m.cnt.taken||0)>=10000],
  set4:['Porter une panoplie complète',m=>m.cnt.setDone>=1],
  world1:['Gagner le Monde 1',m=>(m.worlds[0].wins||0)>=1],
  world2:['Gagner le Monde 2',m=>(m.worlds[1].wins||0)>=1],
  world3:['Gagner le Monde 3',m=>(m.worlds[2].wins||0)>=1],
  lvl100:['Amener un héros au niveau 100',m=>(m.cnt.maxLvl||0)>=100],
  el_t:['Vaincre 40 monstres de Terre',m=>((m.cnt.killsEl||{}).t||0)>=40],
  el_f:['Vaincre 40 monstres de Feu',m=>((m.cnt.killsEl||{}).f||0)>=40],
  el_e:['Vaincre 40 monstres d’Eau',m=>((m.cnt.killsEl||{}).e||0)>=40],
  el_a:['Vaincre 40 monstres d’Air',m=>((m.cnt.killsEl||{}).a||0)>=40],
  heal500:['Soigner 500 PV au total',m=>(m.cnt.healed||0)>=500],
  heal3000:['Soigner 3 000 PV au total',m=>(m.cnt.healed||0)>=3000],
  heal10000:['Soigner 10 000 PV au total',m=>(m.cnt.healed||0)>=10000],
  alpha3:['Vaincre 3 monstres alpha',m=>m.cnt.alphaKills>=3],
  alpha20:['Vaincre 20 monstres alpha différents',m=>Object.keys(m.alphas).length>=20],
  w2z4:['Atteindre la zone 4 du Monde 2',m=>(m.worlds[1].zoneMax||0)>=4],
  sell10:['Vendre 10 objets',m=>m.cnt.sold>=10],
  inv30:['Avoir 30 objets dans l’inventaire',m=>m.cnt.maxInv>=30],
  spend500:['Dépenser 500 écus au total',m=>m.cnt.spent>=500],
  buy3:['Acheter 3 objets au comptoir',m=>m.cnt.bought>=3],
  rare4:['Trouver un objet mythique',m=>(m.cnt.bestR||0)>=4],
  forgeleg:['Forger un objet légendaire',m=>m.cnt.forgeLeg>=1],
  gold2000:['Posséder 2 000 écus en même temps',m=>m.cnt.maxGold>=2000],
  relic1:['Trouver une relique',m=>Object.keys(m.relics).length>=1],
  portal3:['Emprunter 3 portails',m=>m.cnt.portals>=3],
  sanct3:['Prier dans 3 sanctuaires',m=>m.cnt.sanct>=3],
  tav10:['Se soigner 10 fois en taverne',m=>m.cnt.tavHeals>=10],
  support50:['Lancer 50 sorts de soutien (sans dégâts)',m=>(m.cnt.support||0)>=50],
  support300:['Lancer 300 sorts de soutien',m=>(m.cnt.support||0)>=300],
  support1000:['Lancer 1 000 sorts de soutien',m=>(m.cnt.support||0)>=1000],
};
WORLDS.forEach((W,w)=>{QUESTS['best_'+w]=[`Compléter le bestiaire alpha du Monde ${w+1}`,m=>W.roster.every((_,i)=>m.alphas[w+'_'+i])];
  QUESTS['star5_'+w]=[`Gagner le Monde ${w+1} en 5 étoiles`,m=>(m.worlds[w].bestStar||0)>=5]});
