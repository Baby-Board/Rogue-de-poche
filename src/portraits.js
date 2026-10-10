/* Painted bestiary portraits (keyed by base monster name). */
const PORTRAIT={};
Object.assign(PORTRAIT,{
 "Sanglier épineux": `<svg viewBox="0 0 100 100">
<path d="M14 94c2-26 14-44 36-46s34 20 36 46z" fill="#3b2418"/>
<path d="M24 46 8 26l18 4-4-18 14 12 4-18 10 16 10-16 4 18 14-12-4 18 18-4-16 20z" fill="#d8b070" stroke="#2a160d" stroke-width="1.4" stroke-linejoin="round"/>
<path d="M22 52 14 26 34 40zM78 52l8-26-20 14z" fill="#4b2c1c" stroke="#e2a070" stroke-width="1.2"/>
<path d="M50 32c-20 0-30 14-30 30 0 14 12 26 30 26s30-12 30-26c0-16-10-30-30-30z" fill="#5e3a26"/>
<path d="M50 32c-20 0-30 14-30 30 0 4 1 8 3 11 2-18 12-32 27-32s25 14 27 32c2-3 3-7 3-11 0-16-10-30-30-30z" fill="#7a4e32"/>
<path d="M28 36q22-14 44 0l-6 6q-16-8-32 0z" fill="#2a160d"/>
<ellipse cx="50" cy="72" rx="15" ry="11" fill="#c98b6a"/><ellipse cx="44" cy="72" rx="2.6" ry="3.6" fill="#3a1d10"/><ellipse cx="56" cy="72" rx="2.6" ry="3.6" fill="#3a1d10"/>
<path d="M34 78q-8-2-10-12 6 6 12 6zM66 78q8-2 10-12-6 6-12 6z" fill="#fff4dc"/>
<circle cx="39" cy="56" r="4.2" fill="#ffcf5a"/><circle cx="61" cy="56" r="4.2" fill="#ffcf5a"/><circle cx="39.6" cy="56" r="1.8" fill="#1a0a04"/><circle cx="61.6" cy="56" r="1.8" fill="#1a0a04"/>
<path d="M31 49l13 4M69 49l-13 4" stroke="#1a0a04" stroke-width="2.6" stroke-linecap="round"/>
<path d="M22 62c0-16 12-28 28-29" stroke="#ffcf9a" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Marcassin": `<svg viewBox="0 0 100 100">
<path d="M8 50h12M5 62h13M8 74h10" stroke="#f0d8a8" stroke-width="2.2" stroke-linecap="round" opacity=".55"/>
<path d="M20 96c2-20 14-32 30-32s28 12 30 32z" fill="#5a3a22"/>
<path d="M28 46 22 24 42 36zM72 46l6-22-20 12z" fill="#8a5e38" stroke="#2a160d" stroke-width="1.4"/>
<ellipse cx="50" cy="58" rx="28" ry="26" fill="#8a5a34"/>
<path d="M24 62c0-18 12-30 26-30 10 0 18 5 22 12-22-6-42 4-48 18z" fill="#a8743f"/>
<path d="M40 35q-4 8 0 16M50 33v18M60 35q4 8 0 16" stroke="#f3dcae" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<ellipse cx="50" cy="72" rx="11" ry="8" fill="#e6a48a"/><ellipse cx="46" cy="72" rx="2" ry="2.8" fill="#3a1d10"/><ellipse cx="54" cy="72" rx="2" ry="2.8" fill="#3a1d10"/>
<circle cx="37" cy="58" r="5.4" fill="#1a0a04"/><circle cx="63" cy="58" r="5.4" fill="#1a0a04"/><circle cx="35.6" cy="56.4" r="1.9" fill="#fff"/><circle cx="61.6" cy="56.4" r="1.9" fill="#fff"/>
<path d="M45 82q5 3 10 0" stroke="#2a160d" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M23 60c0-14 10-26 26-27" stroke="#ffd9a0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Champignon sauteur": `<svg viewBox="0 0 100 100">
<path d="M28 96l6-8M72 96l-6-8M40 98l2-6M60 98l-2-6" stroke="#9fe0d0" stroke-width="2" stroke-linecap="round" opacity=".6"/>
<path d="M36 62h28l2 22c-4 4-28 4-32 0z" fill="#d6e4d8"/><path d="M36 62h7l-1 24c-4 0-7-1-8-2z" fill="#f4fff4"/>
<path d="M38 84l-8 6h10zM62 84l8 6H60z" fill="#d6e4d8" stroke="#123033" stroke-width="1.4"/>
<path d="M10 60c0-26 18-44 40-44s40 18 40 44c-10 6-26 8-40 8s-30-2-40-8z" fill="#1f6f86"/>
<path d="M10 60c0-26 18-44 40-44 10 0 19 3 26 9-30-6-56 8-60 35z" fill="#3fa3b8"/>
<circle cx="30" cy="40" r="6" fill="#b8f08a"/><circle cx="58" cy="28" r="4.5" fill="#b8f08a"/><circle cx="72" cy="46" r="5.5" fill="#b8f08a"/><circle cx="46" cy="50" r="3.5" fill="#b8f08a"/>
<path d="M24 64q2 8-1 10-3-2 1-10zM74 65q2 7-1 9-3-2 1-9z" fill="#9be05a"/>
<path d="M39 70l8 3M61 70l-8 3" stroke="#123033" stroke-width="2.2" stroke-linecap="round"/>
<circle cx="43" cy="76" r="3.2" fill="#123033"/><circle cx="57" cy="76" r="3.2" fill="#123033"/><circle cx="42" cy="75" r="1" fill="#fff"/><circle cx="56" cy="75" r="1" fill="#fff"/>
<path d="M45 83q5-3 10 0" stroke="#123033" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M12 60c10 6 26 8 38 8" stroke="#bfe6ff" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,

 "Gelée verte": `<svg viewBox="0 0 100 100">
<path d="M14 90c0-30 14-60 36-60s36 30 36 60c-8 4-22 6-36 6s-28-2-36-6z" fill="#249a86" stroke="#0f3a33" stroke-width="1.8"/>
<path d="M20 84c0-26 12-48 30-48 8 0 14 3 19 9-26-4-44 14-49 39z" fill="#56cdb0"/>
<ellipse cx="34" cy="48" rx="4.5" ry="8" fill="#e8fff6" opacity=".85" transform="rotate(30 34 48)"/>
<circle cx="70" cy="82" r="3" fill="#e8fff6" opacity=".4"/><circle cx="26" cy="78" r="2" fill="#e8fff6" opacity=".4"/>
<path d="M65 66h10M70 61v10" stroke="#eafff4" stroke-width="3.2" stroke-linecap="round" opacity=".75"/>
<ellipse cx="41" cy="62" rx="4.4" ry="5.6" fill="#0f2a28"/><ellipse cx="59" cy="62" rx="4.4" ry="5.6" fill="#0f2a28"/><circle cx="39.6" cy="60" r="1.7" fill="#fff"/><circle cx="57.6" cy="60" r="1.7" fill="#fff"/>
<path d="M44 73q6 5 12 0" stroke="#0f2a28" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="34" cy="70" rx="3.4" ry="2" fill="#ff9aa8" opacity=".5"/><ellipse cx="66" cy="70" rx="3.4" ry="2" fill="#ff9aa8" opacity=".5"/>
<path d="M16 86c0-28 14-54 34-55" stroke="#c8fff0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Rat des greniers": `<svg viewBox="0 0 100 100">
<path d="M16 98c4-22 16-32 34-32s30 10 34 32z" fill="#4e4b44"/>
<circle cx="25" cy="32" r="15" fill="#6e6a60" stroke="#222019" stroke-width="1.4"/><circle cx="25" cy="33" r="9" fill="#e6a2a2"/>
<circle cx="75" cy="32" r="15" fill="#6e6a60" stroke="#222019" stroke-width="1.4"/><circle cx="75" cy="33" r="9" fill="#e6a2a2"/>
<path d="M50 30c-18 0-26 14-24 28 2 12 14 22 24 34 10-12 22-22 24-34 2-14-6-28-24-28z" fill="#86817a"/>
<path d="M50 30c-18 0-26 14-24 28 1 6 4 11 8 16-2-22 8-36 26-40-3-3-6-4-10-4z" fill="#a7a298"/>
<path d="M36 44l9 4M64 44l-9 4" stroke="#222019" stroke-width="2.2" stroke-linecap="round"/>
<circle cx="40" cy="53" r="4" fill="#1a1612"/><circle cx="60" cy="53" r="4" fill="#1a1612"/><circle cx="39" cy="51.8" r="1.4" fill="#fff"/><circle cx="59" cy="51.8" r="1.4" fill="#fff"/>
<path d="M44 80 20 74M44 83 22 86M56 80l24-6M56 83l22 3" stroke="#eef3d8" stroke-width="1" opacity=".8"/>
<path d="M47.5 86h5v5h-5z" fill="#fff4dc" stroke="#222019" stroke-width=".8"/>
<ellipse cx="50" cy="85" rx="4.2" ry="3" fill="#e88a9a"/>
<path d="M28 56c0-14 8-24 22-25" stroke="#eaf7b8" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Frelon des haies": `<svg viewBox="0 0 100 100">
<path d="M22 34c-14-14-2-26 18-12z" fill="#e8fbe0" opacity=".7"/><path d="M78 34c14-14 2-26-18-12z" fill="#e8fbe0" opacity=".7"/>
<ellipse cx="50" cy="70" rx="22" ry="20" fill="#f2c13a"/><path d="M30 64h40M29 74h42M33 84h34" stroke="#2a1a06" stroke-width="5"/>
<path d="M50 90l-3 8h6z" fill="#2a1a06"/>
<path d="M6 96c4-14 14-18 22-12-4 6-12 12-22 12zM94 96c-4-14-14-18-22-12 4 6 12 12 22 12z" fill="#5d8a3a"/><path d="M14 92q6-4 12-8M86 92q-6-4-12-8" stroke="#2e4a1c" stroke-width="1.2"/>
<circle cx="50" cy="42" r="17" fill="#f2c13a"/><path d="M34 38c2-10 8-14 16-14" stroke="#fff3b0" stroke-width="1.6" fill="none" opacity=".6"/>
<circle cx="42" cy="40" r="6" fill="#2a1a06"/><circle cx="58" cy="40" r="6" fill="#2a1a06"/><circle cx="40.5" cy="38.5" r="1.8" fill="#fff"/><circle cx="56.5" cy="38.5" r="1.8" fill="#fff"/>
<path d="M35 31l10 4M65 31l-10 4" stroke="#2a1a06" stroke-width="2.4" stroke-linecap="round"/>
<path d="M42 24l-6-12M58 24l6-12" stroke="#2a1a06" stroke-width="2.4" stroke-linecap="round"/><path d="M44 52l6 4 6-4" stroke="#2a1a06" stroke-width="2" fill="none"/></svg>`,

 "Renard chapardeur": `<svg viewBox="0 0 100 100">
<path d="M14 98c4-20 16-30 36-30s32 10 36 30z" fill="#5f7a4a"/><path d="M40 70l10 14 10-14" fill="#4a6038"/>
<path d="M22 52 18 10 46 34zM78 52l4-42-28 24z" fill="#d86a2a" stroke="#2a1206" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M26 42 24 20 38 33zM74 42l2-22-14 13z" fill="#3a1a0a"/>
<path d="M50 30c-18 0-32 10-32 26 0 8 6 14 14 18l18 18 18-18c8-4 14-10 14-18 0-16-14-26-32-26z" fill="#e07a34"/>
<path d="M18 58c6 10 18 12 32 34 14-22 26-24 32-34-10 6-22 6-32 6s-22 0-32-6z" fill="#fff2e0"/>
<path d="M24 46q26-12 52 0l-2 11q-24-8-48 0z" fill="#2c3a2a"/>
<path d="M33 51q5-3 10 1-5 3-10-1zM67 51q-5-3-10 1 5 3 10-1z" fill="#e8f5a0"/><circle cx="39" cy="51" r="1.6" fill="#1a0a04"/><circle cx="61" cy="51" r="1.6" fill="#1a0a04"/>
<ellipse cx="50" cy="86" rx="4.4" ry="3.2" fill="#1a0a04"/>
<path d="M44 78q8 4 12-2" stroke="#2a1206" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M20 56c0-14 12-24 28-25" stroke="#fff0b0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Luciole ardente": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="74" r="28" fill="#ff8a2a" opacity=".22"/><circle cx="50" cy="76" r="21" fill="#ffb03a" opacity=".3"/>
<ellipse cx="27" cy="44" rx="19" ry="9" fill="#fff0d8" opacity=".55" transform="rotate(-28 27 44)"/><ellipse cx="73" cy="44" rx="19" ry="9" fill="#fff0d8" opacity=".55" transform="rotate(28 73 44)"/>
<ellipse cx="50" cy="74" rx="15" ry="18" fill="#ffb02a"/><ellipse cx="50" cy="78" rx="9" ry="12" fill="#fff3a8"/>
<path d="M36 64q14 6 28 0" stroke="#6a2008" stroke-width="3" fill="none"/>
<path d="M44 30q-6-14-14-16M56 30q6-14 14-16" stroke="#3a1206" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="30" cy="14" r="3" fill="#ffd040"/><circle cx="70" cy="14" r="3" fill="#ffd040"/>
<circle cx="50" cy="44" r="15" fill="#4a1a10"/><path d="M36 40c0-8 6-12 14-12s14 4 14 12q-14-6-28 0z" fill="#c8401e"/>
<circle cx="43" cy="47" r="5" fill="#1a0604"/><circle cx="57" cy="47" r="5" fill="#1a0604"/><circle cx="41.6" cy="45.4" r="1.7" fill="#fff"/><circle cx="55.6" cy="45.4" r="1.7" fill="#fff"/>
<path d="M46 55q4 2 8 0" stroke="#ffb070" stroke-width="1.6" fill="none"/>
<circle cx="20" cy="76" r="1.6" fill="#ffe080"/><circle cx="82" cy="68" r="2" fill="#ffe080"/><circle cx="76" cy="90" r="1.4" fill="#ffe080"/>
<path d="M36 38c2-6 7-9 14-9" stroke="#ffc890" stroke-width="1.5" fill="none" opacity=".55"/></svg>`,

 "Brigand": `<svg viewBox="0 0 100 100">
<path d="M10 98c4-22 18-30 40-30s36 8 40 30z" fill="#4a2a1c"/>
<path d="M50 10c-22 0-32 20-32 42 0 14 4 26 8 36h48c4-10 8-22 8-36 0-22-10-42-32-42z" fill="#6a3420" stroke="#1e0c06" stroke-width="1.6"/>
<ellipse cx="50" cy="58" rx="18" ry="22" fill="#d39a72"/>
<path d="M31 50q19-18 38 0q-19-8-38 0z" fill="#3a1a10"/>
<path d="M30 60q20 8 40 0l-2 16q-18 12-36 0z" fill="#c8361e"/><path d="M38 70q12 5 24 0M42 76q8 3 16 0" stroke="#8a1c0e" stroke-width="1.6" fill="none"/><path d="M66 70l12 8-10 2z" fill="#a82a16"/>
<path d="M36 52q6-3 11 0-6 3-11 0zM64 52q-6-3-11 0 6 3 11 0z" fill="#fff4e0"/><circle cx="41.5" cy="52" r="1.9" fill="#1e0c06"/><circle cx="58.5" cy="52" r="1.9" fill="#1e0c06"/>
<path d="M35 46l11 3M65 46l-11 3" stroke="#1e0c06" stroke-width="2.4" stroke-linecap="round"/>
<path d="M60 40l6 14" stroke="#9a4a3a" stroke-width="1.6"/>
<path d="M22 70c-2-24 8-52 28-56" stroke="#ffb070" stroke-width="1.6" fill="none" opacity=".5"/></svg>`,

 "Tortue moussue": `<svg viewBox="0 0 100 100">
<path d="M14 98q2-14 14-18l6 18zM86 98q-2-14-14-18l-6 18z" fill="#6f7f3a" stroke="#1e2410" stroke-width="1.4"/>
<path d="M50 60c-14 0-22 10-22 22 0 10 8 16 22 16s22-6 22-16c0-12-8-22-22-22z" fill="#8d9a4c" stroke="#1e2410" stroke-width="1.4"/>
<path d="M30 80c0-10 8-18 20-18 6 0 10 2 14 6-16-2-30 4-34 12z" fill="#aab866"/>
<path d="M37 80q5-4 10 0M53 80q5-4 10 0" stroke="#1e2410" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M38 80q4 3 8 0M54 80q4 3 8 0" fill="#1e2410"/>
<path d="M46 90q4 2 8 0" stroke="#1e2410" stroke-width="1.6" fill="none"/>
<path d="M8 66c0-34 20-54 42-54s42 20 42 54c-14 5-28 7-42 7s-28-2-42-7z" fill="#6a4a24" stroke="#1e1206" stroke-width="1.8"/>
<path d="M36 26l-6 18 20 10 20-10-6-18zM30 44 12 52M70 44l18 8M50 54v17" stroke="#3e2a12" stroke-width="2" fill="none"/>
<path d="M12 52c2-10 6-18 14-22 4 6 10 4 14-2 6 4 14 2 18-4 8 2 16 8 20 16-6-2-10 4-16 2-6 6-14 0-20 4-6-2-12 4-18 2-6 2-8 4-12 4z" fill="#5f8a2e"/>
<path d="M24 34c6 2 10-2 14-4 6 2 12 0 16-4" stroke="#9ccc5a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<circle cx="30" cy="48" r="2" fill="#9ccc5a"/><circle cx="66" cy="42" r="2.4" fill="#9ccc5a"/>
<path d="M10 64c0-24 14-44 36-50" stroke="#e0c890" stroke-width="1.6" fill="none" opacity=".5"/></svg>`,

 "Épouvantail grimaçant": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="58" r="42" fill="#ff7a1a" opacity=".13"/>
<path d="M8 98c4-18 18-26 42-26s38 8 42 26z" fill="#4a2c1a"/><path d="M40 74l10 18 10-18z" fill="#2e1a0e"/>
<path d="M32 74l-8 14M40 76l-4 16M60 76l4 16M68 74l8 14M20 70l-10 6M80 70l10 6" stroke="#e8c060" stroke-width="2.4" stroke-linecap="round"/>
<path d="M50 24c-24 0-36 14-36 32s14 28 36 28 36-10 36-28-12-32-36-32z" fill="#c8601a" stroke="#2a0e04" stroke-width="1.8"/>
<path d="M18 58c0-16 12-28 32-30-10 6-14 16-16 26z" fill="#e0822e"/>
<path d="M38 28q-10 26 0 54M62 28q10 26 0 54" stroke="#8a3a0e" stroke-width="2" fill="none"/>
<path d="M28 46l14-2-5 11zM72 46l-14-2 5 11z" fill="#ffe060" stroke="#2a0e04" stroke-width="1.4"/>
<path d="M26 62q24 18 48 0-4 10-24 12-20-2-24-12z" fill="#ffc63a" stroke="#2a0e04" stroke-width="1.6"/>
<path d="M34 64v8M42 66v9M50 67v9M58 66v9M66 64v8M28 64h44" stroke="#2a0e04" stroke-width="1.6"/>
<path d="M4 34q46-16 92 0-46 8-92 0z" fill="#3a2414" stroke="#1a0c04" stroke-width="1.4"/>
<path d="M28 31q0-24 24-28 18 4 20 26-22-4-44 2z" fill="#4e3220"/><path d="M28 28q22-6 44-2l-1 5q-21-4-42 1z" fill="#8a2a14"/>
<path d="M54 10h9v7h-9z" fill="#7a5a2a" stroke="#1a0c04" stroke-width="1"/>
<path d="M16 66c-2-16 8-30 24-34" stroke="#ffd080" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Grisdent": `<svg viewBox="0 0 100 100">
<path d="M6 98c2-28 16-46 44-48s42 20 44 48z" fill="#34343a"/>
<path d="M20 50 6 28l16 4-2-18 14 12 4-16 8 14 8-14 4 16 14-12-2 18 16-4-14 22z" fill="#55555e" stroke="#16161a" stroke-width="1.4" stroke-linejoin="round"/>
<path d="M22 54 12 28 34 42zM78 54l10-26-22 14z" fill="#4a4a52" stroke="#c8c8d8" stroke-width="1.2"/>
<path d="M50 32c-22 0-32 14-32 31 0 15 13 27 32 27s32-12 32-27c0-17-10-31-32-31z" fill="#6a6a72"/>
<path d="M50 32c-22 0-32 14-32 31 0 4 1 8 3 11 2-18 13-33 29-33s27 15 29 33c2-3 3-7 3-11 0-17-10-31-32-31z" fill="#8a8a94"/>
<path d="M26 37q24-15 48 0l-6 7q-18-9-36 0z" fill="#26262c"/>
<path d="M62 36l-4 30" stroke="#c87a6a" stroke-width="2" opacity=".8"/>
<ellipse cx="50" cy="74" rx="16" ry="11" fill="#b4948a"/><ellipse cx="44" cy="74" rx="2.8" ry="3.8" fill="#2a1a16"/><ellipse cx="56" cy="74" rx="2.8" ry="3.8" fill="#2a1a16"/>
<path d="M34 82Q14 80 10 50q8 18 26 22zM66 82q20-2 24-32-8 18-26 22z" fill="#fff4dc" stroke="#3a2a1a" stroke-width="1.2"/>
<circle cx="38" cy="57" r="4.4" fill="#ff4a2a"/><circle cx="62" cy="57" r="4.4" fill="#ff4a2a"/><circle cx="38.6" cy="57" r="1.8" fill="#1a0604"/><circle cx="62.6" cy="57" r="1.8" fill="#1a0604"/>
<path d="M29 49l14 4M71 49l-14 4" stroke="#16161a" stroke-width="2.8" stroke-linecap="round"/>
<path d="M32 30l3-18 8 9 7-14 7 14 8-9 3 18z" fill="#e8b830" stroke="#4a2a06" stroke-width="1.4"/><circle cx="50" cy="24" r="2.4" fill="#d02a2a"/>
<path d="M20 63c0-16 13-29 30-30" stroke="#e8d8c0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Reine Gelée": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="62" r="40" fill="#5ab8ff" opacity=".12"/>
<path d="M10 92c0-32 16-58 40-58s40 26 40 58c-8 4-24 6-40 6s-32-2-40-6z" fill="#2a6ec8" stroke="#0e2244" stroke-width="1.8"/>
<path d="M16 86c0-28 14-46 34-46 9 0 16 3 21 9-28-4-48 12-55 37z" fill="#5aa2f0"/>
<ellipse cx="30" cy="54" rx="4.5" ry="8" fill="#eaf6ff" opacity=".85" transform="rotate(30 30 54)"/>
<circle cx="72" cy="84" r="3.4" fill="#eaf6ff" opacity=".35"/><circle cx="24" cy="80" r="2.2" fill="#eaf6ff" opacity=".35"/>
<path d="M28 40 24 14l12 12 6-16 8 14 8-14 6 16 12-12-4 26q-22-6-44 0z" fill="#f2c23a" stroke="#5a3a06" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M28 40q22-6 44 0" stroke="#fff0a0" stroke-width="1.4" fill="none"/>
<circle cx="50" cy="31" r="3.4" fill="#e03a6a"/><circle cx="37" cy="33" r="2.2" fill="#3ad0e0"/><circle cx="63" cy="33" r="2.2" fill="#3ad0e0"/>
<path d="M35 58q6-4 12 0M53 58q6-4 12 0" stroke="#0e2244" stroke-width="2" fill="none"/>
<ellipse cx="41" cy="64" rx="4.2" ry="5.4" fill="#0e1a30"/><ellipse cx="59" cy="64" rx="4.2" ry="5.4" fill="#0e1a30"/><circle cx="39.8" cy="62" r="1.7" fill="#fff"/><circle cx="57.8" cy="62" r="1.7" fill="#fff"/>
<path d="M43 76q7 4 14 0" stroke="#0e1a30" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="32" cy="72" rx="3.6" ry="2" fill="#ff9ac8" opacity=".45"/><ellipse cx="68" cy="72" rx="3.6" ry="2" fill="#ff9ac8" opacity=".45"/>
<path d="M12 88c0-26 14-50 34-53" stroke="#c8ecff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Grande Luciole": `<svg viewBox="0 0 100 100">
<path d="M50 50 50 2M50 50 92 20M50 50 98 58M50 50 8 20M50 50 2 58M50 50 20 96M50 50 80 96" stroke="#ffc040" stroke-width="3" opacity=".35" stroke-linecap="round"/>
<circle cx="50" cy="72" r="34" fill="#ff7a1a" opacity=".2"/><circle cx="50" cy="74" r="25" fill="#ffb03a" opacity=".3"/>
<path d="M44 46C20 30 2 36 6 52s26 8 38-2zM56 46c24-16 42-10 38 6s-26 8-38-2z" fill="#fff0d8" opacity=".55" stroke="#ffe0a0" stroke-width="1"/>
<ellipse cx="50" cy="76" rx="19" ry="20" fill="#ffa82a" stroke="#5a1a06" stroke-width="1.6"/><ellipse cx="50" cy="80" rx="12" ry="13" fill="#fff6c0"/>
<path d="M33 66q17 7 34 0M34 88q16 6 32 0" stroke="#6a2008" stroke-width="3" fill="none"/>
<path d="M42 28Q34 10 22 6M58 28q8-18 20-22" stroke="#3a1206" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="22" cy="6" r="4" fill="#ffe060"/><circle cx="78" cy="6" r="4" fill="#ffe060"/>
<circle cx="50" cy="42" r="17" fill="#4a1a10" stroke="#1a0604" stroke-width="1.4"/><path d="M34 38c0-9 7-14 16-14s16 5 16 14q-16-7-32 0z" fill="#d8481e"/>
<path d="M38 30l4 6 8-8 8 8 4-6" stroke="#ffd040" stroke-width="2" fill="none" stroke-linejoin="round"/>
<path d="M36 44q6-3 11 1-5 4-11-1zM64 44q-6-3-11 1 5 4 11-1z" fill="#ffe060"/><circle cx="42" cy="45" r="1.6" fill="#1a0604"/><circle cx="58" cy="45" r="1.6" fill="#1a0604"/>
<path d="M44 54l3 4 3-3 3 3 3-4" stroke="#ffb070" stroke-width="1.6" fill="none"/>
<circle cx="14" cy="80" r="2" fill="#ffe080"/><circle cx="88" cy="74" r="2.4" fill="#ffe080"/><circle cx="80" cy="92" r="1.6" fill="#ffe080"/>
<path d="M34 34c3-7 8-10 16-10" stroke="#ffc890" stroke-width="1.5" fill="none" opacity=".6"/></svg>`,

 "Corbeau-Liche": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="52" r="40" fill="#9affc0" opacity=".1"/>
<path d="M50 8C24 8 12 34 12 62c0 14 2 26 4 36l8-6 6 6 8-6 6 6 6-6 6 6 6-6 8 6 6-6 8 6c2-10 4-22 4-36 0-28-12-54-38-54z" fill="#262432" stroke="#0e0c16" stroke-width="1.6"/>
<path d="M30 30 22 6l14 16 4-18 8 18 2-18 4 18 6-16 2 18 10-16-6 22z" fill="#4a4662" stroke="#9affc0" stroke-width="1" stroke-opacity=".6"/>
<path d="M50 28c-15 0-24 10-24 23 0 9 5 15 11 18h26c6-3 11-9 11-18 0-13-9-23-24-23z" fill="#d8d6c4"/>
<path d="M26 51c0-13 9-23 24-23 6 0 11 2 15 5-20 0-34 10-39 22z" fill="#f2f0e2"/>
<path d="M38 66l12 30 12-30z" fill="#a8a490" stroke="#1a1824" stroke-width="1.4"/><path d="M38 66l12 30v-30z" fill="#c8c4ae"/>
<path d="M32 46q6-6 13 0-1 8-7 8t-6-8zM68 46q-6-6-13 0 1 8 7 8t6-8z" fill="#141220"/>
<circle cx="39" cy="49" r="2.8" fill="#9affb0"/><circle cx="61" cy="49" r="2.8" fill="#9affb0"/><circle cx="39" cy="49" r="5" fill="#9affb0" opacity=".3"/><circle cx="61" cy="49" r="5" fill="#9affb0" opacity=".3"/>
<path d="M46 60l4 4 4-4" stroke="#5a5848" stroke-width="1.4" fill="none"/><path d="M50 30v6M44 32l2 4" stroke="#8a8676" stroke-width="1.2"/>
<path d="M14 80c-2-30 8-58 30-68" stroke="#b8ffd0" stroke-width="1.6" fill="none" opacity=".5"/></svg>`,

 "Capitaine Balafre": `<svg viewBox="0 0 100 100">
<path d="M8 98c4-20 18-28 42-28s38 8 42 28z" fill="#7a1a14"/><path d="M40 70l10 18 10-18z" fill="#f0e2c8"/>
<path d="M14 82q8-10 18-10M86 82q-8-10-18-10" stroke="#e8b830" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="44" cy="92" r="1.8" fill="#e8b830"/><circle cx="56" cy="92" r="1.8" fill="#e8b830"/>
<ellipse cx="50" cy="56" rx="19" ry="21" fill="#d39a72"/>
<path d="M31 58q2 30 19 32 17-2 19-32-6 10-19 10t-19-10z" fill="#b8481e" stroke="#3a1206" stroke-width="1.4"/>
<path d="M38 68q6-5 12-1 6-4 12 1-6 3-12 0-6 3-12 0z" fill="#8a2e10"/><path d="M45 74q5 2 10 0" stroke="#3a1206" stroke-width="1.6" fill="none"/>
<path d="M30 42l40 10" stroke="#1a0a06" stroke-width="1.6"/><ellipse cx="60" cy="52" rx="6" ry="5.4" fill="#1a0a06"/>
<path d="M36 52q5-3 10 0-5 3-10 0z" fill="#fff4e0"/><circle cx="41" cy="52" r="1.9" fill="#1a0a06"/>
<path d="M34 46l11 2" stroke="#1a0a06" stroke-width="2.4" stroke-linecap="round"/>
<path d="M34 40l14 24" stroke="#a83a2a" stroke-width="2.4" stroke-linecap="round"/><path d="M36 48l5-3M40 55l5-3M43 60l5-3" stroke="#a83a2a" stroke-width="1.2"/>
<path d="M4 40Q12 8 50 6q38 2 46 34-20-8-46-8T4 40z" fill="#2a1410" stroke="#0e0604" stroke-width="1.6"/>
<path d="M8 38q42-14 84 0" stroke="#e8b830" stroke-width="2.2" fill="none"/>
<circle cx="50" cy="20" r="5" fill="#f0e2c8"/><path d="M44 28l12-4M44 24l12 4" stroke="#f0e2c8" stroke-width="1.8"/><circle cx="48" cy="20" r="1.2" fill="#2a1410"/><circle cx="52" cy="20" r="1.2" fill="#2a1410"/>
<path d="M32 62c-2-14 6-26 18-27" stroke="#ffb070" stroke-width="1.6" fill="none" opacity=".5"/></svg>`,
});

Object.assign(PORTRAIT,{
 "Vipère des joncs": `<svg viewBox="0 0 100 100">
<path d="M14 98V46M20 98V34M82 98V40M88 98V54" stroke="#4d7a3e" stroke-width="2.6" stroke-linecap="round"/><rect x="18" y="24" width="4.4" height="13" rx="2.2" fill="#6b4a2a"/><rect x="80" y="30" width="4.4" height="13" rx="2.2" fill="#6b4a2a"/>
<path d="M14 98c0-14 14-22 36-22s36 8 36 22z" fill="#1d4f5a" stroke="#0e2228" stroke-width="1.6"/><path d="M22 92c6-6 16-9 28-9s22 3 28 9" stroke="#5fb3a6" stroke-width="4" fill="none" opacity=".45"/>
<path d="M40 84c-2-14 2-24 10-28 8 4 12 14 10 28z" fill="#246a70" stroke="#0e2228" stroke-width="1.6"/>
<path d="M50 14C30 14 20 28 22 40c2 10 14 18 28 18s26-8 28-18c2-12-8-26-28-26z" fill="#2b8a84" stroke="#0e2228" stroke-width="2"/>
<path d="M50 14C32 14 22 26 22 36c8-10 18-14 28-14s20 4 28 14c0-10-10-22-28-22z" fill="#4fb8a4"/>
<path d="M29 31l14 6M71 31l-14 6" stroke="#0e2228" stroke-width="2.6" stroke-linecap="round"/>
<ellipse cx="37" cy="41" rx="5.5" ry="4.5" fill="#e8f25a"/><ellipse cx="63" cy="41" rx="5.5" ry="4.5" fill="#e8f25a"/><ellipse cx="37" cy="41" rx="1.3" ry="4" fill="#0e2228"/><ellipse cx="63" cy="41" rx="1.3" ry="4" fill="#0e2228"/><circle cx="35" cy="39.5" r="1" fill="#fff"/><circle cx="61" cy="39.5" r="1" fill="#fff"/>
<circle cx="46" cy="50" r="1.2" fill="#0e2228"/><circle cx="54" cy="50" r="1.2" fill="#0e2228"/>
<path d="M50 57v9l-3 4M50 66l3 4" stroke="#d8364a" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M41 55l2 7 2-6zM59 55l-2 7-2-6z" fill="#fff"/><circle cx="43" cy="66" r="1.8" fill="#9be25a"/>
<path d="M24 38c0-12 12-22 26-22" stroke="#b8fff0" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
 "Moustique géant": `<svg viewBox="0 0 100 100">
<path d="M44 46C30 30 12 26 8 34s14 20 34 18z" fill="#eafcff" opacity=".6" stroke="#9cc8c0" stroke-width="1.2"/><path d="M56 46c14-16 32-20 36-12s-14 20-34 18z" fill="#eafcff" opacity=".6" stroke="#9cc8c0" stroke-width="1.2"/>
<path d="M40 60 24 70 16 96M60 60l16 10 8 26M44 66l-8 30M56 66l8 30" stroke="#3a4a1e" stroke-width="2" fill="none" stroke-linejoin="round"/>
<ellipse cx="50" cy="76" rx="10" ry="19" fill="#9cb85a" stroke="#1e2a12" stroke-width="1.6"/><path d="M41 70h18M40 78h20M42 86h16" stroke="#3a4a1e" stroke-width="3"/>
<ellipse cx="50" cy="54" rx="13" ry="10" fill="#b8cf6a" stroke="#1e2a12" stroke-width="1.6"/>
<path d="M46 26C42 16 36 12 30 10M54 26c4-10 10-14 16-16" stroke="#3a4a1e" stroke-width="1.6" fill="none"/><path d="M32 14l-4 3M36 17l-4 3M68 14l4 3M64 17l4 3" stroke="#3a4a1e" stroke-width="1.4"/>
<circle cx="50" cy="36" r="12" fill="#cfe07e" stroke="#1e2a12" stroke-width="1.6"/>
<ellipse cx="43" cy="35" rx="6" ry="7" fill="#c8323a"/><ellipse cx="57" cy="35" rx="6" ry="7" fill="#c8323a"/><circle cx="41" cy="32" r="2" fill="#fff" opacity=".85"/><circle cx="55" cy="32" r="2" fill="#fff" opacity=".85"/>
<path d="M48 45 24 82" stroke="#2a1a10" stroke-width="2.4" stroke-linecap="round"/><circle cx="23.4" cy="84" r="2.4" fill="#d8364a"/>
<path d="M39 30c2-6 6-8 11-8" stroke="#fffbd0" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,
 "Noyé": `<svg viewBox="0 0 100 100">
<path d="M8 100c2-20 16-30 42-30s40 10 42 30z" fill="#2c4552" stroke="#101c22" stroke-width="1.6"/><path d="M40 72l10 24 10-24z" fill="#8aa6a8"/><path d="M14 92l6-6 4 8M80 90l6-4 2 8" stroke="#101c22" stroke-width="1.4" fill="none"/>
<path d="M50 14c-20 0-28 14-28 32s12 30 28 30 28-12 28-30-8-32-28-32z" fill="#7fa3a0" stroke="#101c22" stroke-width="2"/>
<path d="M50 14c-20 0-28 14-28 32 0 3 0 5 1 8 2-20 12-32 27-32s25 12 27 32c1-3 1-5 1-8 0-18-8-32-28-32z" fill="#9cc0b8"/>
<path d="M22 42c-2-18 10-30 28-30s30 12 28 30c-4-6-6-12-10-14-2 6-6 10-8 12 0-6-4-10-6-12-3 6-8 8-12 8 2-4 2-8 0-10-6 4-12 10-20 16z" fill="#2f5a3a" stroke="#122416" stroke-width="1.2"/>
<path d="M24 40c-2 10 2 22-4 34M76 40c2 12-2 22 4 32" stroke="#2f5a3a" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<circle cx="66" cy="58" r="3" fill="#5c8480"/><circle cx="33" cy="60" r="2" fill="#5c8480"/>
<circle cx="40" cy="44" r="6.4" fill="#1b2e33"/><circle cx="60" cy="44" r="6.4" fill="#1b2e33"/><circle cx="40" cy="44" r="2.8" fill="#d8fff4"/><circle cx="60" cy="44" r="2.8" fill="#d8fff4"/>
<path d="M42 60q8-4 16 0-2 9-8 9-6 0-8-9z" fill="#1b2e33"/><path d="M45 60v3M50 59v3M55 60v3" stroke="#c8d8c0" stroke-width="1.6"/>
<path d="M30 54v7M70 56v8" stroke="#8fe0ff" stroke-width="2" stroke-linecap="round"/><circle cx="30" cy="65" r="1.8" fill="#8fe0ff"/><circle cx="70" cy="68" r="1.8" fill="#8fe0ff"/>
<path d="M24 52c0-16 10-28 22-30" stroke="#c8f4ff" stroke-width="1.6" fill="none" opacity=".5"/></svg>`,
 "Feu-follet": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="58" r="36" fill="#ff8a2a" opacity=".16"/>
<path d="M50 6c4 14 16 18 22 30 8 16 4 36-8 46-8 6-20 6-28 0-12-10-16-30-8-46 4-8 10-10 12-18 2 8 4 10 6 12 2-8 2-16 4-24z" fill="#e8481e" stroke="#3a0e04" stroke-width="1.8"/>
<path d="M50 24c4 10 12 14 16 22 6 12 2 26-6 32-6 4-14 4-20 0-8-6-12-20-6-32 2-4 6-8 8-12 2 6 4 8 6 8 0-6 0-12 2-18z" fill="#ff9a2a"/>
<ellipse cx="50" cy="66" rx="14" ry="14" fill="#ffe08a"/>
<ellipse cx="44" cy="63" rx="3.2" ry="4.4" fill="#3a0e04"/><ellipse cx="56" cy="63" rx="3.2" ry="4.4" fill="#3a0e04"/><circle cx="43" cy="61.4" r="1.3" fill="#fff"/><circle cx="55" cy="61.4" r="1.3" fill="#fff"/>
<circle cx="39" cy="70" r="2.4" fill="#ff8a5a" opacity=".6"/><circle cx="61" cy="70" r="2.4" fill="#ff8a5a" opacity=".6"/><path d="M45 72q5 4 10 0" stroke="#3a0e04" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="18" cy="42" r="2.4" fill="#ffd25a"/><circle cx="84" cy="30" r="2" fill="#ffd25a"/><circle cx="84" cy="72" r="2.6" fill="#ffb03a"/>
<path d="M16 72h8M20 68v8" stroke="#9dffb0" stroke-width="2.4" stroke-linecap="round"/>
<path d="M30 40c4-8 10-10 12-18" stroke="#ffe6a0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Caïman": `<svg viewBox="0 0 100 100">
<path d="M58 100c-4-16 4-36 28-42l12 42z" fill="#1f4a46" stroke="#0c2220" stroke-width="1.6"/>
<path d="M90 50 12 52v10l78 4z" fill="#a8424a"/>
<path d="M88 58c-10 8-28 10-40 8L14 64c-4 0-4 4 0 6l36 8c16 2 30-2 40-12z" fill="#2a5e58" stroke="#0c2220" stroke-width="2"/>
<path d="M18 66l3-5 3 5 3-5 3 5 3-5 3 5 3-5 3 5 3-5 3 5" fill="#fff4dc"/>
<path d="M92 50C82 30 62 28 48 34L10 45c-4 2-4 6 0 7l40 3c14 0 32 0 42-5z" fill="#33746a" stroke="#0c2220" stroke-width="2"/>
<path d="M48 36 14 46c10-1 30-4 40-5 12-1 24 0 34 3-8-10-26-12-40-8z" fill="#5aa08a"/>
<path d="M16 52l3 5 3-5 3 5 3-5 3 5 3-5 3 5 3-5 3 5 3-5 3 5" fill="#fff4dc"/>
<circle cx="14" cy="45" r="2" fill="#0c2220"/>
<path d="M74 22l4-7 4 7M84 28l5-6 2 8" fill="#2a5e58" stroke="#0c2220" stroke-width="1.4"/>
<ellipse cx="68" cy="32" rx="9" ry="7.4" fill="#33746a" stroke="#0c2220" stroke-width="2"/><ellipse cx="68" cy="32" rx="5" ry="4" fill="#ffcf3a"/><ellipse cx="68" cy="32" rx="1.2" ry="3.6" fill="#0c2220"/><circle cx="66.4" cy="30.6" r="1" fill="#fff"/>
<path d="M58 26l16 2" stroke="#0c2220" stroke-width="2.6" stroke-linecap="round"/><path d="M80 40l-6 8" stroke="#b8e8d8" stroke-width="1.4" opacity=".7"/>
<path d="M14 44c14-4 28-8 36-10" stroke="#c0fff0" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
 "Sangsue": `<svg viewBox="0 0 100 100">
<ellipse cx="50" cy="96" rx="38" ry="6" fill="#3a2a14"/>
<path d="M30 98c-2-22 2-40 8-54 4-10 6-16 4-22h20c2 8 4 14 6 24 4 14 6 30 4 52z" fill="#5e4a22" stroke="#1e1608" stroke-width="2"/>
<path d="M38 44c4-10 6-16 4-22h6c0 8-2 16-4 26-2 16-2 34 0 50h-14c-2-22 2-40 8-54z" fill="#7e6430"/>
<path d="M32 88q19 4 38 0M33 76q18 4 36 0M35 64q16 4 32 0M38 52q14 3 28 0" stroke="#33260e" stroke-width="2" fill="none"/>
<circle cx="58" cy="70" r="1.8" fill="#e8a03a"/><circle cx="60" cy="82" r="1.8" fill="#e8a03a"/><circle cx="56" cy="58" r="1.6" fill="#e8a03a"/>
<ellipse cx="52" cy="22" rx="18" ry="11" fill="#7e6430" stroke="#1e1608" stroke-width="2"/><ellipse cx="52" cy="22" rx="12" ry="7" fill="#5a1a1a"/><ellipse cx="52" cy="22" rx="9" ry="5" fill="none" stroke="#fff4dc" stroke-width="2.2" stroke-dasharray="1.4 1.8"/><ellipse cx="52" cy="22" rx="4" ry="2.2" fill="#2a0808"/>
<circle cx="45" cy="40" r="3.6" fill="#ffd84a"/><circle cx="58" cy="40" r="3.6" fill="#ffd84a"/><circle cx="45.4" cy="40" r="1.6" fill="#1e1608"/><circle cx="58.4" cy="40" r="1.6" fill="#1e1608"/>
<path d="M41 35l7 2M62 35l-7 2" stroke="#1e1608" stroke-width="2" stroke-linecap="round"/>
<path d="M36 22c2-6 8-10 16-10" stroke="#e8d08a" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,
 "Sorcière des joncs": `<svg viewBox="0 0 100 100">
<path d="M14 100c4-16 18-24 36-24s32 8 36 24z" fill="#5a1a14" stroke="#1a0604" stroke-width="1.6"/>
<path d="M24 38c-4 16-2 32-6 48h12c0-14 2-30 4-46zM76 38c4 16 2 32 6 48H70c0-14-2-30-4-46z" fill="#6a7a2e" stroke="#1e2408" stroke-width="1.2"/>
<path d="M34 40c0 20 6 34 16 34s16-14 16-34z" fill="#a8b088"/><path d="M60 42c0 16-4 28-10 32 10-2 16-16 16-32z" fill="#8a9068"/>
<path d="M60 4C50 10 42 22 34 36h34C64 26 62 16 60 4z" fill="#4a1a12" stroke="#1a0604" stroke-width="1.8"/>
<path d="M64 32l10-22M68 33l14-16" stroke="#8a9a3a" stroke-width="2"/><rect x="72" y="6" width="4" height="10" rx="2" fill="#6a3a1a"/><rect x="80" y="13" width="4" height="9" rx="2" fill="#6a3a1a"/>
<ellipse cx="50" cy="37" rx="36" ry="6" fill="#3a120c" stroke="#1a0604" stroke-width="1.6"/><path d="M34 34h34" stroke="#e8701e" stroke-width="2.4"/>
<path d="M50 48c-1 8-5 13-8 17 5 0 8-2 9-5z" fill="#8a9068" stroke="#3a3a1e" stroke-width="1"/>
<ellipse cx="43" cy="50" rx="3.6" ry="2.6" fill="#ffb02a"/><ellipse cx="57" cy="50" rx="3.6" ry="2.6" fill="#ffb02a"/><circle cx="43" cy="50" r="1.2" fill="#2a0e06"/><circle cx="57" cy="50" r="1.2" fill="#2a0e06"/>
<path d="M38 45l8 2M62 45l-8 2" stroke="#2a0e06" stroke-width="2" stroke-linecap="round"/><path d="M44 67q6 3 12-1" stroke="#2a0e06" stroke-width="1.8" fill="none"/>
<circle cx="22" cy="80" r="14" fill="#ff7a1e" opacity=".25"/><circle cx="22" cy="80" r="8" fill="#ff7a1e"/><circle cx="22" cy="80" r="4.4" fill="#ffe08a"/>
<path d="M14 92c4-4 12-4 16 0" stroke="#a8b088" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M36 42c0 14 4 24 10 30" stroke="#ffb070" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
 "Papillon de nuit": `<svg viewBox="0 0 100 100">
<path d="M48 44C34 22 14 18 8 28s4 30 40 26z" fill="#c9c08a" stroke="#2a2614" stroke-width="1.6"/><path d="M52 44c14-22 34-26 40-16s-4 30-40 26z" fill="#c9c08a" stroke="#2a2614" stroke-width="1.6"/>
<path d="M48 56C30 58 16 70 22 82s22 0 28-18z" fill="#a89a62" stroke="#2a2614" stroke-width="1.6"/><path d="M52 56c18 2 32 14 26 26s-22 0-28-18z" fill="#a89a62" stroke="#2a2614" stroke-width="1.6"/>
<path d="M14 30q14 4 30 14M86 30q-14 4-30 14M26 74q8-6 20-10M74 74q-8-6-20-10" stroke="#efe8b8" stroke-width="1.4" fill="none" opacity=".7"/>
<circle cx="26" cy="34" r="6.4" fill="#4a3a1c"/><circle cx="26" cy="34" r="3.4" fill="#e8f0a0"/><circle cx="74" cy="34" r="6.4" fill="#4a3a1c"/><circle cx="74" cy="34" r="3.4" fill="#e8f0a0"/>
<ellipse cx="50" cy="64" rx="8" ry="20" fill="#d8cc98" stroke="#2a2614" stroke-width="1.6"/><path d="M43 66h14M43 74h14M45 81h10" stroke="#a89a62" stroke-width="2"/>
<circle cx="50" cy="44" r="10" fill="#f4ecc8" stroke="#2a2614" stroke-width="1.4"/>
<ellipse cx="38" cy="16" rx="9" ry="3.4" fill="#a8925a" transform="rotate(35 38 16)"/><ellipse cx="62" cy="16" rx="9" ry="3.4" fill="#a8925a" transform="rotate(-35 62 16)"/><path d="M46 28 38 16M54 28l8-12" stroke="#5a4a1e" stroke-width="1.4"/>
<circle cx="50" cy="33" r="9" fill="#e0d4a0" stroke="#2a2614" stroke-width="1.4"/>
<circle cx="45.5" cy="33" r="3.6" fill="#1a1a0a"/><circle cx="54.5" cy="33" r="3.6" fill="#1a1a0a"/><circle cx="44.5" cy="32" r="1.2" fill="#fff"/><circle cx="53.5" cy="32" r="1.2" fill="#fff"/>
<path d="M10 30c2-6 10-8 18-6" stroke="#fffde0" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,
 "Héron pêcheur": `<svg viewBox="0 0 100 100">
<path d="M58 72c10-6 26-2 30 14 2 8 0 12-2 14H62z" fill="#6e7e86" stroke="#1c2628" stroke-width="1.6"/>
<path d="M52 100c-2-14 0-24 6-32 4-6 4-12 0-20l16-2c6 10 8 20 4 30-4 8-2 16 2 24z" fill="#b4c0c4" stroke="#1c2628" stroke-width="1.8"/>
<path d="M66 54v10M62 60v8M68 70v8" stroke="#3a4448" stroke-width="1.8" stroke-dasharray="2 2"/>
<path d="M56 36 8 44l48 5z" fill="#e8b83a" stroke="#4a3208" stroke-width="1.4"/><path d="M54 43 12 44" stroke="#4a3208" stroke-width="1"/>
<ellipse cx="16" cy="56" rx="4.4" ry="10" fill="#7ab8d8" stroke="#1c2a33" stroke-width="1.2"/><path d="M16 65l-5 7h10z" fill="#5a98b8" stroke="#1c2a33" stroke-width="1"/><circle cx="16" cy="50" r="1.2" fill="#1c2a33"/>
<ellipse cx="66" cy="39" rx="13" ry="11" fill="#e8eef0" stroke="#1c2628" stroke-width="1.8"/>
<path d="M58 33q14-5 26-1l12 5-13-1q-11-2-23 1z" fill="#1c2628"/>
<circle cx="62" cy="38" r="3.6" fill="#ffd23a"/><circle cx="62" cy="38" r="1.6" fill="#1c2628"/><circle cx="61" cy="37" r=".8" fill="#fff"/>
<path d="M56 46c-2 4 0 8 2 10" stroke="#fff" stroke-width="1.4" fill="none" opacity=".6"/><path d="M72 30c6 2 8 6 8 12" stroke="#fff6d0" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
 "Racine animée": `<svg viewBox="0 0 100 100">
<path d="M32 82 12 98M40 86l-8 14M60 86l8 14M68 82l20 16" stroke="#4a2e14" stroke-width="5" stroke-linecap="round"/>
<path d="M30 52C18 50 12 40 10 30M14 40l-8 2M70 52c12-2 18-10 20-22M86 40l8-2" stroke="#5a3a1c" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M28 88c-4-20 0-40 6-56 4-10 8-16 16-18 8 2 12 8 16 18 6 16 10 36 6 56z" fill="#6a4422" stroke="#1e1006" stroke-width="2"/>
<path d="M34 32c4-10 8-16 16-18-4 6-8 16-8 30-2 14 0 30 2 44H28c-4-20 0-40 6-56z" fill="#8a5e30"/>
<path d="M40 56c-2 10 0 16-2 26M62 56c2 10 0 18 4 28M50 70v14" stroke="#3a2210" stroke-width="1.6" fill="none"/>
<path d="M33 30c4-12 10-18 17-18s14 6 17 18c-4-2-8 1-10-2-4 3-8 0-12 3-4-3-7 0-12-1z" fill="#5a8a3a" stroke="#22380e" stroke-width="1.2"/>
<path d="M50 12c-2-6 2-10 7-10-1 5-3 8-7 10z" fill="#8ac85a"/>
<path d="M36 40l10 3M64 40l-10 3" stroke="#1e1006" stroke-width="2.6" stroke-linecap="round"/>
<ellipse cx="42" cy="48" rx="5" ry="5.6" fill="#1e1006"/><ellipse cx="58" cy="48" rx="5" ry="5.6" fill="#1e1006"/><circle cx="42" cy="48" r="2.4" fill="#ffd25a"/><circle cx="58" cy="48" r="2.4" fill="#ffd25a"/>
<ellipse cx="50" cy="64" rx="6" ry="4" fill="#1e1006"/>
<path d="M32 70c-2-14 0-28 6-38" stroke="#ffcf8a" stroke-width="1.6" fill="none" opacity=".5"/></svg>`,
 "Hydre de vase": `<svg viewBox="0 0 100 100">
<path d="M28 82C20 70 14 56 14 42l10-2c0 12 6 26 14 38zM72 82c8-12 14-26 14-40l-10-2c0 12-6 26-14 38z" fill="#24605c" stroke="#0a1e1c" stroke-width="1.6"/>
<path d="M40 84V38h20v46z" fill="#2a6e68" stroke="#0a1e1c" stroke-width="1.6"/>
<path d="M4 100c2-18 18-26 46-26s44 8 46 26z" fill="#4a3e28" stroke="#1a140a" stroke-width="1.8"/><path d="M18 84c8-4 20-6 32-6s24 2 32 6" stroke="#7a6844" stroke-width="3" fill="none"/>
<ellipse cx="18" cy="38" rx="11" ry="9" fill="#33807a" stroke="#0a1e1c" stroke-width="1.8"/><ellipse cx="82" cy="38" rx="11" ry="9" fill="#33807a" stroke="#0a1e1c" stroke-width="1.8"/>
<circle cx="14" cy="36" r="2.4" fill="#d8ff5a"/><circle cx="22" cy="36" r="2.4" fill="#d8ff5a"/><circle cx="78" cy="36" r="2.4" fill="#d8ff5a"/><circle cx="86" cy="36" r="2.4" fill="#d8ff5a"/><path d="M13 43h10M77 43h10" stroke="#0a1e1c" stroke-width="1.6"/>
<path d="M50 12c-14 0-21 9-21 21s9 19 21 19 21-7 21-19-7-21-21-21z" fill="#3a8e86" stroke="#0a1e1c" stroke-width="2"/>
<path d="M30 28c2-10 10-16 20-16s18 6 20 16c-6-6-12-8-20-8s-14 2-20 8z" fill="#5ab4a8"/>
<path d="M37 16l1-11 6 7 6-9 6 9 6-7 1 11z" fill="#e8b83a" stroke="#4a3208" stroke-width="1.4"/>
<ellipse cx="42" cy="30" rx="4" ry="3.4" fill="#d8ff5a"/><ellipse cx="58" cy="30" rx="4" ry="3.4" fill="#d8ff5a"/><circle cx="42" cy="30" r="1.6" fill="#0a1e1c"/><circle cx="58" cy="30" r="1.6" fill="#0a1e1c"/><path d="M36 25l9 2M64 25l-9 2" stroke="#0a1e1c" stroke-width="2.2" stroke-linecap="round"/>
<path d="M40 40q10 8 20 0-2 7-10 7t-10-7z" fill="#5a1a1a"/><path d="M42 41l2 3 2-2 2 3 2-3 2 3 2-3 2 2 2-3" stroke="#fff4dc" stroke-width="1.2" fill="none"/>
<path d="M30 24c2-6 8-10 14-11" stroke="#c8fff4" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,
 "Saule gémissant": `<svg viewBox="0 0 100 100">
<path d="M6 54C6 26 26 6 50 6s44 20 44 48z" fill="#3e5e24" stroke="#16220a" stroke-width="1.8"/><path d="M14 36c6-16 20-24 36-24 12 0 22 4 30 12-26-6-50 0-66 12z" fill="#6a9440"/>
<path d="M22 100c4-14 6-30 6-46 0-12 8-22 22-22s22 10 22 22c0 16 2 32 6 46z" fill="#5e4026" stroke="#1e1206" stroke-width="2"/>
<path d="M28 54c0-12 8-22 22-22-8 4-12 12-12 24 0 16-2 30-4 44H22c4-14 6-30 6-46z" fill="#7e5a36"/>
<path d="M10 50c-2 14 2 30-2 44M18 48c0 14 2 26-1 38M82 48c0 14-2 26 1 38M90 50c2 14-2 30 2 44M28 44c-2 10 2 18-2 28M72 44c2 10-2 18 2 28" stroke="#86b44e" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-dasharray="5 2"/>
<path d="M34 52l12 5M66 52l-12 5" stroke="#1e1206" stroke-width="2.8" stroke-linecap="round"/>
<ellipse cx="41" cy="61" rx="5.4" ry="4.4" fill="#1e1206"/><ellipse cx="59" cy="61" rx="5.4" ry="4.4" fill="#1e1206"/><ellipse cx="41" cy="61.6" rx="2.8" ry="2.2" fill="#d8ff8a"/><ellipse cx="59" cy="61.6" rx="2.8" ry="2.2" fill="#d8ff8a"/>
<path d="M40 66c0 6-2 10 0 14M60 66c0 6 2 10 0 14" stroke="#8fd8ff" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="50" cy="78" rx="6" ry="8" fill="#1e1206"/><path d="M36 92c4-4 10-4 14-2" stroke="#3a2412" stroke-width="1.6" fill="none"/>
<circle cx="20" cy="24" r="1.8" fill="#f4ff9a"/><circle cx="80" cy="20" r="1.6" fill="#f4ff9a"/><circle cx="86" cy="66" r="1.8" fill="#f4ff9a"/><circle cx="12" cy="70" r="1.4" fill="#f4ff9a"/>
<path d="M30 52c0-10 6-17 14-19" stroke="#ffd89a" stroke-width="1.5" fill="none" opacity=".5"/></svg>`,
 "Chaudronnière": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="62" r="44" fill="#ff6a1e" opacity=".15"/>
<path d="M14 74C12 38 28 8 50 8s38 30 36 66z" fill="#4a1410" stroke="#1a0604" stroke-width="2"/><path d="M50 8C30 8 18 30 18 54c8-26 18-40 32-42z" fill="#6a2016"/>
<path d="M28 40c-8 10-8 24-12 32 10-2 12-12 14-18zM72 40c8 10 8 24 12 32-10-2-12-12-14-18z" fill="#c0b8a8" stroke="#3a3430" stroke-width="1"/>
<path d="M32 40c0 18 6 30 18 30s18-12 18-30c0-8-8-14-18-14s-18 6-18 14z" fill="#c89a6a"/><path d="M60 30c6 4 8 10 8 14 0 14-6 24-16 26 14-2 16-16 16-26 0-6-4-12-8-14z" fill="#a87a4e"/>
<path d="M50 42c-2 8-8 14-12 18 6 2 10 0 12-4z" fill="#b0845a" stroke="#4a2a14" stroke-width="1.2"/><circle cx="42" cy="56" r="1.8" fill="#6a8a3a"/>
<path d="M36 38l10 4M64 38l-10 4" stroke="#2a0e06" stroke-width="2.6" stroke-linecap="round"/><circle cx="42" cy="45" r="3.4" fill="#ff5a1e"/><circle cx="58" cy="45" r="3.4" fill="#ff5a1e"/><circle cx="42" cy="45" r="1.4" fill="#ffe08a"/><circle cx="58" cy="45" r="1.4" fill="#ffe08a"/>
<path d="M42 64q8 4 16-2" stroke="#2a0e06" stroke-width="2" fill="none"/><path d="M52 64l1 3 2-3.6z" fill="#fff4dc"/>
<path d="M12 76h76c0 14-12 24-38 24S12 90 12 76z" fill="#221c1e" stroke="#0a0606" stroke-width="2"/>
<ellipse cx="50" cy="76" rx="40" ry="6" fill="#36302e" stroke="#0a0606" stroke-width="1.6"/><ellipse cx="50" cy="76" rx="34" ry="3.8" fill="#ff8a1e"/>
<circle cx="38" cy="72" r="3.4" fill="#ffd25a"/><circle cx="58" cy="70" r="4.4" fill="#ffb02a"/><circle cx="68" cy="73" r="2.4" fill="#ffd25a"/>
<path d="M16 82c2 8 10 14 22 16" stroke="#ff9a4a" stroke-width="1.6" fill="none" opacity=".55"/>
<circle cx="20" cy="22" r="1.8" fill="#ffb02a"/><circle cx="84" cy="16" r="1.6" fill="#ffd25a"/></svg>`,
 "Bourgmestre noyé": `<svg viewBox="0 0 100 100">
<path d="M6 100c2-20 18-30 44-30s42 10 44 30z" fill="#1e3448" stroke="#0a141c" stroke-width="1.8"/><path d="M38 72l12 26 12-26z" fill="#d8e0dc"/>
<path d="M24 74q26 24 52 0" stroke="#e8b83a" stroke-width="3.4" fill="none" stroke-dasharray="3 1.6"/><circle cx="50" cy="90" r="6.4" fill="#f2c94a" stroke="#5a3a08" stroke-width="1.6"/><circle cx="50" cy="90" r="2.6" fill="#c8901e"/>
<path d="M50 30c-16 0-24 10-24 24s10 22 24 22 24-8 24-22-8-24-24-24z" fill="#86a6a6" stroke="#0a141c" stroke-width="2"/><path d="M28 56c0-12 8-22 22-22 10 0 18 6 20 14-6-6-12-8-20-8-12 0-20 8-22 16z" fill="#a4c4c0"/>
<circle cx="66" cy="62" r="2.4" fill="#d8d0b8"/><circle cx="70" cy="56" r="1.6" fill="#d8d0b8"/>
<circle cx="41" cy="52" r="5.4" fill="#152630"/><circle cx="59" cy="52" r="5.4" fill="#152630"/><circle cx="41" cy="52" r="2.4" fill="#aaf4ff"/><circle cx="59" cy="52" r="2.4" fill="#aaf4ff"/>
<path d="M38 64q12-5 24 0-5 4-12 2-7 2-12-2z" fill="#4e6262"/><path d="M44 69q6 2 12 0" stroke="#152630" stroke-width="1.8" fill="none"/>
<path d="M8 26q22 8 42 20 20-12 42-20-12 6-22-4-6-14-20-14S34 8 30 22C20 30 8 26 8 26z" fill="#2a4566" stroke="#06101a" stroke-width="2"/><path d="M8 26q22 8 42 20 20-12 42-20" stroke="#e8b83a" stroke-width="2.2" fill="none"/><path d="M30 22q20-8 40 0" stroke="#4a6c96" stroke-width="2" fill="none"/><circle cx="50" cy="38" r="3.2" fill="#e8b83a"/>
<path d="M22 42c-2 8 2 14-2 22M78 42c2 8-2 14 2 22" stroke="#3a6a3a" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M30 60v6M70 64v6" stroke="#8fe0ff" stroke-width="1.8" stroke-linecap="round"/>
<path d="M14 30c6-2 10-2 16-6" stroke="#9cc8ff" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
 "Grand Héron": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="46" r="42" fill="#fff6c8" opacity=".16"/>
<path d="M40 72C28 50 12 42 2 44c6 6 8 14 6 22 6-2 10 0 12 6 6-4 12-2 20 0z" fill="#e8f0ee" stroke="#2a3a3a" stroke-width="1.6"/><path d="M60 72c12-22 28-30 38-28-6 6-8 14-6 22-6-2-10 0-12 6-6-4-12-2-20 0z" fill="#e8f0ee" stroke="#2a3a3a" stroke-width="1.6"/>
<path d="M8 56l10 4M14 66l10-2M92 56l-10 4M86 66l-10-2" stroke="#b8ccc6" stroke-width="1.4"/>
<path d="M30 100c0-18 8-32 20-32s20 14 20 32z" fill="#f4f8f6" stroke="#2a3a3a" stroke-width="1.8"/>
<path d="M42 74c-6-10-2-20 4-28 4-6 4-12 0-18h14c4 6 4 14-2 22-4 6-6 14-2 24z" fill="#f4f8f6" stroke="#2a3a3a" stroke-width="1.8"/><path d="M58 50c-4 6-6 14-2 24h-4c-4-10 0-18 4-24z" fill="#c8dcd4"/>
<path d="M44 60c-4 10-2 20-6 30M50 62c0 10 2 18 0 28M56 62c2 10 0 18 4 26" stroke="#c8dcd4" stroke-width="1.6" fill="none"/>
<path d="M62 22c10-6 22-6 32 0M62 26c10-2 20 2 28 8" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<ellipse cx="54" cy="24" rx="11" ry="9" fill="#fff" stroke="#2a3a3a" stroke-width="1.8"/>
<path d="M46 21 6 30l40 4z" fill="#f2c13a" stroke="#5a3a08" stroke-width="1.4"/><path d="M44 28 10 30" stroke="#5a3a08" stroke-width="1"/>
<path d="M44 22l6 0" stroke="#7ac89a" stroke-width="2.4"/><circle cx="52" cy="22" r="3.4" fill="#ffd23a"/><circle cx="52" cy="22" r="1.5" fill="#1c2628"/><circle cx="51.2" cy="21" r=".8" fill="#fff"/>
<path d="M48 16l1-9 4 5 3-7 3 7 4-5 1 9z" fill="#f2c94a" stroke="#6a4a08" stroke-width="1.2"/>
<path d="M38 82c0-8 4-12 8-14" stroke="#fff6b0" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,
 "Mère des Marais": `<svg viewBox="0 0 100 100">
<ellipse cx="50" cy="94" rx="48" ry="8" fill="#1e4a50"/>
<path d="M8 88c0-22 18-36 42-36s42 14 42 36c-10 8-26 10-42 10S18 96 8 88z" fill="#2a6e5e" stroke="#0c2620" stroke-width="2"/>
<path d="M12 60c0-20 16-34 38-34s38 14 38 34c0 10-14 18-38 18S12 70 12 60z" fill="#3a8e76" stroke="#0c2620" stroke-width="2"/><path d="M14 54c4-14 18-24 36-24s30 8 34 20c-8-8-20-12-34-12S22 44 14 54z" fill="#5ab094"/>
<path d="M26 72q24 14 48 0c0 12-10 22-24 22S26 84 26 72z" fill="#d4ecc4" stroke="#0c2620" stroke-width="1.4"/>
<circle cx="28" cy="32" r="12" fill="#3a8e76" stroke="#0c2620" stroke-width="2"/><circle cx="72" cy="32" r="12" fill="#3a8e76" stroke="#0c2620" stroke-width="2"/>
<circle cx="28" cy="32" r="8" fill="#f2c13a"/><circle cx="72" cy="32" r="8" fill="#f2c13a"/><ellipse cx="28" cy="32" rx="5.4" ry="2.6" fill="#0c2620"/><ellipse cx="72" cy="32" rx="5.4" ry="2.6" fill="#0c2620"/><circle cx="25" cy="29" r="1.8" fill="#fff"/><circle cx="69" cy="29" r="1.8" fill="#fff"/>
<path d="M40 30l3-12 5 7 2-10 2 10 5-7 3 12z" fill="#f4a6c8" stroke="#6a2a48" stroke-width="1.2"/><circle cx="50" cy="26" r="2.4" fill="#ffe08a"/>
<circle cx="46" cy="50" r="1.6" fill="#0c2620"/><circle cx="54" cy="50" r="1.6" fill="#0c2620"/>
<path d="M16 62q34 14 68 0" stroke="#0c2620" stroke-width="2.6" fill="none" stroke-linecap="round"/>
<circle cx="24" cy="48" r="3" fill="#24604e"/><circle cx="76" cy="46" r="3.6" fill="#24604e"/><circle cx="14" cy="80" r="3" fill="#24604e"/>
<circle cx="20" cy="94" r="3" fill="#cfefff" opacity=".8"/><circle cx="27" cy="96" r="2.6" fill="#cfefff" opacity=".8"/><circle cx="20" cy="94" r="1" fill="#0c2620"/><circle cx="27" cy="96" r=".9" fill="#0c2620"/>
<path d="M18 26c2-6 6-8 10-8" stroke="#c0fff0" stroke-width="1.4" fill="none" opacity=".6"/></svg>`,
});

Object.assign(PORTRAIT,{
 "Squelette": `<svg viewBox="0 0 100 100">
<path d="M84 4 68 52" stroke="#21160a" stroke-width="8" stroke-linecap="round"/><path d="M84 4 68 52" stroke="#a89a80" stroke-width="4.5" stroke-linecap="round"/><path d="M62 46l14 5" stroke="#5a4024" stroke-width="4" stroke-linecap="round"/>
<path d="M14 96c2-18 14-28 36-28s34 10 36 28z" fill="#5a4024" stroke="#21160a" stroke-width="2"/>
<path d="M14 96c2-18 14-28 36-28 6 0 12 1 16 3-22 0-40 10-44 25z" fill="#7a5a34"/>
<path d="M45 62h10v14H45z" fill="#cbbb90"/>
<path d="M32 82q18-10 36 0M36 90q14-7 28 0" stroke="#e6d8b0" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M50 12c-18 0-28 12-28 28 0 9 4 15 9 18v9h38v-9c5-3 9-9 9-18 0-16-10-28-28-28z" fill="#d9c99e" stroke="#2a1e10" stroke-width="2.2"/>
<path d="M27 40c0-13 9-23 22-24-8 4-14 12-16 26z" fill="#f4ead0"/>
<path d="M32 41q8-5 15 2l-2 9q-10 2-13-5zM68 41q-8-5-15 2l2 9q10 2 13-5z" fill="#2a1e10"/>
<circle cx="40" cy="47" r="2.6" fill="#ffc04a"/><circle cx="60" cy="47" r="2.6" fill="#ffc04a"/><circle cx="39.3" cy="46.2" r=".9" fill="#fff"/><circle cx="59.3" cy="46.2" r=".9" fill="#fff"/>
<path d="M30 36l16 5M70 36l-16 5" stroke="#2a1e10" stroke-width="2.6" stroke-linecap="round"/>
<path d="M50 52l-4 6h8z" fill="#2a1e10"/>
<path d="M34 62h32M39 59v8M44 59v8M50 59v8M56 59v8M61 59v8" stroke="#2a1e10" stroke-width="1.5"/>
<path d="M60 14l-4 8 5 4-3 6" stroke="#2a1e10" stroke-width="1.4" fill="none"/>
<path d="M24 42c0-15 10-26 25-27" stroke="#ffd890" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Spectre": `<svg viewBox="0 0 100 100">
<path d="M50 8c-22 0-32 18-32 42v42l8-7 8 9 8-9 8 9 8-9 8 9 8-9 8 7V50c0-24-10-42-32-42z" fill="#8fcfae" opacity=".92" stroke="#1b3329" stroke-width="2"/>
<path d="M50 8c-22 0-32 18-32 42v20c3-30 14-50 34-54z" fill="#e2fdec" opacity=".7"/>
<path d="M30 74q-8 4-16-2M70 74q8 4 16-2" stroke="#1b3329" stroke-width="2" fill="none" opacity=".6"/>
<ellipse cx="50" cy="44" rx="17" ry="20" fill="#16302a"/>
<path d="M36 41q6-7 11 0q-5 5-11 0zM64 41q-6-7-11 0q5 5 11 0z" fill="#f2ffa8"/>
<circle cx="41.5" cy="40.5" r="1.6" fill="#fff"/><circle cx="58.5" cy="40.5" r="1.6" fill="#fff"/>
<path d="M45 54q5-3 10 0l-2 9q-3 2-6 0z" fill="#081814"/>
<circle cx="78" cy="72" r="12" fill="#f4ffc0" opacity=".3"/><circle cx="78" cy="72" r="6.5" fill="#f6ffc8" stroke="#8fcf6e" stroke-width="1.4"/><circle cx="76" cy="70" r="2" fill="#fff"/>
<path d="M21 52c0-22 10-38 28-41" stroke="#efffd0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,

 "Chauve-souris de suie": `<svg viewBox="0 0 100 100">
<path d="M50 50C38 32 20 26 4 30c6 4 8 10 7 17 6-2 11 0 13 6 4-4 10-4 12 2 4-4 10-2 14 2zM50 50C62 32 80 26 96 30c-6 4-8 10-7 17-6-2-11 0-13 6-4-4-10-4-12 2-4-4-10-2-14 2z" fill="#535849" stroke="#121612" stroke-width="2"/>
<path d="M12 34l20 20M28 30l12 22M88 34 68 54M72 30 60 52" stroke="#7a8070" stroke-width="1.4"/>
<path d="M38 40 32 16l14 16zM62 40l6-24-14 16z" fill="#4a4d46" stroke="#121612" stroke-width="2"/>
<path d="M38 34l-3-12 7 8zM62 34l3-12-7 8z" fill="#a8b894"/>
<ellipse cx="50" cy="74" rx="15" ry="17" fill="#4a4d46" stroke="#121612" stroke-width="2"/>
<circle cx="50" cy="50" r="15" fill="#5a5e55" stroke="#121612" stroke-width="2"/>
<path d="M37 46c2-8 8-11 13-11-6 3-10 8-10 14z" fill="#7d8372"/>
<circle cx="43" cy="49" r="4.8" fill="#e6ff8a"/><circle cx="57" cy="49" r="4.8" fill="#e6ff8a"/><circle cx="43.5" cy="49.5" r="2.1" fill="#121612"/><circle cx="56.5" cy="49.5" r="2.1" fill="#121612"/><circle cx="42" cy="47.5" r="1.1" fill="#fff"/><circle cx="55" cy="47.5" r="1.1" fill="#fff"/>
<path d="M44 57q6 4 12 0" stroke="#121612" stroke-width="1.8" fill="none"/><path d="M45.5 58l1.5 4.5 1.6-3.6zM54.5 58 53 62.5l-1.6-3.6z" fill="#fff"/>
<circle cx="30" cy="88" r="6" fill="#2a2c28" opacity=".5"/><circle cx="72" cy="90" r="5" fill="#2a2c28" opacity=".5"/><circle cx="22" cy="74" r="3" fill="#2a2c28" opacity=".5"/><circle cx="80" cy="76" r="2.5" fill="#2a2c28" opacity=".5"/>
<path d="M37 50c0-9 6-15 13-15M6 31c10-3 22 0 32 8" stroke="#d8ffb0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Élémentaire de braise": `<svg viewBox="0 0 100 100">
<path d="M22 98c3-12 14-18 28-18s25 6 28 18z" fill="#3a1c16" stroke="#1a0804" stroke-width="2"/>
<path d="M32 90l6-4 4 4M60 86l-4 6 6 2" stroke="#ff8a2a" stroke-width="1.6" fill="none"/>
<path d="M50 6c2 10 14 14 16 26 4-4 4-10 3-14 10 8 15 22 13 36-2 18-15 30-32 30S20 72 18 54c-2-14 4-26 11-32 0 6 2 10 5 12-1-12 8-20 16-28z" fill="#c8301a" stroke="#2a0a04" stroke-width="2"/>
<path d="M50 20c2 8 10 12 11 20 3-2 4-6 4-8 6 6 9 14 8 24-2 12-11 20-23 20s-21-8-23-20c-1-8 3-16 7-20 0 4 1 6 3 8 0-10 7-16 13-24z" fill="#f07a1e"/>
<path d="M50 38c7 4 16 9 16 20 0 9-7 15-16 15s-16-6-16-15c0-11 9-16 16-20z" fill="#ffd34a"/>
<path d="M38 52l9 3-1 5-7-2zM62 52l-9 3 1 5 7-2z" fill="#3a0c02"/><circle cx="43" cy="55.5" r="1" fill="#fff"/><circle cx="57" cy="55.5" r="1" fill="#fff"/>
<path d="M44 65q6 4 12 0" stroke="#3a0c02" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<circle cx="14" cy="32" r="2" fill="#ffb03a"/><circle cx="86" cy="24" r="1.8" fill="#ffb03a"/><circle cx="86" cy="74" r="2.2" fill="#ffb03a"/><circle cx="12" cy="68" r="1.6" fill="#ffb03a"/>
<path d="M21 54c-1-12 4-22 10-28" stroke="#ffe6a0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,

 "Golem d'obsidienne": `<svg viewBox="0 0 100 100">
<path d="M4 98l6-32 24-8h32l24 8 6 32z" fill="#383040" stroke="#120e14" stroke-width="2"/>
<path d="M10 66l24-8 4 12-26 8z" fill="#4c4456"/><path d="M90 66l-24-8-4 12 26 8z" fill="#3a3342"/>
<path d="M8 76q12-10 26-8l-2 6q-12-2-22 6zM70 70q12-2 22 8l-1 5q-10-8-20-7z" fill="#6a8a3a"/>
<path d="M50 70l-4 8 6 6-3 12" stroke="#e0a030" stroke-width="2.2" fill="none"/>
<path d="M32 22l18-7 18 7 5 24-7 18H34l-7-18z" fill="#463e4e" stroke="#120e14" stroke-width="2.2"/>
<path d="M32 22l18-7v20l-23 11z" fill="#5a5064"/><path d="M38 24l8-4" stroke="#a89ab8" stroke-width="1.6" stroke-linecap="round"/>
<path d="M28 38h44l-4 7H32z" fill="#1c1820"/>
<path d="M35 45h11l-2 5h-8zM54 45h11l-1 5h-8z" fill="#ffc848"/><circle cx="38" cy="46.5" r=".9" fill="#fff"/><circle cx="57" cy="46.5" r=".9" fill="#fff"/>
<path d="M40 57h20" stroke="#d89030" stroke-width="2.2" stroke-linecap="round"/>
<path d="M60 18l-3 7 4 3" stroke="#d89030" stroke-width="1.4" fill="none"/>
<path d="M28 44l4-22 18-7" stroke="#d8c8ff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Scorpion de lave": `<svg viewBox="0 0 100 100">
<path d="M50 64C42 44 40 22 54 14c10-6 20 4 12 12" stroke="#2a0e06" stroke-width="13" fill="none" stroke-linecap="round"/>
<path d="M50 64C42 44 40 22 54 14c10-6 20 4 12 12" stroke="#6a2a16" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="8 2"/>
<path d="M46 56C40 40 40 24 52 17" stroke="#ff8a2a" stroke-width="1.6" fill="none"/>
<path d="M70 22q2 10-6 16 0-6-4-10z" fill="#ffd040" stroke="#2a0e06" stroke-width="1.6"/><circle cx="63" cy="42" r="2.2" fill="#c8f04a"/>
<path d="M30 80l-12 6M32 86l-8 9M70 80l12 6M68 86l8 9" stroke="#2a0e06" stroke-width="3.6" stroke-linecap="round"/>
<path d="M34 70 22 58M66 70l12-12" stroke="#2a0e06" stroke-width="9" stroke-linecap="round"/><path d="M34 70 22 58M66 70l12-12" stroke="#6a2a16" stroke-width="5" stroke-linecap="round"/>
<path d="M24 60c-12 0-17-12-11-21 0 7 5 11 11 11-4-6-2-13 4-15-2 8 2 15 4 19zM76 60c12 0 17-12 11-21 0 7-5 11-11 11 4-6 2-13-4-15 2 8-2 15-4 19z" fill="#6a2a16" stroke="#2a0e06" stroke-width="2"/>
<ellipse cx="50" cy="76" rx="21" ry="15" fill="#5a2414" stroke="#2a0e06" stroke-width="2"/>
<path d="M32 72c4-8 12-11 18-11-6 2-12 6-14 13z" fill="#8a3a1e"/>
<path d="M36 82l6-4 4 6 5-5 6 4 6-3" stroke="#ff8a2a" stroke-width="1.8" fill="none"/>
<circle cx="44" cy="70" r="3.2" fill="#ffd040"/><circle cx="56" cy="70" r="3.2" fill="#ffd040"/><circle cx="44.5" cy="70.5" r="1.4" fill="#2a0e06"/><circle cx="56.5" cy="70.5" r="1.4" fill="#2a0e06"/>
<path d="M10 40c-1 10 4 18 13 19" stroke="#ffc890" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,

 "Araignée de cendre": `<svg viewBox="0 0 100 100">
<path d="M40 60Q24 40 10 48M38 66Q18 58 6 72M40 72Q22 76 14 94M42 56Q32 30 18 26M60 60Q76 40 90 48M62 66Q82 58 94 72M60 72Q78 76 86 94M58 56Q68 30 82 26" stroke="#1c2a32" stroke-width="5.5" fill="none" stroke-linecap="round"/>
<path d="M40 60Q24 40 10 48M38 66Q18 58 6 72M40 72Q22 76 14 94M42 56Q32 30 18 26M60 60Q76 40 90 48M62 66Q82 58 94 72M60 72Q78 76 86 94M58 56Q68 30 82 26" stroke="#56707e" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="50" cy="32" rx="20" ry="17" fill="#3e4c56" stroke="#141e24" stroke-width="2"/>
<path d="M50 20l-6 7 6 6 6-6zM50 34l-4 4 4 4 4-4z" fill="#5fd8e0"/>
<circle cx="38" cy="28" r="1.6" fill="#a8b4ba"/><circle cx="62" cy="24" r="1.4" fill="#a8b4ba"/><circle cx="60" cy="38" r="1.8" fill="#a8b4ba"/>
<ellipse cx="50" cy="62" rx="17" ry="15" fill="#5a6a72" stroke="#141e24" stroke-width="2"/>
<path d="M35 60c2-7 8-11 15-11-6 2-11 7-12 13z" fill="#8a9ca4"/>
<circle cx="44" cy="61" r="4.2" fill="#7ff0ff"/><circle cx="56" cy="61" r="4.2" fill="#7ff0ff"/><circle cx="44.5" cy="61.5" r="1.8" fill="#102028"/><circle cx="56.5" cy="61.5" r="1.8" fill="#102028"/><circle cx="43" cy="59.5" r="1.1" fill="#fff"/><circle cx="55" cy="59.5" r="1.1" fill="#fff"/>
<circle cx="37" cy="56" r="2" fill="#7ff0ff"/><circle cx="63" cy="56" r="2" fill="#7ff0ff"/><circle cx="46" cy="53" r="1.8" fill="#7ff0ff"/><circle cx="54" cy="53" r="1.8" fill="#7ff0ff"/>
<path d="M43 71q-1 8 3 12l2-10zM57 71q1 8-3 12l-2-10z" fill="#dfe8ec" stroke="#141e24" stroke-width="1.4"/><circle cx="46" cy="87" r="2" fill="#5fe0d0"/>
<path d="M31 30c1-8 8-14 17-15" stroke="#bfefff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Soldat de cendre": `<svg viewBox="0 0 100 100">
<path d="M10 98c2-18 14-28 40-28s38 10 40 28z" fill="#7a2c1a" stroke="#1a0804" stroke-width="2"/>
<ellipse cx="24" cy="78" rx="14" ry="10" fill="#4e4844" stroke="#1a0804" stroke-width="2"/><ellipse cx="76" cy="78" rx="14" ry="10" fill="#4e4844" stroke="#1a0804" stroke-width="2"/>
<path d="M14 76q8-8 18-6" stroke="#9a908a" stroke-width="2" fill="none"/>
<path d="M36 54h28v16q-14 8-28 0z" fill="#8f8a84" stroke="#1a0804" stroke-width="2"/>
<path d="M42 64q8-3 16 0" stroke="#1a0804" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M50 18c-2-8 3-12 8-15-1 6 7 8 3 15 4-2 4-6 4-6 4 6 0 12-4 14z" fill="#f06a22" stroke="#3a0c04" stroke-width="1.4"/>
<path d="M24 58c0-26 11-40 26-40s26 14 26 40l-8 2H32z" fill="#5c5652" stroke="#1a0804" stroke-width="2.2"/>
<path d="M27 56c0-22 9-34 21-36-8 6-13 18-13 36z" fill="#827a74"/>
<path d="M30 42h40v8H30z" fill="#1a0e08"/>
<path d="M46 26h8v32h-8z" fill="#6c645e" stroke="#1a0804" stroke-width="1.4"/>
<circle cx="38" cy="46" r="2.6" fill="#ffb030"/><circle cx="62" cy="46" r="2.6" fill="#ffb030"/><circle cx="37.3" cy="45.3" r=".9" fill="#fff"/><circle cx="61.3" cy="45.3" r=".9" fill="#fff"/>
<path d="M66 28l-4 6M30 34l3-2" stroke="#2a1a10" stroke-width="1.4"/>
<path d="M26 56c0-20 8-34 22-37" stroke="#ffc890" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Liche apprentie": `<svg viewBox="0 0 100 100">
<path d="M84 30v68" stroke="#3a2a1a" stroke-width="3.2" stroke-linecap="round"/><circle cx="84" cy="24" r="10" fill="#7ff0d8" opacity=".3"/><circle cx="84" cy="24" r="5" fill="#9ffff0" stroke="#0c2a2a" stroke-width="1.4"/><circle cx="82.6" cy="22.6" r="1.4" fill="#fff"/>
<path d="M14 98c2-20 14-30 36-30s34 10 36 30z" fill="#1e4a6a" stroke="#0c1e2a" stroke-width="2"/>
<path d="M50 10c-20 0-30 18-30 38 0 10 2 18 6 24h48c4-6 6-14 6-24 0-20-10-38-30-38z" fill="#2a6488" stroke="#0c1e2a" stroke-width="2"/>
<path d="M50 10c-20 0-30 18-30 38 0 10 2 18 6 24h4c-6-24 2-52 20-62z" fill="#4290bc"/>
<ellipse cx="50" cy="50" rx="17" ry="21" fill="#0c1e2a"/>
<path d="M50 34c-10 0-14 7-14 15 0 6 3 9 6 11v6h16v-6c3-2 6-5 6-11 0-8-4-15-14-15z" fill="#d8dcd0"/>
<path d="M39 46q5-3 9 1l-1 5q-6 1-8-2zM61 46q-5-3-9 1l1 5q6 1 8-2z" fill="#0c1e2a"/>
<circle cx="43.5" cy="48.5" r="2" fill="#7ff0ff"/><circle cx="56.5" cy="48.5" r="2" fill="#7ff0ff"/>
<path d="M50 54l-2 4h4z" fill="#0c1e2a"/><path d="M44 62h12M47 60v5M50 60v5M53 60v5" stroke="#0c1e2a" stroke-width="1.2"/>
<path d="M38 82l12 6 12-6" stroke="#7ff0d8" stroke-width="2" fill="none"/>
<path d="M23 48c0-18 9-32 24-36" stroke="#bfefff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Molosse d'os": `<svg viewBox="0 0 100 100">
<path d="M20 98c2-14 12-22 30-22s28 8 30 22z" fill="#4a3a22" stroke="#20160a" stroke-width="2"/>
<path d="M24 86q26-10 52 0" stroke="#6a5030" stroke-width="7" fill="none"/>
<path d="M30 84l-2-7 6 5zM44 80l1-7 4 6zM56 80l-1-7-4 6zM70 84l2-7-6 5z" fill="#c8b07a" stroke="#20160a" stroke-width="1"/>
<path d="M32 36 20 8l20 16zM68 36 80 8 60 24z" fill="#cdb98c" stroke="#2a1c0c" stroke-width="2"/>
<path d="M30 28 24 14l10 9zM70 28l6-14-10 9z" fill="#7a6040"/>
<path d="M50 18c-16 0-24 10-24 22 0 8 4 13 10 17l4 22q10 6 20 0l4-22c6-4 10-9 10-17 0-12-8-22-24-22z" fill="#d6c49a" stroke="#2a1c0c" stroke-width="2.2"/>
<path d="M29 40c0-11 7-18 17-19-6 4-10 10-10 20z" fill="#f0e2bc"/><path d="M47 52h6l-1 20h-4z" fill="#b8a478"/>
<path d="M32 40q8-3 14 4l-3 6q-9 0-11-6zM68 40q-8-3-14 4l3 6q9 0 11-6z" fill="#2a1c0c"/>
<circle cx="40" cy="45" r="2.6" fill="#ffb53a"/><circle cx="60" cy="45" r="2.6" fill="#ffb53a"/><circle cx="39.3" cy="44.3" r=".9" fill="#fff"/><circle cx="59.3" cy="44.3" r=".9" fill="#fff"/>
<path d="M45 70h10l-5 6z" fill="#2a1c0c"/>
<path d="M40 72l2 10 3-8zM60 72l-2 10-3-8z" fill="#fffbe8" stroke="#2a1c0c" stroke-width="1.2"/>
<path d="M42 66l3 2M58 66l-3 2M56 24l-3 6 3 3" stroke="#2a1c0c" stroke-width="1.4" fill="none"/>
<path d="M27 42c0-13 9-21 21-22" stroke="#ffe0a0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Sentinelle de fer": `<svg viewBox="0 0 100 100">
<path d="M4 98l5-24 19-8h44l19 8 5 24z" fill="#3e3e46" stroke="#14141a" stroke-width="2.2"/>
<path d="M38 72h24v22H38z" fill="#ff8a2a"/><path d="M38 76h24M38 82h24M38 88h24" stroke="#1a1a20" stroke-width="2.6"/>
<path d="M4 84c0-14 9-22 24-22l5 18zM96 84c0-14-9-22-24-22l-5 18z" fill="#5c5c68" stroke="#14141a" stroke-width="2"/>
<path d="M7 82q8-12 21-14M93 82q-8-12-21-14" stroke="#d6a442" stroke-width="2.4" fill="none"/>
<circle cx="18" cy="74" r="1.6" fill="#d6a442"/><circle cx="82" cy="74" r="1.6" fill="#d6a442"/>
<path d="M8 94q6-6 14-4l-3 6z" fill="#6a8a3a"/>
<path d="M41 60h18v10H41z" fill="#26262c"/>
<path d="M27 22h46v38l-9 7H36l-9-7z" fill="#55555f" stroke="#14141a" stroke-width="2.2"/>
<path d="M27 22h10v42l-1 3-9-7z" fill="#7a7a86"/>
<path d="M27 22v-9h8v4h6V8h18v9h6v-4h8v9z" fill="#d6a442" stroke="#3a2608" stroke-width="1.8"/>
<path d="M50 11l3 4-3 4-3-4z" fill="#ffe08a"/>
<path d="M29 36h42v11H29z" fill="#ffb53a" opacity=".3"/><path d="M31 37h38v9H31z" fill="#14141a"/><path d="M33 40h34v3H33z" fill="#ffc24a"/><circle cx="42" cy="41.5" r="2.6" fill="#fff6c8"/><circle cx="58" cy="41.5" r="2.6" fill="#fff6c8"/>
<circle cx="32" cy="28" r="1.6" fill="#d6a442"/><circle cx="68" cy="28" r="1.6" fill="#d6a442"/><circle cx="32" cy="55" r="1.6" fill="#d6a442"/><circle cx="68" cy="55" r="1.6" fill="#d6a442"/>
<path d="M42 52v9M46 52v10M50 52v10M54 52v10M58 52v9" stroke="#1a1a20" stroke-width="1.8"/>
<path d="M29 58V24h8" stroke="#ffe0a0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Forgeron maudit": `<svg viewBox="0 0 100 100">
<path d="M88 98 70 26" stroke="#1e0804" stroke-width="7" stroke-linecap="round"/><path d="M88 98 70 26" stroke="#5a3420" stroke-width="4" stroke-linecap="round"/>
<path d="M54 22l28-9 6 17-28 9z" fill="#3a3436" stroke="#160a06" stroke-width="2"/><path d="M56 24l8-3 2 6-8 3z" fill="#5a5456"/><path d="M82 13l6 17" stroke="#ff7a2a" stroke-width="2.6"/>
<path d="M6 98c2-20 16-32 44-32s40 12 42 32z" fill="#8a3420" stroke="#1e0804" stroke-width="2"/>
<path d="M9 96c2-16 12-26 30-28-12 6-20 16-22 28z" fill="#b04a2c"/>
<path d="M32 98l4-26h28l4 26z" fill="#3a2418" stroke="#1e0804" stroke-width="1.6"/>
<path d="M16 86l4-6 4 6M78 84l-3 6 6-2" stroke="#ffb03a" stroke-width="1.8" fill="none"/>
<path d="M33 30c-9-2-11-13-6-20 1 6 4 11 10 13zM67 30c9-2 11-13 6-20-1 6-4 11-10 13z" fill="#2a1a14" stroke="#1e0804" stroke-width="1.6"/>
<path d="M50 18c-14 0-22 10-22 24 0 8 3 14 6 18h32c3-4 6-10 6-18 0-14-8-24-22-24z" fill="#a8482c" stroke="#1e0804" stroke-width="2"/>
<path d="M31 40c0-11 6-18 16-19-6 4-10 10-10 20z" fill="#c8664a"/>
<path d="M30 46c0 18 8 32 20 32s20-14 20-32c-4 6-10 8-20 8s-16-2-20-8z" fill="#2a1814" stroke="#140804" stroke-width="2"/>
<path d="M43 61q7-4 14 0q-7 4-14 0z" fill="#ff7a2a"/>
<circle cx="38" cy="68" r="1.3" fill="#ff8a2a"/><circle cx="60" cy="72" r="1.3" fill="#ff8a2a"/>
<path d="M33 35l13 5M67 35l-13 5" stroke="#1e0804" stroke-width="3" stroke-linecap="round"/>
<circle cx="41" cy="44" r="3" fill="#ffe25a"/><circle cx="59" cy="44" r="3" fill="#ffe25a"/><circle cx="40.2" cy="43.2" r="1" fill="#fff"/><circle cx="58.2" cy="43.2" r="1" fill="#fff"/>
<path d="M50 21l-2 6 3 4" stroke="#ffb03a" stroke-width="1.4" fill="none"/>
<path d="M30 42c0-12 8-21 18-22" stroke="#ffd0a0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Liche ancienne": `<svg viewBox="0 0 100 100">
<circle cx="13" cy="50" r="4" fill="#7ff0ff" opacity=".75"/><circle cx="87" cy="42" r="3.4" fill="#7ff0ff" opacity=".75"/><circle cx="84" cy="60" r="2.2" fill="#7ff0ff" opacity=".6"/>
<path d="M22 68 12 38l22 20zM78 68l10-30-22 20z" fill="#2a5a90" stroke="#0a1426" stroke-width="1.8"/>
<path d="M6 98c0-22 12-34 24-38l20 14 20-14c12 4 24 16 24 38z" fill="#1a3a66" stroke="#0a1426" stroke-width="2"/>
<path d="M30 60l20 14 20-14" stroke="#e0b44a" stroke-width="2.6" fill="none"/>
<circle cx="50" cy="84" r="5" fill="#7ff0ff" stroke="#e0b44a" stroke-width="2"/>
<path d="M50 26c-13 0-20 9-20 21 0 8 3 12 7 15v8h26v-8c4-3 7-7 7-15 0-12-7-21-20-21z" fill="#d6dccf" stroke="#14202a" stroke-width="2"/>
<path d="M33 46c0-8 5-14 12-15-4 4-6 9-6 16z" fill="#f4f8ec"/>
<path d="M28 34 26 8l9 12 6-16 9 13 9-13 6 16 9-12-2 26q-22-7-44 0z" fill="#e0b44a" stroke="#3a2a08" stroke-width="1.8"/>
<path d="M30 30q20-6 40 0" stroke="#a87a20" stroke-width="2" fill="none"/>
<circle cx="50" cy="24" r="2.8" fill="#4ad8ff"/><circle cx="37" cy="27" r="1.8" fill="#4ad8ff"/><circle cx="63" cy="27" r="1.8" fill="#4ad8ff"/>
<path d="M36 44q6-4 11 1l-1 6q-8 1-10-3zM64 44q-6-4-11 1l1 6q8 1 10-3z" fill="#14202a"/>
<circle cx="41.5" cy="47.5" r="2.6" fill="#7ff0ff"/><circle cx="58.5" cy="47.5" r="2.6" fill="#7ff0ff"/><circle cx="41" cy="46.8" r=".9" fill="#fff"/><circle cx="58" cy="46.8" r=".9" fill="#fff"/>
<path d="M50 52l-3 5h6z" fill="#14202a"/><path d="M41 63h18M44 60v6M47.5 60v6M51 60v6M55 60v6" stroke="#14202a" stroke-width="1.3"/>
<path d="M32 48c0-10 6-18 15-20" stroke="#bfefff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Reine-Araignée": `<svg viewBox="0 0 100 100">
<path d="M38 60Q22 30 8 36M36 66Q14 54 3 66M38 72Q16 78 10 96M42 56Q36 22 22 12M62 60Q78 30 92 36M64 66Q86 54 97 66M62 72Q84 78 90 96M58 56Q64 22 78 12" stroke="#14142e" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M38 60Q22 30 8 36M36 66Q14 54 3 66M38 72Q16 78 10 96M42 56Q36 22 22 12M62 60Q78 30 92 36M64 66Q86 54 97 66M62 72Q84 78 90 96M58 56Q64 22 78 12" stroke="#5a5aa8" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<ellipse cx="50" cy="30" rx="25" ry="20" fill="#2c2c66" stroke="#0e0e24" stroke-width="2"/>
<path d="M50 14l-7 8 7 7 7-7zM50 31l-5 5 5 5 5-5z" fill="#4ae0e8"/><path d="M34 26q-4 8 0 14M66 26q4 8 0 14" stroke="#e0b44a" stroke-width="2" fill="none"/>
<ellipse cx="50" cy="64" rx="19" ry="16" fill="#3e3e86" stroke="#0e0e24" stroke-width="2"/>
<path d="M34 62c2-7 8-12 16-12-7 3-12 7-13 14z" fill="#6464b0"/>
<path d="M34 52l-2-15 8 7 4-11 6 10 6-10 4 11 8-7-2 15q-16-5-32 0z" fill="#ecc050" stroke="#3a2a08" stroke-width="1.6"/><circle cx="50" cy="44" r="2.4" fill="#ff4a8a"/>
<circle cx="43.5" cy="63" r="4.4" fill="#8affff"/><circle cx="56.5" cy="63" r="4.4" fill="#8affff"/><circle cx="44" cy="63.5" r="1.9" fill="#0e0e24"/><circle cx="57" cy="63.5" r="1.9" fill="#0e0e24"/><circle cx="42.4" cy="61.4" r="1.1" fill="#fff"/><circle cx="55.4" cy="61.4" r="1.1" fill="#fff"/>
<circle cx="36" cy="58" r="2" fill="#8affff"/><circle cx="64" cy="58" r="2" fill="#8affff"/><circle cx="45" cy="56" r="1.7" fill="#8affff"/><circle cx="55" cy="56" r="1.7" fill="#8affff"/>
<path d="M42 74q-2 9 3 14l3-12zM58 74q2 9-3 14l-3-12z" fill="#e4e8f4"/><circle cx="45" cy="92" r="2" fill="#4ae0e8"/>
<path d="M28 30c1-10 9-17 20-18" stroke="#bfe6ff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,

 "Roi déchu": `<svg viewBox="0 0 100 100">
<path d="M18 40q-8-10 0-22M82 40q8-10 0-22M12 62q-6-8 0-14M88 62q6-8 0-14" stroke="#d8ffc0" stroke-width="2" fill="none" opacity=".5" stroke-linecap="round"/>
<path d="M6 98l6-30c8-8 22-10 38-10s30 2 38 10l6 30-7-5-6 5-7-5-6 5-7-5-6 5-7-5-6 5-7-5-6 5-7-5-6 5-7-5z" fill="#4a5e48" stroke="#18241a" stroke-width="2"/>
<path d="M16 72q34-16 68 0-4 6-10 4-4 6-10 2-6 6-12 2-6 4-12-2-6 6-10 0-6 2-10-6z" fill="#e4ecd4" stroke="#18241a" stroke-width="1.6"/>
<circle cx="26" cy="72" r="1.2" fill="#18241a"/><circle cx="50" cy="70" r="1.2" fill="#18241a"/><circle cx="74" cy="72" r="1.2" fill="#18241a"/>
<path d="M50 24c-14 0-20 10-20 22 0 10 4 16 8 20l4 8h16l4-8c4-4 8-10 8-20 0-12-6-22-20-22z" fill="#b8c8a8" stroke="#1a2418" stroke-width="2"/>
<path d="M33 46c0-10 5-17 13-19-5 5-7 11-7 20z" fill="#dae6cc"/>
<path d="M38 64q12 26 12 32 0-6 12-32-6 6-12 6s-6-2-12-6z" fill="#e4f6d0" opacity=".8"/>
<path d="M35 43q6-4 12 2l-2 6q-8 1-10-4zM65 43q-6-4-12 2l2 6q8 1 10-4z" fill="#1a2418"/>
<circle cx="41" cy="47" r="2.4" fill="#f4ff8a"/><circle cx="59" cy="47" r="2.4" fill="#f4ff8a"/>
<path d="M50 52l-3 6h6z" fill="#1a2418"/><path d="M44 62q6-2 12 0" stroke="#1a2418" stroke-width="1.6" fill="none"/>
<path d="M31 34l-2-16 7 7 5-11 7 9 4-4M60 21l-2-7 5 11 7-7-2 16q-20-7-38 0" fill="#c8a640" stroke="#3a2c08" stroke-width="1.8" transform="rotate(-10 50 26)"/>
<circle cx="47" cy="27" r="2.2" fill="#8ae0a0" transform="rotate(-10 50 26)"/>
<path d="M32 46c0-12 6-20 16-22" stroke="#efffd0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,

 "Dragon de cendre": `<svg viewBox="0 0 100 100">
<path d="M32 52 4 18l3 28-5 6 10 4-2 12 22-10zM68 52l28-34-3 28 5 6-10 4 2 12-22-10z" fill="#5a3a30" stroke="#1a0804" stroke-width="2"/>
<path d="M8 24l20 28M92 24 72 52" stroke="#6a4a40" stroke-width="1.6"/>
<path d="M34 98l6-30h20l6 30z" fill="#4a3a34" stroke="#1a0804" stroke-width="2"/><path d="M43 70h14l2 28H41z" fill="#a86a3a"/><path d="M42 78h16M41 87h18" stroke="#5a3420" stroke-width="1.6"/>
<path d="M32 34C22 26 20 12 26 4c0 10 6 17 12 21zM68 34c10-8 12-22 6-30 0 10-6 17-12 21z" fill="#ded0b8" stroke="#1a0804" stroke-width="1.8"/>
<path d="M27 54l-9 4 9 5zM73 54l9 4-9 5z" fill="#ded0b8" stroke="#1a0804" stroke-width="1.4"/>
<path d="M50 22c-14 0-22 8-24 20l-1 12 8 14 6 12h22l6-12 8-14-1-12c-2-12-10-20-24-20z" fill="#6e5a52" stroke="#1a0804" stroke-width="2.2"/>
<path d="M28 46c1-12 8-20 18-21-7 5-11 13-12 24z" fill="#927a6e"/>
<path d="M38 58h24l-4 16H42z" fill="#826c62"/>
<path d="M32 42l14 5-2 5-10-3zM68 42l-14 5 2 5 10-3z" fill="#ffb53a" stroke="#1a0804" stroke-width="1.2"/><path d="M40 45v6M60 45v6" stroke="#1a0804" stroke-width="1.6"/>
<path d="M30 39l16 5M70 39l-16 5" stroke="#1a0804" stroke-width="2.4" stroke-linecap="round"/>
<circle cx="45" cy="68" r="1.8" fill="#ff8a2a"/><circle cx="55" cy="68" r="1.8" fill="#ff8a2a"/>
<path d="M40 76q10 7 20 0l-3 8q-7 5-14 0z" fill="#ffb03a" stroke="#1a0804" stroke-width="1.4"/><path d="M45 79l2 3 2-3 2 3 2-3 2 3" stroke="#fff4c0" stroke-width="1" fill="none"/>
<path d="M34 58l4 4-2 4M66 58l-4 4 2 4" stroke="#ff8a2a" stroke-width="1.4" fill="none"/>
<circle cx="14" cy="80" r="1.6" fill="#ff9a3a"/><circle cx="86" cy="84" r="2" fill="#ff9a3a"/>
<path d="M27 50c0-14 8-24 20-26" stroke="#ffd0a0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`
});

Object.assign(PORTRAIT,{
 "Loup blanc": `<svg viewBox="0 0 100 100">
<path d="M12 98c4-24 18-36 38-36s34 12 38 36z" fill="#aebfb2"/>
<path d="M20 52 10 64l14-2zM80 52l10 12-14-2z" fill="#c8d6c8"/>
<path d="M22 44 26 8l18 22zM78 44 74 8 56 30z" fill="#e4ece2" stroke="#1d2a24" stroke-width="1.6"/>
<path d="M29 36 28 18l10 12zM71 36l1-18-10 12z" fill="#8fa596"/>
<path d="M50 24c-18 0-30 12-30 26 0 8 6 14 12 18l8 14q10 6 20 0l8-14c6-4 12-10 12-18 0-14-12-26-30-26z" fill="#c8d6c8" stroke="#1d2a24" stroke-width="1.6"/>
<path d="M50 26c-12 2-18 14-16 30l6 22q10 6 20 0l6-22c2-16-4-28-16-30z" fill="#eef4ea"/>
<path d="M40 58q10-4 20 0l-2 18q-8 6-16 0z" fill="#fff"/>
<path d="M44 66h12l-6 6z" fill="#1d2a24"/><path d="M44 79q6 3 12 0" stroke="#1d2a24" stroke-width="1.6" fill="none"/>
<path d="M32 47l11 3-10 4zM68 47l-11 3 10 4z" fill="#e6f25a"/><circle cx="39" cy="50.5" r="1.7" fill="#1d2a24"/><circle cx="61" cy="50.5" r="1.7" fill="#1d2a24"/>
<path d="M31 43l13 5M69 43l-13 5" stroke="#1d2a24" stroke-width="2.4" stroke-linecap="round"/>
<path d="M21 50c0-14 12-25 29-26" stroke="#f4ffb0" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Yéti": `<svg viewBox="0 0 100 100">
<path d="M4 100c0-30 16-50 46-50s46 20 46 50z" fill="#c9bb9a" stroke="#2a2214" stroke-width="1.8"/>
<path d="M18 82l4 10M28 74l2 12M72 74l-2 12M82 82l-4 10M40 90l1 8M60 90l-1 8" stroke="#9c8a68" stroke-width="2" stroke-linecap="round"/>
<path d="M50 12c-20 0-32 16-32 34 0 12 6 22 14 28h36c8-6 14-16 14-28 0-18-12-34-32-34z" fill="#e8dec4" stroke="#2a2214" stroke-width="1.8"/>
<path d="M22 40l6-8 4 6 6-10 5 7 7-9 7 9 5-7 6 10 4-6 6 8c-2-14-14-26-28-26S24 26 22 40z" fill="#f6efdc"/>
<path d="M32 46q18-8 36 0v14q0 18-18 20-18-2-18-20z" fill="#7a5a3a"/>
<path d="M34 48q16-6 32 0v6q-16-4-32 0z" fill="#9a7650"/>
<path d="M28 46q8-8 14-2 4-6 8-2 4-4 8 2 6-6 14 2-4-12-22-12-22 0-22 12z" fill="#e8dec4"/>
<circle cx="42" cy="55" r="3.4" fill="#ffd25a"/><circle cx="58" cy="55" r="3.4" fill="#ffd25a"/><circle cx="42.4" cy="55.4" r="1.5" fill="#1c1208"/><circle cx="58.4" cy="55.4" r="1.5" fill="#1c1208"/>
<path d="M36 51l10 2M64 51l-10 2" stroke="#2a2214" stroke-width="2.4" stroke-linecap="round"/>
<path d="M38 66q12 7 24 0-2 9-12 10-10-1-12-10z" fill="#2a1408"/><path d="M41 67l2 5 2-4zM59 67l-2 5-2-4z" fill="#fff8e6"/>
<path d="M80 40c-2-14-14-26-30-26" stroke="#ffe6a8" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Ours des neiges": `<svg viewBox="0 0 100 100">
<path d="M10 100c2-28 18-42 40-42s38 14 40 42z" fill="#b8a47c"/>
<circle cx="26" cy="28" r="9" fill="#e6d8b4" stroke="#2b2010" stroke-width="1.6"/><circle cx="74" cy="28" r="9" fill="#e6d8b4" stroke="#2b2010" stroke-width="1.6"/>
<circle cx="26" cy="28" r="4.5" fill="#a88e62"/><circle cx="74" cy="28" r="4.5" fill="#a88e62"/>
<path d="M50 22c-18 0-28 12-28 28 0 16 12 32 28 32s28-16 28-32c0-16-10-28-28-28z" fill="#e6d8b4" stroke="#2b2010" stroke-width="1.6"/>
<path d="M22 50c0 16 12 32 28 32s28-16 28-32c-4 12-14 20-28 20s-24-8-28-20z" fill="#c9b68c"/>
<ellipse cx="50" cy="64" rx="13" ry="11" fill="#f8f0de"/>
<path d="M44 57h12q0 6-6 7-6-1-6-7z" fill="#2b2010"/><circle cx="47.5" cy="58.5" r="1" fill="#fff"/>
<path d="M41 69q9 7 18 0-1 7-9 7t-9-7z" fill="#7a2a1a" stroke="#2b2010" stroke-width="1.2"/><path d="M43 69l2 4 1-4zM57 69l-2 4-1-4z" fill="#fff"/>
<circle cx="39" cy="47" r="3" fill="#2b2010"/><circle cx="61" cy="47" r="3" fill="#2b2010"/><circle cx="38" cy="46" r="1" fill="#fff"/><circle cx="60" cy="46" r="1" fill="#fff"/>
<path d="M32 40l12 4M68 40l-12 4" stroke="#2b2010" stroke-width="2.4" stroke-linecap="round"/>
<path d="M23 48c0-14 10-24 27-25" stroke="#ffe6a8" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Harfang": `<svg viewBox="0 0 100 100">
<path d="M14 100c0-30 14-48 36-48s36 18 36 48z" fill="#e4ecdc"/>
<path d="M14 100c-2-26 6-42 20-48-6 14-8 32-6 48zM86 100c2-26-6-42-20-48 6 14 8 32 6 48z" fill="#b8c8b0" stroke="#1e2a22" stroke-width="1.4"/>
<path d="M38 74l3 2M56 70l3 2M46 84l3 2M62 86l3 2M18 80l3 2M80 76l-3 2" stroke="#3a4a3e" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="50" cy="44" rx="31" ry="27" fill="#f4f8ee" stroke="#1e2a22" stroke-width="1.6"/>
<path d="M28 30l3 2M40 22l3 1M58 22l3 1M70 30l3 2M50 20v3" stroke="#3a4a3e" stroke-width="2" stroke-linecap="round"/>
<circle cx="38" cy="46" r="11.5" fill="#fff"/><circle cx="62" cy="46" r="11.5" fill="#fff"/>
<circle cx="38" cy="46" r="8" fill="#f5d23a" stroke="#1e2a22" stroke-width="1.4"/><circle cx="62" cy="46" r="8" fill="#f5d23a" stroke="#1e2a22" stroke-width="1.4"/>
<circle cx="38.5" cy="46.5" r="4.2" fill="#1e2a22"/><circle cx="61.5" cy="46.5" r="4.2" fill="#1e2a22"/><circle cx="36.8" cy="44.6" r="1.6" fill="#fff"/><circle cx="59.8" cy="44.6" r="1.6" fill="#fff"/>
<path d="M26 34l16 6M74 34l-16 6" stroke="#1e2a22" stroke-width="2.4" stroke-linecap="round"/>
<path d="M45 52l5 11 5-11q-5-3-10 0z" fill="#2c3330"/>
<path d="M20 44c0-14 12-25 28-26" stroke="#f4ffb0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Élémentaire de glace": `<svg viewBox="0 0 100 100">
<path d="M22 40 8 18l22 12zM78 40l14-22-22 12z" fill="#9edcf6" stroke="#12304a" stroke-width="1.4" opacity=".85"/>
<path d="M50 8 72 28l8 32-16 38H36L20 60l8-32z" fill="#4f9fd0" stroke="#12304a" stroke-width="1.8"/>
<path d="M50 8 28 28l-8 32 20-6z" fill="#a8e2fa"/><path d="M50 8l22 20-12 22z" fill="#7cc4ea"/>
<path d="M40 54 20 60l16 38zM60 54l20 6-16 38z" fill="#3a7fb0"/>
<path d="M50 8v46M40 54h20" stroke="#dff6ff" stroke-width="1.2" opacity=".6"/>
<path d="M32 40h36l-4 12H36z" fill="#12304a"/>
<path d="M36 44l10 2-9 4zM64 44l-10 2 9 4z" fill="#eafcff"/>
<circle cx="41" cy="46" r="6" fill="#aef4ff" opacity=".3"/><circle cx="59" cy="46" r="6" fill="#aef4ff" opacity=".3"/>
<path d="M50 64l6 9-6 10-6-10z" fill="#eafcff"/><circle cx="50" cy="73" r="10" fill="#aef4ff" opacity=".3"/>
<path d="M10 64l4-8 4 8-4 8zM82 66l4-8 4 8-4 8zM16 86l3-5 3 5-3 5z" fill="#cfefff" stroke="#12304a" stroke-width="1"/>
<path d="M28 28 20 60" stroke="#e8fbff" stroke-width="1.6" opacity=".6"/></svg>`,
 "Mammouth": `<svg viewBox="0 0 100 100">
<path d="M6 100c0-30 16-46 44-46s44 16 44 46z" fill="#5a3a22"/>
<path d="M24 38c-16 4-18 26-6 34 6-4 10-20 6-34zM76 38c16 4 18 26 6 34-6-4-10-20-6-34z" fill="#6e4628" stroke="#22140a" stroke-width="1.6"/>
<path d="M50 12c-18 0-28 14-28 32 0 10 6 18 14 22h28c8-4 14-12 14-22 0-18-10-32-28-32z" fill="#8a5a34" stroke="#22140a" stroke-width="1.8"/>
<path d="M36 18q14-14 28 0-6-2-8 2-6-6-12 0-2-4-8-2z" fill="#5a3a22"/>
<path d="M34 38q16-8 32 0v14q-16 8-32 0z" fill="#a87448"/>
<path d="M42 62q-20 4-26 28 6-4 12-12 8-10 16-12zM58 62q20 4 26 28-6-4-12-12-8-10-16-12z" fill="#f4ead2" stroke="#22140a" stroke-width="1.6"/>
<path d="M43 50h14q2 22 0 32-2 12-9 12-6 0-6-6 4 0 4-6-2-14-3-32z" fill="#8a5a34" stroke="#22140a" stroke-width="1.6"/>
<path d="M45 60h10M45 68h10M46 76h9" stroke="#5a3a22" stroke-width="1.4"/>
<circle cx="37" cy="44" r="3.4" fill="#ffcf5a"/><circle cx="63" cy="44" r="3.4" fill="#ffcf5a"/><circle cx="37.4" cy="44.4" r="1.5" fill="#1a0a04"/><circle cx="63.4" cy="44.4" r="1.5" fill="#1a0a04"/>
<path d="M31 39l10 3M69 39l-10 3" stroke="#22140a" stroke-width="2.2" stroke-linecap="round"/>
<path d="M23 44c0-16 10-29 27-30" stroke="#ffcf9a" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Chamane du givre": `<svg viewBox="0 0 100 100">
<path d="M12 100c2-26 16-40 38-40s36 14 38 40z" fill="#2f5f86" stroke="#12283a" stroke-width="1.6"/>
<path d="M50 8c-22 0-32 18-32 38 0 14 4 24 8 32h48c4-8 8-18 8-32 0-20-10-38-32-38z" fill="#3d78a6" stroke="#12283a" stroke-width="1.8"/>
<path d="M50 8c-14 0-24 8-28 20 8-8 18-12 28-12z" fill="#5f9cc8"/>
<path d="M50 22c-16 0-25 14-25 28 0 14 9 27 25 27s25-13 25-27c0-14-9-28-25-28z" fill="#eef6fb" stroke="#12283a" stroke-width="1.4"/>
<path d="M27 40l-4-3 3 6-4 2 4 2-3 5M73 40l4-3-3 6 4 2-4 2 3 5" stroke="#c4dcea" stroke-width="1.4" fill="none"/>
<ellipse cx="50" cy="53" rx="16" ry="19" fill="#d8bfa8"/>
<path d="M34 50q16-14 32 0-2-12-16-14-14 2-16 14z" fill="#7a5f50" opacity=".6"/>
<path d="M39 52q4-3 8 0M53 52q4-3 8 0" stroke="#2a1a14" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="43" cy="54" r="2.2" fill="#6fe6ff"/><circle cx="57" cy="54" r="2.2" fill="#6fe6ff"/>
<path d="M38 59l4 5M62 59l-4 5M50 40v6" stroke="#3d9ad0" stroke-width="2" stroke-linecap="round"/>
<path d="M46 66q4 2 8 0" stroke="#5a3a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<path d="M34 80q16 8 32 0" stroke="#d8c08a" stroke-width="2" fill="none" stroke-dasharray="2 3"/>
<circle cx="50" cy="90" r="9" fill="#8ff0ff" opacity=".3"/><circle cx="50" cy="90" r="5" fill="#bff8ff" stroke="#12283a" stroke-width="1.2"/>
<path d="M21 44c0-18 10-32 29-34" stroke="#bfeaff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Phoque des glaces": `<svg viewBox="0 0 100 100">
<path d="M18 100c0-24 12-36 32-36s32 12 32 36z" fill="#5b8fae" stroke="#16304a" stroke-width="1.6"/>
<path d="M24 84q-12 4-14 16h14zM76 84q12 4 14 16H76z" fill="#4a7c9c" stroke="#16304a" stroke-width="1.4"/>
<ellipse cx="50" cy="50" rx="28" ry="26" fill="#8ec0dc" stroke="#16304a" stroke-width="1.6"/>
<path d="M22 52c2 14 14 24 28 24s26-10 28-24c-6 10-16 16-28 16s-22-6-28-16z" fill="#6ea4c4"/>
<circle cx="32" cy="34" r="2" fill="#6a9ec0"/><circle cx="68" cy="32" r="2.4" fill="#6a9ec0"/><circle cx="60" cy="28" r="1.5" fill="#6a9ec0"/>
<ellipse cx="50" cy="62" rx="13" ry="9" fill="#e2f2fa"/>
<path d="M46 57h8l-4 4z" fill="#16304a"/><path d="M45 65q5 3 10 0" stroke="#16304a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<path d="M38 62 24 59M38 65 24 66M62 62l14-3M62 65l14 1" stroke="#16304a" stroke-width="1" opacity=".7"/>
<circle cx="37" cy="46" r="6.5" fill="#16304a"/><circle cx="63" cy="46" r="6.5" fill="#16304a"/>
<circle cx="35" cy="43.6" r="2.3" fill="#fff"/><circle cx="61" cy="43.6" r="2.3" fill="#fff"/><circle cx="39" cy="48.5" r="1" fill="#fff"/><circle cx="65" cy="48.5" r="1" fill="#fff"/>
<path d="M40 26l3-4 3 4zM52 24l3-5 3 5z" fill="#eafcff"/>
<path d="M23 48c0-14 12-24 27-24" stroke="#d6f4ff" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Bouquetin": `<svg viewBox="0 0 100 100">
<path d="M26 100c2-22 10-32 24-32s22 10 24 32z" fill="#7a5a36"/>
<path d="M43 28C37 12 26 4 12 6c12 4 20 14 24 26zM57 28c6-16 17-24 31-22-12 4-20 14-24 26z" fill="#c9b08a" stroke="#24180a" stroke-width="1.6"/>
<path d="M38 22l-5 2M34 16l-5 2M29 11l-5 1M62 22l5 2M66 16l5 2M71 11l5 1" stroke="#24180a" stroke-width="1.4" stroke-linecap="round"/>
<path d="M34 38 16 34l14 10zM66 38l18-4-14 10z" fill="#8a6a42" stroke="#24180a" stroke-width="1.4"/>
<path d="M50 24c-12 0-19 10-19 20 0 10 5 18 9 28 2 6 5 10 10 10s8-4 10-10c4-10 9-18 9-28 0-10-7-20-19-20z" fill="#a67c4c" stroke="#24180a" stroke-width="1.6"/>
<path d="M50 26c-6 0-10 8-10 18l10 32 10-32c0-10-4-18-10-18z" fill="#bd9260"/>
<ellipse cx="50" cy="74" rx="8.5" ry="6.5" fill="#dcc096"/><path d="M46 73l1 2M54 73l-1 2" stroke="#24180a" stroke-width="1.6" stroke-linecap="round"/>
<path d="M44 80q6 18 6 18 0 0 6-18-6 3-12 0z" fill="#4a3420"/>
<path d="M34 45q5-4 10 0-5 4-10 0zM66 45q-5-4-10 0 5 4 10 0z" fill="#f0c048" stroke="#24180a" stroke-width="1.2"/>
<path d="M37 45h4M59 45h4" stroke="#24180a" stroke-width="1.8"/><path d="M33 41l11 2M67 41l-11 2" stroke="#24180a" stroke-width="2" stroke-linecap="round"/>
<path d="M32 42c0-10 7-17 18-18" stroke="#ffcf9a" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Esprit du blizzard": `<svg viewBox="0 0 100 100">
<path d="M8 50q10-4 14 2M6 64q10-4 16 2M92 50q-10-4-14 2M94 64q-10-4-16 2" stroke="#cfe8dc" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M50 12c-20 0-32 16-32 34 0 14 6 22 4 32-1 8 8 14 14 8 4 6 10 10 14 4 4 6 12 4 14-2 6 6 14 0 12-8-2-12 6-20 6-34 0-18-12-34-32-34z" fill="#dff2e6" stroke="#1d2e2a" stroke-width="1.6"/>
<path d="M50 14c-14 2-24 14-24 30 0 12 4 20 4 30 6-14 2-34 20-60z" fill="#f6fff8"/>
<path d="M68 22q8 10 4 24M30 72q10-6 18 0t18-2M34 82q8-4 14 0" stroke="#9fc8b4" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<path d="M32 44q7-7 15 0-7 7-15 0zM53 44q8-7 15 0-8 7-15 0z" fill="#1d2e2a"/>
<circle cx="40" cy="44" r="2.6" fill="#f4ff8a"/><circle cx="60" cy="44" r="2.6" fill="#f4ff8a"/>
<circle cx="40" cy="44" r="5" fill="#f4ff8a" opacity=".25"/><circle cx="60" cy="44" r="5" fill="#f4ff8a" opacity=".25"/>
<ellipse cx="50" cy="60" rx="5" ry="7" fill="#1d2e2a"/>
<path d="M14 18v8M10 22h8M11 19l6 6M17 19l-6 6M86 26v8M82 30h8M83 27l6 6M89 27l-6 6M84 80v6M81 83h6" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>
<path d="M19 46c0-18 12-32 31-33" stroke="#f4ffb0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Grand Bouquetin": `<svg viewBox="0 0 100 100">
<path d="M24 100c2-22 12-32 26-32s24 10 26 32z" fill="#6a4a2a"/>
<path d="M41 28C31 4 4 8 7 36c2 18 21 22 25 10 3-8-6-12-10-6M59 28C69 4 96 8 93 36c-2 18-21 22-25 10-3-8 6-12 10-6" stroke="#2a1a0a" stroke-width="13" fill="none" stroke-linecap="round"/>
<path d="M41 28C31 4 4 8 7 36c2 18 21 22 25 10 3-8-6-12-10-6M59 28C69 4 96 8 93 36c-2 18-21 22-25 10-3-8 6-12 10-6" stroke="#d6b57a" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M41 28C31 4 4 8 7 36c2 18 21 22 25 10M59 28C69 4 96 8 93 36c-2 18-21 22-25 10" stroke="#8a6a3a" stroke-width="10" fill="none" stroke-dasharray="1.6 4.5"/>
<path d="M14 18l6 4M86 18l-6 4" stroke="#ffd04a" stroke-width="4"/>
<path d="M50 24c-12 0-19 10-19 20 0 10 5 18 9 28 2 6 5 10 10 10s8-4 10-10c4-10 9-18 9-28 0-10-7-20-19-20z" fill="#9a6e40" stroke="#24180a" stroke-width="1.8"/>
<path d="M50 26c-6 0-10 8-10 18l10 32 10-32c0-10-4-18-10-18z" fill="#b8884e"/>
<path d="M50 30l4 6-4 6-4-6z" fill="#ffd04a" stroke="#24180a" stroke-width="1"/>
<ellipse cx="50" cy="74" rx="8.5" ry="6.5" fill="#d8b888"/><path d="M46 73l1 2M54 73l-1 2" stroke="#24180a" stroke-width="1.6" stroke-linecap="round"/>
<path d="M42 79q8 26 8 21 0 5 8-21-8 4-16 0z" fill="#3a2614"/><circle cx="50" cy="92" r="2" fill="#ffd04a"/>
<path d="M35 45l9 1-8 4zM65 45l-9 1 8 4z" fill="#ffb02e"/><circle cx="40" cy="47" r="4.5" fill="#ffb02e" opacity=".3"/><circle cx="60" cy="47" r="4.5" fill="#ffb02e" opacity=".3"/>
<path d="M33 41l12 3M67 41l-12 3" stroke="#24180a" stroke-width="2.4" stroke-linecap="round"/></svg>`,
 "Léviathan de glace": `<svg viewBox="0 0 100 100">
<path d="M6 72q12-24 30-10M94 72q-12-24-30-10" stroke="#1f5a80" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M28 32 22 6l14 20zM40 24 42 0l8 22zM60 24l6-24 2 26zM72 32l12-24-4 28z" fill="#bfeaff" stroke="#0c2234" stroke-width="1.4"/>
<path d="M50 18c-26 0-38 18-38 38 0 12 6 22 14 28h48c8-6 14-16 14-28 0-20-12-38-38-38z" fill="#2f6f9a" stroke="#0c2234" stroke-width="1.8"/>
<path d="M50 20c-20 0-32 12-34 30 8-14 20-22 34-22z" fill="#4a90bc"/>
<path d="M18 62q32 16 64 0-6 22-32 24-26-2-32-24z" fill="#a8d8ee"/><path d="M32 76q18 6 36 0M38 82q12 3 24 0" stroke="#6aa8c8" stroke-width="1.4" fill="none"/>
<path d="M22 58q28 12 56 0-6 12-28 14-22-2-28-14z" fill="#0c2234"/>
<path d="M28 61l3 6 3-4 3 6 3-4 3 6 3-5 4 6 4-6 3 5 3-6 3 4 3-6 3 4 3-6" stroke="#eefaff" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
<path d="M26 42l14 5-13 5zM74 42l-14 5 13 5z" fill="#9ff6ff"/><circle cx="34" cy="47" r="7" fill="#9ff6ff" opacity=".25"/><circle cx="66" cy="47" r="7" fill="#9ff6ff" opacity=".25"/>
<circle cx="33" cy="47" r="1.6" fill="#0c2234"/><circle cx="67" cy="47" r="1.6" fill="#0c2234"/>
<path d="M2 100q8-12 16-4 8-10 16-2 8-10 16-2 8-10 16-2 8-10 16 2 8-8 18 6z" fill="#2a8fc0" stroke="#0c2234" stroke-width="1.4"/>
<path d="M12 94q4-4 8 0M44 92q4-4 8 0M78 94q4-4 8 0" stroke="#eafcff" stroke-width="1.6" fill="none"/>
<path d="M14 54c0-18 12-32 34-34" stroke="#bfeaff" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Roi-Loup": `<svg viewBox="0 0 100 100">
<path d="M18 46 2 62l14 2-10 16 16-2-6 20 14-10 4 14 16-22 16 22 4-14 14 10-6-20 16 2-10-16 14-2-16-16z" fill="#9fb4a6" stroke="#1d2a24" stroke-width="1.6"/>
<path d="M20 44 22 10l18 20zM80 44 78 10 60 30z" fill="#e4ece2" stroke="#1d2a24" stroke-width="1.6"/>
<path d="M50 26c-18 0-30 12-30 26 0 8 6 14 12 18l8 14q10 6 20 0l8-14c6-4 12-10 12-18 0-14-12-26-30-26z" fill="#c8d6c8" stroke="#1d2a24" stroke-width="1.6"/>
<path d="M50 28c-12 2-18 14-16 30l6 22q10 6 20 0l6-22c2-16-4-28-16-30z" fill="#eef4ea"/>
<path d="M33 30l-1-20 9 12 4-16 5 14 5-14 4 16 9-12-1 20q-17-6-34 0z" fill="#bfeeff" stroke="#123048" stroke-width="1.4"/>
<path d="M50 14v12M41 22l2 7M59 22l-2 7" stroke="#fff" stroke-width="1.2" opacity=".8"/><circle cx="50" cy="26" r="2.4" fill="#e6f25a" stroke="#123048"/>
<path d="M40 60q10-4 20 0l-2 18q-8 6-16 0z" fill="#fff"/>
<path d="M44 67h12l-6 6z" fill="#1d2a24"/>
<path d="M42 78q8 5 16 0-2 6-8 6t-8-6z" fill="#3a1414"/><path d="M43 78l2 4 1-4zM57 78l-2 4-1-4z" fill="#fff"/>
<path d="M32 48l11 3-10 4zM68 48l-11 3 10 4z" fill="#e6f25a"/><circle cx="38" cy="51" r="5" fill="#e6f25a" opacity=".3"/><circle cx="62" cy="51" r="5" fill="#e6f25a" opacity=".3"/>
<circle cx="39" cy="51.5" r="1.7" fill="#1d2a24"/><circle cx="61" cy="51.5" r="1.7" fill="#1d2a24"/>
<path d="M31 44l13 5M69 44l-13 5" stroke="#1d2a24" stroke-width="2.4" stroke-linecap="round"/>
<path d="M64 40l4 18" stroke="#8a4a4a" stroke-width="1.4"/></svg>`,
 "Golem de cristal": `<svg viewBox="0 0 100 100">
<path d="M4 100l6-38 22-8h36l22 8 6 38z" fill="#3e5a72" stroke="#0f1e2c" stroke-width="1.8"/>
<path d="M10 62l22-8 4 46H6z" fill="#557694"/>
<path d="M8 64 2 36l12 22zM14 58l2-32 8 30zM24 56l6-22 2 22zM92 64l6-28-12 22zM86 58l-2-32-8 30z" fill="#8ff0ff" stroke="#0f1e2c" stroke-width="1.2"/>
<path d="M30 30l20-10 20 10 4 30-24 12-24-12z" fill="#5b7d98" stroke="#0f1e2c" stroke-width="1.8"/>
<path d="M30 30l20-10v20L26 60z" fill="#7a9cb8"/>
<path d="M40 26 36 4l10 18zM50 22l4-20 4 22zM60 26l8-18-2 20z" fill="#bff8ff" stroke="#0f1e2c" stroke-width="1.2"/>
<path d="M34 40h32l-2 9H36z" fill="#0f1e2c"/>
<circle cx="42" cy="44.5" r="2.8" fill="#bff8ff"/><circle cx="58" cy="44.5" r="2.8" fill="#bff8ff"/><circle cx="42" cy="44.5" r="6" fill="#8ff0ff" opacity=".3"/><circle cx="58" cy="44.5" r="6" fill="#8ff0ff" opacity=".3"/>
<path d="M42 58h16" stroke="#0f1e2c" stroke-width="2"/>
<path d="M50 74l8 10-8 12-8-12z" fill="#bff8ff" stroke="#0f1e2c" stroke-width="1.2"/><circle cx="50" cy="84" r="12" fill="#8ff0ff" opacity=".25"/>
<path d="M66 70l6 8-4 6M28 74l-4 8 6 4M62 34l-4 6" stroke="#0f1e2c" stroke-width="1.2" fill="none"/>
<path d="M31 32l19-10" stroke="#dffaff" stroke-width="1.6" opacity=".6"/></svg>`,
 "Grande Chamane": `<svg viewBox="0 0 100 100">
<path d="M10 100c2-28 18-42 40-42s38 14 40 42z" fill="#24507a" stroke="#0e2234" stroke-width="1.6"/>
<path d="M30 30 18 4l18 18zM70 30 82 4 64 22zM44 20l6-18 6 18z" fill="#bff8ff" stroke="#0e2234" stroke-width="1.3"/>
<path d="M50 12c-22 0-32 18-32 36 0 14 4 22 8 30h48c4-8 8-16 8-30 0-18-10-36-32-36z" fill="#2f6aa0" stroke="#0e2234" stroke-width="1.8"/>
<path d="M50 24c-16 0-25 13-25 27 0 14 9 26 25 26s25-12 25-26c0-14-9-27-25-27z" fill="#f2f8fc" stroke="#0e2234" stroke-width="1.4"/>
<path d="M18 40l-6 22 4-2v10l5-6M82 40l6 22-4-2v10l-5-6" stroke="#e8c060" stroke-width="2" fill="none"/>
<ellipse cx="50" cy="54" rx="15" ry="18" fill="#d4b8a0"/>
<path d="M35 50q15-14 30 0-2-11-15-13-13 2-15 13z" fill="#6a5040" opacity=".6"/>
<path d="M50 30l4 5-4 5-4-5z" fill="#e8c060" stroke="#0e2234"/>
<path d="M38 52l8 2-7 3zM62 52l-8 2 7 3z" fill="#8ff6ff"/><circle cx="42" cy="54" r="4.5" fill="#8ff6ff" opacity=".35"/><circle cx="58" cy="54" r="4.5" fill="#8ff6ff" opacity=".35"/>
<path d="M38 60l3 6M62 60l-3 6M44 44h12" stroke="#3d9ad0" stroke-width="2" stroke-linecap="round"/>
<path d="M45 66q5 2 10 0" stroke="#5a3a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<circle cx="50" cy="86" r="18" fill="#8ff6ff" opacity=".2"/><circle cx="50" cy="86" r="13" fill="#8ff6ff" opacity=".3"/>
<path d="M30 92q2-12 10-12l4 8zM70 92q-2-12-10-12l-4 8z" fill="#d4b8a0" stroke="#0e2234" stroke-width="1.2"/>
<circle cx="50" cy="86" r="9" fill="#cffcff" stroke="#0e2234" stroke-width="1.4"/><circle cx="47" cy="83" r="2.6" fill="#fff"/></svg>`,
 "Titan des glaces": `<svg viewBox="0 0 100 100">
<path d="M0 100l4-34 24-10h44l24 10 4 34z" fill="#6f948c" stroke="#1a2a2a" stroke-width="1.8"/>
<path d="M4 66l24-10 4 44H2z" fill="#86aaa2"/>
<path d="M2 70 8 44l14 18zM98 70l-6-26-14 18zM14 60l2-24 10 20zM86 60l-2-24-10 20z" fill="#dff6ee" stroke="#1a2a2a" stroke-width="1.3"/>
<path d="M50 14c-18 0-26 12-26 28 0 14 6 26 26 26s26-12 26-26c0-16-8-28-26-28z" fill="#b6d2ca" stroke="#1a2a2a" stroke-width="1.8"/>
<path d="M50 16c-12 2-18 12-18 26 0 10 6 20 18 22 12-2 18-12 18-22 0-14-6-24-18-26z" fill="#cfe5de"/>
<path d="M24 34l3-26 9 14 6-18 8 16 8-16 6 18 9-14 3 26q-26-10-52 0z" fill="#eafff6" stroke="#1a2a2a" stroke-width="1.4"/>
<path d="M33 22l3 10M50 18v12M67 22l-3 10" stroke="#9fd8e8" stroke-width="1.4"/>
<path d="M30 38q20-6 40 0l-1 5q-19-5-38 0z" fill="#4e6e68"/>
<path d="M33 44q6-3 12 1-6 5-12-1zM67 44q-6-3-12 1 6 5 12-1z" fill="#1a2a2a"/>
<circle cx="40" cy="45.5" r="2.4" fill="#f4ff7a"/><circle cx="60" cy="45.5" r="2.4" fill="#f4ff7a"/><circle cx="40" cy="45.5" r="6" fill="#f4ff7a" opacity=".3"/><circle cx="60" cy="45.5" r="6" fill="#f4ff7a" opacity=".3"/>
<path d="M47 49l3 7 3-7" stroke="#6f948c" stroke-width="1.8" fill="none"/>
<path d="M30 56q20 8 40 0l-2 16-4-4-3 18-5-14-4 22-4-22-5 14-3-18-4 4z" fill="#eafff6" stroke="#1a2a2a" stroke-width="1.4"/>
<path d="M42 60q8 4 16 0" stroke="#1a2a2a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M25 44c0-14 8-26 22-28" stroke="#f4ffb0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
});

Object.assign(PORTRAIT,{
 "Méduse astrale": `<svg viewBox="0 0 100 100">
<path d="M28 58q-6 18 2 36M39 62q4 16-3 32M50 62q-4 16 3 32M61 62q4 16-3 32M72 58q6 18-2 36" stroke="#7fd3f0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".75"/>
<path d="M14 56c0-26 16-44 36-44s36 18 36 44c-6 6-12 0-18 4-6-4-12 2-18-2-6 4-12-2-18 2-6-4-12 2-18-4z" fill="#2a5c9a" stroke="#0e1f3a" stroke-width="1.6"/>
<path d="M20 50c2-20 14-32 30-32 10 0 18 4 24 12-24-6-46 4-54 20z" fill="#5a9ee0"/>
<path d="M34 26l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2zM66 36l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#fff7c8"/><circle cx="56" cy="24" r="1.4" fill="#fff"/><circle cx="26" cy="42" r="1.2" fill="#fff"/><circle cx="74" cy="48" r="1.2" fill="#fff"/>
<ellipse cx="40" cy="47" rx="5" ry="6" fill="#dff6ff"/><ellipse cx="60" cy="47" rx="5" ry="6" fill="#dff6ff"/><circle cx="40" cy="48" r="2.8" fill="#0e1f3a"/><circle cx="60" cy="48" r="2.8" fill="#0e1f3a"/><circle cx="39" cy="46.5" r="1.1" fill="#fff"/><circle cx="59" cy="46.5" r="1.1" fill="#fff"/>
<path d="M17 52c0-20 14-36 33-37" stroke="#bfe6ff" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Kraken juvénile": `<svg viewBox="0 0 100 100">
<path d="M30 66q-20 4-20 20 0 8 8 6M70 66q20 4 20 20 0 8-8 6M38 74q-10 10-4 24M62 74q10 10 4 24M50 76v22" stroke="#0c2531" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M30 66q-20 4-20 20 0 8 8 6M70 66q20 4 20 20 0 8-8 6M38 74q-10 10-4 24M62 74q10 10 4 24M50 76v22" stroke="#2f7a96" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="13" cy="82" r="1.4" fill="#bff0ff"/><circle cx="87" cy="82" r="1.4" fill="#bff0ff"/><circle cx="34" cy="88" r="1.4" fill="#bff0ff"/><circle cx="66" cy="88" r="1.4" fill="#bff0ff"/>
<path d="M50 10c-20 0-30 18-30 38 0 20 12 32 30 32s30-12 30-32c0-20-10-38-30-38z" fill="#2f7a96" stroke="#0c2531" stroke-width="1.8"/>
<path d="M50 10c-20 0-30 18-30 38 0 4 1 8 2 11 2-26 14-42 28-42s24 10 28 22c-2-16-12-29-28-29z" fill="#4fa6bf"/>
<circle cx="36" cy="30" r="3" fill="#86d0e0"/><circle cx="62" cy="24" r="2.4" fill="#86d0e0"/><circle cx="66" cy="36" r="1.8" fill="#86d0e0"/>
<circle cx="39" cy="54" r="7" fill="#ffe27a"/><circle cx="61" cy="54" r="7" fill="#ffe27a"/><rect x="36" y="51" width="6" height="7" rx="2" fill="#0c2531"/><rect x="58" y="51" width="6" height="7" rx="2" fill="#0c2531"/><circle cx="37.5" cy="52.5" r="1.2" fill="#fff"/><circle cx="59.5" cy="52.5" r="1.2" fill="#fff"/>
<path d="M29 44l15 5M71 44l-15 5" stroke="#0c2531" stroke-width="3" stroke-linecap="round"/><path d="M43 69q7-4 14 0" stroke="#0c2531" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M22 50c0-20 12-36 28-37" stroke="#bff0ff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Requin-lame": `<svg viewBox="0 0 100 100">
<path d="M44 30 58 4 64 6 62 32z" fill="#cfe2ee" stroke="#1b2a33" stroke-width="1.6"/><path d="M58 4l4 2-2 26h-4z" fill="#ffffff" opacity=".8"/>
<path d="M8 92c4-36 24-60 52-62 18-1 30 10 34 26-6 10-20 16-36 16-6 8-8 14-8 20z" fill="#3e6f93" stroke="#1b2a33" stroke-width="1.8"/>
<path d="M94 56c-6 10-20 16-36 16-6 8-8 14-8 20H30c6-14 16-22 30-24 12-1 26-4 34-12z" fill="#dbe9f2"/>
<path d="M94 56c-10 6-24 8-36 6 12 4 26 2 34-2z" fill="#7a1820"/><path d="M60 62l3 4 3-4 3 4 3-4 3 4 3-4 3 3 3-4 3 2" stroke="#fff" stroke-width="1.6" fill="none"/>
<path d="M36 52q-2 6 0 12M42 50q-2 6 0 12M48 50q-2 6 0 12" stroke="#1b2a33" stroke-width="1.6" fill="none"/>
<circle cx="74" cy="44" r="4.6" fill="#ffd34a"/><circle cx="75" cy="44" r="2.2" fill="#1b2a33"/><circle cx="73.6" cy="42.6" r="1" fill="#fff"/><path d="M66 38l13 2" stroke="#1b2a33" stroke-width="2.6" stroke-linecap="round"/>
<path d="M14 84c6-26 22-46 44-50" stroke="#bfe6ff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Crabe d'airain": `<svg viewBox="0 0 100 100">
<path d="M28 58c-10-2-16-10-16-20 0-6 2-12 6-16l6 12 4-14c6 4 8 12 6 20-2 8-4 14-6 18zM72 58c10-2 16-10 16-20 0-6-2-12-6-16l-6 12-4-14c-6 4-8 12-6 20 2 8 4 14 6 18z" fill="#b8742a" stroke="#2a1606" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M17 25c-3 5-4 11-2 16M83 25c3 5 4 11 2 16" stroke="#ffd79a" stroke-width="1.6" fill="none" opacity=".6"/>
<path d="M24 80l-12 12M30 84l-8 12M76 80l12 12M70 84l8 12" stroke="#7a4a1a" stroke-width="4" stroke-linecap="round"/>
<path d="M50 48c-24 0-34 12-34 24 0 10 14 18 34 18s34-8 34-18c0-12-10-24-34-24z" fill="#a5652a" stroke="#2a1606" stroke-width="1.8"/>
<path d="M50 48c-24 0-34 12-34 24 0 2 1 4 2 6 4-14 16-22 32-22s28 8 32 22c1-2 2-4 2-6 0-12-10-24-34-24z" fill="#d9954a"/><circle cx="34" cy="62" r="2" fill="#f2c27a"/><circle cx="66" cy="62" r="2" fill="#f2c27a"/><circle cx="50" cy="58" r="2" fill="#f2c27a"/>
<path d="M40 52V38M60 52V38" stroke="#7a4a1a" stroke-width="3"/><circle cx="40" cy="36" r="5.4" fill="#fff1d0" stroke="#2a1606" stroke-width="1.4"/><circle cx="60" cy="36" r="5.4" fill="#fff1d0" stroke="#2a1606" stroke-width="1.4"/><circle cx="40.6" cy="37" r="2.6" fill="#2a1606"/><circle cx="59.4" cy="37" r="2.6" fill="#2a1606"/><circle cx="39.6" cy="35.8" r="1" fill="#fff"/><circle cx="58.4" cy="35.8" r="1" fill="#fff"/>
<path d="M42 76q8 4 16 0" stroke="#2a1606" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M18 70c2-12 14-20 32-20" stroke="#ffd79a" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Poisson-lanterne": `<svg viewBox="0 0 100 100">
<path d="M50 24q-4-14 12-16" stroke="#3a120a" stroke-width="2.4" fill="none"/><circle cx="64" cy="10" r="9" fill="#ffb02e" opacity=".3"/><circle cx="64" cy="10" r="5" fill="#ffe27a"/><circle cx="62.6" cy="8.6" r="1.6" fill="#fff"/>
<path d="M50 22c-24 0-38 18-38 38 0 20 16 34 38 34s38-14 38-34c0-20-14-38-38-38z" fill="#8a2a14" stroke="#2a0a04" stroke-width="1.8"/>
<path d="M50 22c-24 0-38 18-38 38 0 4 1 8 2 11 2-26 18-42 36-42s30 12 34 26c-2-20-16-33-34-33z" fill="#c4481e"/>
<path d="M20 66c10 10 50 10 60 0-4 18-16 26-30 26s-26-8-30-26z" fill="#2a0a04"/>
<path d="M22 67l4 8 4-6 4 9 4-7 4 9 4-8 4 9 4-8 4 9 4-7 4 8 4-8 4 6 4-8" stroke="#fff4dc" stroke-width="2" fill="none" stroke-linejoin="round"/>
<circle cx="36" cy="46" r="7" fill="#ffe27a"/><circle cx="64" cy="46" r="7" fill="#ffe27a"/><circle cx="37" cy="47" r="3.6" fill="#2a0a04"/><circle cx="63" cy="47" r="3.6" fill="#2a0a04"/><circle cx="35.6" cy="45" r="1.4" fill="#fff"/><circle cx="61.6" cy="45" r="1.4" fill="#fff"/>
<path d="M27 37l16 5M73 37l-16 5" stroke="#2a0a04" stroke-width="2.6" stroke-linecap="round"/>
<path d="M15 58c2-18 16-30 35-31" stroke="#ffcf9a" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Pieuvre des songes": `<svg viewBox="0 0 100 100">
<path d="M24 66q-16 8-12 24 4-10 14-10zM76 66q16 8 12 24-4-10-14-10zM36 74q-8 12 0 22 2-8 8-12zM64 74q8 12 0 22-2-8-8-12zM50 76q-4 10 0 20 4-10 0-20z" fill="#9bd6b4" stroke="#1d3a2c" stroke-width="1.4"/>
<path d="M50 12c-20 0-30 16-30 34 0 20 12 34 30 34s30-14 30-34c0-18-10-34-30-34z" fill="#a9dcc0" stroke="#1d3a2c" stroke-width="1.8"/>
<path d="M50 12c-20 0-30 16-30 34 0 4 1 8 2 11 2-24 14-38 28-38s24 8 28 20c-2-16-12-27-28-27z" fill="#dcf5e6"/>
<circle cx="34" cy="62" r="3" fill="#f2a6c2" opacity=".7"/><circle cx="66" cy="62" r="3" fill="#f2a6c2" opacity=".7"/>
<path d="M33 52q6 5 12 0M55 52q6 5 12 0" stroke="#1d3a2c" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M45 64q5 3 10 0" stroke="#1d3a2c" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M72 14a8 8 0 1 0 8 10 6 6 0 1 1-8-10z" fill="#fff6b0"/><circle cx="84" cy="36" r="2" fill="#fff6b0"/><circle cx="18" cy="26" r="2.6" fill="#e8fff2" opacity=".8"/><circle cx="12" cy="40" r="1.6" fill="#e8fff2" opacity=".8"/>
<path d="M22 50c0-18 12-32 28-33" stroke="#ffffff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Nautile": `<svg viewBox="0 0 100 100">
<path d="M18 70q-8 10-4 22 4-8 10-12zM28 74q-4 12 2 22 2-10 6-14zM40 76q0 12 6 20 0-10 2-16z" fill="#c98b6a" stroke="#2a1606" stroke-width="1.4"/>
<circle cx="56" cy="50" r="38" fill="#e8d2a6" stroke="#2a1606" stroke-width="1.8"/>
<path d="M56 12a38 38 0 0 1 0 76" fill="#c9a46a"/>
<path d="M56 50m-8 0a8 8 0 1 1 16 0 14 14 0 1 1-28 0 22 22 0 1 1 44 0 30 30 0 1 1-60 0" stroke="#7a4a1a" stroke-width="2.4" fill="none"/>
<path d="M46 16l4 12M72 16l-4 12M90 40l-12 4M86 74l-10-6M66 88l-4-12" stroke="#a5652a" stroke-width="3" stroke-linecap="round"/>
<path d="M14 54c0-10 6-18 18-20 10 0 18 8 18 18 0 12-10 22-22 22-8 0-14-8-14-20z" fill="#b56a48" stroke="#2a1606" stroke-width="1.8"/>
<circle cx="31" cy="50" r="7" fill="#fff1d0"/><circle cx="32" cy="51" r="3.6" fill="#2a1606"/><circle cx="30.4" cy="49" r="1.4" fill="#fff"/><path d="M22 41l14 3" stroke="#2a1606" stroke-width="2.4" stroke-linecap="round"/>
<path d="M22 22c10-8 24-12 38-8" stroke="#fff4dc" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Corail vivant": `<svg viewBox="0 0 100 100">
<path d="M30 46 16 30l-6-14M20 34 8 30M70 46 84 30l6-14M80 34l12-4M42 34 36 14M38 24l-8-6M58 34l6-20M62 24l8-6" stroke="#e0502a" stroke-width="7" stroke-linecap="round" fill="none"/>
<path d="M30 46 16 30l-6-14M42 34 36 14M58 34l6-20M70 46 84 30l6-14" stroke="#ff8a4a" stroke-width="2.4" stroke-linecap="round" fill="none"/>
<path d="M50 30c-18 0-26 14-26 30 0 18 10 34 26 34s26-16 26-34c0-16-8-30-26-30z" fill="#c43a22" stroke="#2a0804" stroke-width="1.8"/>
<path d="M50 30c-18 0-26 14-26 30 0 4 0 7 1 10 2-20 12-32 25-32s20 6 23 18c-2-16-10-26-23-26z" fill="#ef6a3a"/>
<circle cx="34" cy="76" r="3" fill="#ffb07a"/><circle cx="66" cy="72" r="2.4" fill="#ffb07a"/><circle cx="58" cy="86" r="2.6" fill="#ffb07a"/><circle cx="12" cy="20" r="2.6" fill="#a6e05a"/><circle cx="88" cy="18" r="2.2" fill="#a6e05a"/>
<circle cx="41" cy="56" r="5.4" fill="#d8ff6a"/><circle cx="59" cy="56" r="5.4" fill="#d8ff6a"/><circle cx="41.6" cy="57" r="2.6" fill="#2a0804"/><circle cx="58.4" cy="57" r="2.6" fill="#2a0804"/><circle cx="40.4" cy="55.4" r="1" fill="#fff"/><circle cx="57.4" cy="55.4" r="1" fill="#fff"/>
<path d="M33 48l12 4M67 48l-12 4" stroke="#2a0804" stroke-width="2.4" stroke-linecap="round"/><path d="M42 70q8-5 16 0q-2 5-2 8-1-4-3-4-2 0-3 6-1-6-3-6-2 0-2 4z" fill="#2a0804"/><path d="M53 74q1 6 0 10" stroke="#a6e05a" stroke-width="2.4" stroke-linecap="round"/>
<path d="M27 60c0-16 10-26 23-27" stroke="#ffcf9a" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Étoile filante": `<svg viewBox="0 0 100 100">
<path d="M2 86 38 50l10 14L14 98z" fill="#fff2a0" opacity=".35"/><path d="M10 92 42 56l4 6z" fill="#ffffff" opacity=".75"/><path d="M4 76 36 50l2 4z" fill="#ffe27a" opacity=".8"/><path d="M20 98 46 64l2 4z" fill="#ffe27a" opacity=".8"/>
<path d="M60 8l9 22 24 2-18 15 6 24-21-13-21 13 6-24-18-15 24-2z" fill="#f2d03a" stroke="#3a2a06" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M60 8l9 22 24 2-18 15-2-8 10-8-17-1-6-16z" fill="#fff2a0"/><path d="M75 47l6 24-21-13z" fill="#d6a520"/>
<circle cx="53" cy="40" r="3.6" fill="#3a2a06"/><circle cx="67" cy="40" r="3.6" fill="#3a2a06"/><circle cx="52" cy="38.8" r="1.3" fill="#fff"/><circle cx="66" cy="38.8" r="1.3" fill="#fff"/>
<path d="M54 49q6 5 12 0" stroke="#3a2a06" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="48" cy="47" r="2.4" fill="#ff9a6a" opacity=".6"/><circle cx="72" cy="47" r="2.4" fill="#ff9a6a" opacity=".6"/>
<circle cx="86" cy="80" r="1.6" fill="#fff"/><circle cx="24" cy="30" r="1.4" fill="#fff"/><path d="M84 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#fff"/>
<path d="M43 32l17-2 6-16" stroke="#ffffff" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Astronome noyé": `<svg viewBox="0 0 100 100">
<path d="M14 98c2-20 14-30 36-30s34 10 36 30z" fill="#2f4a5a"/><path d="M40 70l10 14 10-14" fill="#1d2f3a"/>
<path d="M34 46q-6 20 0 34M66 46q8 18 2 34" stroke="#5f8a5a" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M50 34c-14 0-20 10-20 22 0 14 8 22 20 22s20-8 20-22c0-12-6-22-20-22z" fill="#b8d8c4" stroke="#1d2f3a" stroke-width="1.6"/>
<path d="M18 38 50 2l32 36q-32 8-64 0z" fill="#334f8a" stroke="#141f38" stroke-width="1.6"/><path d="M50 2l-14 34q-10-1-18 2z" fill="#4f6fb0"/>
<path d="M44 20l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1zM60 26l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" fill="#fff6b0"/><circle cx="52" cy="12" r="1.3" fill="#fff6b0"/>
<circle cx="42" cy="54" r="3" fill="#1d2f3a"/><circle cx="41" cy="53" r="1" fill="#e8fff2"/><path d="M42 66q5 2 8 0" stroke="#1d2f3a" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M54 54l34-12" stroke="#7a5a1e" stroke-width="9" stroke-linecap="round"/><path d="M54 54l34-12" stroke="#d6a548" stroke-width="5" stroke-linecap="round"/><circle cx="56" cy="54" r="7" fill="#d6a548" stroke="#3a2a06" stroke-width="1.6"/><circle cx="56" cy="54" r="4" fill="#9fe6ff"/><circle cx="55" cy="53" r="1.4" fill="#fff"/>
<path d="M72 64q2 4 0 8M30 62q-2 4 0 8" stroke="#9fe6ff" stroke-width="1.6" fill="none" opacity=".7"/>
<path d="M33 52c0-10 6-16 15-17" stroke="#e8fff2" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Baleine lunaire": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="50" r="46" fill="#9fd0ff" opacity=".12"/>
<path d="M6 60c0-30 20-48 46-48 26 0 42 18 42 42 0 22-18 40-44 40-24 0-44-12-44-34z" fill="#1f3e78" stroke="#0a1530" stroke-width="2"/>
<path d="M6 60c0-30 20-48 46-48 18 0 32 8 38 22-14-10-30-12-44-8C26 30 12 44 8 66z" fill="#3a66b0"/>
<path d="M10 66c10 14 26 22 42 22 18 0 32-8 40-20-4 18-20 28-42 28-18 0-34-10-40-30z" fill="#cfe2f2"/><path d="M20 76h60M24 84h52" stroke="#8fb0cc" stroke-width="1.6"/>
<path d="M50 18a12 12 0 1 0 14 16 10 10 0 1 1-14-16z" fill="#fff3b0" stroke="#e8c44a" stroke-width="1.2"/>
<circle cx="24" cy="38" r="2" fill="#bfe0ff"/><circle cx="76" cy="30" r="2.4" fill="#bfe0ff"/><circle cx="80" cy="44" r="1.6" fill="#bfe0ff"/>
<circle cx="28" cy="56" r="5.6" fill="#fff3b0"/><circle cx="72" cy="56" r="5.6" fill="#fff3b0"/><circle cx="28.6" cy="57" r="3" fill="#0a1530"/><circle cx="71.4" cy="57" r="3" fill="#0a1530"/><circle cx="27.4" cy="55.4" r="1.2" fill="#fff"/><circle cx="70.2" cy="55.4" r="1.2" fill="#fff"/>
<path d="M20 48l14 4M80 48l-14 4" stroke="#0a1530" stroke-width="2.6" stroke-linecap="round"/><path d="M20 68q30 10 60 0" stroke="#0a1530" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<path d="M44 8l1.4 3.6 3.6 1.4-3.6 1.4L44 18l-1.4-3.6L39 13l3.6-1.4zM86 18l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#fff"/>
<path d="M10 58c2-24 20-40 42-41" stroke="#cfe8ff" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Reine-Corail": `<svg viewBox="0 0 100 100">
<path d="M14 98c4-18 16-26 36-26s32 8 36 26z" fill="#8a1e1a"/><path d="M30 80q20 10 40 0" stroke="#ffd36a" stroke-width="3" fill="none"/><circle cx="50" cy="85" r="3.4" fill="#7ae0ff"/>
<path d="M22 44q-10 20-2 40 4-16 10-20zM78 44q10 20 2 40-4-16-10-20z" fill="#d94a2a"/>
<path d="M50 30c-15 0-22 12-22 26 0 14 10 24 22 24s22-10 22-24c0-14-7-26-22-26z" fill="#f2a07a" stroke="#3a0a06" stroke-width="1.6"/>
<path d="M30 52c2-12 10-20 20-20 8 0 14 4 18 10-14-4-30 0-38 10z" fill="#ffc4a0"/>
<path d="M30 34 22 8M26 22l-8-4M40 30 38 4M38 16l-6-4M50 28V2M60 30l2-26M62 16l6-4M70 34l8-26M74 22l8-4" stroke="#ff5a2e" stroke-width="5" stroke-linecap="round"/>
<path d="M28 36q22-10 44 0l-2 6q-20-8-40 0z" fill="#ffd36a" stroke="#5a3a06" stroke-width="1.2"/><circle cx="50" cy="35" r="3" fill="#7ae0ff"/>
<path d="M36 56q5-4 10 0M54 56q5-4 10 0" stroke="#3a0a06" stroke-width="1.8" fill="none"/><ellipse cx="41" cy="57" rx="3.6" ry="2.6" fill="#ffe27a"/><ellipse cx="59" cy="57" rx="3.6" ry="2.6" fill="#ffe27a"/><circle cx="41" cy="57" r="1.4" fill="#3a0a06"/><circle cx="59" cy="57" r="1.4" fill="#3a0a06"/>
<path d="M44 70q6 3 12 0" stroke="#8a1e1a" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="33" cy="64" r="2.4" fill="#e0502a" opacity=".5"/><circle cx="67" cy="64" r="2.4" fill="#e0502a" opacity=".5"/>
<path d="M30 58c0-14 8-24 20-25" stroke="#ffe2b0" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Kraken ancien": `<svg viewBox="0 0 100 100">
<path d="M18 62Q2 70 6 90q4-14 14-14 2 8-4 10 14 2 12-14zM82 62q16 8 12 28-4-14-14-14-2 8 4 10-14 2-12-14zM34 72q-10 14-2 26l8-4q-6-8 0-16zM66 72q10 14 2 26l-8-4q6-8 0-16z" fill="#2a4a5e" stroke="#081620" stroke-width="1.6"/>
<circle cx="10" cy="84" r="1.6" fill="#7fb0c0"/><circle cx="90" cy="84" r="1.6" fill="#7fb0c0"/>
<path d="M50 6c-24 0-34 20-34 40 0 22 14 36 34 36s34-14 34-36c0-20-10-40-34-40z" fill="#2f5468" stroke="#081620" stroke-width="2"/>
<path d="M50 6c-24 0-34 20-34 40 0 4 0 8 2 11 2-28 16-44 32-44s28 10 32 24c-2-18-12-31-32-31z" fill="#4a7a8a"/>
<path d="M26 22 16 6l18 10zM74 22 84 6 66 16zM40 12l4-10 6 8 6-8 4 10" fill="#c9b88a" stroke="#081620" stroke-width="1.4"/>
<circle cx="34" cy="30" r="3" fill="#8aa89a"/><circle cx="64" cy="26" r="2.4" fill="#8aa89a"/><path d="M62 34l6 10" stroke="#081620" stroke-width="1.6"/>
<circle cx="36" cy="52" r="9" fill="#ff5a3a" opacity=".3"/><circle cx="64" cy="52" r="9" fill="#ff5a3a" opacity=".3"/><circle cx="36" cy="52" r="6" fill="#ffb02e"/><circle cx="64" cy="52" r="6" fill="#ffb02e"/><rect x="34.6" y="47" width="2.8" height="10" rx="1.4" fill="#081620"/><rect x="62.6" y="47" width="2.8" height="10" rx="1.4" fill="#081620"/>
<path d="M24 40l18 7M76 40l-18 7" stroke="#081620" stroke-width="3.4" stroke-linecap="round"/><path d="M38 70q12-6 24 0" stroke="#081620" stroke-width="2.6" fill="none" stroke-linecap="round"/>
<path d="M19 50c0-24 14-40 31-41" stroke="#bff0ff" stroke-width="1.6" fill="none" opacity=".55"/></svg>`,
 "Prince des marées": `<svg viewBox="0 0 100 100">
<path d="M82 98V20" stroke="#8a6a1e" stroke-width="4"/><path d="M72 26V12M82 22V4M92 26V12M72 26q10 8 20 0" stroke="#ffd36a" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M12 98c4-18 16-26 38-26s34 8 38 26z" fill="#1f6a7a"/><path d="M24 84q8-6 14 0 8-6 14 0 8-6 14 0 8-6 14 0" stroke="#7ad6d0" stroke-width="1.6" fill="none"/>
<path d="M26 36q-8 24 2 40l8-30zM74 36q8 24-2 40l-8-30z" fill="#2a4fa0"/>
<path d="M28 52l-12-8 4 14zM72 52l12-8-4 14z" fill="#5ac0c0" stroke="#0a2a30" stroke-width="1.4"/>
<path d="M50 30c-14 0-22 10-22 24 0 14 10 24 22 24s22-10 22-24c0-14-8-24-22-24z" fill="#7ccdc0" stroke="#0a2a30" stroke-width="1.6"/>
<path d="M30 50c2-10 10-18 20-18 8 0 14 4 18 10-14-4-30-2-38 8z" fill="#aee8dc"/>
<path d="M28 40q22-14 44 0-4-14-22-14T28 40z" fill="#3a6fd0"/>
<path d="M32 32 30 16l8 8 6-12 6 10 6-10 6 12 8-8-2 16q-18-6-36 0z" fill="#ffd36a" stroke="#5a3a06" stroke-width="1.4"/><circle cx="50" cy="26" r="3" fill="#ff6a8a"/>
<circle cx="42" cy="54" r="4" fill="#fff"/><circle cx="58" cy="54" r="4" fill="#fff"/><circle cx="42.6" cy="54.6" r="2.4" fill="#0a5aa0"/><circle cx="57.4" cy="54.6" r="2.4" fill="#0a5aa0"/><circle cx="41.8" cy="53.6" r=".9" fill="#fff"/><circle cx="56.6" cy="53.6" r=".9" fill="#fff"/>
<path d="M35 47l11 2M65 47l-11 2" stroke="#0a2a30" stroke-width="2.2" stroke-linecap="round"/><path d="M44 68q6 3 12 0" stroke="#0a2a30" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M31 56c0-12 8-20 19-21" stroke="#e0fff8" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
 "Gardien stellaire": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="42" r="38" fill="none" stroke="#fff2a0" stroke-width="2" opacity=".5"/><path d="M50 0v8M50 76v8M12 42h-8M88 42h8M23 15l-5-5M77 15l5-5" stroke="#fff2a0" stroke-width="2" stroke-linecap="round" opacity=".7"/>
<path d="M8 98c0-14 8-26 20-28l22 6 22-6c12 2 20 14 20 28z" fill="#8aa0b8" stroke="#141f30" stroke-width="1.8"/>
<path d="M8 82c2-8 10-14 20-14 10 2 12 12 8 18zM92 82c-2-8-10-14-20-14-10 2-12 12-8 18z" fill="#dfe8f2" stroke="#141f30" stroke-width="1.6"/>
<path d="M50 14c-18 0-26 14-26 30 0 16 8 30 26 34 18-4 26-18 26-34 0-16-8-30-26-30z" fill="#c8d6e6" stroke="#141f30" stroke-width="1.8"/>
<path d="M50 14c-18 0-26 14-26 30 0 4 0 8 2 11 0-22 10-36 24-36s22 10 24 24c-2-18-10-29-24-29z" fill="#f4f8ff"/>
<path d="M30 46h40v6H54v18h-8V52H30z" fill="#141f30"/><path d="M32 48h36v2H52v18h-4V50H32z" fill="#bfffd0"/>
<path d="M50 20l2.4 6 6.4.4-5 4 1.6 6.2-5.4-3.4-5.4 3.4 1.6-6.2-5-4 6.4-.4z" fill="#ffd34a" stroke="#5a4a06" stroke-width="1"/>
<path d="M44 86l6 8 6-8-6-6z" fill="#ffd34a" stroke="#5a4a06" stroke-width="1"/>
<path d="M27 50c0-18 10-30 23-31" stroke="#ffffff" stroke-width="1.6" fill="none" opacity=".7"/></svg>`,
 "Dévoreur d'étoiles": `<svg viewBox="0 0 100 100">
<circle cx="50" cy="52" r="44" fill="#6a3ab0" opacity=".25"/>
<path d="M50 8C24 8 8 28 8 52s16 44 42 44 42-20 42-44S76 8 50 8z" fill="#2a1450" stroke="#0c0418" stroke-width="2"/>
<path d="M50 8C24 8 8 28 8 52c0 4 1 8 2 12 2-30 18-48 40-48 18 0 32 10 38 26-4-20-18-34-38-34z" fill="#4a2a8a"/>
<circle cx="50" cy="60" r="24" fill="#0c0418"/><circle cx="50" cy="60" r="12" fill="#1a0a3a"/><circle cx="50" cy="60" r="4" fill="#d8c4ff" opacity=".7"/>
<path d="M26 60l6-3-2 6 6-2-1 6 5-3v6l4-4 2 6 3-5 3 5 2-6 4 4v-6l5 3-1-6 6 2-2-6 6 3" fill="#e8e0ff" stroke="#0c0418" stroke-width=".8"/>
<path d="M32 76l5-1-1 5 5-2 1 5 4-4 4 5 4-5 4 4 1-5 5 2-1-5 5 1" fill="#e8e0ff" stroke="#0c0418" stroke-width=".8"/>
<circle cx="30" cy="30" r="4.6" fill="#fff2a0"/><circle cx="50" cy="22" r="5.4" fill="#fff2a0"/><circle cx="70" cy="30" r="4.6" fill="#fff2a0"/><circle cx="30" cy="30" r="2" fill="#0c0418"/><ellipse cx="50" cy="22" rx="1.6" ry="3.4" fill="#0c0418"/><circle cx="70" cy="30" r="2" fill="#0c0418"/>
<circle cx="42" cy="58" r="1.4" fill="#fff"/><circle cx="58" cy="64" r="1.2" fill="#fff"/><path d="M16 22l1 3 3 1-3 1-1 3-1-3-3-1 3-1zM86 74l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#fff2a0"/><circle cx="88" cy="24" r="1.6" fill="#fff"/><circle cx="14" cy="80" r="1.4" fill="#fff"/>
<path d="M12 50c2-24 18-38 38-39" stroke="#d8c4ff" stroke-width="1.6" fill="none" opacity=".6"/></svg>`,
});

