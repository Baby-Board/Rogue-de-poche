/* ================= Art: hand-drawn SVG icon set, class medallions, world scenes, ambient particles ================= */
const svg=(body,cls='',vb='0 0 24 24')=>`<svg class="ic ${cls}" viewBox="${vb}" aria-hidden="true" focusable="false">${body}</svg>`;
const ELC={t:'#d2ad72',f:'#f28a5a',e:'#6db8ef',a:'#8ed88a'};
const ELD={t:'#7a5a30',f:'#9c3a22',e:'#22608f',a:'#2f7a46'};

/* --- elements --- */
const EL_SVG={
  f:'<path d="M12 2.2c.9 3.9 5.6 6.3 5.6 11.5a5.6 5.6 0 0 1-11.2 0c0-2.8 1.3-4.6 2.8-5.9-.2 2.2.7 3.5 1.9 4.1C10.6 9.2 10.3 5.6 12 2.2z" fill="#f28a5a"/><path d="M12 11.6c.9 1.8 2.6 2.7 2.6 4.7a2.6 2.6 0 0 1-5.2 0c0-1.5 1-2.5 2.6-4.7z" fill="#ffd885"/>',
  e:'<path d="M12 2.4C9 7 5.8 10.3 5.8 14.2a6.2 6.2 0 0 0 12.4 0C18.2 10.3 15 7 12 2.4z" fill="#6db8ef"/><path d="M9.1 14.4a3.1 3.1 0 0 0 2.8 3.1" stroke="#e2f3ff" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
  t:'<path d="M1.8 20.2 8.6 8.4l3.4 5.3 2.7-4.1 7.5 10.6z" fill="#d2ad72"/><path d="M8.6 8.4l2.1 3.3-2.1-.9-1.8 1.7z" fill="#f4e2b8"/><path d="M14.7 9.6l1.6 2.3-1.6-.6-1.2 1z" fill="#f4e2b8"/>',
  a:'<path d="M2.5 9.2h11.3a3.1 3.1 0 1 0-3.1-3.1M2.5 13.4h15.2a3.1 3.1 0 1 1-3.1 3.1M2.5 17.6h6.4" stroke="#8ed88a" stroke-width="2.3" fill="none" stroke-linecap="round"/>',
};
const elIco=e=>svg(EL_SVG[e],'el el-'+e);

/* --- map nodes & UI --- */
const ICO={
  fight:'<path d="M4.5 3.5l10 10M19.5 3.5l-10 10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M6.8 14.6l2.6 2.6M17.2 14.6l-2.6 2.6M4.2 19.8l3.4-3.4M19.8 19.8l-3.4-3.4" stroke="#e5ae4c" stroke-width="2.4" stroke-linecap="round"/>',
  hard:'<path d="M12 3.2a7.2 7.2 0 0 0-7.2 7.2c0 2.6 1.4 4.4 3 5.3v2.6c0 .6.5 1.1 1.1 1.1h6.2c.6 0 1.1-.5 1.1-1.1v-2.6c1.6-.9 3-2.7 3-5.3A7.2 7.2 0 0 0 12 3.2z" fill="currentColor"/><circle cx="9.3" cy="10.8" r="1.9" fill="#2a1210"/><circle cx="14.7" cy="10.8" r="1.9" fill="#2a1210"/><path d="M11 14.6h2l-1-1.9z" fill="#2a1210"/><path d="M4 4.5 6.8 7M20 4.5 17.2 7" stroke="#ff7a5c" stroke-width="2" stroke-linecap="round"/>',
  boss:'<path d="M3 8.2l4.6 4.1L12 4.8l4.4 7.5L21 8.2 19 19H5z" fill="currentColor"/><path d="M5 19h14v2H5z" fill="#e5ae4c"/><circle cx="12" cy="13.8" r="1.6" fill="#c0392b"/><circle cx="7.6" cy="15" r="1" fill="#6db8ef"/><circle cx="16.4" cy="15" r="1" fill="#6db8ef"/>',
  taverne:'<path d="M5.2 8.2h10v10.6a2.2 2.2 0 0 1-2.2 2.2H7.4a2.2 2.2 0 0 1-2.2-2.2z" fill="currentColor"/><path d="M15.2 10.2h2.3a2 2 0 0 1 2 2v2.8a2 2 0 0 1-2 2h-2.3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M4.6 8.4c0-2.2 1.6-3.3 3.2-3.2.9-1.7 4.1-1.8 5.1 0 1.6 0 3 1.1 3 3.2z" fill="#f6ecd4"/><path d="M8 11v7M12 11v7" stroke="#00000033" stroke-width="1.4"/>',
  sanct:'<path d="M9.8 3h4.4l1.7 16H8.1z" fill="currentColor"/><path d="M6.5 19h11v2.2h-11z" fill="currentColor"/><circle cx="12" cy="9.5" r="1.8" fill="#7ee8cf"/><path d="M12 6.5v-1M9 9.5H8M16 9.5h-1" stroke="#7ee8cf" stroke-width="1.3" stroke-linecap="round"/>',
  portal:'<circle cx="12" cy="12" r="8.6" stroke="currentColor" stroke-width="2.4" fill="none"/><path d="M12 6.6a5.4 5.4 0 1 1-5 3.4M12 9.8a2.2 2.2 0 1 1-2 1.4" stroke="#b39bff" stroke-width="1.9" fill="none" stroke-linecap="round"/>',
  shop:'<path d="M8.4 5.8h7.2l-1.4 2.6c3 1.5 5 4.6 5 7.6 0 3-2.6 5-7.2 5S4.8 19 4.8 16c0-3 2-6.1 5-7.6z" fill="currentColor"/><path d="M8.4 5.8 9.6 3.4h4.8l1.2 2.4" fill="currentColor"/><circle cx="12" cy="15.2" r="2.9" fill="#ffcf5a"/><path d="M12 13.5v3.4" stroke="#8a5a10" stroke-width="1.3"/>',
  forge:'<path d="M2.8 9.4h12.6c.2 2 2.2 2.8 5.8 2.8v1.4c-2.2 0-3.6.7-4.2 2.1H8.2c-.5-1.5-2.2-2.6-5.4-2.6z" fill="currentColor"/><path d="M9 15.7h6.2l1.1 4.3H7.9z" fill="currentColor"/><path d="M13.6 2.6l3.8 3.8-1.6 1.6-3.8-3.8z" fill="#ffcf5a"/><path d="M15 5.2 9.5 10.7" stroke="#ffcf5a" stroke-width="1.6" stroke-linecap="round"/>',
  start:'<path d="M6.5 3v18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M7.5 4h11l-2.6 3.6 2.6 3.6h-11z" fill="#e5ae4c"/>',
  stats:'<path d="M4.5 20V11.5M10 20V4.5M15.5 20v-7.5M21 20v-11" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M2.5 21h19" stroke="#e5ae4c" stroke-width="1.6" stroke-linecap="round"/>',
  form:'<rect x="3" y="4" width="7.5" height="7" rx="2" fill="#e5ae4c"/><rect x="13.5" y="4" width="7.5" height="7" rx="2" fill="#e5ae4c"/><rect x="3" y="13.5" width="7.5" height="7" rx="2" fill="currentColor"/><rect x="13.5" y="13.5" width="7.5" height="7" rx="2" fill="currentColor" opacity=".45"/>',
  bag:'<path d="M5.6 8.4h12.8l1.5 11.4a1.6 1.6 0 0 1-1.6 1.8H5.7a1.6 1.6 0 0 1-1.6-1.8z" fill="currentColor"/><path d="M8.8 8.4V6.6a3.2 3.2 0 0 1 6.4 0v1.8" stroke="#e5ae4c" stroke-width="2" fill="none"/><path d="M8.5 13.5h7" stroke="#00000040" stroke-width="1.6" stroke-linecap="round"/>',
  paw:'<ellipse cx="12" cy="16" rx="4.6" ry="3.8" fill="currentColor"/><ellipse cx="6" cy="10.6" rx="1.9" ry="2.5" fill="currentColor"/><ellipse cx="18" cy="10.6" rx="1.9" ry="2.5" fill="currentColor"/><ellipse cx="9.3" cy="6.4" rx="1.9" ry="2.6" fill="#e5ae4c"/><ellipse cx="14.7" cy="6.4" rx="1.9" ry="2.6" fill="#e5ae4c"/>',
  trophy:'<path d="M7 3.5h10v5.2a5 5 0 0 1-10 0z" fill="#e5ae4c"/><path d="M7 5.5H4.2c0 3.2 1.4 4.6 3.4 4.8M17 5.5h2.8c0 3.2-1.4 4.6-3.4 4.8" stroke="#e5ae4c" stroke-width="1.8" fill="none"/><path d="M10.6 13.4h2.8v3.6h-2.8z" fill="currentColor"/><path d="M7.5 17h9v3.5h-9z" fill="currentColor"/>',
  relic:'<path d="M6 4h12l-1.2 5.2A4.9 4.9 0 0 1 12 13a4.9 4.9 0 0 1-4.8-3.8z" fill="#f2c96e"/><path d="M12 13v4.2M8.2 20.5h7.6l-1-3.3H9.2z" stroke="#f2c96e" stroke-width="1.6" fill="#c88a2c" stroke-linejoin="round"/><path d="M12 5.6l1 1.9 1.9 1-1.9 1-1 1.9-1-1.9-1.9-1 1.9-1z" fill="#fff6d8"/><path d="M6 4h12" stroke="#8a5a10" stroke-width="1.2"/>',
  gem:'<path d="M7 3.5h10l4 5.5-9 11.5L3 9z" fill="#7ee8cf"/><path d="M3 9h18M7 3.5 12 20.5 17 3.5M9.5 9 12 3.5 14.5 9" stroke="#0e3a33" stroke-width="1" fill="none" opacity=".55"/>',
  book:'<path d="M3 5.5c3-1.4 6-1.4 9 .6v14c-3-2-6-2-9-.6z" fill="currentColor"/><path d="M21 5.5c-3-1.4-6-1.4-9 .6v14c3-2 6-2 9-.6z" fill="#e5ae4c"/>',
  event:'<path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z" fill="#5a3a8a"/><path d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5H12z" fill="#fff" opacity=".12"/><path d="M9 9.2a3 3 0 1 1 4.4 2.6c-.9.5-1.4 1-1.4 2v.6" stroke="#ffe08a" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="12" cy="17.3" r="1.4" fill="#ffe08a"/>',
  scroll:'<path d="M6 4h11.5a2.5 2.5 0 0 1 0 5H17v9.5a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1 0-5h.5V6.5A2.5 2.5 0 0 1 6 4z" fill="currentColor"/><path d="M9 10h5M9 13h5" stroke="#00000045" stroke-width="1.4" stroke-linecap="round"/><circle cx="17.5" cy="6.5" r="1.4" fill="#e5ae4c"/>',
  potion:'<path d="M9.4 2.8h5.2v2h-.8v3.9c2.9 1.1 4.6 3.6 4.6 6.6A6.4 6.4 0 0 1 12 21.6a6.4 6.4 0 0 1-6.4-6.3c0-3 1.7-5.5 4.6-6.6V4.8h-.8z" fill="#e8f3ef" opacity=".25"/><path d="M6.4 14.2h11.2A5.6 5.6 0 0 1 12 20.8a5.6 5.6 0 0 1-5.6-6.6z" fill="#6fe08f"/><path d="M9.4 2.8h5.2v2H9.4z" fill="#c99a5a"/><circle cx="10" cy="16.4" r="1" fill="#e8ffe9"/>',
  coin:'<circle cx="12" cy="12" r="9" fill="#e5ae4c"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#8a5a10" stroke-width="1.2"/><path d="M12 7.4l1.3 3.2 3.4.2-2.6 2.2.9 3.4L12 14.6l-3 1.8.9-3.4-2.6-2.2 3.4-.2z" fill="#8a5a10"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>',
  home:'<path d="M3.5 11.2 12 4l8.5 7.2" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v10h4.5v-5.5h3V20H18V10" fill="currentColor"/>',
  close:'<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  star:'<path d="M12 2.8l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.6l-5.6 3.2 1.3-6.2L3 9.3l6.3-.7z" fill="currentColor"/>',
  lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.4" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" stroke-width="2.2" fill="none"/>',
  chest:'<path d="M3.5 10h17v9.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5z" fill="currentColor"/><path d="M3.5 10a8.5 5.5 0 0 1 17 0z" fill="#e5ae4c"/><rect x="10.3" y="9" width="3.4" height="4.6" rx="1" fill="#ffd885"/>',
  skull2:'<path d="M12 3a7.5 7.5 0 0 0-7.5 7.5c0 2.7 1.4 4.5 3.1 5.4V19c0 .7.5 1.2 1.2 1.2h6.4c.7 0 1.2-.5 1.2-1.2v-3.1c1.7-.9 3.1-2.7 3.1-5.4A7.5 7.5 0 0 0 12 3z" fill="currentColor"/><circle cx="9.2" cy="10.8" r="2" fill="#1a1110"/><circle cx="14.8" cy="10.8" r="2" fill="#1a1110"/>',
  scrollmsg:'<path d="M5 4h12a3 3 0 0 1 3 3v12a2 2 0 0 1-2 2H7a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1z" fill="currentColor"/><path d="M8 9h8M8 12.5h8M8 16h5" stroke="#00000045" stroke-width="1.5" stroke-linecap="round"/>',
  arme:'<path d="M18.8 3.2l2 2L9.6 16.4l-2-2z" fill="#e8eef0"/><path d="M5.6 13.6l4.8 4.8" stroke="#e5ae4c" stroke-width="2.4" stroke-linecap="round"/><path d="M6.3 17.7l-2.6 2.6" stroke="#8a5a2c" stroke-width="2.6" stroke-linecap="round"/>',
  coiffe:'<path d="M4 15.5c0-5.2 3.6-9.5 8-9.5s8 4.3 8 9.5z" fill="currentColor"/><path d="M2.5 15.5h19v2.6h-19z" fill="#e5ae4c"/><path d="M12 6v-2.5" stroke="#e5ae4c" stroke-width="2" stroke-linecap="round"/><path d="M8 11.5h8" stroke="#00000040" stroke-width="1.6"/>',
  cape:'<path d="M8 3.5h8l1.6 3.4L21 20.5c-3 .9-6 1-9 1s-6-.1-9-1L6.4 6.9z" fill="currentColor"/><path d="M8 3.5h8l-1.2 3.2H9.2z" fill="#e5ae4c"/><path d="M12 7v13.6" stroke="#00000035" stroke-width="1.4"/>',
  anneau:'<circle cx="12" cy="14.5" r="6.2" fill="none" stroke="#e5ae4c" stroke-width="2.6"/><path d="M9 4.5h6l1.6 2.4L12 10 7.4 6.9z" fill="#7ee8cf"/>',
};
const ico=(k,cls='')=>svg(ICO[k],cls);

/* --- class medallions --- */
const EMB={
  lame:'<path d="M18.6 3.4l2 2L9.4 16.6l-2-2z" fill="#fbf2dc"/><path d="M5.6 13.6l4.8 4.8" stroke="#ffd885" stroke-width="2.3" stroke-linecap="round"/><path d="M6.2 17.8l-2.4 2.4" stroke="#ffd885" stroke-width="2.6" stroke-linecap="round"/>',
  archere:'<path d="M6.2 3.2q14 2.6 14.6 14.6" stroke="#fbf2dc" stroke-width="2.3" fill="none" stroke-linecap="round"/><path d="M6.2 3.2l14.6 14.6" stroke="#fbf2dc" stroke-width=".9" opacity=".75"/><path d="M3.4 20.6 15.6 8.4" stroke="#ffd885" stroke-width="2" stroke-linecap="round"/><path d="M17.2 6.8l-4.6.7 3.9 3.9z" fill="#ffd885"/><path d="M3.4 20.6l1-3M3.4 20.6l3-1" stroke="#ffd885" stroke-width="1.4" stroke-linecap="round"/>',
  rempart:'<path d="M12 2.4l8.2 3.1v6.2c0 5.1-3.5 8.7-8.2 10.3-4.7-1.6-8.2-5.2-8.2-10.3V5.5z" fill="#fbf2dc"/><path d="M12 5.6v13.2M6.9 10.6h10.2" stroke="#9a6a24" stroke-width="2.2"/>',
  soigneuse:'<path d="M12 20.4s-7.8-4.7-7.8-10.3A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.8 2.5c0 5.6-7.8 10.3-7.8 10.3z" fill="#fbf2dc"/><path d="M12 9.6v7.2M8.4 13.2h7.2" stroke="#3f9a5a" stroke-width="2.2" stroke-linecap="round"/>',
  chrono:'<path d="M5.8 3h12.4M5.8 21h12.4" stroke="#ffd885" stroke-width="2.2" stroke-linecap="round"/><path d="M7.4 3.6h9.2c0 4.1-4.6 6.1-4.6 8.4s4.6 4.3 4.6 8.4H7.4c0-4.1 4.6-6.1 4.6-8.4S7.4 7.7 7.4 3.6z" fill="#fbf2dc"/><path d="M9.4 19.4h5.2L12 16.3z" fill="#e5ae4c"/><path d="M10 6.8h4l-2 2.4z" fill="#e5ae4c"/>',
  artificier:'<circle cx="11" cy="14.2" r="6.8" fill="#fbf2dc"/><path d="M15.4 9.2l2.6-2.6" stroke="#fbf2dc" stroke-width="2.6" stroke-linecap="round"/><path d="M19.4 5l1.6-1.6M19.8 7.4H22M17.4 4.2V2" stroke="#ffd885" stroke-width="1.7" stroke-linecap="round"/><circle cx="8.6" cy="12" r="1.6" fill="#fff"/>',
  assassin:'<path d="M15.8 2.8l1.6 1.6-7.8 9.8-2.2-2.2z" fill="#fbf2dc"/><path d="M5.6 12.4l6.2 6.2" stroke="#ffd885" stroke-width="2.2" stroke-linecap="round"/><path d="M6.8 17.2l-3.2 3.2" stroke="#ffd885" stroke-width="2.4" stroke-linecap="round"/><path d="M19.6 12.8a5.4 5.4 0 1 1-6.6 6.6 4.2 4.2 0 0 0 6.6-6.6z" fill="#fbf2dc" opacity=".85"/>',
  flambeur:'<g transform="rotate(14 12 12)"><rect x="4.4" y="4.4" width="15.2" height="15.2" rx="3.6" fill="#fbf2dc"/><circle cx="8.4" cy="8.4" r="1.5" fill="#7a2a1a"/><circle cx="15.6" cy="8.4" r="1.5" fill="#7a2a1a"/><circle cx="12" cy="12" r="1.5" fill="#7a2a1a"/><circle cx="8.4" cy="15.6" r="1.5" fill="#7a2a1a"/><circle cx="15.6" cy="15.6" r="1.5" fill="#7a2a1a"/></g>',
  lancier:'<path d="M12 22V7.6" stroke="#fbf2dc" stroke-width="2.3" stroke-linecap="round"/><path d="M12 1.8l3.1 6.2H8.9z" fill="#fbf2dc"/><path d="M6.6 5.6v3.2a5.4 5.4 0 0 0 10.8 0V5.6" stroke="#ffd885" stroke-width="1.9" fill="none" stroke-linecap="round"/>',
  traqueur:'<path d="M6.6 3.6c1.4 6.2.3 11.2-2.6 16.6M12 2.6c1.3 7 .2 12.4-2 18.8M17.4 3.6c1.3 6.2 1 11.2-1 16.6" stroke="#fbf2dc" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="19.5" cy="19.5" r="1.6" fill="#ffd885"/>',
  passeuse:'<ellipse cx="12" cy="12.4" rx="8.4" ry="9.6" fill="none" stroke="#fbf2dc" stroke-width="2.3"/><ellipse cx="12" cy="12.4" rx="4.4" ry="5.6" fill="none" stroke="#ffd885" stroke-width="1.8" stroke-dasharray="5 2.4"/><circle cx="12" cy="12.4" r="1.7" fill="#fbf2dc"/><path d="M19.6 3.2l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z" fill="#ffd885"/>',
};
function classMed(cls){const c=CLASSES[cls];const [a,b]=c.els.map(e=>ELD[e]);
  return`<svg class="med" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="cg-${cls}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><radialGradient id="cgl" cx=".32" cy=".26" r=".85"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><circle cx="24" cy="24" r="23" fill="url(#cg-${cls})"/><circle cx="24" cy="24" r="23" fill="url(#cgl)"/><circle cx="24" cy="24" r="20.6" fill="none" stroke="#000" stroke-opacity=".28"/><g transform="translate(9 9) scale(1.25)">${EMB[cls]}</g></svg>`}

/* --- world scenes --- */
function scene(w,cls=''){
  const S=[
`<defs><linearGradient id="sk0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f3355"/><stop offset=".5" stop-color="#c9805a"/><stop offset="1" stop-color="#f3c47c"/></linearGradient></defs>
<rect width="360" height="160" fill="url(#sk0)"/><circle cx="256" cy="92" r="30" fill="#ffe7ad" opacity=".9"/><circle cx="256" cy="92" r="46" fill="#ffe7ad" opacity=".14"/>
<g fill="#fff" opacity=".7"><circle cx="40" cy="22" r=".9"/><circle cx="96" cy="14" r=".7"/><circle cx="150" cy="30" r=".8"/><circle cx="318" cy="18" r=".7"/></g>
<path d="M0 108Q60 84 120 100T240 98 360 92V160H0z" fill="#5a7a4a"/><path d="M0 124Q80 104 170 120T360 114V160H0z" fill="#3c5a3e"/>
<g fill="#1f2f26"><path d="M80 114l6-36h7l6 36z"/><path d="M89.5 79.5 66 73l1-4 23.5 8z M89.5 79.5 96 56l4 1-7 23.5z M89.5 79.5 113 86l-1 4-23.5-8z M89.5 79.5 83 103l-4-1 7-23.5z"/><circle cx="89.5" cy="79.5" r="2.4"/></g>
<g fill="#24382b"><path d="M300 120c-6-14-2-28 8-32 10 4 14 18 8 32z"/><rect x="306" y="118" width="4" height="10"/></g>
<path d="M0 142Q90 126 180 138T360 134V160H0z" fill="#1c3024"/>`,
`<defs><linearGradient id="sk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2226"/><stop offset=".6" stop-color="#2f5e57"/><stop offset="1" stop-color="#5f8f78"/></linearGradient><linearGradient id="wt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a4d48"/><stop offset="1" stop-color="#0f2423"/></linearGradient></defs>
<rect width="360" height="160" fill="url(#sk1)"/><circle cx="92" cy="46" r="20" fill="#e6f2d6"/><circle cx="92" cy="46" r="34" fill="#e6f2d6" opacity=".12"/>
<path d="M0 104Q90 92 180 100T360 96V112H0z" fill="#1d3a36"/><rect y="110" width="360" height="50" fill="url(#wt1)"/>
<g stroke="#e6f2d6" stroke-opacity=".35" stroke-width="1.2"><path d="M80 120h24M86 128h12M78 136h30"/></g>
<g fill="#0e1f1d"><path d="M250 112c-2-26 4-46 10-58 2 12-2 30 4 58z"/><path d="M262 64l-14-10M258 80l16-8M256 92l-12-4" stroke="#0e1f1d" stroke-width="3"/></g>
<g stroke="#0d201d" stroke-width="2.2" stroke-linecap="round"><path d="M20 160c2-20 0-34-4-44M28 160c0-18 4-30 8-40M36 160c-2-14-6-24-10-32M318 160c2-22 0-34-6-46M328 160c0-16 4-28 10-36M338 160c-2-12-4-20-8-28"/></g>
<g fill="#cfe7da" opacity=".08"><ellipse cx="140" cy="106" rx="90" ry="8"/><ellipse cx="290" cy="114" rx="70" ry="6"/></g>`,
`<defs><linearGradient id="sk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c0b10"/><stop offset=".6" stop-color="#6b2420"/><stop offset="1" stop-color="#c2552e"/></linearGradient></defs>
<rect width="360" height="160" fill="url(#sk2)"/><path d="M180 34 120 130h120z" fill="#2a1414"/><path d="M168 46h24l-6 10h-12z" fill="#ff7a3c"/><path d="M174 46q6-22 22-30" stroke="#5a2a2a" stroke-width="10" fill="none" opacity=".55"/>
<path d="M172 56c-4 14-10 26-16 38M186 56c4 12 10 22 18 32" stroke="#ff7a3c" stroke-width="2.4" fill="none" opacity=".7"/>
<g fill="#150a0c"><path d="M20 160V96h12v-8h8v8h8v-14h10v14h8V80l10-10 10 10v80z"/><path d="M262 160V88h10v-10h8v10h10V66l12-12 12 12v22h10v-8h8v80z"/></g>
<g fill="#ff9a5a"><circle cx="40" cy="104" r="1.6"/><circle cx="78" cy="96" r="1.6"/><circle cx="296" cy="82" r="1.6"/><circle cx="314" cy="100" r="1.6"/></g>
<g fill="#ffb070" opacity=".75"><circle cx="150" cy="30" r="1.1"/><circle cx="210" cy="22" r="1.3"/><circle cx="232" cy="52" r=".9"/><circle cx="120" cy="60" r="1"/></g>
<path d="M0 146Q90 136 180 144T360 140V160H0z" fill="#0f0708"/>`,
`<defs><linearGradient id="sk3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1b36"/><stop offset=".65" stop-color="#3e6698"/><stop offset="1" stop-color="#a9c6e4"/></linearGradient></defs>
<rect width="360" height="160" fill="url(#sk3)"/><g fill="#fff"><circle cx="30" cy="16" r="1"/><circle cx="74" cy="34" r=".8"/><circle cx="130" cy="12" r="1.1"/><circle cx="210" cy="26" r=".8"/><circle cx="270" cy="10" r="1"/><circle cx="330" cy="30" r=".9"/></g>
<path d="M0 120 70 52l40 40 50-62 70 76 40-34 90 60V160H0z" fill="#c9dcef"/><path d="M70 52l-16 16 10-2 6 8 8-12zM160 30l-18 22 10-3 8 10 10-14zM270 72l-12 12 8-1 6 6 6-9z" fill="#fff"/>
<path d="M0 132 80 92l60 30 70-42 80 50 70-24V160H0z" fill="#6f8fb4"/>
<g fill="#183048"><path d="M24 160l10-30 10 30zM44 160l8-22 8 22zM300 160l10-32 10 32zM322 160l8-22 8 22z"/></g>
<path d="M0 148Q90 140 180 148T360 144V160H0z" fill="#e8f1fa"/>`,
`<defs><linearGradient id="sk4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0820"/><stop offset=".7" stop-color="#2d1d5c"/><stop offset="1" stop-color="#4f2f7c"/></linearGradient><radialGradient id="nb4" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d47cff" stop-opacity=".5"/><stop offset="1" stop-color="#d47cff" stop-opacity="0"/></radialGradient></defs>
<rect width="360" height="160" fill="url(#sk4)"/><ellipse cx="120" cy="60" rx="110" ry="40" fill="url(#nb4)"/><ellipse cx="270" cy="40" rx="80" ry="30" fill="url(#nb4)" opacity=".7"/>
<g fill="#fff"><circle cx="20" cy="20" r="1"/><circle cx="60" cy="90" r=".8"/><circle cx="104" cy="22" r="1.2"/><circle cx="160" cy="50" r=".7"/><circle cx="200" cy="96" r="1"/><circle cx="236" cy="18" r=".9"/><circle cx="300" cy="80" r="1.1"/><circle cx="340" cy="34" r=".8"/></g>
<circle cx="290" cy="58" r="16" fill="#8a6bd8"/><path d="M266 62q24-10 48-4" stroke="#d9c8ff" stroke-width="2" fill="none" opacity=".7"/>
<g fill="#d8b6ff" opacity=".8"><path d="M70 104c0-10 16-10 16 0z"/><path d="M72 104q1 10-2 16M78 104q0 12 2 18M84 104q2 8-1 14" stroke="#d8b6ff" stroke-width="1.4" fill="none"/></g>
<path d="M0 136Q60 120 130 134T260 128 360 132V160H0z" fill="#1a1236"/><path d="M0 150Q90 142 180 150T360 146V160H0z" fill="#0c0820"/>`];
  return`<svg class="scene ${cls}" viewBox="0 0 360 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${S[w]||S[0]}</svg>`}

/* --- ambient particles (fireflies, spores, embers, snow, stars) --- */
const AMB=[{c:'255,226,140',up:-.12,n:26},{c:'160,240,210',up:-.08,n:24},{c:'255,140,70',up:-.35,n:30},{c:'240,248,255',up:.35,n:36},{c:'210,180,255',up:-.05,n:30}];
let ambW=-1,ambP=[],ambRaf=0;
function ambient(w){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const cv=document.getElementById('amb');if(!cv)return;
  if(w===ambW&&ambRaf)return;ambW=w;const A=AMB[w]||AMB[0];
  const ctx=cv.getContext('2d');const fit=()=>{cv.width=innerWidth*devicePixelRatio;cv.height=innerHeight*devicePixelRatio};fit();addEventListener('resize',fit);
  ambP=Array.from({length:A.n},()=>({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.8,s:.3+Math.random()*.7,ph:Math.random()*6.28}));
  cancelAnimationFrame(ambRaf);let last=performance.now();
  const step=t=>{const dt=Math.min(50,t-last)/16;last=t;if(!document.hidden){ctx.clearRect(0,0,cv.width,cv.height);
    for(const p of ambP){p.ph+=.02*dt;p.y+=A.up*p.s*dt/innerHeight*3;p.x+=Math.sin(p.ph)*.0004*dt;if(p.y<-.02)p.y=1.02;if(p.y>1.02)p.y=-.02;
      const a=.25+.55*(.5+.5*Math.sin(p.ph*1.7));const X=p.x*cv.width,Y=p.y*cv.height,r=p.r*devicePixelRatio;
      const g=ctx.createRadialGradient(X,Y,0,X,Y,r*5);g.addColorStop(0,`rgba(${A.c},${a})`);g.addColorStop(1,`rgba(${A.c},0)`);ctx.fillStyle=g;ctx.beginPath();ctx.arc(X,Y,r*5,0,6.283);ctx.fill()}}
    ambRaf=requestAnimationFrame(step)};
  ambRaf=requestAnimationFrame(step)}

/* ---------- Item icons: shape from the item base, palette + motif from its set ---------- */
const SETPAL={
 '0_0':['#c8661e','#4a6b2a','pumpkin'],'0_1':['#7d7f86','#efe3c8','tusk'],'0_2':['#3d86b8','#9fe0ff','drop'],'0_3':['#e9b23a','#5b3a8a','star'],'0_4':['#3a3f52','#8fe0b8','feather'],'0_5':['#9b2c1f','#e2b257','skull'],
 '1_0':['#2f6b5a','#a3d9a5','wave'],'1_1':['#5a4a2a','#8fbf5a','leaf'],'1_2':['#4a2a5a','#ff8a3a','flame'],'1_3':['#2a4a6a','#d9c27a','crown'],'1_4':['#d8e4ea','#2a3a4a','feather'],'1_5':['#3f7a3a','#e8d36a','drop'],
 '2_0':['#5a6068','#e2a050','eye'],'2_1':['#3a2a24','#ff6a2a','flame'],'2_2':['#2a3a5a','#7fe0ff','skull'],'2_3':['#3a2050','#c08aff','eye'],'2_4':['#5a5a3a','#e8d36a','crown'],'2_5':['#6a1f1a','#ffb040','flame'],
 '3_0':['#7a5a3a','#f0e6d0','tusk'],'3_1':['#2a5a7a','#cfefff','wave'],'3_2':['#c8d4de','#3a6aa0','crown'],'3_3':['#3a8ab0','#e0f6ff','star'],'3_4':['#4a3a6a','#9fe0ff','moon'],'3_5':['#9ab4c8','#ffffff','star'],
 '4_0':['#24305a','#f0e6b0','moon'],'4_1':['#c8504a','#ffd0a0','leaf'],'4_2':['#3a2a5a','#6ad0c0','wave'],'4_3':['#1f6a7a','#e2b257','crown'],'4_4':['#2a2a4a','#ffe08a','star'],'4_5':['#1a1430','#b080ff','eye'],
 vag:['#7a6a52','#c9b48a','']};
const MOTIF={
 pumpkin:(c)=>`<ellipse cx="0" cy="1" rx="5" ry="4.2" fill="#f08a2a"/><path d="M-2.4-2.6v7M2.4-2.6v7" stroke="#a04a10" stroke-width=".9"/><path d="M0-3.2v-2" stroke="#4a6b2a" stroke-width="1.4"/>`,
 tusk:(c)=>`<path d="M-4 3Q-5-4 1-5 -2-1 -1 4z" fill="#fff4dc" stroke="#6b5a3a" stroke-width=".6"/><path d="M4 3Q5-4-1-5 2-1 1 4z" fill="#fff4dc" stroke="#6b5a3a" stroke-width=".6"/>`,
 drop:(c)=>`<path d="M0-5.5C3-1.5 4 .6 4 2.2A4 4 0 0 1-4 2.2C-4 .6-3-1.5 0-5.5z" fill="${c}"/><circle cx="-1.4" cy="1.4" r="1" fill="#fff" opacity=".8"/>`,
 star:(c)=>`<path d="M0-5.5 1.6-1.7 5.5-1.5 2.5 1 3.4 5 0 2.8-3.4 5-2.5 1-5.5-1.5-1.6-1.7z" fill="${c}"/>`,
 feather:(c)=>`<path d="M-4 5Q-3-4 4-5Q3 2-4 5z" fill="${c}"/><path d="M-4 5 3-4" stroke="#1a1a24" stroke-width=".7"/>`,
 skull:(c)=>`<path d="M-4.2 0a4.2 4.2 0 1 1 8.4 0v2.4H-4.2z" fill="#efe6d2"/><circle cx="-1.6" cy="0" r="1.2" fill="#2a1a10"/><circle cx="1.6" cy="0" r="1.2" fill="#2a1a10"/><path d="M-2 2.4v2.2h4V2.4" fill="#efe6d2"/>`,
 wave:(c)=>`<path d="M-5.5 1q1.4-3 2.8 0t2.8 0 2.8 0 2.8 0M-5.5 4q1.4-3 2.8 0t2.8 0 2.8 0 2.8 0" stroke="${c}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`,
 leaf:(c)=>`<path d="M-4.5 4.5Q-5-4 4.5-4.5Q4 4-4.5 4.5z" fill="${c}"/><path d="M-4.5 4.5 3-3" stroke="#1a2a10" stroke-width=".7"/>`,
 flame:(c)=>`<path d="M0-6C3-2 4.5 0 4.5 2.2A4.5 4.5 0 0 1-4.5 2.2C-4.5 0-2.5-1.2-1.6-3c.4 1.6 1.2 2 1.6 2.2C.4-1.4-.4-3.4 0-6z" fill="${c}"/><path d="M0 0c1.6 1.6 2 2.6 2 3.4A2 2 0 0 1-2 3.4C-2 2.4-1 1.6 0 0z" fill="#fff2b0"/>`,
 crown:(c)=>`<path d="M-5 3.5-5.5-3.5-2.5-.5 0-4.5 2.5-.5 5.5-3.5 5 3.5z" fill="${c}" stroke="#4a3208" stroke-width=".6"/>`,
 eye:(c)=>`<path d="M-5.5 0Q0-5 5.5 0Q0 5-5.5 0z" fill="#f2ead8"/><circle r="2.4" fill="${c}"/><circle r="1" fill="#120c1c"/>`,
 moon:(c)=>`<path d="M1.5-5A5 5 0 1 0 1.5 5 4 4 0 1 1 1.5-5z" fill="${c}"/>`};
const ISH={ /* base shapes on a 48 grid; P=main colour, S=accent, m=metal; returns [svg, motif anchor x,y,scale] */
 'Épée':(P,S)=>[`<path d="M24 4 28 9 28 32 20 32 20 9z" fill="#dfe6ea"/><path d="M24 4 28 9 28 32 24 32z" fill="#aeb9bf"/><path d="M14 31h20v4H14z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M22 35h4v8h-4z" fill="#5a3a22"/><circle cx="24" cy="45" r="2.6" fill="${S}"/>`,24,20,1],
 'Bâton':(P,S)=>[`<path d="M23 12h3l1 34h-5z" fill="#6b4524"/><path d="M23 12h1.5l.5 34h-2z" fill="#8a5c34"/><circle cx="24.5" cy="10" r="8" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M16 14q8-12 17 0" stroke="${S}" stroke-width="1.6" fill="none"/>`,24.5,10,1.1],
 'Arc':(P,S)=>[`<path d="M14 4q22 20 0 40" stroke="${P}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M14 4q22 20 0 40" stroke="#1a1410" stroke-width="1" fill="none" opacity=".4"/><path d="M14 4v40" stroke="#efe6d2" stroke-width="1"/><path d="M8 24h28" stroke="#b48a5a" stroke-width="1.8"/><path d="M36 24l-5-3v6z" fill="#dfe6ea"/>`,24,24,.95],
 'Dague':(P,S)=>[`<path d="M24 8 27 13 26.5 30h-5L21 13z" fill="#dfe6ea"/><path d="M24 8 27 13 26.5 30H24z" fill="#aeb9bf"/><path d="M16 29q8 4 16 0v4q-8 3-16 0z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M22 33h4v8h-4z" fill="#3a2414"/><path d="M24 44l3-3h-6z" fill="${S}"/>`,24,31,.8],
 'Marteau':(P,S)=>[`<path d="M22.5 18h3v28h-3z" fill="#6b4524"/><rect x="10" y="7" width="28" height="14" rx="2.5" fill="${P}" stroke="#1a1410" stroke-width="1"/><rect x="10" y="7" width="28" height="5" rx="2.5" fill="#fff" opacity=".18"/><path d="M10 10h-2v8h2M38 10h2v8h-2" fill="${S}"/>`,24,14,.95],
 'Hache':(P,S)=>[`<path d="M23 8h3v38h-3z" fill="#6b4524"/><path d="M26 8q16 2 14 18q-6-4-14-3z" fill="#dfe6ea" stroke="#1a1410" stroke-width="1"/><path d="M26 10q12 2 12 12" stroke="#fff" stroke-width="1.2" fill="none" opacity=".6"/><path d="M19 12h7v8h-7z" fill="${P}"/><path d="M23 40h3v4h-3z" fill="${S}"/>`,22.5,16,.6],
 'Baguette':(P,S)=>[`<path d="M10 42 32 14" stroke="#4a2c18" stroke-width="3.4" stroke-linecap="round"/><path d="M10 42 32 14" stroke="${P}" stroke-width="1.4" stroke-linecap="round"/><circle cx="34" cy="11" r="5" fill="${S}"/><path d="M34 2v4M34 16v4M25 11h4M39 11h4" stroke="${S}" stroke-width="1.2" opacity=".7"/>`,34,11,.75],
 'Pelle':(P,S)=>[`<path d="M23 4h3v24h-3z" fill="#6b4524"/><path d="M19 2h11v4H19z" fill="${P}"/><path d="M17 28h15l-2 14q-5.5 5-11 0z" fill="#aeb9bf" stroke="#1a1410" stroke-width="1"/><path d="M17 28h15v3H17z" fill="${P}"/>`,24.5,37,.9],
 'Coiffe':(P,S)=>[`<path d="M8 32q0-22 16-22t16 22z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M8 32q0-22 16-22 5 0 9 2-18 2-20 20z" fill="#fff" opacity=".15"/><path d="M6 30h36v6H6z" fill="${S}" stroke="#1a1410" stroke-width="1"/><path d="M24 10l3-5" stroke="${S}" stroke-width="2"/>`,24,22,1],
 'Chapeau':(P,S)=>[`<path d="M4 34q20-8 40 0q-20 6-40 0z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M14 31 18 8q6-3 12 0l4 23z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M15 26h18v4H15z" fill="${S}"/>`,24,18,.95],
 'Heaume':(P,S)=>[`<path d="M10 40V20q0-14 14-14t14 14v20z" fill="#b9c3c8" stroke="#1a1410" stroke-width="1"/><path d="M10 40V20q0-14 14-14 4 0 7 1Q14 9 14 40z" fill="#fff" opacity=".25"/><path d="M14 24h20v4H14zM22 28h4v10h-4z" fill="#1a1a20"/><path d="M24 6q-2-4 2-6 8 6 0 12z" fill="${P}"/><path d="M10 34h28v6H10z" fill="${P}"/>`,24,37,.7],
 'Capuche':(P,S)=>[`<path d="M24 4q18 4 16 38H8Q6 8 24 4z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M24 14q10 2 9 22H15q-1-20 9-22z" fill="#140c08"/><path d="M8 42h32" stroke="${S}" stroke-width="3"/><circle cx="20" cy="26" r="1.4" fill="${S}"/><circle cx="28" cy="26" r="1.4" fill="${S}"/>`,24,8,.7],
 'Cape':(P,S)=>[`<path d="M14 8h20l8 36q-18 4-36 0z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M14 8h6l-4 37q-5-.4-10-1z" fill="#fff" opacity=".14"/><path d="M14 8h20v5H14z" fill="${S}"/><circle cx="24" cy="10.5" r="2.6" fill="#e2b257" stroke="#4a3208" stroke-width=".6"/>`,24,28,1.05],
 'Manteau':(P,S)=>[`<path d="M15 6h18l9 10-4 28H10L6 16z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M24 10v34" stroke="#1a1410" stroke-width="1" opacity=".6"/><path d="M15 6l9 8 9-8" fill="${S}" stroke="#1a1410" stroke-width="1"/><circle cx="24" cy="22" r="1.4" fill="#e2b257"/><circle cx="24" cy="30" r="1.4" fill="#e2b257"/>`,15,30,.8],
 'Pèlerine':(P,S)=>[`<path d="M18 6h12q14 6 16 22-22 10-44 0Q4 12 18 6z" fill="${P}" stroke="#1a1410" stroke-width="1"/><path d="M18 6h12l-2 6h-8z" fill="${S}"/><path d="M4 28q20 9 40 0" stroke="${S}" stroke-width="2.4" fill="none"/>`,24,19,1],
 'Anneau':(P,S)=>[`<circle cx="24" cy="28" r="13" fill="none" stroke="${P}" stroke-width="5"/><circle cx="24" cy="28" r="13" fill="none" stroke="#fff" stroke-width="1" opacity=".3"/><path d="M18 12h12l-6 7z" fill="${S}" stroke="#1a1410" stroke-width="1"/>`,24,28,1],
 'Bague':(P,S)=>[`<circle cx="24" cy="30" r="12" fill="none" stroke="#e2b257" stroke-width="4"/><circle cx="24" cy="13" r="8" fill="${P}" stroke="#4a3208" stroke-width="1.4"/><circle cx="21.5" cy="10.5" r="2.4" fill="#fff" opacity=".55"/>`,24,32,.75],
 'Chevalière':(P,S)=>[`<circle cx="24" cy="30" r="12" fill="none" stroke="#b9c3c8" stroke-width="4.5"/><rect x="14" y="8" width="20" height="14" rx="3" fill="${P}" stroke="#1a1410" stroke-width="1"/>`,24,15,.95]};
function itemBase(it){const L=it.slot==='arme'?WBASE:(IBASE[it.slot]||[]);return L.find(b=>it.name.startsWith(b+' '))||L[0]}
function itemSvg(it){if(ITEMICON[it.set+'|'+it.slot])return ITEMICON[it.set+'|'+it.slot].replace('<svg ','<svg class="iic" aria-hidden="true" ');const pal=SETPAL[it.set]||SETPAL.vag;const f=ISH[itemBase(it)];if(!f)return ico(it.slot);const [body,x,y,s]=f(pal[0],pal[1]);
  const mo=pal[2]&&MOTIF[pal[2]]?`<g transform="translate(${x} ${y}) scale(${s})">${MOTIF[pal[2]](pal[1])}</g>`:'';
  return`<svg class="iic" viewBox="0 0 48 48" aria-hidden="true" focusable="false">${body}${mo}</svg>`}
