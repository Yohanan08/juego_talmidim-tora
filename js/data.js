/* =========================================================
   TALMIDIM DE LA TORÁ — Contenido
   Ministerio Yeshúa — La Torá Viviente
   Para cambiar o agregar contenido, edita solo este archivo.
   ========================================================= */

const APP = {
  nombre: "Talmidim de la Torá",
  lema: "Aprendiendo juntos la Torá en el Mashíaj",
  ministerio: "Yeshúa — La Torá Viviente",
  despedida: "Yohanan ben Israel compañero de labores en Adonai Yeshúa Melej Hamashiaj",
  enlace: "https://biblioteca-mesianica.vercel.app/"
};

/* ---------- Versículo para memorizar (dicho con palabras sencillas) ---------- */
const VERSOS = [
  { t: "Escucha, Israel: Adonai es nuestro Elohim, Adonai uno es.", r: "Devarim 6:4" },
  { t: "Tu palabra es lámpara para mis pies y luz para mi camino.", r: "Tehilim 119:105" },
  { t: "Esfuérzate y sé valiente, porque Adonai va contigo.", r: "Devarim 31:6" },
  { t: "Honra a tu padre y a tu madre.", r: "Shemot 20:12" },
  { t: "Amarás a tu prójimo como a ti mismo.", r: "Vayikrá 19:18" },
  { t: "No he venido a anular la Torá, sino a darle plenitud.", r: "Mattityahu 5:17" },
  { t: "Yo soy el buen pastor; el buen pastor da su vida por las ovejas.", r: "Yojanán 10:11" }
];

/* ---------- Historias de la Torá ---------- */
const HISTORIAS = [
  {
    id: "creacion", emoji: "🌍", color: "#1e88e5",
    titulo: "En el principio", ref: "Bereshit 1–2",
    ninos: [
      "Antes de todo, no había nada. Entonces Adonai habló: «¡Sea la luz!», y hubo luz.",
      "En seis días Adonai hizo el cielo, el mar, las plantas, el sol, la luna, las estrellas, los peces, las aves y los animales. Al final formó al hombre y a la mujer para que cuidaran Su creación.",
      "El día séptimo Adonai descansó y lo apartó como un día especial: el Shabat. ¡Todo lo que Adonai hizo era muy bueno!"
    ],
    jovenes: [
      "La Torá abre con una afirmación: todo lo que existe tiene un Creador. Adonai crea hablando; Su Palabra tiene poder para dar vida y poner orden donde había vacío.",
      "El ser humano es formado a imagen de Elohim: tiene valor, propósito y la tarea de cuidar lo creado. El Shabat corona la semana como señal de que el tiempo también le pertenece a Adonai.",
      "Antes de pedirnos algo, Adonai nos regala un mundo bueno y un día para estar con Él."
    ],
    mashiaj: "Yojanán 1:1-3 enseña que todo fue hecho por medio de la Palabra, y que la Palabra se hizo carne: Yeshúa. El mismo Adonai que dijo «Sea la luz» es quien vino a ser nuestra luz.",
    pregunta: "¿Qué parte de la creación te hace dar gracias a Adonai hoy?"
  },
  {
    id: "noaj", emoji: "🌈", color: "#00897b",
    titulo: "Nóaj y la tevá", ref: "Bereshit 6–9",
    ninos: [
      "La gente se había olvidado de Adonai y hacía mucho mal. Pero Nóaj caminaba con Adonai.",
      "Adonai le pidió construir una tevá, un barco enorme, y Nóaj obedeció aunque nadie lo entendía. Entraron su familia y animales de todas las clases.",
      "Llovió cuarenta días. Cuando el agua bajó, Adonai puso un arcoíris en el cielo como señal de Su pacto: Él cumple lo que promete."
    ],
    jovenes: [
      "Nóaj vivió en una generación que normalizó la violencia. Su grandeza fue sencilla: creyó a Adonai y obedeció durante años sin ver una sola gota de lluvia.",
      "La tevá no tenía timón ni velas; quien la guiaba era Adonai. La obediencia de un hombre guardó a toda su casa.",
      "El arcoíris recuerda que el juicio no es la última palabra: Adonai hace pacto y lo mantiene."
    ],
    mashiaj: "La tevá tenía una sola puerta para ser guardados. Yeshúa dijo: «Yo soy la puerta; el que por mí entre será salvo» (Yojanán 10:9).",
    pregunta: "¿En qué puedes obedecer a Adonai aunque tus amigos no lo hagan?"
  },
  {
    id: "avraham", emoji: "⭐", color: "#f9a825",
    titulo: "Avraham y la promesa", ref: "Bereshit 12; 15; 22",
    ninos: [
      "Adonai le dijo a Avram: «Sal de tu tierra y ve al lugar que yo te mostraré». Avram confió y salió.",
      "Una noche Adonai le mostró el cielo: «Cuenta las estrellas. Así será tu familia». Aunque era anciano, Avraham creyó, y nació Yitzjak.",
      "En el monte Moriyá, Adonai proveyó un carnero para la ofrenda. Avraham llamó a ese lugar «Adonai proveerá»."
    ],
    jovenes: [
      "Avraham deja seguridad, familia y costumbres por una palabra de Adonai. La emuná no es un sentimiento: es caminar apoyado en lo que Adonai dijo.",
      "La promesa tardó años. En la espera Avraham aprendió que Adonai no llega tarde.",
      "En Moriyá, Yitzjak pregunta: «¿Dónde está el cordero?». Avraham responde: «Elohim se proveerá de cordero». Esa respuesta atraviesa toda la Escritura."
    ],
    mashiaj: "Yojanán vio a Yeshúa y dijo: «¡Miren, el Cordero de Elohim!» (Yojanán 1:29). Adonai mismo proveyó el Cordero, tal como Avraham lo anunció.",
    pregunta: "¿Qué promesa de Adonai estás esperando con emuná?"
  },
  {
    id: "yosef", emoji: "🧥", color: "#8e24aa",
    titulo: "Yosef y sus hermanos", ref: "Bereshit 37–45",
    ninos: [
      "Yaakov le regaló a su hijo Yosef una túnica de muchos colores. Sus hermanos tuvieron envidia y lo vendieron a unos mercaderes que lo llevaron a Mitzráyim.",
      "Yosef pasó momentos muy difíciles, pero Adonai estaba con él. Llegó a ser gobernador y guardó comida para los años de hambre.",
      "Cuando sus hermanos fueron a buscar alimento, Yosef los perdonó, los abrazó y cuidó de toda su familia."
    ],
    jovenes: [
      "Yosef fue traicionado por los suyos, acusado falsamente y olvidado en la cárcel. En ningún momento la Torá dice que Adonai lo dejó.",
      "Lo que otros planearon para mal, Adonai lo encaminó para bien, para dar vida a mucha gente (Bereshit 50:20).",
      "Perdonar no fue olvidar lo ocurrido: fue reconocer que Adonai estaba escribiendo una historia más grande."
    ],
    mashiaj: "Yosef fue rechazado, entregado por piezas de plata y luego levantado para dar vida a su familia y a las naciones. Así Yeshúa HaMashíaj fue entregado y hoy da vida y perdón a todo el que viene a Él.",
    pregunta: "¿A quién necesitas perdonar esta semana?"
  },
  {
    id: "pesaj", emoji: "🐑", color: "#d81b60",
    titulo: "Moshé y el Pésaj", ref: "Shemot 1–12",
    ninos: [
      "Israel era esclavo en Mitzráyim. Adonai llamó a Moshé desde una zarza que ardía y no se quemaba: «Yo he visto el dolor de mi pueblo y he bajado a librarlo».",
      "El faraón no quiso dejar ir al pueblo, y vinieron diez plagas. En la última, cada familia puso la sangre de un cordero en la puerta de su casa.",
      "Esa noche Adonai guardó las casas que tenían la señal, ¡y el pueblo salió libre! Por eso celebramos Pésaj cada año."
    ],
    jovenes: [
      "Adonai se revela a Moshé con Su Nombre y con una promesa en cuatro pasos: los sacaré, los libraré, los redimiré, los tomaré como mi pueblo (Shemot 6:6-7).",
      "Las plagas muestran que ningún poder de Mitzráyim puede compararse con Adonai.",
      "La libertad llegó por la sangre de un cordero sin defecto. Nadie se salvó por ser mejor que su vecino, sino por estar bajo la señal."
    ],
    mashiaj: "Yeshúa es nuestro Cordero de Pésaj (1 Corintios 5:7). Por Su sangre preciosa somos libres de la esclavitud y pertenecemos a Adonai.",
    pregunta: "¿De qué te ha liberado Adonai a ti o a tu familia?"
  },
  {
    id: "sinai", emoji: "⛰️", color: "#5e35b1",
    titulo: "La Torá en el Sinaí", ref: "Shemot 19–20",
    ninos: [
      "Después de salir de Mitzráyim, el pueblo llegó al monte Sinaí. Hubo truenos, fuego y el sonido fuerte de un shofar.",
      "Adonai habló y entregó Sus Diez Palabras: amarlo solo a Él, guardar el Shabat, honrar a papá y mamá, no robar, no mentir…",
      "La Torá es un regalo: son las instrucciones de Adonai para que vivamos felices con Él y con los demás."
    ],
    jovenes: [
      "Primero Adonai libera, después instruye. La Torá no es el precio de la libertad: es la forma de vivir como pueblo libre.",
      "«Ustedes serán para mí un reino de kohanim y una nación apartada» (Shemot 19:6). Israel recibe identidad y misión.",
      "Torá significa instrucción, enseñanza que apunta al blanco. No es una carga: es el camino."
    ],
    mashiaj: "Yeshúa dijo: «No he venido a anular la Torá, sino a darle plenitud» (Mattityahu 5:17). Por el Ruach HaKodesh, Adonai escribe Su Torá en nuestro corazón (Yirmeyahu 31:33).",
    pregunta: "¿Cuál de las Diez Palabras quieres practicar mejor?"
  },
  {
    id: "mishkan", emoji: "⛺", color: "#ef6c00",
    titulo: "El Mishkán", ref: "Shemot 25–40",
    ninos: [
      "Adonai dijo: «Hagan un lugar apartado para mí, y habitaré en medio de ellos». Ese lugar se llamó Mishkán, la morada.",
      "Todos trajeron ofrendas con alegría: oro, telas, madera. ¡Trajeron tanto que Moshé tuvo que decir que ya era suficiente!",
      "Cuando terminaron, una nube cubrió el Mishkán y la gloria de Adonai lo llenó. Adonai vivía en medio de Su pueblo."
    ],
    jovenes: [
      "El Creador del universo decide habitar en una tienda en medio de un campamento. Eso revela Su deseo: estar cerca.",
      "Cada mueble enseña algo: la menorá es luz, la mesa es provisión, el altar es acercamiento, el arca es Su trono de misericordia.",
      "Solo el Kohen Gadol entraba al lugar más apartado, una vez al año y con sangre."
    ],
    mashiaj: "«La Palabra se hizo carne y puso Su morada entre nosotros» (Yojanán 1:14). Por la sangre preciosa de Yeshúa hoy podemos entrar con confianza al Makom Kadosh, a Su misma presencia (Ivrim 10:19).",
    pregunta: "¿Cómo puedes hacer de tu casa un lugar donde Adonai sea bienvenido?"
  },
  {
    id: "espias", emoji: "🍇", color: "#43a047",
    titulo: "Yehoshúa, Kalev y los espías", ref: "Bemidbar 13–14",
    ninos: [
      "Moshé envió doce hombres a mirar la tierra que Adonai había prometido. Volvieron con un racimo de uvas tan grande que lo cargaban entre dos.",
      "Diez dijeron: «¡Hay gigantes, no podremos!». Pero Yehoshúa y Kalev dijeron: «Adonai está con nosotros, ¡no tengan miedo!».",
      "El pueblo escuchó al miedo y tuvo que andar cuarenta años por el desierto. Yehoshúa y Kalev sí entraron, porque confiaron."
    ],
    jovenes: [
      "Los doce vieron lo mismo. La diferencia no estuvo en los ojos, sino en a quién le creyeron.",
      "Diez midieron a los gigantes contra sí mismos; dos midieron a los gigantes contra Adonai.",
      "La mayoría no siempre tiene la razón. La emuná a veces se queda en minoría, y aun así hereda la promesa."
    ],
    mashiaj: "Yehoshúa significa «Adonai salva», el mismo nombre de Yeshúa. Así como Yehoshúa hizo entrar al pueblo en la tierra, Yeshúa HaMashíaj nos hace entrar en las promesas de Adonai.",
    pregunta: "¿Qué «gigante» necesitas mirar hoy con emuná?"
  }
];

/* ---------- Trivia ---------- */
/* p: pregunta, o: opciones (la PRIMERA es la correcta; la app las mezcla), r: referencia */
const TRIVIA = {
  ninos: [
    { p: "¿Qué creó Adonai el primer día?", o: ["La luz", "Los peces", "Las flores", "Los pájaros"], r: "Bereshit 1:3" },
    { p: "¿Qué día apartó Adonai para descansar?", o: ["El séptimo: Shabat", "El primero", "El tercero", "El quinto"], r: "Bereshit 2:2-3" },
    { p: "¿Quién construyó la tevá?", o: ["Nóaj", "Moshé", "Avraham", "Yosef"], r: "Bereshit 6" },
    { p: "¿Qué señal puso Adonai en el cielo después del diluvio?", o: ["Un arcoíris", "Una estrella", "Una nube negra", "Un rayo"], r: "Bereshit 9:13" },
    { p: "¿Cómo se llamaba la esposa de Avraham?", o: ["Sará", "Rivká", "Rajel", "Miryam"], r: "Bereshit 17:15" },
    { p: "¿Cuántos hijos tuvo Yaakov?", o: ["Doce", "Siete", "Tres", "Diez"], r: "Bereshit 35:22" },
    { p: "¿Qué le regaló Yaakov a Yosef?", o: ["Una túnica de colores", "Un caballo", "Una corona", "Un arco"], r: "Bereshit 37:3" },
    { p: "¿A quién llamó Adonai desde la zarza ardiente?", o: ["A Moshé", "A Aharón", "A Nóaj", "A Kalev"], r: "Shemot 3" },
    { p: "¿Qué mar abrió Adonai para que Israel pasara?", o: ["El Yam Suf", "El mar Muerto", "El río Yardén", "El Kinéret"], r: "Shemot 14" },
    { p: "¿Qué comía Israel en el desierto cada mañana?", o: ["Man", "Uvas", "Pescado", "Higos"], r: "Shemot 16" },
    { p: "¿En qué monte entregó Adonai la Torá?", o: ["Sinaí", "Moriyá", "Carmel", "Hermón"], r: "Shemot 19" },
    { p: "¿Cuántos libros tiene la Torá?", o: ["Cinco", "Diez", "Doce", "Siete"], r: "Bereshit a Devarim" },
    { p: "¿Qué significa «Shalom»?", o: ["Paz", "Gracias", "Luz", "Casa"], r: "" },
    { p: "¿Quién es el Mashíaj?", o: ["Yeshúa", "Moshé", "David", "Eliyahu"], r: "Mattityahu 16:16" }
  ],
  jovenes: [
    { p: "¿Qué significa «Bereshit»?", o: ["En el principio", "Y llamó", "Palabras", "Nombres"], r: "Bereshit 1:1" },
    { p: "¿Cuántas parashot tiene el ciclo de lectura de la Torá?", o: ["54", "49", "66", "40"], r: "" },
    { p: "¿Dónde se encuentra el Shemá?", o: ["Devarim 6:4", "Shemot 20:1", "Vayikrá 19:18", "Bereshit 12:1"], r: "Devarim 6:4" },
    { p: "¿Qué fiesta recuerda la salida de Mitzráyim?", o: ["Pésaj", "Sukot", "Yom Teruá", "Shavuot"], r: "Shemot 12" },
    { p: "¿Qué dos espías confiaron en Adonai?", o: ["Yehoshúa y Kalev", "Nadav y Avihú", "Datán y Aviram", "Eldad y Medad"], r: "Bemidbar 14:6-9" },
    { p: "¿Qué significa el nombre «Yeshúa»?", o: ["Salvación", "Paz", "Rey", "Luz"], r: "Mattityahu 1:21" },
    { p: "¿A qué monte subió Avraham con Yitzjak?", o: ["Moriyá", "Sinaí", "Nebó", "Tavor"], r: "Bereshit 22:2" },
    { p: "¿Quién fue el primer Kohen Gadol?", o: ["Aharón", "Moshé", "Pinjás", "Leví"], r: "Shemot 28:1" },
    { p: "¿Qué fiesta se celebra al completar la cuenta de cincuenta días?", o: ["Shavuot", "Yom Kipur", "Pésaj", "Sukot"], r: "Vayikrá 23:15-16" },
    { p: "¿Cuántos años anduvo Israel por el desierto?", o: ["Cuarenta", "Siete", "Setenta", "Doce"], r: "Bemidbar 14:33" },
    { p: "¿Qué levantó Moshé en un asta para que el pueblo viviera?", o: ["Una serpiente de bronce", "Una vara de almendro", "Un shofar", "Una bandera"], r: "Bemidbar 21:9 · Yojanán 3:14" },
    { p: "¿Qué tres partes forman el Tanaj?", o: ["Torá, Neviim y Ketuvim", "Torá, Tehilim y Mishlé", "Bereshit, Shemot y Devarim", "Torá, Haftará y Brit Hadashah"], r: "" },
    { p: "Según Mattityahu 5:17, ¿a qué vino Yeshúa respecto a la Torá?", o: ["A darle plenitud", "A anularla", "A cambiarla por otra", "A esconderla"], r: "Mattityahu 5:17" },
    { p: "¿Qué significa «Mishkán»?", o: ["Morada", "Monte", "Ofrenda", "Camino"], r: "Shemot 25:8" },
    { p: "¿En qué fiesta entraba el Kohen Gadol al lugar más apartado?", o: ["Yom Kipur", "Pésaj", "Shavuot", "Sukot"], r: "Vayikrá 16" }
  ]
};

/* ---------- Memoria ---------- */
const MEMORIA_NINOS = [
  ["🌈", "Arcoíris"], ["🐑", "Cordero"], ["📜", "Torá"], ["🔥", "Zarza"],
  ["🍇", "Uvas"], ["⭐", "Estrellas"], ["🕎", "Menorá"], ["🕊️", "Paloma"]
];

/* ---------- Sopa de letras ---------- */
const SOPA = {
  ninos: ["TORA", "SHABAT", "YESHUA", "MOSHE", "SHALOM", "NOAJ"],
  jovenes: ["MASHIAJ", "ADONAI", "ISRAEL", "EMUNA", "PESAJ", "MISHKAN", "SHAVUOT", "AVRAHAM", "KADOSH"]
};

/* ---------- Ordena la historia ---------- */
const ORDENES = [
  { titulo: "La creación", pasos: ["Adonai crea la luz", "Aparecen el mar y la tierra seca", "Brillan el sol, la luna y las estrellas", "Adonai forma al hombre y a la mujer", "Adonai aparta el Shabat"] },
  { titulo: "Nóaj", pasos: ["Adonai le pide a Nóaj construir la tevá", "Entran la familia y los animales", "Llueve cuarenta días", "La paloma vuelve con una hoja de olivo", "Aparece el arcoíris del pacto"] },
  { titulo: "Yosef", pasos: ["Yaakov le regala la túnica a Yosef", "Sus hermanos lo venden", "Yosef interpreta los sueños del faraón", "Yosef es puesto como gobernador", "Yosef perdona a sus hermanos"] },
  { titulo: "La salida de Mitzráyim", pasos: ["Adonai llama a Moshé desde la zarza", "Vienen las plagas", "La sangre del cordero en las puertas", "Se abre el Yam Suf", "Adonai entrega la Torá en el Sinaí"] },
  { titulo: "Los cinco libros de la Torá", pasos: ["Bereshit", "Shemot", "Vayikrá", "Bemidbar", "Devarim"] },
  { titulo: "Las Fiestas del Eterno en el año", pasos: ["Pésaj", "Shavuot", "Yom Teruá", "Yom Kipur", "Sukot"] }
];

/* ---------- ¿Quién soy? (mímica) ---------- */
/* [personaje, idea de mímica para quien actúa, 1 = niños y jóvenes · 2 = solo jóvenes] */
const PERSONAJES = [
  ["Nóaj", "Martilla y construye un barco; llama a los animales.", 1],
  ["Avraham", "Mira el cielo y cuenta las estrellas.", 1],
  ["Sará", "Se ríe con sorpresa y luego arrulla a un bebé.", 1],
  ["Yosef", "Se pone una túnica hermosa y la muestra con alegría.", 1],
  ["Moshé", "Levanta la vara y abre el mar con los brazos.", 1],
  ["Miryam", "Toca el pandero y danza.", 1],
  ["El faraón", "Se pone una corona, cruza los brazos y dice que no con la cabeza.", 1],
  ["David", "Hace girar una honda y la lanza.", 1],
  ["Goliat", "Camina como un gigante con paso pesado.", 1],
  ["Daniel", "Ora de rodillas y luego acaricia a unos leones.", 1],
  ["Yoná", "Nada, y un gran pez se lo traga.", 1],
  ["Adam", "Pone nombre a los animales, señalándolos uno por uno.", 1],
  ["Yehoshúa", "Marcha en círculo y toca el shofar.", 1],
  ["Shimshón", "Muestra su fuerza y empuja dos columnas.", 1],
  ["Javá", "Toma un fruto de un árbol y lo comparte.", 2],
  ["Yitzjak", "Carga leña sobre el hombro y sube un monte.", 2],
  ["Rivká", "Saca agua de un pozo y da de beber a los camellos.", 2],
  ["Yaakov", "Duerme sobre una piedra y sueña con una escalera.", 2],
  ["Aharón", "Sostiene una vara que florece y bendice con las manos.", 2],
  ["Kalev", "Carga un racimo enorme de uvas y anima a todos a avanzar.", 2],
  ["Bilam", "Va montado en una asna que se detiene y no quiere avanzar.", 2],
  ["Rut", "Recoge espigas en el campo.", 2],
  ["Ester", "Se pone una corona y se acerca al rey con valentía.", 2],
  ["Eliyahu", "Pide fuego del cielo y luego corre muy rápido.", 2],
  ["Shelomó", "Piensa con sabiduría y construye una casa grande.", 2],
  ["Guidón", "Rompe un cántaro, levanta una antorcha y toca el shofar.", 2],
  ["Kefa", "Lanza una red, y luego camina sobre el agua con cuidado.", 2],
  ["Yojanán el Inmersor", "Sumerge a la gente en el río y señala al que viene.", 2]
];

/* ---------- Alef-Bet ---------- */
/* [letra, nombre, sonido, palabra hebrea, cómo se dice, significado] */
const ALEFBET = [
  ["א", "Álef", "muda", "אוֹר", "Or", "Luz"],
  ["ב", "Bet", "b / v", "בַּיִת", "Báyit", "Casa"],
  ["ג", "Guímel", "g", "גָּמָל", "Gamal", "Camello"],
  ["ד", "Dálet", "d", "דֶּלֶת", "Délet", "Puerta"],
  ["ה", "He", "h suave", "הַר", "Har", "Monte"],
  ["ו", "Vav", "v", "וֶרֶד", "Véred", "Rosa"],
  ["ז", "Záyin", "z", "זַיִת", "Záyit", "Olivo"],
  ["ח", "Jet", "j", "חַיִּים", "Jaim", "Vida"],
  ["ט", "Tet", "t", "טוֹב", "Tov", "Bueno"],
  ["י", "Yod", "y", "יֵשׁוּעַ", "Yeshúa", "Salvación"],
  ["כ", "Kaf", "k / j", "כֶּתֶר", "Kéter", "Corona"],
  ["ל", "Lámed", "l", "לֵב", "Lev", "Corazón"],
  ["מ", "Mem", "m", "מַיִם", "Máyim", "Agua"],
  ["נ", "Nun", "n", "נֵר", "Ner", "Lámpara"],
  ["ס", "Sámej", "s", "סֵפֶר", "Séfer", "Rollo, libro"],
  ["ע", "Áyin", "muda", "עַם", "Am", "Pueblo"],
  ["פ", "Pe", "p / f", "פֶּסַח", "Pésaj", "Pésaj"],
  ["צ", "Tzadi", "tz", "צֶדֶק", "Tzédek", "Justicia"],
  ["ק", "Kuf", "k", "קָדוֹשׁ", "Kadosh", "Apartado"],
  ["ר", "Resh", "r", "רוּחַ", "Rúaj", "Aliento, viento"],
  ["ש", "Shin", "sh / s", "שָׁלוֹם", "Shalom", "Paz"],
  ["ת", "Tav", "t", "תּוֹרָה", "Torá", "Instrucción"]
];

const PALABRAS = [
  ["Adonai", "Nuestro Amo y Rey; así llamamos con reverencia al Eterno."],
  ["Yeshúa", "«Salvación». El nombre del Mashíaj."],
  ["HaMashíaj", "«El Ungido», el Rey prometido a Israel."],
  ["Torá", "Instrucción de Adonai; los cinco libros de Moshé."],
  ["Tanaj", "Torá, Neviim (Profetas) y Ketuvim (Escritos)."],
  ["Brit Hadashah", "El Pacto Renovado, los escritos de los emisarios de Yeshúa."],
  ["Shabat", "El día séptimo, apartado para descansar con Adonai."],
  ["Shalom", "Paz completa; también es nuestro saludo."],
  ["Ruach HaKodesh", "El Aliento apartado de Adonai que nos guía."],
  ["Kahal", "La asamblea, el pueblo reunido."],
  ["Emuná", "Confianza firme en Adonai."],
  ["Tefilá", "Oración; hablar con Adonai."],
  ["Mitzvá", "Mandamiento; algo que Adonai nos pide hacer."],
  ["Berajá", "Bendición."],
  ["Kadosh", "Apartado para Adonai."],
  ["Tevilah", "Inmersión en agua."],
  ["Mishkán", "La morada de Adonai en el desierto."],
  ["Kohen", "Servidor de Adonai en el Mishkán."]
];

/* ---------- Parashot ---------- */
/* [clave Hebcal, nombre, significado, referencia, resumen, pregunta] */
const PARASHOT = [
  ["Bereshit", "Bereshit", "En el principio", "Bereshit 1:1–6:8", "Adonai crea los cielos, la tierra y todo lo que vive, y aparta el Shabat.", "¿Qué hizo Adonai en cada día?"],
  ["Noach", "Nóaj", "Descanso", "Bereshit 6:9–11:32", "Nóaj obedece y construye la tevá; Adonai guarda a su familia y pone el arcoíris como señal del pacto.", "¿En qué puedes obedecer aunque otros no lo hagan?"],
  ["Lech-Lecha", "Lej Lejá", "Vete por ti", "Bereshit 12:1–17:27", "Avram deja su tierra confiando en la promesa de Adonai, y recibe un nuevo nombre: Avraham.", "¿Qué te costaría dejar por seguir a Adonai?"],
  ["Vayera", "Vayerá", "Y apareció", "Bereshit 18:1–22:24", "Adonai visita a Avraham, nace Yitzjak y en el monte Moriyá Adonai provee un carnero.", "¿Cuándo has visto que Adonai provee?"],
  ["Chayei Sara", "Jayé Sará", "Vida de Sará", "Bereshit 23:1–25:18", "El siervo de Avraham busca esposa para Yitzjak, y Rivká se distingue por su generosidad.", "¿Cómo puedes servir sin que te lo pidan?"],
  ["Toldot", "Toldot", "Generaciones", "Bereshit 25:19–28:9", "Nacen Esav y Yaakov. Esav cambia su primogenitura por un plato de lentejas.", "¿Qué cosas valiosas no debes cambiar por algo pasajero?"],
  ["Vayetzei", "Vayetzé", "Y salió", "Bereshit 28:10–32:3", "Yaakov sueña con una escalera que llega al cielo y Adonai le promete: «Yo estoy contigo».", "¿Dónde has sentido que Adonai está contigo?"],
  ["Vayishlach", "Vayishlaj", "Y envió", "Bereshit 32:4–36:43", "Yaakov lucha toda la noche, recibe el nombre Israel y se reconcilia con su hermano Esav.", "¿Con quién necesitas hacer las paces?"],
  ["Vayeshev", "Vayeshev", "Y habitó", "Bereshit 37:1–40:23", "Yosef es vendido por sus hermanos, pero Adonai está con él en Mitzráyim.", "¿Cómo te ayuda saber que Adonai no te deja en lo difícil?"],
  ["Miketz", "Miketz", "Al cabo de", "Bereshit 41:1–44:17", "Yosef interpreta los sueños del faraón y es levantado para gobernar y guardar alimento.", "¿Qué talento te dio Adonai para ayudar a otros?"],
  ["Vayigash", "Vayigash", "Y se acercó", "Bereshit 44:18–47:27", "Yehudá se ofrece en lugar de su hermano, y Yosef se da a conocer y perdona.", "¿Qué significa perdonar de corazón?"],
  ["Vayechi", "Vayejí", "Y vivió", "Bereshit 47:28–50:26", "Yaakov bendice a sus hijos y anuncia que de Yehudá vendrá el Rey.", "¿Qué bendición quisieras decirle a tu familia?"],
  ["Shemot", "Shemot", "Nombres", "Shemot 1:1–6:1", "Israel sufre como esclavo y Adonai llama a Moshé desde la zarza ardiente.", "¿Qué te está pidiendo Adonai que hagas?"],
  ["Vaera", "Vaerá", "Y aparecí", "Shemot 6:2–9:35", "Adonai promete redimir a Su pueblo y comienzan las plagas sobre Mitzráyim.", "¿Cuál de las promesas de Adonai te da más ánimo?"],
  ["Bo", "Bo", "Ven", "Shemot 10:1–13:16", "Llegan las últimas plagas y el primer Pésaj: la sangre del cordero guarda cada casa.", "¿Por qué recordamos Pésaj cada año?"],
  ["Beshalach", "Beshalaj", "Cuando envió", "Shemot 13:17–17:16", "Adonai abre el Yam Suf, da man del cielo y agua de la roca.", "¿Qué milagro de esta parashá te sorprende más?"],
  ["Yitro", "Yitró", "Yitró", "Shemot 18:1–20:23", "En el monte Sinaí, Adonai habla a todo el pueblo las Diez Palabras.", "¿Puedes decir las Diez Palabras de memoria?"],
  ["Mishpatim", "Mishpatim", "Ordenanzas", "Shemot 21:1–24:18", "Adonai enseña a vivir con justicia, y el pueblo responde: «Haremos y escucharemos».", "¿Cómo se trata con justicia a un compañero?"],
  ["Terumah", "Terumá", "Ofrenda", "Shemot 25:1–27:19", "Cada uno trae ofrenda de corazón para construir el Mishkán.", "¿Qué puedes ofrecerle a Adonai con alegría?"],
  ["Tetzaveh", "Tetzavé", "Ordenarás", "Shemot 27:20–30:10", "Se preparan las vestiduras de los kohanim y la menorá debe estar siempre encendida.", "¿Cómo mantienes encendida tu luz?"],
  ["Ki Tisa", "Ki Tisá", "Cuando cuentes", "Shemot 30:11–34:35", "El pueblo hace un becerro de oro; Moshé intercede y Adonai muestra Su misericordia.", "¿Qué cosas pueden ocupar el lugar de Adonai en tu vida?"],
  ["Vayakhel", "Vayakhel", "Y reunió", "Shemot 35:1–38:20", "El pueblo trae tanto para el Mishkán que sobra, y Betzalel trabaja con sabiduría.", "¿En qué trabajo puedes dar lo mejor de ti?"],
  ["Pekudei", "Pekudé", "Cuentas", "Shemot 38:21–40:38", "Se termina el Mishkán y la gloria de Adonai lo llena.", "¿Qué se siente terminar algo bien hecho para Adonai?"],
  ["Vayikra", "Vayikrá", "Y llamó", "Vayikrá 1:1–5:26", "Adonai llama a Moshé y enseña las ofrendas para acercarse a Él.", "¿Cómo te acercas tú a Adonai?"],
  ["Tzav", "Tzav", "Ordena", "Vayikrá 6:1–8:36", "El fuego del altar no debe apagarse, y Aharón y sus hijos son apartados para servir.", "¿Qué hábito mantiene vivo tu amor por Adonai?"],
  ["Shmini", "Sheminí", "Octavo", "Vayikrá 9:1–11:47", "La gloria de Adonai aparece, y Él enseña qué animales son alimento y cuáles no.", "¿Por qué Adonai se interesa en lo que comemos?"],
  ["Tazria", "Tazría", "Concibe", "Vayikrá 12:1–13:59", "Adonai da instrucciones de pureza para cuidar a cada persona y al campamento.", "¿Cómo cuidas tus palabras para no dañar a otros?"],
  ["Metzora", "Metzorá", "El afectado", "Vayikrá 14:1–15:33", "Adonai enseña cómo una persona es restaurada y vuelve al campamento.", "¿A quién puedes ayudar a sentirse incluido?"],
  ["Achrei Mot", "Ajaré Mot", "Después de la muerte", "Vayikrá 16:1–18:30", "Adonai establece Yom Kipur, el día en que el Kohen Gadol entra al lugar más apartado.", "¿Qué significa para ti ser perdonado?"],
  ["Kedoshim", "Kedoshim", "Apartados", "Vayikrá 19:1–20:27", "«Sean kedoshim, porque Yo soy kadosh». Amarás a tu prójimo como a ti mismo.", "¿Cómo amarás a tu prójimo esta semana?"],
  ["Emor", "Emor", "Di", "Vayikrá 21:1–24:23", "Adonai entrega el calendario de Sus Fiestas: Shabat, Pésaj, Shavuot, Yom Teruá, Yom Kipur y Sukot.", "¿Cuál es tu Fiesta favorita y por qué?"],
  ["Behar", "Behar", "En el monte", "Vayikrá 25:1–26:2", "La tierra también descansa, y en el Yovel se proclama libertad.", "¿Por qué es importante descansar y confiar?"],
  ["Bechukotai", "Bejukotai", "En mis estatutos", "Vayikrá 26:3–27:34", "Adonai promete bendición a quienes andan en Sus caminos.", "¿Qué bendición has recibido por obedecer?"],
  ["Bamidbar", "Bemidbar", "En el desierto", "Bemidbar 1:1–4:20", "Se cuenta al pueblo y cada tribu acampa en orden alrededor del Mishkán.", "¿Cuál es tu lugar en la familia de Adonai?"],
  ["Nasso", "Nasó", "Levanta", "Bemidbar 4:21–7:89", "Adonai enseña la bendición de los kohanim: «Adonai te bendiga y te guarde».", "¿A quién puedes bendecir hoy?"],
  ["Beha'alotcha", "Behaalotjá", "Cuando enciendas", "Bemidbar 8:1–12:16", "Se enciende la menorá y la nube de Adonai guía cada paso del pueblo.", "¿Cómo sabes por dónde te guía Adonai?"],
  ["Sh'lach", "Shelaj Lejá", "Envía", "Bemidbar 13:1–15:41", "Doce espías exploran la tierra; solo Yehoshúa y Kalev confían. Adonai da los tzitzit para recordar.", "¿Qué te ayuda a recordar las mitzvot?"],
  ["Korach", "Kóraj", "Kóraj", "Bemidbar 16:1–18:32", "Kóraj se rebela, y la vara de Aharón florece para mostrar a quién eligió Adonai.", "¿Por qué la envidia hace daño?"],
  ["Chukat", "Jukat", "Estatuto", "Bemidbar 19:1–22:1", "El pueblo se queja, y quien mira a la serpiente de bronce levantada vive.", "¿A quién miramos nosotros para vivir?"],
  ["Balak", "Balak", "Balak", "Bemidbar 22:2–25:9", "Bilam quiere maldecir a Israel, pero Adonai convierte sus palabras en bendición.", "¿Quién puede cambiar lo que Adonai ha bendecido?"],
  ["Pinchas", "Pinjás", "Pinjás", "Bemidbar 25:10–30:1", "Las hijas de Tzelofjad reciben herencia, y Yehoshúa es nombrado sucesor de Moshé.", "¿Qué hace a alguien un buen líder?"],
  ["Matot", "Matot", "Tribus", "Bemidbar 30:2–32:42", "Adonai enseña a cumplir la palabra que sale de nuestra boca.", "¿Cumples lo que prometes?"],
  ["Masei", "Masé", "Jornadas", "Bemidbar 33:1–36:13", "Se recuerdan las jornadas del desierto y se apartan ciudades de refugio.", "¿Qué has aprendido en tu camino este año?"],
  ["Devarim", "Devarim", "Palabras", "Devarim 1:1–3:22", "Moshé recuerda al pueblo todo el camino recorrido con Adonai.", "¿Qué no quieres olvidar de lo que Adonai ha hecho?"],
  ["Vaetchanan", "Vaetjanán", "Y supliqué", "Devarim 3:23–7:11", "«Shemá Israel»: amarás a Adonai con todo tu corazón, y enseñarás Sus palabras a tus hijos.", "¿Puedes decir el Shemá en familia?"],
  ["Eikev", "Ékev", "Por cuanto", "Devarim 7:12–11:25", "No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Adonai.", "¿Cuál es tu alimento de cada día?"],
  ["Re'eh", "Reé", "Mira", "Devarim 11:26–16:17", "Adonai pone delante bendición y maldición, y nos invita a escoger bien.", "¿Qué buena decisión tomarás esta semana?"],
  ["Shoftim", "Shoftim", "Jueces", "Devarim 16:18–21:9", "«Justicia, justicia perseguirás». Adonai promete levantar un profeta como Moshé.", "¿Quién es el Profeta prometido?"],
  ["Ki Teitzei", "Ki Tetzé", "Cuando salgas", "Devarim 21:10–25:19", "Muchas mitzvot para cuidar al prójimo: devolver lo perdido, ser honesto, proteger al débil.", "¿Qué harías si encuentras algo que no es tuyo?"],
  ["Ki Tavo", "Ki Tavó", "Cuando entres", "Devarim 26:1–29:8", "Al entrar en la tierra, el pueblo trae las primicias con gratitud.", "¿Por qué tres cosas das gracias hoy?"],
  ["Nitzavim", "Nitzavim", "Están de pie", "Devarim 29:9–30:20", "Todo el pueblo está delante de Adonai: «Escoge la vida».", "¿Cómo se escoge la vida cada día?"],
  ["Vayeilech", "Vayélej", "Y fue", "Devarim 31:1–30", "Moshé anima a Yehoshúa: «Esfuérzate y sé valiente».", "¿En qué necesitas ser valiente?"],
  ["Ha'azinu", "Haazinu", "Escuchen", "Devarim 32:1–52", "Moshé canta: Adonai es la Roca, y Su obra es perfecta.", "¿Qué canción le cantarías a Adonai?"],
  ["Vezot Haberakhah", "Vezot HaBerajá", "Y esta es la bendición", "Devarim 33:1–34:12", "Moshé bendice a las tribus y contempla la tierra prometida.", "¿Qué aprendiste de toda la Torá este año?"]
];

const RETOS = [
  "Lean juntos el primer párrafo de la parashá y que cada uno diga una palabra que le llamó la atención.",
  "Dibujen entre todos la escena principal y péguenla donde la vean toda la semana.",
  "Elijan una mitzvá de la parashá y practíquenla en casa durante siete días.",
  "Que el más pequeño cuente la historia con sus palabras y los demás completen.",
  "Busquen dónde se ve al Mashíaj Yeshúa en esta parashá y compártanlo en la mesa de Shabat.",
  "Hagan una tefilá en familia dando gracias por algo que aprendieron."
];

/* ---------- Juegos de mesa para imprimir ---------- */
const MESA = [
  {
    titulo: "Camino a la Tierra Prometida", emoji: "🗺️", edad: "6+ · 2 a 6 jugadores",
    desc: "Tablero de 40 casillas desde Mitzráyim hasta la Tierra Prometida, con 24 tarjetas de preguntas. Solo necesitas un dado y fichas.",
    archivo: "juegos-de-mesa/camino-a-la-tierra-prometida.pdf"
  },
  {
    titulo: "Memoria del Alef-Bet", emoji: "🔤", edad: "5+ · 2 a 4 jugadores",
    desc: "44 cartas para recortar: une cada letra hebrea con su nombre y su palabra.",
    archivo: "juegos-de-mesa/memoria-alef-bet.pdf"
  },
  {
    titulo: "Bingo de la Torá y las Fiestas", emoji: "🎉", edad: "5+ · hasta 8 jugadores",
    desc: "8 cartones distintos y 24 fichas con pistas para leer en voz alta.",
    archivo: "juegos-de-mesa/bingo-tora-y-fiestas.pdf"
  },
  {
    titulo: "¿Quién soy? Mímica de personajes", emoji: "🎭", edad: "5+ · 3 o más jugadores",
    desc: "28 cartas para ponerse en la frente: los demás hacen la mímica y tú adivinas el personaje.",
    archivo: "juegos-de-mesa/quien-soy-mimica.pdf"
  },
  /* Cuando tengas los PDF, colócalos en la carpeta juegos-de-mesa/ y escribe aquí el nombre del archivo */
  { titulo: "Los Guardianes del Pacto", emoji: "🛡️", edad: "Juego del ministerio", desc: "Juego de mesa bíblico del ministerio.", archivo: null },
  { titulo: "Academia Torah Kids", emoji: "🎓", edad: "Juego del ministerio", desc: "Juegos educativos para los más pequeños.", archivo: null }
];
