#!/usr/bin/env python3
"""Construit index.html (PWA) depuis src/ et art/portraits/.
Usage : python3 src/make.py [--out fichier_artefact.html]"""
import os,re,io,sys,json,base64,subprocess
from PIL import Image
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)));S=os.path.join(R,'src')
# 1. portraits peints -> paint.js
paint={}
# recadrage des héros : carré centré sur le visage (coordonnées sur 256 px)
HCROP={'cls_archere':(23,5,193,175),'cls_artificier':(27,5,197,175),'cls_assassin':(40,5,210,175),'cls_chrono':(43,5,213,175),
 'cls_flambeur':(35,10,205,180),'cls_lame':(27,5,197,175),'cls_lancier':(25,5,195,175),
 'cls_rempart':(43,0,213,170),'cls_soigneuse':(27,0,197,170)}
d=os.path.join(R,'art','portraits')
for f in sorted(os.listdir(d)):
    if not f.endswith('.jpg'):continue
    im=Image.open(os.path.join(d,f)).convert('RGB')
    if max(im.size)>256:im=im.resize((256,256),Image.LANCZOS)
    k=f[:-4]
    if k in HCROP:im=im.crop(HCROP[k])
    b=io.BytesIO();im.save(b,'WEBP',quality=82,method=6)
    paint[f[:-4]]='data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
ban={}
bd=os.path.join(R,'art','banners')
if os.path.isdir(bd):
    for f in sorted(os.listdir(bd)):
        if not f.lower().endswith(('.jpg','.png','.webp')):continue
        im=Image.open(os.path.join(bd,f)).convert('RGB')
        W=960;H=round(W*9/16) if f.startswith('monde') else round(W*4/9)
        r=max(W/im.width,H/im.height);im=im.resize((round(im.width*r),round(im.height*r)),Image.LANCZOS)
        x=(im.width-W)//2;y=(im.height-H)//2;im=im.crop((x,y,x+W,y+H))
        b=io.BytesIO();im.save(b,'WEBP',quality=78,method=6)
        ban[os.path.splitext(f)[0]]='data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
ico={}
idir=os.path.join(R,'art','icons')
if os.path.isdir(idir):
    for f in sorted(os.listdir(idir)):
        if not f.endswith('.jpg'):continue
        im=Image.open(os.path.join(idir,f)).convert('RGB').resize((160,160),Image.LANCZOS)
        b=io.BytesIO();im.save(b,'WEBP',quality=80,method=6)
        ico[f[:-4]]='data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
pj='/* Portraits peints (générés, originaux) — produit par make.py */\nconst PAINT='+json.dumps(paint,ensure_ascii=False)+';\nconst PICO='+json.dumps(ico,ensure_ascii=False)+';\nconst BAN='+json.dumps(ban,ensure_ascii=False)+';\n'
pj+='for(const n in PAINT){if(n.startsWith("cls_"))continue;PORTRAIT[n]=`<img class="pimg" src="${PAINT[n]}" alt="" draggable="false">`}\n'
pj+='for(const k in PICO){const h=`<img class="icoimg" src="${PICO[k]}" alt="" draggable="false">`;if(k.startsWith("tal_"))TALART[k.slice(4)]=h;else if(k.startsWith("rel_"))RELART[k.slice(4)]=h}\n'
pj+='{const _cm=classMed;classMed=function(c){const k=PAINT["cls_"+c];return k?`<span class="pmed"><img class="pimg" src="${k}" alt="" draggable="false"></span>`:_cm(c)}}\n'
open(os.path.join(S,'paint.js'),'w',encoding='utf8').write(pj)
# 2. assemblage
order='data.js art.js portraits.js itemicons.js art2.js art3.js paint.js logic.js views.js juice.js events.js sheets.js actions.js'.split()
js=''.join(open(os.path.join(S,f),encoding='utf8').read() for f in order)
open('/tmp/rdp-check.js','w',encoding='utf8').write(js)
subprocess.run(['node','--check','/tmp/rdp-check.js'],check=True)
html=open(os.path.join(S,'head.html'),encoding='utf8').read()+'<script>'+js+'</script>'
pre='<!doctype html>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
head='<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#0b1a19"><link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="apple-180.png"><meta name="mobile-web-app-capable" content="yes">'
sw='<script>if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))</script>'
open(os.path.join(R,'index.html'),'w',encoding='utf8').write(pre+html.replace('</title>','</title>'+head,1)+sw)
if '--out' in sys.argv:open(sys.argv[sys.argv.index('--out')+1],'w',encoding='utf8').write(html)
p=os.path.join(R,'sw.js');t=open(p).read();n=int(re.search(r"rdp-v(\d+)",t).group(1))+1;open(p,'w').write(re.sub(r"rdp-v\d+","rdp-v%d"%n,t))
print('OK',len(paint),'portraits,',len(ban),'bannières,',len(ico),'icônes, cache v%d'%n)
