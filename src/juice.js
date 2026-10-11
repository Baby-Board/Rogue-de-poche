/* ================= Juice : animations de combat =================
   Le combat est redessiné en entier à chaque action. Les effets vivent donc :
   - dans une couche #fxl (projectiles, particules, chiffres, fantômes), indépendante du DOM du combat ;
   - dans un registre d'animations WAAPI ciblant un jeton par son uid, réappliquées après chaque redessin. */
const RM=()=>!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
let fxl=null,lastCur=null,live=[],busyTill=0;
function layer(){if(!fxl||!fxl.isConnected){fxl=document.createElement('div');fxl.id='fxl';document.body.appendChild(fxl)}return fxl}
const docRect=el=>{const r=el.getBoundingClientRect();return{x:r.left+scrollX,y:r.top+scrollY,w:r.width,h:r.height}};
const ctr=r=>({x:r.x+r.w/2,y:r.y+r.h/2});
const tokEl=id=>document.querySelector(`.tok[data-uid="${id}"]`);
const rnd=(a,b)=>a+Math.random()*(b-a);
function tA(id,part,kf,opts){const start=performance.now();live.push({id,part,kf,opts,start});applyA(live[live.length-1],0)}
function applyA(a,t){const tok=tokEl(a.id);if(!tok)return;const el=a.part?tok.querySelector(a.part):tok;if(!el||!el.animate)return;try{const an=el.animate(a.kf,a.opts);if(t)an.currentTime=t}catch(e){}}
function replayLive(){const now=performance.now();live=live.filter(a=>now-a.start<(a.opts.delay||0)+a.opts.duration);live.forEach(a=>applyA(a,now-a.start))}
function put(cls,x,y,html){const d=document.createElement('div');d.className=cls;d.style.left=x+'px';d.style.top=y+'px';if(html)d.innerHTML=html;layer().appendChild(d);return d}
function anim(el,kf,o){const a=el.animate(kf,Object.assign({fill:'both'},o));a.onfinish=()=>el.remove();return a}

/* ---------- avant redessin : photo des jetons ---------- */
function snapToks(){
  if(!(ui.screen==='run'&&run&&run.phase==='combat'))return null;const s={};
  document.querySelectorAll('.tok[data-uid]').forEach(el=>{const id=el.dataset.uid,u=unit(id),ring=el.querySelector('.ring');
    const e={r:docRect(ring||el),tr:docRect(el),p:ring?+ring.style.getPropertyValue('--p'):100,ko:el.classList.contains('ko')};
    if(u&&!u.alive&&u.side==='e'&&!e.ko)e.clone=el.cloneNode(true);s[id]=e});
  const sc=document.querySelector('.scard.sel');if(sc)s._card={r:docRect(sc),clone:sc.cloneNode(true)};
  return s}

/* ---------- particules & effets ---------- */
function burst(p,el,n,o={}){
  const col=ELC[el]||'#ffd27a',sp=o.sp||1;
  for(let i=0;i<n;i++){const d=put('pt pt-'+(el||'x'),p.x,p.y);d.style.setProperty('--c',col);
    const a=rnd(0,Math.PI*2),r=rnd(22,58)*sp,dx=Math.cos(a)*r,dy=Math.sin(a)*r;
    const g=el==='e'?28:el==='t'?34:el==='f'?-26:0,rot=el==='a'?a*57+90:rnd(0,360),s=rnd(.6,1.25)*(o.big?1.3:1);
    anim(d,[{transform:`translate(-50%,-50%) rotate(${rot}deg) scale(${s})`,opacity:1},{transform:`translate(calc(-50% + ${dx*.75}px),calc(-50% + ${dy*.75}px)) rotate(${rot+40}deg) scale(${s})`,opacity:1,offset:.55},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy+g}px)) rotate(${rot+70}deg) scale(${s*.3})`,opacity:0}],{duration:rnd(420,680),delay:o.delay||0,easing:'cubic-bezier(.15,.7,.3,1)'})}}
function ring(p,col,o={}){const d=put('shock',p.x,p.y);d.style.setProperty('--c',col);const s=o.s||1;
  anim(d,[{transform:'translate(-50%,-50%) scale(.2)',opacity:.95},{transform:`translate(-50%,-50%) scale(${1.6*s})`,opacity:0}],{duration:o.dur||420,delay:o.delay||0,easing:'cubic-bezier(.2,.8,.3,1)'})}
function slash(p,el,crit,delay){const d=put('slash'+(crit?' crit':''),p.x,p.y);d.style.setProperty('--c',ELC[el]||'#fff');const r=rnd(-40,-15);
  anim(d,[{transform:`translate(-50%,-50%) rotate(${r}deg) scaleX(.1)`,opacity:0},{transform:`translate(-50%,-50%) rotate(${r}deg) scaleX(1.1)`,opacity:1,offset:.35},{transform:`translate(-50%,-50%) rotate(${r}deg) scaleX(1.25)`,opacity:0}],{duration:300,delay})}
function projectile(A,B,el,delay,dur){const d=put('proj proj-'+(el||'x'),A.x,A.y);d.style.setProperty('--c',ELC[el]||'#ffd27a');
  const dx=B.x-A.x,dy=B.y-A.y,ang=Math.atan2(dy,dx)*57.3;
  anim(d,[{transform:`translate(-50%,-50%) rotate(${ang}deg) scale(.4)`,opacity:0},{transform:`translate(calc(-50% + ${dx*.12}px),calc(-50% + ${dy*.12}px)) rotate(${ang}deg) scale(1)`,opacity:1,offset:.15},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) rotate(${ang}deg) scale(1.1)`,opacity:1}],{duration:dur,delay,easing:'cubic-bezier(.5,0,.9,.6)'})}
function aura(p,cls,delay){
  if(cls==='heal'){for(let i=0;i<7;i++){const d=put('spark heal',p.x+rnd(-22,22),p.y+rnd(-4,16));anim(d,[{transform:'translate(-50%,-50%) scale(.3)',opacity:0},{transform:'translate(-50%,-50%) scale(1)',opacity:1,offset:.3},{transform:`translate(-50%,calc(-50% - ${rnd(30,52)}px)) scale(.5)`,opacity:0}],{duration:rnd(600,850),delay:delay+i*45,easing:'ease-out'})}ring(p,'#7cf0a0',{delay,s:.8})}
  else if(cls==='shield'){ring(p,'#7cc0ec',{delay,s:.9,dur:520});const d=put('hexa',p.x,p.y);anim(d,[{transform:'translate(-50%,-50%) scale(.7)',opacity:0},{transform:'translate(-50%,-50%) scale(1)',opacity:.9,offset:.35},{transform:'translate(-50%,-50%) scale(1.05)',opacity:0}],{duration:650,delay})}
  else if(cls==='buff'){for(let i=0;i<6;i++){const d=put('ray',p.x+rnd(-24,24),p.y+rnd(0,18));anim(d,[{transform:'translate(-50%,0) scaleY(.2)',opacity:0},{transform:'translate(-50%,-14px) scaleY(1)',opacity:1,offset:.35},{transform:'translate(-50%,-40px) scaleY(.4)',opacity:0}],{duration:620,delay:delay+i*50})}}
  else if(cls==='debuff'){for(let i=0;i<8;i++){const a=i/8*Math.PI*2,d=put('spark debuff',p.x+Math.cos(a)*30,p.y+Math.sin(a)*30);anim(d,[{transform:'translate(-50%,-50%) scale(1)',opacity:0},{transform:'translate(-50%,-50%) scale(1)',opacity:1,offset:.25},{transform:`translate(calc(-50% + ${-Math.cos(a)*26}px),calc(-50% + ${-Math.sin(a)*26}px)) scale(.3)`,opacity:0}],{duration:560,delay:delay+i*25,easing:'ease-in'})}}}
function shakeStage(power,delay){const st=document.querySelector('.stage');if(!st)return;const p=power;setTimeout(()=>{const s=document.querySelector('.stage');s&&s.animate([{transform:'none'},{transform:`translate(${-p}px,${p*.5}px)`},{transform:`translate(${p}px,${-p*.4}px)`},{transform:`translate(${-p*.6}px,${p*.3}px)`},{transform:'none'}],{duration:280})},delay)}
function flashScreen(col,delay){const d=put('scrflash',0,0);d.style.setProperty('--c',col);anim(d,[{opacity:0},{opacity:.5,offset:.2},{opacity:0}],{duration:320,delay})}
function banner(txt,sub,cls,delay){const d=put('ban2 '+cls,0,0,`<div class="b2in"><b>${txt}</b>${sub?`<small>${sub}</small>`:''}</div>`);d.style.top=(scrollY+innerHeight*.36)+'px';
  anim(d,[{opacity:0,transform:'translateY(-50%) scale(1.25)',easing:'cubic-bezier(.2,.9,.3,1.2)'},{opacity:1,transform:'translateY(-50%) scale(1)',offset:.14},{opacity:1,transform:'translateY(-50%) scale(1.02)',offset:.8,easing:'ease-in'},{opacity:0,transform:'translateY(-50%) scale(1.04)'}],{duration:1300,delay})}

/* ---------- après redessin ---------- */
function lootFx(){if(RM())return;const el=[...document.querySelectorAll('.lines div')].find(d=>/écus/.test(d.textContent));if(!el)return;
  const m=/\+([\d\s ]+) écus/.exec(el.textContent);if(!m)return;const N=+m[1].replace(/\D/g,'');const tn=[...el.childNodes].find(x=>x.nodeType===3&&/écus/.test(x.textContent));if(!tn)return;
  const t0=performance.now(),D=900;const step=now=>{const k=Math.min(1,(now-t0-250)/D);if(!tn.isConnected)return;tn.textContent=`+${fmt(Math.round(N*Math.max(0,1-Math.pow(1-k,3))))} écus `;if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step);
  const P=ctr(docRect(el));const src={x:innerWidth/2+scrollX,y:P.y-140};
  for(let i=0;i<Math.min(14,4+N/8|0);i++){const d=put('coinfx',src.x+rnd(-90,90),src.y+rnd(-30,10));const dx=P.x-60-parseFloat(d.style.left),dy=P.y-parseFloat(d.style.top);
    anim(d,[{transform:'translate(-50%,-50%) scale(0)',opacity:0},{transform:'translate(-50%,-50%) scale(1.1)',opacity:1,offset:.25},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.5)`,opacity:.2}],{duration:rnd(650,900),delay:150+i*45,easing:'cubic-bezier(.5,0,.75,.4)'})}}
function flushFx(snap,entering,changedTo){
  const q=fxq;fxq=[];const c=ui.screen==='run'&&run&&run.phase==='combat'?C():null;
  if(!c){if(changedTo==='loot')lootFx();q.filter(f=>f.k==='ban').forEach(b=>banner(b.txt,b.sub,b.cls,0));return}
  replayLive();const rm=RM();snap=snap||{};
  const posOf=id=>{const s=snap[id];if(s&&s.clone)return ctr(s.r);const el=tokEl(id);const r=el&&el.querySelector('.ring');return r?ctr(docRect(r)):s?ctr(s.r):null};
  const hits=q.filter(f=>f.k==='hit'),acts=q.filter(f=>f.k==='act');
  const actor=acts.length?acts[0].s:null;
  const imp={};let last=0;
  /* 1. l'acteur s'élance, la carte jouée s'envole */
  if(actor&&!rm){
    const A=posOf(actor),mine=hits.filter(h=>h.s===actor);
    if(snap._card&&unit(actor)&&unit(actor).side==='h'){const k=snap._card,d=k.clone;d.classList.add('cardfly');d.style.left=k.r.x+'px';d.style.top=k.r.y+'px';d.style.width=k.r.w+'px';d.style.height=k.r.h+'px';layer().appendChild(d);anim(d,[{transform:'none',opacity:1},{transform:'translateY(-26px) scale(1.06)',opacity:1,offset:.35},{transform:'translateY(-90px) scale(.7)',opacity:0}],{duration:380,easing:'cubic-bezier(.3,.7,.4,1)'})}
    if(mine.length&&A){
      const T=mine.map(h=>posOf(h.t)).filter(Boolean);const mx=T.reduce((s,p)=>s+p.x,0)/T.length,my=T.reduce((s,p)=>s+p.y,0)/T.length;
      const L=Math.hypot(mx-A.x,my-A.y)||1,ux=(mx-A.x)/L,uy=(my-A.y)/L;
      tA(actor,'',[{transform:'none'},{transform:`translate(${-ux*6}px,${-uy*6}px) scale(.97)`,offset:.3},{transform:`translate(${ux*20}px,${uy*20}px) scale(1.1)`,offset:.55},{transform:'none'}],{duration:380,easing:'ease-out'});
      mine.forEach((h,i)=>{const B=posOf(h.t);let t;if(!B){t=200}else{const dist=Math.hypot(B.x-A.x,B.y-A.y),launch=150+i*70;
        if(dist>150||h.rg){const dur=Math.max(150,Math.min(280,dist/1.5));projectile(A,B,h.el,launch,dur);t=launch+dur}else t=200+i*70}
        h.time=t;if(imp[h.t]==null)imp[h.t]=t;last=Math.max(last,t)})}
    else if(A){tA(actor,'.ring',[{transform:'scale(1)',filter:'none'},{transform:'scale(1.12)',filter:'brightness(1.5)',offset:.4},{transform:'scale(1)',filter:'none'}],{duration:420});last=180}}
  hits.forEach(h=>{if(h.time==null){h.time=rm?0:last+60;if(imp[h.t]==null)imp[h.t]=h.time;last=Math.max(last,h.time)}});
  /* 2. impacts */
  if(!rm)hits.forEach(h=>{const P=posOf(h.t);if(!P)return;const t=h.time;
    if(h.miss){ring(P,'#ffffff',{delay:t,s:.6});return}
    if(!h.real){ring(P,'#7cc0ec',{delay:t,s:.9});tA(h.t,'.ring',[{transform:'scale(1)'},{transform:'scale(.94)',offset:.3},{transform:'scale(1)'}],{duration:260,delay:t});return}
    slash(P,h.el,h.crit,t);burst(P,h.el,h.crit?16:9,{delay:t,big:h.crit,sp:h.crit?1.4:1});
    if(!snap[h.t]||!snap[h.t].clone)tA(h.t,'.ring',[{transform:'none',filter:'none'},{transform:'translateX(-5px) rotate(-3deg)',filter:'brightness(2.2)',offset:.2},{transform:'translateX(5px) rotate(2deg)',filter:'brightness(1.3)',offset:.45},{transform:'translateX(-2px)',offset:.7},{transform:'none',filter:'none'}],{duration:360,delay:t});
    if(h.crit){ring(P,ELC[h.el]||'#ffd27a',{delay:t,s:1.4});shakeStage(6,t);flashScreen('#fff3c4',t)}
    else if(unit(h.t)&&unit(h.t).side==='h'&&h.d>=maxHp(unit(h.t))*.25)shakeStage(4,t)});
  /* 3. chiffres flottants */
  const n={};q.filter(f=>f.txt!=null).forEach(f=>{const P=posOf(f.id);if(!P)return;const i=n[f.id]=(n[f.id]||0)+1;
    const base=imp[f.id]!=null?imp[f.id]:(actor&&!rm?(f.id===actor?120:220):0),d=base+(i-1)*140;
    const s=put('float '+f.cls,P.x,P.y-30+((i-1)%3)*20);s.textContent=f.txt;s.style.animationDelay=d+'ms';setTimeout(()=>s.remove(),d+1300);
    if(!rm&&imp[f.id]==null&&['heal','shield','buff','debuff'].includes(f.cls))aura(P,f.cls,d)});
  /* 4. barres de vie : la vie glisse, une traînée claire suit */
  if(!rm)document.querySelectorAll('.tok[data-uid]').forEach(el=>{const id=el.dataset.uid,s=snap[id];if(!s)return;const r=el.querySelector('.ring'),to=+r.style.getPropertyValue('--p');
    const d=imp[id]!=null?imp[id]:(n[id]?(actor?220:0):0);
    if(s.p!==to){tA(id,'.ring',[{'--p':s.p},{'--p':to}],{duration:320,delay:d,fill:'backwards',easing:'ease-out'});if(to<s.p)tA(id,'.ring',[{'--lag':s.p},{'--lag':s.p,offset:.35},{'--lag':to}],{duration:900,delay:d,fill:'backwards',easing:'ease-in'})}
    if(!s.ko&&el.classList.contains('ko'))tA(id,'',[{opacity:1,filter:'none',transform:'none'},{opacity:1,filter:'brightness(2)',transform:'scale(1.06)',offset:.15},{opacity:.4,filter:'grayscale(1)',transform:'translateY(4px) rotate(-5deg)'}],{duration:700,delay:d+120,fill:'backwards'})});
  /* 5. fantômes des ennemis vaincus, puis les survivants glissent à leur nouvelle place */
  let koEnd=0;
  if(!rm)for(const id in snap){const s=snap[id];if(id[0]==="_"||!s||!s.clone)continue;const t=imp[id]!=null?imp[id]:last;const g=s.clone;
    g.classList.remove('tgt','cur');g.classList.add('kghost');g.querySelectorAll('.intent,.tpips').forEach(x=>x.remove());g.removeAttribute('data-uid');
    g.style.left=s.tr.x+'px';g.style.top=s.tr.y+'px';g.style.width=s.tr.w+'px';layer().appendChild(g);
    const gr=g.querySelector('.ring');gr&&gr.animate([{'--p':s.p},{'--p':0}],{duration:260,delay:t,fill:'both'});
    const col=getComputedStyle(g).getPropertyValue('--elc')||'#ffd27a',P=ctr(s.r);
    anim(g,[{transform:'none',filter:'none',opacity:1},{transform:'none',filter:'none',opacity:1,offset:.3},{transform:'scale(1.1)',filter:'brightness(2.4) saturate(0)',opacity:1,offset:.45},{transform:'scale(.6) translateY(-18px)',filter:'brightness(1.6) blur(4px) saturate(0)',opacity:0}],{duration:1000,delay:t});
    setTimeout(()=>{burst(P,null,14,{sp:1.5});const w=put('wisp',P.x,P.y);anim(w,[{transform:'translate(-50%,-50%) scale(.6)',opacity:0},{transform:'translate(-50%,-70%) scale(1)',opacity:.9,offset:.3},{transform:'translate(-50%,-220%) scale(.5)',opacity:0}],{duration:900})},t+420);
    ring(P,col.trim()||'#ffd27a',{delay:t+420,s:1.3,dur:520});koEnd=Math.max(koEnd,t+520)}
  if(!rm)document.querySelectorAll('.tok[data-uid]').forEach(el=>{const s=snap[el.dataset.uid];if(!s)return;const r=docRect(el),dx=s.tr.x-r.x,dy=s.tr.y-r.y;
    if(Math.abs(dx)>3||Math.abs(dy)>3)tA(el.dataset.uid,'',[{transform:`translate(${dx}px,${dy}px)`},{transform:'none'}],{duration:420,delay:koEnd,fill:'backwards',easing:'cubic-bezier(.2,.8,.2,1)'})});
  /* 6. entrée en combat */
  if(entering&&!rm){let i=0,j=0;document.querySelectorAll('.foes2 .tok').forEach(el=>tA(el.dataset.uid,'',[{transform:'translateY(-46px) scale(.7)',opacity:0},{transform:'translateY(4px) scale(1.04)',opacity:1,offset:.7},{transform:'none',opacity:1}],{duration:520,delay:120+90*i++,fill:'backwards',easing:'ease-out'}));
    document.querySelectorAll('.team2 .tok').forEach(el=>tA(el.dataset.uid,'',[{transform:'translateY(40px)',opacity:0},{transform:'none',opacity:1}],{duration:420,delay:60*j++,fill:'backwards',easing:'cubic-bezier(.2,.8,.2,1)'}));
    if(c.kind==='boss')banner('Gardien du donjon',c.enemies.find(e=>e.boss)?.name,'enc boss',150);else if(c.kind==='hard')banner('Combat difficile','Plus de monstres, meilleur butin','enc',150)}
  /* 7. changement de tour */
  if(c.cur!==lastCur){const u=unit(c.cur);lastCur=c.cur;if(u&&u.alive&&!rm){const d=entering?600:0;
    if(u.side==='e')tA(u.id,'.ring',[{transform:'scale(1)',filter:'none'},{transform:'scale(1.13) translateY(3px)',filter:'brightness(1.3) drop-shadow(0 0 10px #ff6a4a)',offset:.7},{transform:'scale(1.08) translateY(2px)',filter:'brightness(1.2) drop-shadow(0 0 8px #ff6a4a)'}],{duration:560,delay:d,fill:'forwards',easing:'ease-in'});
    else tA(u.id,'.ring',[{transform:'scale(1)'},{transform:'scale(1.14)',offset:.4},{transform:'scale(1)'}],{duration:460,delay:d,easing:'cubic-bezier(.3,1.6,.5,1)'})}}
  /* 8. bannières (victoire / défaite) */
  const now=performance.now();busyTill=Math.max(busyTill,now+Math.max(last,koEnd));
  q.filter(f=>f.k==='ban').forEach(b=>{const d=Math.max(0,busyTill-now)+100;banner(b.txt,b.sub,b.cls,rm?0:d);if(b.cls==='win'&&!rm)setTimeout(()=>{const P={x:innerWidth/2+scrollX,y:scrollY+innerHeight*.36};for(let i=0;i<3;i++)burst(P,null,12,{sp:2.6,delay:i*120})},d+120)})}
