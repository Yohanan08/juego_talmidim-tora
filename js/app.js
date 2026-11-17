/* Talmidim de la Torá — lógica de la app */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const main = $("#contenido");

  /* ---------- Guardado local ---------- */
  const guardado = {
    get(k, d) { try { const v = localStorage.getItem("tt_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("tt_" + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };
  let zona = guardado.get("zona", "ninos");
  let estrellas = guardado.get("estrellas", 0);
  let reloj = null, sensor = null;
  function quitarSensor() { if (sensor) { window.removeEventListener("deviceorientation", sensor); sensor = null; } }

  const mezclar = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esNino = () => zona === "ninos";

  function pintarBarra() {
    document.body.dataset.zona = zona;
    $("#zonaBtn").textContent = esNino() ? "🧒 Niños" : "🧑 Jóvenes";
    $("#estrellas").textContent = "⭐ " + estrellas;
  }
  function ganar(n) { if (n > 0) { estrellas += n; guardado.set("estrellas", estrellas); pintarBarra(); } }

  $("#zonaBtn").addEventListener("click", () => {
    zona = esNino() ? "jovenes" : "ninos";
    guardado.set("zona", zona);
    pintarBarra(); ruta();
  });

  const firma = () => `<footer class="firma"><p>${APP.despedida}<br><strong>${APP.ministerio}</strong> · Am Israel Jai<br>
    <a href="${APP.enlace}" target="_blank" rel="noopener">Más recursos</a></p></footer>`;

  /* ---------- Inicio ---------- */
  function inicio() {
    const v = VERSOS[new Date().getDay() % VERSOS.length];
    main.innerHTML = `
      <section class="heroe">
        <h1>¡Shalom${esNino() ? ", talmid" : ""}!</h1>
        <p>${APP.lema}</p>
      </section>
      <section class="verso" aria-label="Para memorizar hoy">
        <small>Para memorizar hoy</small><br>
        <q>${v.t}</q><cite>${v.r}</cite>
      </section>
      <section class="rejilla">
        <a class="tarjeta" style="--c:#1e88e5" href="#/historias"><span class="ico">📖</span><strong>Historias</strong><small>De Bereshit a Devarim</small></a>
        <a class="tarjeta" style="--c:#d81b60" href="#/juegos"><span class="ico">🎮</span><strong>Juegos</strong><small>Trivia, memoria y más</small></a>
        <a class="tarjeta" style="--c:#8e24aa" href="#/alefbet"><span class="ico">🔤</span><strong>Alef-Bet</strong><small>Letras y palabras</small></a>
        <a class="tarjeta" style="--c:#f9a825" href="#/parasha"><span class="ico">📜</span><strong>Parashá</strong><small>La porción de la semana</small></a>
        <a class="tarjeta" style="--c:#43a047" href="#/mesa"><span class="ico">🎲</span><strong>En familia</strong><small>Juegos de mesa para imprimir</small></a>
      </section>
      <p class="sub" style="margin-top:16px">Estás en la zona de <strong>${esNino() ? "niños" : "jóvenes"}</strong>. Cámbiala con el botón dorado de arriba.</p>
      ${firma()}`;
  }

  /* ---------- Historias ---------- */
  function historias() {
    main.innerHTML = `<h1>Historias de la Torá</h1><p class="sub">Toca una historia para leerla.</p>
      <section class="rejilla ancha">${HISTORIAS.map(h => `
        <a class="tarjeta" style="--c:${h.color}" href="#/historia/${h.id}">
          <span class="ico">${h.emoji}</span><strong>${h.titulo}</strong><small>${h.ref}</small>
          ${guardado.get("leida_" + h.id, false) ? "<small> · ✅ Leída</small>" : ""}</a>`).join("")}
      </section>`;
  }
  function historia(id) {
    const h = HISTORIAS.find(x => x.id === id);
    if (!h) return historias();
    const leida = guardado.get("leida_" + h.id, false);
    main.innerHTML = `<a class="volver" href="#/historias">← Historias</a>
      <article class="historia">
        <span class="emoji" aria-hidden="true">${h.emoji}</span>
        <h1>${h.titulo}</h1><p class="sub">${h.ref}</p>
        ${(esNino() ? h.ninos : h.jovenes).map(p => `<p>${p}</p>`).join("")}
        <section class="caja mashiaj"><h3>✨ El Mashíaj en esta historia</h3><p>${h.mashiaj}</p></section>
        <section class="caja pregunta"><h3>💬 Para conversar en familia</h3><p>${h.pregunta}</p></section>
        <p class="fila"><button class="btn oro" id="leida" ${leida ? "disabled" : ""}>${leida ? "✅ Ya la leíste" : "¡La leí! +2 ⭐"}</button></p>
      </article>`;
    $("#leida").addEventListener("click", (e) => {
      guardado.set("leida_" + h.id, true); ganar(2);
      e.target.disabled = true; e.target.textContent = "✅ Ya la leíste";
    });
  }

  /* ---------- Juegos ---------- */
  function juegos() {
    const t = (c, r, ico, nom, sub) => `<a class="tarjeta" style="--c:${c}" href="#/juego/${r}"><span class="ico">${ico}</span><strong>${nom}</strong><small>${sub}</small></a>`;
    const lista = esNino() ? [
      t("#d81b60", "trivia", "❓", "Trivia de la Torá", "8 preguntas fáciles"),
      t("#1e88e5", "memoria", "🧠", "Memoria de dibujos", "Encuentra las parejas"),
      t("#43a047", "sopa", "🔎", "Sopa de letras", "6 palabras"),
      t("#f9a825", "ordena", "🔢", "Ordena la historia", "¿Qué pasó primero?"),
      t("#8e24aa", "quien", "🎭", "¿Quién soy?", "Mímica con el teléfono en la frente")
    ] : [
      t("#d81b60", "trivia", "⏱️", "Desafío contra reloj", "10 preguntas · 15 segundos cada una"),
      t("#f9a825", "versiculo", "🧩", "Arma el versículo", "Pon las palabras en orden"),
      t("#00897b", "libro", "📚", "¿En qué libro está?", "Ubica cada suceso en la Torá"),
      t("#5e35b1", "oculta", "🕯️", "Palabra oculta", "Descúbrela antes de que se apaguen las luces"),
      t("#1e88e5", "memoria", "🧠", "Memoria en hebreo", "Palabra hebrea y significado"),
      t("#43a047", "sopa", "🔎", "Sopa de letras experta", "9 palabras, también en diagonal"),
      t("#8e24aa", "quien", "🎭", "¿Quién soy?", "28 personajes · mímica en la frente")
    ];
    main.innerHTML = `<h1>Juegos ${esNino() ? "para niños" : "para jóvenes"}</h1>
      <p class="sub">Gana estrellas mientras aprendes. ${esNino() ? "" : "Aquí los retos son más exigentes."}</p>
      <section class="rejilla ancha">${lista.join("")}</section>`;
  }
  const cabezaJuego = (t) => `<a class="volver" href="#/juegos">← Juegos</a><h1>${t}</h1>`;

  function trivia() {
    clearInterval(reloj);
    const joven = !esNino(), titulo = joven ? "Desafío contra reloj" : "Trivia de la Torá";
    const preguntas = mezclar(TRIVIA[zona]).slice(0, joven ? 10 : 8);
    let i = 0, puntos = 0;
    function pinta() {
      clearInterval(reloj);
      if (i >= preguntas.length) {
        const premio = joven ? puntos * 2 : puntos, meta = Math.ceil(preguntas.length * 0.7);
        ganar(premio);
        main.innerHTML = `${cabezaJuego(titulo)}<section class="final">
          <p class="grande">${puntos >= meta ? "🏆" : "💪"}</p><h2>${puntos} de ${preguntas.length}</h2>
          <p>${puntos >= meta ? "¡Kol hakavod! ¡Muy bien!" : "¡Sigue estudiando, vas muy bien!"} Ganaste ${premio} ⭐</p>
          <p class="fila" style="justify-content:center"><button class="btn" id="otra">Jugar otra vez</button></p></section>`;
        $("#otra").addEventListener("click", trivia);
        return;
      }
      const q = preguntas[i], correcta = q.o[0], ops = mezclar(q.o);
      main.innerHTML = `${cabezaJuego(titulo)}
        <p class="progreso"><i style="width:${(i / preguntas.length) * 100}%"></i></p>
        <p class="sub">Pregunta ${i + 1} de ${preguntas.length}${joven ? ' · <strong class="tiempo">⏱️ <span id="tiempo">15</span> s</strong>' : ""}</p><h2>${q.p}</h2>
        <section class="opciones">${ops.map(o => `<button class="opcion">${o}</button>`).join("")}</section>
        <p class="aviso" id="aviso" aria-live="polite"></p>
        <p class="fila"><button class="btn" id="sig" hidden>Siguiente →</button></p>`;
      const responder = (b) => {
        if (!$("#sig").hidden) return;
        clearInterval(reloj);
        const bien = !!b && b.textContent === correcta;
        if (bien) puntos++;
        main.querySelectorAll(".opcion").forEach(x => {
          if (x.textContent === correcta) x.classList.add("bien");
          else if (x === b) x.classList.add("error");
        });
        $("#aviso").textContent = (bien ? "¡Correcto! " : (b ? "" : "¡Se acabó el tiempo! ") + "La respuesta es: " + correcta + ". ") + (q.r ? "📖 " + q.r : "");
        $("#sig").hidden = false; $("#sig").focus();
      };
      main.querySelectorAll(".opcion").forEach(b => b.addEventListener("click", () => responder(b)));
      $("#sig").addEventListener("click", () => { i++; pinta(); });
      if (joven) {
        let s = 15;
        reloj = setInterval(() => {
          if (!$("#tiempo")) return clearInterval(reloj);
          s--; $("#tiempo").textContent = s;
          if (s <= 0) responder(null);
        }, 1000);
      }
    }
    pinta();
  }

  /* ---------- Juegos solo para jóvenes ---------- */
  function versiculo() {
    const v = VERSOS[Math.floor(Math.random() * VERSOS.length)];
    let banco = mezclar(v.t.split(" ").map((w, k) => ({ w, k }))), puesto = [], listo = false;
    function pinta(msg) {
      main.innerHTML = `${cabezaJuego("Arma el versículo")}
        <p class="sub">Toca las palabras en orden. Toca una ya puesta para devolverla. <strong>${v.r}</strong></p>
        <section class="armado" id="armado">${puesto.map((x, n) => `<button class="chip puesta" data-n="${n}" ${listo ? "disabled" : ""}>${x.w}</button>`).join("") || '<span class="sub">Aquí se arma el versículo…</span>'}</section>
        <section class="banco">${banco.map((x, n) => `<button class="chip" data-n="${n}">${x.w}</button>`).join("")}</section>
        <p class="aviso" aria-live="polite">${msg || ""}</p>
        ${listo ? '<p class="fila"><button class="btn oro" id="otra">Otro versículo</button></p>' : ""}`;
      main.querySelectorAll(".banco .chip").forEach(b => b.addEventListener("click", () => {
        puesto.push(banco.splice(+b.dataset.n, 1)[0]);
        if (!banco.length) {
          if (puesto.map(x => x.w).join(" ") === v.t) { listo = true; ganar(4); return pinta("🎉 ¡Perfecto! +4 ⭐"); }
          return pinta("Casi… hay palabras fuera de lugar. Toca las que quieras devolver.");
        }
        pinta();
      }));
      main.querySelectorAll(".armado .chip").forEach(b => b.addEventListener("click", () => {
        banco.push(puesto.splice(+b.dataset.n, 1)[0]); pinta();
      }));
      if (listo) $("#otra").addEventListener("click", versiculo);
    }
    pinta();
  }

  function libro() {
    const qs = mezclar(LIBROS_Q).slice(0, 8);
    let i = 0, puntos = 0;
    function pinta() {
      if (i >= qs.length) {
        ganar(puntos);
        main.innerHTML = `${cabezaJuego("¿En qué libro está?")}<section class="final">
          <p class="grande">${puntos >= 6 ? "🏆" : "📚"}</p><h2>${puntos} de ${qs.length}</h2><p>Ganaste ${puntos} ⭐</p>
          <p class="fila" style="justify-content:center"><button class="btn" id="otra">Jugar otra vez</button></p></section>`;
        $("#otra").addEventListener("click", libro);
        return;
      }
      const [hecho, cual] = qs[i];
      main.innerHTML = `${cabezaJuego("¿En qué libro está?")}
        <p class="progreso"><i style="width:${(i / qs.length) * 100}%"></i></p>
        <p class="sub">Suceso ${i + 1} de ${qs.length}</p><h2 id="hecho">${hecho}</h2>
        <section class="libros">${LIBROS.map((l, n) => `<button class="opcion" data-n="${n}">${l}</button>`).join("")}</section>
        <p class="aviso" id="aviso" aria-live="polite"></p>`;
      let hecha = false;
      main.querySelectorAll(".libros .opcion").forEach(b => b.addEventListener("click", () => {
        if (hecha) return; hecha = true;
        const bien = +b.dataset.n === cual;
        if (bien) puntos++;
        main.querySelectorAll(".libros .opcion").forEach(x => {
          if (+x.dataset.n === cual) x.classList.add("bien"); else if (x === b) x.classList.add("error");
        });
        $("#aviso").textContent = bien ? "¡Correcto!" : "Está en " + LIBROS[cual] + ".";
        const marca = $("#hecho");
        setTimeout(() => { if ($("#hecho") === marca) { i++; pinta(); } }, 1200);
      }));
    }
    pinta();
  }

  function oculta() {
    const [pal, pista] = OCULTAS[Math.floor(Math.random() * OCULTAS.length)];
    const usadas = new Set(); let luces = 6, fin = "";
    function pinta() {
      const gano = pal.split("").every(c => usadas.has(c));
      if (gano && !fin) { fin = "gano"; ganar(4); }
      if (luces <= 0 && !fin) fin = "perdio";
      main.innerHTML = `${cabezaJuego("Palabra oculta")}
        <p class="sub">Pista: <strong>${pista}</strong></p>
        <p class="luces" aria-label="Luces: ${luces} de 6">${"🕯️".repeat(luces)}${"▫️".repeat(6 - luces)}</p>
        <p class="huecos">${pal.split("").map(c => `<span>${usadas.has(c) || fin ? c : "&nbsp;"}</span>`).join("")}</p>
        <p class="aviso" aria-live="polite">${fin === "gano" ? "🎉 ¡La descubriste! +4 ⭐" : fin === "perdio" ? "Se apagaron las luces. Era: " + pal : ""}</p>
        ${fin ? '<p class="fila" style="justify-content:center"><button class="btn oro" id="otra">Otra palabra</button></p>'
          : `<section class="teclado">${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c => `<button ${usadas.has(c) ? "disabled" : ""}>${c}</button>`).join("")}</section>`}`;
      if (fin) return $("#otra").addEventListener("click", oculta);
      main.querySelectorAll(".teclado button").forEach(b => b.addEventListener("click", () => {
        const c = b.textContent; usadas.add(c);
        if (!pal.includes(c)) luces--;
        pinta();
      }));
    }
    pinta();
  }

  function memoria() {
    let cartas;
    if (esNino()) {
      cartas = MEMORIA_NINOS.flatMap((p, k) => [{ k, html: p[0] }, { k, html: p[0] }]);
    } else {
      cartas = mezclar(ALEFBET).slice(0, 8).flatMap((l, k) => [
        { k, html: `<span class="heb">${l[3]}</span>` },
        { k, html: `<span class="txt">${l[4]}<br>${l[5]}</span>` }]);
    }
    cartas = mezclar(cartas);
    let abiertas = [], hechas = 0, intentos = 0, bloqueo = false;
    main.innerHTML = `${cabezaJuego("Memoria")}
      <p class="sub">${esNino() ? "Encuentra las dos cartas iguales." : "Une cada palabra hebrea con cómo se dice y qué significa."}</p>
      <section class="memoria">${cartas.map((c, n) => `<button class="carta" data-n="${n}" aria-label="Carta ${n + 1}"></button>`).join("")}</section>
      <p class="aviso" id="aviso" aria-live="polite"></p>`;
    main.querySelectorAll(".carta").forEach(b => b.addEventListener("click", () => {
      const n = +b.dataset.n;
      if (bloqueo || b.classList.contains("vista") || b.classList.contains("lista")) return;
      b.classList.add("vista"); b.innerHTML = cartas[n].html; abiertas.push(b);
      if (abiertas.length < 2) return;
      intentos++;
      const [a, c] = abiertas;
      if (cartas[+a.dataset.n].k === cartas[+c.dataset.n].k) {
        a.classList.replace("vista", "lista"); c.classList.replace("vista", "lista");
        abiertas = []; hechas++;
        if (hechas === cartas.length / 2) {
          const premio = intentos <= 12 ? 5 : 3; ganar(premio);
          $("#aviso").innerHTML = `🎉 ¡Lo lograste en ${intentos} intentos! +${premio} ⭐ <button class="btn" id="otra">Otra vez</button>`;
          $("#otra").addEventListener("click", memoria);
        }
      } else {
        bloqueo = true;
        setTimeout(() => { [a, c].forEach(x => { x.classList.remove("vista"); x.innerHTML = ""; }); abiertas = []; bloqueo = false; }, 900);
      }
    }));
  }

  function sopa() {
    const palabras = SOPA[zona], N = esNino() ? 9 : 11;
    const dirs = esNino() ? [[1, 0], [0, 1]] : [[1, 0], [0, 1], [1, 1], [1, -1]];
    let g;
    armar: for (let intento = 0; intento < 200; intento++) {
      g = Array.from({ length: N }, () => Array(N).fill(""));
      for (const w of palabras) {
        let puesto = false;
        for (let t = 0; t < 200 && !puesto; t++) {
          const [dx, dy] = dirs[Math.floor(Math.random() * dirs.length)];
          const x = Math.floor(Math.random() * N), y = Math.floor(Math.random() * N);
          const fx = x + dx * (w.length - 1), fy = y + dy * (w.length - 1);
          if (fx < 0 || fx >= N || fy < 0 || fy >= N) continue;
          let cabe = true;
          for (let k = 0; k < w.length; k++) { const c = g[y + dy * k][x + dx * k]; if (c && c !== w[k]) { cabe = false; break; } }
          if (!cabe) continue;
          for (let k = 0; k < w.length; k++) g[y + dy * k][x + dx * k] = w[k];
          puesto = true;
        }
        if (!puesto) continue armar;
      }
      break;
    }
    const ABC = "ABCDEHIJKLMNORSTUVY";
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!g[y][x]) g[y][x] = ABC[Math.floor(Math.random() * ABC.length)];

    const halladas = new Set(); let ini = null;
    main.innerHTML = `${cabezaJuego("Sopa de letras")}
      <p class="sub">Toca la primera letra de la palabra y luego la última.</p>
      <ul class="palabras">${palabras.map(w => `<li data-w="${w}">${w}</li>`).join("")}</ul>
      <section class="sopa" style="grid-template-columns:repeat(${N},1fr)">${g.map((f, y) => f.map((c, x) =>
        `<button class="celda" data-x="${x}" data-y="${y}">${c}</button>`).join("")).join("")}</section>
      <p class="aviso" id="aviso" aria-live="polite"></p>`;
    const celda = (x, y) => main.querySelector(`.celda[data-x="${x}"][data-y="${y}"]`);
    main.querySelectorAll(".celda").forEach(b => b.addEventListener("click", () => {
      const x = +b.dataset.x, y = +b.dataset.y;
      if (!ini) { ini = { x, y, b }; b.classList.add("inicio"); return; }
      ini.b.classList.remove("inicio");
      const dx = Math.sign(x - ini.x), dy = Math.sign(y - ini.y);
      const largo = Math.max(Math.abs(x - ini.x), Math.abs(y - ini.y)) + 1;
      const recta = (x === ini.x || y === ini.y || Math.abs(x - ini.x) === Math.abs(y - ini.y));
      if (recta && largo > 1) {
        let s = "", cs = [];
        for (let k = 0; k < largo; k++) { const c = celda(ini.x + dx * k, ini.y + dy * k); s += c.textContent; cs.push(c); }
        const inv = s.split("").reverse().join("");
        const w = palabras.find(p => (p === s || p === inv) && !halladas.has(p));
        if (w) {
          halladas.add(w); cs.forEach(c => c.classList.add("hallada"));
          main.querySelector(`li[data-w="${w}"]`).classList.add("ok");
          if (halladas.size === palabras.length) {
            ganar(5);
            $("#aviso").innerHTML = `🎉 ¡Encontraste todas! +5 ⭐ <button class="btn" id="otra">Otra sopa</button>`;
            $("#otra").addEventListener("click", sopa);
          }
        }
      }
      ini = null;
    }));
  }

  function ordena() {
    const reto = ORDENES[Math.floor(Math.random() * ORDENES.length)];
    let orden = mezclar(reto.pasos);
    while (orden.every((p, i) => p === reto.pasos[i])) orden = mezclar(reto.pasos);
    let listo = false;
    function pinta(marcar) {
      main.innerHTML = `${cabezaJuego("Ordena la historia")}
        <h2>${reto.titulo}</h2><p class="sub">Usa las flechas para poner cada parte en su lugar.</p>
        <ol class="orden">${orden.map((p, i) => `<li class="${marcar ? (p === reto.pasos[i] ? "bien" : "error") : ""}">
          <span>${p}</span>
          <button data-i="${i}" data-d="-1" aria-label="Subir" ${i === 0 || listo ? "disabled" : ""}>▲</button>
          <button data-i="${i}" data-d="1" aria-label="Bajar" ${i === orden.length - 1 || listo ? "disabled" : ""}>▼</button></li>`).join("")}</ol>
        <p class="aviso" id="aviso" aria-live="polite"></p>
        <p class="fila"><button class="btn oro" id="ver">${listo ? "Otra historia" : "Comprobar"}</button></p>`;
      main.querySelectorAll(".orden button").forEach(b => b.addEventListener("click", () => {
        const i = +b.dataset.i, j = i + +b.dataset.d;
        [orden[i], orden[j]] = [orden[j], orden[i]]; pinta(false);
      }));
      $("#ver").addEventListener("click", () => {
        if (listo) return ordena();
        if (orden.every((p, i) => p === reto.pasos[i])) { listo = true; ganar(3); pinta(true); $("#aviso").textContent = "🎉 ¡Perfecto! +3 ⭐"; }
        else { pinta(true); $("#aviso").textContent = "Casi… revisa las que están en rojo."; }
      });
    }
    pinta(false);
  }

  /* ---------- ¿Quién soy? (mímica, inclinando el teléfono) ---------- */
  function quien() {
    clearInterval(reloj); quitarSensor();
    const mazo = mezclar(PERSONAJES.filter(p => esNino() ? p[2] === 1 : true));
    let i = 0, seg = 60, bien = [], paso = [], armado = false, pausa = true, audio = null, pantalla = null;
    main.innerHTML = `${cabezaJuego("¿Quién soy?")}
      <ol class="pasos">
        <li>Pon el teléfono en tu <strong>frente</strong>, derecho, con la pantalla hacia los demás. ¡Sin mirar!</li>
        <li>Los demás hacen la <strong>mímica</strong> del personaje, sin hablar.</li>
        <li>¿Adivinaste? Inclina el teléfono <strong>hacia abajo</strong> ⬇️ (pantalla mirando al piso). Sale «¡Correcto!» y aparece otro personaje.</li>
        <li>¿No sabes? Inclínalo <strong>hacia arriba</strong> ⬆️ (pantalla mirando al techo) para cambiarlo.</li>
        <li>Después de cada movimiento, vuelve el teléfono a la frente. Tienes 60 segundos.</li>
      </ol>
      <p class="fila"><button class="btn oro" id="ya">¡Empezar!</button></p>
      <p class="sub">Si tu teléfono pregunta por el permiso de movimiento, toca «Permitir». Si no tiene sensor, usa los botones de la pantalla.</p>`;

    const sonido = (ok) => {
      try {
        if (navigator.vibrate) navigator.vibrate(ok ? 120 : [60, 60, 60]);
        if (!audio) return;
        const o = audio.createOscillator(), g = audio.createGain();
        o.frequency.value = ok ? 880 : 300; g.gain.value = 0.15;
        o.connect(g); g.connect(audio.destination); o.start(); o.stop(audio.currentTime + (ok ? 0.18 : 0.3));
      } catch (e) { /* sin sonido */ }
    };
    const fin = () => {
      clearInterval(reloj); quitarSensor();
      try { if (pantalla) pantalla.release(); } catch (e) { /* nada */ }
      ganar(bien.length);
      main.innerHTML = `${cabezaJuego("¿Quién soy?")}<section class="final">
        <p class="grande">🎭</p><h2>¡Adivinaste ${bien.length}!</h2>
        <p>${bien.length ? "✅ " + bien.join(", ") : "¡La próxima sale mejor!"}</p>
        ${paso.length ? `<p class="sub">Pasaron: ${paso.join(", ")}</p>` : ""}
        <p>Ganaste ${bien.length} ⭐</p>
        <p class="fila" style="justify-content:center"><button class="btn" id="otra">Siguiente jugador</button></p></section>`;
      $("#otra").addEventListener("click", quien);
    };
    const carta = () => {
      if (i >= mazo.length) return fin();
      const f = $(".frente"); if (!f) return;
      f.className = "frente";
      $("#nombre").textContent = mazo[i][0];
      $("#mimica").textContent = "🎭 " + mazo[i][1];
      pausa = false;
    };
    const marcar = (ok) => {
      if (pausa || !$(".frente")) return;
      pausa = true; armado = false;
      (ok ? bien : paso).push(mazo[i][0]);
      sonido(ok);
      $(".frente").className = "frente " + (ok ? "acierto" : "cambio");
      $("#nombre").textContent = ok ? "¡Correcto!" : "Paso";
      $("#mimica").textContent = ok ? "✅" : "🔄";
      setTimeout(() => { i++; carta(); }, 900);
    };

    $("#ya").addEventListener("click", async () => {
      try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audio = null; }
      try {
        if (typeof DeviceOrientationEvent !== "undefined" && DeviceOrientationEvent.requestPermission) await DeviceOrientationEvent.requestPermission();
      } catch (e) { /* se juega con botones */ }
      try { if (navigator.wakeLock) pantalla = await navigator.wakeLock.request("screen"); } catch (e) { pantalla = null; }

      main.innerHTML = `<section class="frente">
          <p class="reloj" id="reloj">60</p>
          <h1 id="nombre">3</h1>
          <p class="mimica" id="mimica">¡Ponlo en tu frente!</p>
          <p class="guia">⬇️ abajo = ¡Correcto! · ⬆️ arriba = cambiar</p>
          <p class="fila botones"><button class="btn linea" id="pasar">Cambiar</button><button class="btn oro" id="si">¡Adivinó!</button></p>
        </section>`;
      $("#si").addEventListener("click", () => marcar(true));
      $("#pasar").addEventListener("click", () => marcar(false));

      // v = hacia dónde mira la pantalla: 1 techo · 0 al frente · -1 piso (sirve con el teléfono vertical u horizontal)
      sensor = (e) => {
        if (e.beta === null || e.gamma === null) return;
        const g = Math.PI / 180, v = Math.cos(e.beta * g) * Math.cos(e.gamma * g);
        if (Math.abs(v) < 0.35) { armado = true; return; }
        if (!armado || pausa) return;
        if (v < -0.6) marcar(true); else if (v > 0.6) marcar(false);
      };
      window.addEventListener("deviceorientation", sensor);

      let previa = 3;
      reloj = setInterval(() => {
        if (!$("#reloj")) { clearInterval(reloj); quitarSensor(); return; }
        if (previa > 0) {
          previa--;
          if (previa > 0) { $("#nombre").textContent = previa; return; }
          return carta();
        }
        seg--; $("#reloj").textContent = seg;
        if (seg <= 0) fin();
      }, 1000);
    });
  }

  /* ---------- Alef-Bet ---------- */
  function alefbet() {
    main.innerHTML = `<h1>Alef-Bet</h1><p class="sub">Las 22 letras del hebreo. Se leen de derecha a izquierda. Toca una letra.</p>
      <section class="detalle" id="detalle" aria-live="polite"></section>
      <section class="letras">${ALEFBET.map((l, i) => `<button class="letra" data-i="${i}"><b lang="he">${l[0]}</b>${l[1]}</button>`).join("")}</section>
      <h2 style="margin-top:26px">Palabras kadosh</h2>
      <dl class="glosario">${PALABRAS.map(p => `<div><dt>${p[0]}</dt><dd>${p[1]}</dd></div>`).join("")}</dl>`;
    const ver = (i) => {
      const l = ALEFBET[i];
      $("#detalle").innerHTML = `<span class="gran" lang="he">${l[0]}</span>
        <p style="margin:0"><strong style="font-size:1.4rem">${l[1]}</strong><br>Sonido: <strong>${l[2]}</strong><br>
        <span class="texto-hebreo" lang="he">${l[3]}</span> · <strong>${l[4]}</strong> = ${l[5]}</p>`;
      main.querySelectorAll(".letra").forEach((b, k) => b.classList.toggle("activa", k === i));
    };
    main.querySelectorAll(".letra").forEach(b => b.addEventListener("click", () => ver(+b.dataset.i)));
    ver(0);
  }

  /* ---------- Parashá ---------- */
  function buscarParasha(titulo) {
    const t = titulo.replace(/^Parashat\s+/i, "").trim();
    let i = PARASHOT.findIndex(p => p[0] === t);
    if (i < 0) i = PARASHOT.findIndex(p => t.startsWith(p[0] + "-")); // parashot dobles
    return i;
  }
  function parasha() {
    let actual = guardado.get("parasha", 0);
    let nota = "";
    function pinta() {
      const p = PARASHOT[actual];
      main.innerHTML = `<h1>Parashá de la semana</h1><p class="sub" id="nota">${nota}</p>
        <article class="parasha">
          <p class="num">Parashá ${actual + 1} de 54</p>
          <h2 style="font-size:1.7rem">${p[1]}</h2>
          <p class="sub">«${p[2]}» · ${p[3]}</p>
          <p style="font-size:1.15rem">${p[4]}</p>
          <section class="caja pregunta"><h3>💬 Pregunta</h3><p>${p[5]}</p></section>
          <section class="caja mashiaj"><h3>👨‍👩‍👧‍👦 Reto familiar</h3><p>${RETOS[actual % RETOS.length]}</p></section>
        </article>
        <p class="fila"><label for="sel"><strong>Ver otra:</strong></label>
          <select id="sel">${PARASHOT.map((x, i) => `<option value="${i}" ${i === actual ? "selected" : ""}>${i + 1}. ${x[1]}</option>`).join("")}</select></p>`;
      $("#sel").addEventListener("change", (e) => { actual = +e.target.value; nota = "Elegida por ti."; pinta(); });
    }
    pinta();
    // Con internet, consulta la parashá de esta semana según Yerushaláyim (Hebcal)
    if (navigator.onLine && window.fetch) {
      fetch("https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&M=on")
        .then(r => r.json())
        .then(d => {
          const it = (d.items || []).find(x => x.category === "parashat");
          const i = it ? buscarParasha(it.title) : -1;
          if (i >= 0 && location.hash.indexOf("parasha") > -1) {
            actual = i; guardado.set("parasha", i);
            nota = "Lectura de esta semana según Yerushaláyim."; pinta();
          }
        }).catch(() => { nota = "Sin conexión: puedes elegir la parashá abajo."; if (location.hash.indexOf("parasha") > -1) pinta(); });
    } else { nota = "Sin conexión: se muestra la última guardada. Puedes elegir otra abajo."; pinta(); }
  }

  /* ---------- Juegos de mesa ---------- */
  function mesa() {
    main.innerHTML = `<h1>Juegos de mesa en familia</h1>
      <p class="sub">Descarga, imprime y juega en casa. Ideal para la tarde de Shabat.</p>
      <section class="rejilla ancha">${MESA.map(j => `
        <article class="tarjeta" style="--c:#43a047">
          <span class="ico">${j.emoji}</span><strong>${j.titulo}</strong><small>${j.edad}</small>
          <p style="margin:.5em 0 1em">${j.desc}</p>
          ${j.archivo ? `<a class="btn" href="${j.archivo}" download>⬇ Descargar PDF</a>` : `<span class="btn linea">Próximamente</span>`}
        </article>`).join("")}</section>
      <section class="caja pregunta"><h3>💡 Consejo</h3><p>Imprime en cartulina o pega las hojas sobre cartón para que duren más. Antes de jugar, hagan una tefilá corta y al terminar que cada uno diga algo que aprendió.</p></section>
      ${firma()}`;
  }

  /* ---------- Rutas ---------- */
  function ruta() {
    clearInterval(reloj); quitarSensor();
    const partes = location.hash.replace(/^#\/?/, "").split("/");
    const [a, b] = partes;
    document.querySelectorAll(".menu a").forEach(l => {
      const r = l.dataset.ruta;
      l.classList.toggle("activo", r === a || (r === "historias" && a === "historia") || (r === "juegos" && a === "juego"));
    });
    if (a === "historias") historias();
    else if (a === "historia") historia(b);
    else if (a === "juegos") juegos();
    else if (a === "juego") ({ trivia, memoria, sopa, ordena, quien, versiculo, libro, oculta }[b] || juegos)();
    else if (a === "alefbet") alefbet();
    else if (a === "parasha") parasha();
    else if (a === "mesa") mesa();
    else inicio();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", ruta);
  pintarBarra(); ruta();

  /* ---------- Modo sin internet ---------- */
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
