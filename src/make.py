#!/usr/bin/env python3
"""Construit index.html (PWA) depuis src/ et art/portraits/.
Usage : python3 src/make.py [--out fichier_artefact.html]"""
import os,re,io,sys,json,base64,subprocess
from PIL import Image
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)));S=os.path.join(R,'src')
# 1. portraits peints -> paint.js
paint={}
d=os.path.join(R,'art','portraits')
for f in sorted(os.listdir(d)):
    if not f.endswith('.jpg'):continue
    im=Image.open(os.path.join(d,f)).convert('RGB')
    if max(im.size)>256:im=im.resize((256,256),Image.LANCZOS)
    b=io.BytesIO();im.save(b,'WEBP',quality=82,method=6)
    paint[f[:-4]]='data:image/webp;base64,'+base64.b64encode(b.getvalue()).decode()
pj='/* Portraits peints (générés, originaux) — produit par make.py */\nconst PAINT='+json.dumps(paint,ensure_ascii=False)+';\n'
pj+='for(const n in PAINT){if(n.startsWith("cls_"))continue;PORTRAIT[n]=`<img class="pimg" src="${PAINT[n]}" alt="" draggable="false">`}\n'
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
print('OK',len(paint),'portraits, cache v%d'%n)
