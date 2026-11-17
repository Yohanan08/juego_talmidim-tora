/* Dibujos de línea de las parashot (viewBox 0 0 400 300).
   Cada forma con class="p" se puede colorear en la app. */
const DIBUJOS = (function () {
  const f = (n) => Math.round(n * 10) / 10;
  const star = (cx, cy, r, c = "#ffd54f") => {
    const p = [];
    for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, q = i % 2 ? r * 0.45 : r; p.push(f(cx + q * Math.cos(a)) + "," + f(cy + q * Math.sin(a))); }
    return `<polygon class="p" fill="${c}" points="${p.join(" ")}"/>`;
  };
  const cloud = (x, y, w, c = "#ffffff") => `<path class="p" fill="${c}" d="M${x},${y} a${f(w * .2)},${f(w * .2)} 0 0 1 ${f(w * .25)},${f(-w * .18)} a${f(w * .28)},${f(w * .28)} 0 0 1 ${f(w * .5)},${f(-w * .02)} a${f(w * .2)},${f(w * .2)} 0 0 1 ${f(w * .25)},${f(w * .2)} a${f(w * .14)},${f(w * .14)} 0 0 1 ${f(-w * .05)},${f(w * .27)} h${f(-w * .9)} a${f(w * .14)},${f(w * .14)} 0 0 1 ${f(-w * .05)},${f(-w * .27)} z"/>`;
  const sky = (c) => `<rect class="p" x="0" y="0" width="400" height="300" fill="${c}"/>`;
  const ln = (d) => `<path fill="none" d="${d}"/>`;
  const C = (cx, cy, r, c) => `<circle class="p" cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
  const E = (cx, cy, rx, ry, c, rot) => `<ellipse class="p" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}"${rot !== undefined ? ` transform="rotate(${rot} ${cx} ${cy})"` : ""}/>`;
  const R = (x, y, w, h, c, rx = 0) => `<rect class="p" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${c}"/>`;
  const PG = (pts, c) => `<polygon class="p" fill="${c}" points="${pts}"/>`;
  const PA = (d, c) => `<path class="p" fill="${c}" d="${d}"/>`;
  const ojo = (x, y) => `<circle cx="${x}" cy="${y}" r="2.2" fill="#13233f" stroke="none"/>`;
  const sun = (cx, cy, r) => {
    let rays = "";
    for (let i = 0; i < 8; i++) { const a = Math.PI / 4 * i; rays += `M${f(cx + (r + 7) * Math.cos(a))},${f(cy + (r + 7) * Math.sin(a))} L${f(cx + (r + 18) * Math.cos(a))},${f(cy + (r + 18) * Math.sin(a))} `; }
    return ln(rays) + C(cx, cy, r, "#ffd54f");
  };
  const sheep = (x, y, s = 1) => R(f(x - 14 * s), f(y + 12 * s), f(6 * s), f(15 * s), "#5d4037") + R(f(x + 8 * s), f(y + 12 * s), f(6 * s), f(15 * s), "#5d4037")
    + E(x, y, f(26 * s), f(17 * s), "#ffffff") + E(f(x + 26 * s), f(y - 8 * s), f(10 * s), f(9 * s), "#5d4037") + `<circle cx="${f(x + 29 * s)}" cy="${f(y - 10 * s)}" r="1.6" fill="#fff" stroke="none"/>`;
  const tent = (x, y, w, h, c1, c2) => PG(`${x},${y} ${x + w / 2},${y - h} ${x + w},${y}`, c1) + PG(`${f(x + w * .38)},${y} ${x + w / 2},${f(y - h * .55)} ${f(x + w * .62)},${y}`, c2);
  const palm = (x, y, h) => {
    let s = PA(`M${x - 6},${y} L${x - 2},${y - h} L${x + 6},${y - h} L${x + 8},${y} z`, "#8d6e63");
    [200, 240, 270, 300, 340].forEach(a => { const g = a * Math.PI / 180; s += E(f(x + 2 + 24 * Math.cos(g)), f(y - h + 24 * Math.sin(g)), 26, 8, "#43a047", a); });
    return s;
  };
  const pyramid = (x, y, w, h) => PG(`${x},${y} ${x + w / 2},${y - h} ${x + w},${y}`, "#e6c36a") + PG(`${x + w / 2},${y - h} ${x + w},${y} ${f(x + w * .72)},${y}`, "#cfa84a");
  const waves = (y, c) => PA(`M0,${y} q25,-14 50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 V300 H0 z`, c);
  const heart = (cx, cy, s, c) => PA(`M${cx},${f(cy + s * .9)} C${f(cx - s * 1.4)},${f(cy - s * .2)} ${f(cx - s * .6)},${f(cy - s * 1.1)} ${cx},${f(cy - s * .35)} C${f(cx + s * .6)},${f(cy - s * 1.1)} ${f(cx + s * 1.4)},${f(cy - s * .2)} ${cx},${f(cy + s * .9)} z`, c);
  const stars = (list, c) => list.map(s => star(s[0], s[1], s[2], c)).join("");

  const D = [];

  // 1 Bereshit — la creación
  D.push(sky("#bfe3ff") + sun(70, 62, 30) + PA("M335,28 a26,26 0 1 0 26,40 a20,20 0 1 1 -26,-40z", "#fff9c4")
    + stars([[250, 40, 10], [300, 88, 8], [368, 112, 7]]) + cloud(130, 78, 74)
    + PA("M0,215 Q100,160 210,205 T400,185 V300 H0z", "#7cb342")
    + R(288, 150, 16, 62, "#8d6e63") + C(296, 128, 38, "#43a047") + C(280, 120, 6, "#e53935") + C(306, 112, 6, "#e53935") + C(300, 140, 6, "#e53935")
    + ln("M150,224 V202") + [0, 72, 144, 216, 288].map(a => C(f(150 + 9 * Math.cos(a * Math.PI / 180)), f(194 + 9 * Math.sin(a * Math.PI / 180)), 6, "#f48fb1")).join("") + C(150, 194, 5, "#fdd835")
    + PG("200,108 216,88 214,108", "#c62828") + E(205, 110, 16, 9, "#ef5350") + PG("220,107 231,110 220,114", "#fb8c00") + ojo(214, 108)
    + waves(262, "#4fc3f7") + PG("98,282 84,272 84,292", "#fb8c00") + E(120, 282, 22, 10, "#ff9800") + ojo(132, 280));

  // 2 Nóaj — la tevá y el arcoíris
  D.push(sky("#cfe8ff")
    + ["#e53935", "#fdd835", "#43a047", "#1e88e5"].map((c, k) => { const r = 175 - 14 * k; return PA(`M${200 - r},205 A${r},${r} 0 0 1 ${200 + r},205 L${200 + r - 14},205 A${r - 14},${r - 14} 0 0 0 ${200 - r + 14},205 z`, c); }).join("")
    + cloud(2, 222, 96) + cloud(302, 222, 96)
    + PG("318,78 330,56 335,80", "#eeeeee") + E(325, 82, 18, 10, "#ffffff") + C(343, 75, 7, "#ffffff") + PG("349,73 358,76 349,79", "#fb8c00") + E(364, 80, 7, 3.5, "#43a047", 20) + ojo(345, 74)
    + PG("120,172 200,140 280,172", "#bf360c") + R(135, 172, 130, 42, "#ffcc80") + R(190, 184, 20, 30, "#6d4c41") + C(158, 191, 8, "#81d4fa") + C(242, 191, 8, "#81d4fa")
    + PA("M85,212 H315 L288,264 H112z", "#8d6e63") + ln("M98,232 H302")
    + waves(252, "#4fc3f7"));

  // 3 Lej Lejá — cuenta las estrellas
  D.push(sky("#1a2a5e") + C(60, 55, 24, "#fff9c4")
    + stars([[130, 40, 9], [190, 78, 7], [240, 35, 10], [300, 62, 8], [350, 30, 7], [362, 98, 9], [112, 102, 7], [272, 114, 6], [170, 128, 6], [330, 140, 6]])
    + PA("M0,232 Q120,182 240,227 T400,212 V300 H0z", "#e0b062")
    + tent(120, 238, 62, 46, "#1565c0", "#4e342e") + tent(215, 244, 130, 96, "#c62828", "#4e342e") + palm(62, 250, 82)
    + PA("M0,268 Q150,238 400,264 V300 H0z", "#c99a4b"));

  // 4 Vayerá — Adonai proveerá
  D.push(sky("#cfe8ff") + sun(335, 55, 26) + cloud(40, 70, 80)
    + PG("40,300 200,70 360,300", "#9e9e9e") + PG("170,113 200,70 230,113 212,103 200,118 188,103", "#ffffff")
    + PA("M0,246 Q200,216 400,246 V300 H0z", "#7cb342")
    + R(262, 228, 34, 22, "#bdbdbd", 4) + R(296, 228, 34, 22, "#bdbdbd", 4) + R(330, 228, 34, 22, "#bdbdbd", 4) + R(279, 206, 34, 22, "#bdbdbd", 4) + R(313, 206, 34, 22, "#bdbdbd", 4)
    + R(276, 195, 74, 11, "#8d6e63", 5)
    + C(58, 236, 24, "#2e7d32") + C(92, 224, 27, "#2e7d32") + C(150, 232, 22, "#2e7d32")
    + sheep(118, 250, 1) + ln("M146,236 q-12,-10 0,-14 q11,2 5,11"));

  // 5 Jayé Sará — Rivká en el pozo
  D.push(sky("#ffe9c4") + sun(300, 52, 26)
    + PA("M0,236 Q200,216 400,236 V300 H0z", "#e0b062") + palm(360, 246, 96)
    + R(152, 130, 10, 64, "#8d6e63") + R(238, 130, 10, 64, "#8d6e63") + R(142, 120, 116, 12, "#6d4c41", 3) + ln("M200,132 V166")
    + R(150, 192, 100, 60, "#bdbdbd") + ln("M150,212 H250 M150,232 H250 M183,192 V212 M217,192 V212 M166,212 V232 M200,212 V232 M234,212 V232 M183,232 V252 M217,232 V252")
    + E(200, 192, 50, 13, "#4fc3f7") + PA("M190,166 H210 L207,186 H193z", "#9e9e9e")
    + PA("M283,214 h24 v8 q16,10 16,28 q0,17 -28,17 q-28,0 -28,-17 q0,-18 16,-28z", "#d2691e")
    + R(48, 222, 8, 36, "#c68a4a") + R(64, 222, 8, 36, "#c68a4a") + R(90, 222, 8, 36, "#c68a4a") + R(106, 222, 8, 36, "#c68a4a")
    + PG("108,206 122,164 135,168 124,214", "#d9a05b") + E(80, 190, 18, 14, "#d9a05b") + E(80, 211, 40, 20, "#d9a05b") + E(135, 160, 14, 9, "#d9a05b") + ojo(139, 158));

  // 6 Toldot — el guiso de lentejas
  D.push(sky("#ffe0b2") + R(0, 236, 400, 64, "#a1887f")
    + PA("M330,30 Q400,85 330,140 L337,140 Q390,85 337,30z", "#8d6e63") + ln("M333,32 V138") + ln("M296,85 H372") + PG("372,78 387,85 372,92", "#9e9e9e")
    + ln("M170,140 q-10,-12 0,-24 q10,-12 0,-24 M200,138 q-10,-12 0,-24 q10,-12 0,-24 M230,140 q-10,-12 0,-24 q10,-12 0,-24")
    + PA("M120,165 H280 Q272,240 200,240 Q128,240 120,165z", "#d2691e") + E(200, 165, 80, 15, "#c0392b")
    + [[170, 163], [195, 168], [215, 161], [238, 166], [185, 159]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="none"/>`).join("")
    + E(62, 226, 44, 20, "#e0a458") + ln("M40,220 l8,-9 M58,217 l8,-9 M76,220 l8,-9")
    + R(330, 213, 54, 7, "#bdbdbd", 3) + E(318, 216, 16, 10, "#bdbdbd"));

  // 7 Vayetzé — la escalera
  D.push(sky("#1a2a5e") + C(237, 30, 46, "#fff59d")
    + stars([[40, 40, 8], [92, 92, 7], [335, 78, 9], [372, 146, 7], [58, 152, 6], [322, 178, 6]])
    + (() => { let s = ""; for (let k = 1; k <= 7; k++) { const t = k / 8, y = f(278 - 248 * t), xl = f(160 + 61 * t), xr = f(244 + 11 * t); s += PG(`${xl},${y} ${xr},${y} ${xr},${f(y - 8)} ${xl},${f(y - 8)}`, "#c68a4a"); } return s; })()
    + PG("150,278 163,278 224,30 213,30", "#d7a86e") + PG("240,278 253,278 262,30 251,30", "#d7a86e")
    + cloud(140, 62, 92) + cloud(250, 74, 84)
    + PA("M0,264 Q200,242 400,264 V300 H0z", "#2e7d32")
    + E(66, 264, 30, 13, "#9e9e9e") + C(90, 250, 11, "#e0a878") + PA("M98,266 Q100,238 122,242 Q142,246 146,268z", "#1e88e5"));

  // 8 Vayishlaj — amanecer junto al Yabok
  D.push(sky("#ffe0b2")
    + (() => { let s = ""; for (let a = -165; a <= -15; a += 25) { const g = a * Math.PI / 180, g1 = (a - 6) * Math.PI / 180, g2 = (a + 6) * Math.PI / 180; s += PG(`${f(200 + 70 * Math.cos(g1))},${f(170 + 70 * Math.sin(g1))} ${f(200 + 100 * Math.cos(g))},${f(170 + 100 * Math.sin(g))} ${f(200 + 70 * Math.cos(g2))},${f(170 + 70 * Math.sin(g2))}`, "#ffb74d"); } return s; })()
    + C(200, 168, 56, "#ffd54f")
    + PA("M0,300 V176 Q90,126 210,186 V300z", "#7cb342") + PA("M400,300 V170 Q300,130 190,186 V300z", "#9ccc65")
    + PA("M185,186 Q232,216 190,246 Q150,276 185,300 H262 Q230,272 262,246 Q294,216 216,186z", "#4fc3f7")
    + E(214, 232, 9, 5, "#9e9e9e") + E(204, 264, 10, 5, "#9e9e9e")
    + sheep(66, 238, 0.9) + sheep(118, 264, 0.8) + tent(300, 258, 76, 56, "#c62828", "#4e342e"));

  // 9 Vayeshev — la túnica de colores
  D.push(sky("#e3f2fd") + sun(45, 45, 20) + C(356, 45, 18, "#fff9c4")
    + (() => { let s = ""; for (let i = 0; i < 11; i++) s += star(95 + i * 21, 36 + (i % 2 ? 14 : 0), 6.5); return s; })()
    + PA("M0,264 Q200,246 400,264 V300 H0z", "#a5d6a7")
    + PG("150,80 88,152 116,174 163,130", "#8e24aa") + PG("250,80 312,152 284,174 237,130", "#8e24aa")
    + (() => { const col = ["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#8e24aa"], w = (y) => 50 + (y - 80) * 0.17; let s = "";
      for (let k = 0; k < 6; k++) { const y0 = 80 + k * 30, y1 = y0 + 30; s += PG(`${f(200 - w(y0))},${y0} ${f(200 + w(y0))},${y0} ${f(200 + w(y1))},${y1} ${f(200 - w(y1))},${y1}`, col[k]); } return s; })()
    + PA("M180,80 Q200,104 220,80z", "#ffffff"));

  // 10 Miketz — los graneros de Yosef
  D.push(sky("#cfe8ff") + sun(55, 50, 24) + cloud(150, 60, 70) + pyramid(255, 215, 140, 100)
    + PA("M0,215 H400 V300 H0z", "#e0b062")
    + [30, 100].map(x => R(x, 150, 54, 82, "#e6b566") + PA(`M${x},150 a27,27 0 0 1 54,0z`, "#c98f3c") + R(x + 20, 205, 14, 27, "#6d4c41")).join("")
    + [190, 228, 266].map(x => { let s = ln(`M${x},258 V150`); for (let k = 0; k < 5; k++) s += E(x - 7, 162 + k * 14, 8, 4.5, "#fdd835", 35) + E(x + 7, 162 + k * 14, 8, 4.5, "#fdd835", -35); return s + E(x, 146, 4.5, 9, "#fdd835"); }).join("")
    + waves(272, "#4fc3f7"));

  // 11 Vayigash — las carretas de Yosef
  D.push(sky("#cfe8ff") + sun(350, 50, 24) + pyramid(15, 212, 120, 86)
    + PA("M0,212 H400 V300 H0z", "#e0b062") + PA("M0,246 H400 V288 H0z", "#f3d9a4")
    + heart(200, 72, 28, "#e53935") + heart(122, 98, 14, "#f48fb1") + heart(278, 98, 14, "#f48fb1")
    + E(165, 160, 22, 16, "#f5deb3") + E(245, 160, 22, 16, "#f5deb3") + E(205, 154, 24, 18, "#f5deb3")
    + R(130, 168, 150, 48, "#8d6e63", 6) + ln("M130,184 H280 M130,200 H280 M280,198 L345,214")
    + [165, 245].map(x => C(x, 230, 26, "#bdbdbd") + ln(`M${x - 26},230 H${x + 26} M${x},204 V256 M${x - 18},212 L${x + 18},248 M${x + 18},212 L${x - 18},248`) + C(x, 230, 7, "#6d4c41")).join(""));

  // 12 Vayejí — el León de Yehudá
  D.push(sky("#fff8e1")
    + (() => { let s = ""; for (let i = 0; i < 12; i++) { const a = Math.PI + (i / 11) * Math.PI; s += star(f(200 + 168 * Math.cos(a)), f(180 + 148 * Math.sin(a)), 9); } return s; })()
    + (() => { let s = ""; for (let i = 0; i < 14; i++) { const a = i / 14 * 2 * Math.PI, a1 = a - 0.2, a2 = a + 0.2; s += PG(`${f(200 + 74 * Math.cos(a1))},${f(172 + 74 * Math.sin(a1))} ${f(200 + 98 * Math.cos(a))},${f(172 + 98 * Math.sin(a))} ${f(200 + 74 * Math.cos(a2))},${f(172 + 74 * Math.sin(a2))}`, "#d35400"); } return s; })()
    + C(200, 172, 78, "#e67e22") + C(152, 114, 14, "#f6b93b") + C(248, 114, 14, "#f6b93b") + C(200, 176, 54, "#f6c85f")
    + `<circle cx="180" cy="164" r="5" fill="#13233f" stroke="none"/><circle cx="220" cy="164" r="5" fill="#13233f" stroke="none"/>`
    + PG("190,182 210,182 200,194", "#6d4c41") + ln("M200,194 V202 M200,202 q-10,10 -20,2 M200,202 q10,10 20,2 M166,190 H138 M166,198 L140,207 M234,190 H262 M234,198 L260,207")
    + PG("168,94 168,62 184,78 200,54 216,78 232,62 232,94", "#fdd835")
    + R(340, 120, 8, 150, "#8d6e63", 4) + C(344, 110, 13, "#fdd835"));

  return D;
})();

/* Devuelve el SVG completo de un dibujo */
function dibujoSVG(i, extra) {
  return `<svg class="dibujo" viewBox="0 0 400 300" ${extra || ""}><g stroke="#13233f" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${DIBUJOS[i]}</g></svg>`;
}
