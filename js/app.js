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
    main.innerHTML = `<h1>Juegos</h1><p class="sub">Gana estrellas mientras aprendes.</p>
      <section class="rejilla ancha">
        <a class="tarjeta" style="--c:#d81b60" href="#/juego/trivia"><span class="ico">❓</span><strong>Trivia de la Torá</strong><small>8 preguntas</small></a>
        <a class="tarjeta" style="--c:#1e88e5" href="#/juego/memoria"><span class="ico">🧠</span><strong>Memoria</strong><small>${esNino() ? "Encuentra las parejas" : "Hebreo y su significado"}</small></a>
        <a class="tarjeta" style="--c:#43a047" href="#/juego/sopa"><span class="ico">🔎</span><strong>Sopa de letras</strong><small>Palabras kadosh</small></a>
        <a class="tarjeta" style="--c:#8e24aa" href="#/juego/quien"><span class="ico">🎭</span><strong>¿Quién soy?</strong><small>Mímica: el teléfono en la frente</small></a>
        <a class="tarjeta" style="--c:#f9a825" href="#/juego/ordena"><span class="ico">🔢</span><strong>Ordena la historia</strong><small>¿Qué pasó primero?</small></a>
      </section>`;
  }
  const cabezaJuego = (t) => `<a class="volver" href="#/juegos">← Juegos</a><h1>${t}</h1>`;

  function trivia() {
    const preguntas = mezclar(TRIVIA[zona]).slice(0, 8);
    let i = 0, puntos = 0;
    function pinta() {
      if (i >= preguntas.length) {
        ganar(puntos);
        main.innerHTML = `${cabezaJuego("Trivia de la Torá")}<section class="final">
          <p class="grande">${puntos >= 6 ? "🏆" : "💪"}</p><h2>${puntos} de ${preguntas.length}</h2>
          <p>${puntos >= 6 ? "¡Kol hakavod! ¡Muy bien!" : "¡Sigue estudiando, vas muy bien!"} Ganaste ${puntos} ⭐</p>
          <p class="fila" style="justify-content:center"><button class="btn" id="otra">Jugar otra vez</button></p></section>`;
        $("#otra").addEventListener("click", trivia);
        return;
      }
      const q = preguntas[i], correcta = q.o[0], ops = mezclar(q.o);
      main.innerHTML = `${cabezaJuego("Trivia de la Torá")}
        <p class="progreso"><i style="width:${(i / preguntas.length) * 100}%"></i></p>
        <p class="sub">Pregunta ${i + 1} de ${preguntas.length}</p><h2>${q.p}</h2>
        <section class="opciones">${ops.map(o => `<button class="opcion">${o}</button>`).join("")}</section>
        <p class="aviso" id="aviso" aria-live="polite"></p>
        <p class="fila"><button class="btn" id="sig" hidden>Siguiente →</button></p>`;
      main.querySelectorAll(".opcion").forEach(b => b.addEventListener("click", () => {
        if (!$("#sig").hidden) return;
        const bien = b.textContent === correcta;
        if (bien) puntos++;
        main.querySelectorAll(".opcion").forEach(x => {
          if (x.textContent === correcta) x.classList.add("bien");
          else if (x === b) x.classList.add("error");
        });
        $("#aviso").textContent = (bien ? "¡Correcto! " : "La respuesta es: " + correcta + ". ") + (q.r ? "📖 " + q.r : "");
        $("#sig").hidden = false; $("#sig").focus();
      }));
      $("#sig").addEventListener("click", () => { i++; pinta(); });
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

  /* ---------- ¿Quién soy? (mímica) ---------- */
  let relojQuien = null;
  function quien() {
    clearInterval(relojQuien);
    const mazo = mezclar(PERSONAJES.filter(p => esNino() ? p[2] === 1 : true));
    let i = 0, seg = 60, bien = [], paso = [];
    main.innerHTML = `${cabezaJuego("¿Quién soy?")}
      <ol class="pasos">
        <li>Un jugador se pone el teléfono en la <strong>frente</strong>, con la pantalla hacia los demás, sin mirar.</li>
        <li>Los demás hacen la <strong>mímica</strong> del personaje, ¡sin hablar! En pantalla sale una idea para actuar.</li>
        <li>Si adivina, otro jugador toca <strong>¡Adivinó!</strong> Si no sale, toca <strong>Pasar</strong>.</li>
        <li>Tienen 60 segundos. Luego le toca a otro.</li>
      </ol>
      <p class="fila"><button class="btn oro" id="ya">¡Empezar!</button></p>`;
    $("#ya").addEventListener("click", () => {
      main.innerHTML = `<section class="frente">
          <p class="reloj" id="reloj">60</p>
          <h1 id="nombre"></h1>
          <p class="mimica" id="mimica"></p>
          <p class="fila botones"><button class="btn linea" id="pasar">Pasar</button><button class="btn oro" id="si">¡Adivinó!</button></p>
        </section>`;
      const carta = () => {
        if (i >= mazo.length) return fin();
        $("#nombre").textContent = mazo[i][0];
        $("#mimica").textContent = "🎭 " + mazo[i][1];
      };
      const fin = () => {
        clearInterval(relojQuien);
        ganar(bien.length);
        main.innerHTML = `${cabezaJuego("¿Quién soy?")}<section class="final">
          <p class="grande">🎭</p><h2>¡Adivinaste ${bien.length}!</h2>
          <p>${bien.length ? "✅ " + bien.join(", ") : "¡La próxima sale mejor!"}</p>
          ${paso.length ? `<p class="sub">Pasaron: ${paso.join(", ")}</p>` : ""}
          <p>Ganaste ${bien.length} ⭐</p>
          <p class="fila" style="justify-content:center"><button class="btn" id="otra">Siguiente jugador</button></p></section>`;
        $("#otra").addEventListener("click", quien);
      };
      $("#si").addEventListener("click", () => { bien.push(mazo[i][0]); i++; carta(); });
      $("#pasar").addEventListener("click", () => { paso.push(mazo[i][0]); i++; carta(); });
      carta();
      relojQuien = setInterval(() => {
        if (!$("#reloj")) return clearInterval(relojQuien);
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
    clearInterval(relojQuien);
    const partes = location.hash.replace(/^#\/?/, "").split("/");
    const [a, b] = partes;
    document.querySelectorAll(".menu a").forEach(l => {
      const r = l.dataset.ruta;
      l.classList.toggle("activo", r === a || (r === "historias" && a === "historia") || (r === "juegos" && a === "juego"));
    });
    if (a === "historias") historias();
    else if (a === "historia") historia(b);
    else if (a === "juegos") juegos();
    else if (a === "juego") ({ trivia, memoria, sopa, ordena, quien }[b] || juegos)();
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
