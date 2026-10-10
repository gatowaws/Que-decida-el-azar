const games = [
  {
    id: "euromillones",
    name: "Euromillones",
    icon: "E",
    detail: "5 números · 2 estrellas",
    description: "Elige 5 números del 1 al 50 y 2 estrellas del 1 al 12.",
    groups: [
      { label: "Números", count: 5, min: 1, max: 50 },
      { label: "Estrellas", count: 2, min: 1, max: 12, special: true }
    ]
  },
  {
    id: "primitiva",
    name: "La Primitiva",
    icon: "P",
    detail: "6 números · reintegro",
    description: "Elige 6 números distintos del 1 al 49 y un reintegro del 0 al 9.",
    groups: [
      { label: "Números", count: 6, min: 1, max: 49 },
      { label: "Reintegro", count: 1, min: 0, max: 9, special: true }
    ]
  },
  {
    id: "bonoloto",
    name: "Bonoloto",
    icon: "B",
    detail: "6 números · reintegro",
    description: "Elige 6 números distintos del 1 al 49 y un reintegro del 0 al 9.",
    groups: [
      { label: "Números", count: 6, min: 1, max: 49 },
      { label: "Reintegro", count: 1, min: 0, max: 9, special: true }
    ]
  },
  {
    id: "gordo",
    name: "El Gordo",
    icon: "G",
    detail: "5 números · clave",
    description: "Elige 5 números distintos del 1 al 54 y una clave del 0 al 9.",
    groups: [
      { label: "Números", count: 5, min: 1, max: 54 },
      { label: "Clave", count: 1, min: 0, max: 9, special: true }
    ]
  },
  {
    id: "eurodreams",
    name: "EuroDreams",
    icon: "D",
    detail: "6 números · sueño",
    description: "Elige 6 números distintos del 1 al 40 y un número sueño del 1 al 5.",
    groups: [
      { label: "Números", count: 6, min: 1, max: 40 },
      { label: "Sueño", count: 1, min: 1, max: 5, special: true }
    ]
  },
  {
    id: "lototurf",
    name: "Lototurf",
    icon: "L",
    detail: "6 números · caballo",
    description: "Elige 6 números distintos del 1 al 31 y un caballo del 1 al 12.",
    groups: [
      { label: "Números", count: 6, min: 1, max: 31 },
      { label: "Caballo", count: 1, min: 1, max: 12, special: true }
    ]
  },
  {
    id: "nacional",
    name: "Lotería Nacional",
    icon: "N",
    detail: "Número de 5 cifras",
    description: "Genera un número de cinco cifras, del 00000 al 99999.",
    type: "national"
  },
  {
    id: "quiniela",
    name: "La Quiniela",
    icon: "Q",
    detail: "14 partidos · Pleno al 15",
    description: "Pronostica 14 partidos con 1, X o 2 y genera el Pleno al 15.",
    type: "quiniela"
  },
  {
    id: "quinigol",
    name: "Quinigol",
    icon: "Q",
    detail: "6 partidos · goles",
    description: "Genera los goles de cada equipo en los 6 partidos (0, 1, 2 o M).",
    type: "quinigol"
  },
  {
    id: "quintuple",
    name: "Quíntuple Plus",
    icon: "5",
    detail: "5 carreras · caballos",
    description: "Elige un caballo ganador por carrera y el segundo de la quinta.",
    type: "quintuple"
  },
  {
    id: "eurojackpot",
    name: "Eurojackpot",
    icon: "€",
    detail: "5 números · 2 soles",
    description: "Elige 5 números del 1 al 50 y 2 soles del 1 al 12.",
    provider: "ONCE",
    groups: [
      { label: "Números", count: 5, min: 1, max: 50 },
      { label: "Soles", count: 2, min: 1, max: 12, special: true }
    ]
  },
  {
    id: "cupon-diario",
    name: "Cupón Diario",
    icon: "C",
    detail: "Número de 5 cifras",
    description: "Genera un número de cinco cifras, del 00000 al 99999. No incluye la serie.",
    provider: "ONCE",
    type: "once-coupon",
    digits: 5
  },
  {
    id: "cuponazo",
    name: "Cuponazo",
    icon: "C",
    detail: "Número de 5 cifras",
    description: "Genera un número de cinco cifras, del 00000 al 99999. No incluye la serie.",
    provider: "ONCE",
    type: "once-coupon",
    digits: 5
  },
  {
    id: "sueldazo",
    name: "Sueldazo Fin de Semana",
    icon: "S",
    detail: "Número de 5 cifras",
    description: "Genera un número de cinco cifras, del 00000 al 99999. No incluye la serie.",
    provider: "ONCE",
    type: "once-coupon",
    digits: 5
  },
  {
    id: "super11",
    name: "Super 11",
    icon: "11",
    detail: "5–11 números · del 1 al 85",
    description: "Elige de 5 a 11 números distintos del 1 al 85.",
    provider: "ONCE",
    type: "super11"
  },
    // ... (los juegos anteriores) ...
  {
    id: "triplex",
    name: "Triplex",
    icon: "3",
    detail: "Número de 3 cifras",
    description: "Genera un número de tres cifras, del 000 al 999.",
    provider: "ONCE",
    type: "triplex",
    digits: 3
  },
  {
    id: "mi-dia",
    name: "Mi Día de la ONCE",
    icon: "D",
    detail: "Fecha completa y n.º de la suerte",
    description: "Genera una fecha válida (Día, Mes, Año) y un número de la suerte del 1 al 11.",
    provider: "ONCE",
    type: "mi-dia"
  }
];

const gameSelect = document.querySelector("#game-select");
const lineCountInput = document.querySelector("#line-count");
const resultsContainer = document.querySelector("#results");
const resultsTitle = document.querySelector("#results-title");
const resultCount = document.querySelector("#result-count");
const resultActions = document.querySelector("#result-actions");
const statusMessage = document.querySelector("#status-message");
const description = document.querySelector("#game-description");
const horseOptions = document.querySelector("#horse-options");
const horseCountsContainer = document.querySelector("#horse-counts");
const super11Options = document.querySelector("#super11-options");
const super11CountInput = document.querySelector("#super11-count");
const gamesGrid = document.querySelector("#games-grid");
const gamesCount = document.querySelector("#games-count");
let latestResults = [];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomInt(min, max) {
  const range = max - min + 1;
  if (window.crypto && window.crypto.getRandomValues) {
    const maxUint32 = 0x100000000;
    const limit = Math.floor(maxUint32 / range) * range;
    const buffer = new Uint32Array(1);
    let value;
    do {
      window.crypto.getRandomValues(buffer);
      value = buffer[0];
    } while (value >= limit);
    return min + (value % range);
  }
  return min + Math.floor(Math.random() * range);
}

function pickUnique(count, min, max) {
  const values = Array.from({ length: max - min + 1 }, (_, index) => min + index);
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values.slice(0, count).sort((a, b) => a - b);
}

function randomFrom(values) {
  return values[randomInt(0, values.length - 1)];
}

function getHorseCounts() {
  return Array.from(horseCountsContainer.querySelectorAll("input"), (input) => {
    const count = clamp(Number.parseInt(input.value, 10) || 2, 2, 30);
    input.value = String(count);
    return count;
  });
}

function getSuper11Count() {
  const count = clamp(Number.parseInt(super11CountInput.value, 10) || 11, 5, 11);
  super11CountInput.value = String(count);
  return count;
}

function makeTicket(game) {
  if (game.type === "national") {
    return { number: String(randomInt(0, 99999)).padStart(5, "0") };
  }

  if (game.type === "once-coupon" || game.type === "triplex") {
    const max = (10 ** game.digits) - 1;
    return { number: String(randomInt(0, max)).padStart(game.digits, "0") };
  }

  if (game.type === "super11") {
    return {
      groups: [{
        label: "Números",
        special: false,
        values: pickUnique(getSuper11Count(), 1, 85)
      }]
    };
  }

  if (game.type === "quiniela") {
    return {
      matches: Array.from({ length: 14 }, () => randomFrom(["1", "X", "2"])),
      pleno: [randomFrom(["0", "1", "2", "M"]), randomFrom(["0", "1", "2", "M"])]
    };
  }

  if (game.type === "quinigol") {
    return {
      matches: Array.from({ length: 6 }, () => [
        randomFrom(["0", "1", "2", "M"]),
        randomFrom(["0", "1", "2", "M"])
      ])
    };
  }

  if (game.type === "quintuple") {
    const horseCounts = getHorseCounts();
    const winners = horseCounts.map((count) => randomInt(1, count));
    const secondPlaceOptions = Array.from(
      { length: horseCounts[4] - 1 },
      (_, index) => index + 1
    ).map((horse) => horse >= winners[4] ? horse + 1 : horse);
    return {
      winners,
      second: randomFrom(secondPlaceOptions)
    };
  }
  if (game.type === "mi-dia") {
    const anoActual = new Date().getFullYear();
    const ano = randomInt(1920, anoActual);
    const mesIdx = randomInt(0, 11);
    const diasEnMes = new Date(ano, mesIdx + 1, 0).getDate();
    const dia = randomInt(1, diasEnMes);
    const suerte = randomInt(1, 11);
    
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    return {
      fecha: `${String(dia).padStart(2, "0")} de ${meses[mesIdx]} de ${ano}`,
      suerte: suerte
    };
  }

  return {
    groups: game.groups.map((group) => ({
      label: group.label,
      special: Boolean(group.special),
      values: pickUnique(group.count, group.min, group.max)
    }))
  };
}

function ticketKey(ticket) {
  return JSON.stringify(ticket);
}

function makeUniqueTickets(game, count) {
  const tickets = [];
  const seen = new Set();
  while (tickets.length < count) {
    const ticket = makeTicket(game);
    const key = ticketKey(ticket);
    if (!seen.has(key)) {
      seen.add(key);
      tickets.push(ticket);
    }
  }
  return tickets;
}

function createBall(value, special = false, wide = false) {
  const ball = document.createElement("span");
  ball.className = `ball${special ? " special" : ""}${wide ? " wide" : ""}`;
  ball.textContent = value;
  return ball;
}

function addLabeledGroup(container, label, values, special = false, wide = false) {
  const group = document.createElement("div");
  group.className = "ball-group";
  const groupLabel = document.createElement("span");
  groupLabel.className = "group-label";
  groupLabel.textContent = label;
  group.append(groupLabel);
  for (const value of values) {
    group.append(createBall(value, special, wide));
  }
  container.append(group);
}

function renderTicket(ticket, game, index) {
  const card = document.createElement("article");
  card.className = "result-card";
  card.style.animationDelay = `${Math.min(index, 8) * 35}ms`;

  const heading = document.createElement("div");
  heading.className = "result-card-heading";
  heading.textContent = `${game.name} · Combinación ${index + 1}`;
  card.append(heading);

  const content = document.createElement("div");
  content.className = "result-balls";

   if (game.type === "national" || game.type === "once-coupon" || game.type === "triplex") {
    const label = game.type === "once-coupon" ? "Número · sin serie" : "Número";
    addLabeledGroup(content, label, [ticket.number], false, true);
  } else if (game.type === "mi-dia") {
    addLabeledGroup(content, "Fecha asignada", [ticket.fecha], false, true);
    addLabeledGroup(content, "Número de la suerte", [ticket.suerte], true, false);
  } else if (game.type === "quiniela") {

  } else if (game.type === "quinigol") {
    ticket.matches.forEach((score, matchIndex) => {
      addLabeledGroup(content, String(matchIndex + 1).padStart(2, "0"), score, false, true);
    });
  } else if (game.type === "quintuple") {
    ticket.winners.forEach((horse, raceIndex) => {
      addLabeledGroup(content, `Carrera ${raceIndex + 1}`, [horse], false, true);
    });
    addLabeledGroup(content, "2.º · carrera 5", [ticket.second], true, true);
  } else {
    for (const group of ticket.groups) {
      addLabeledGroup(content, group.label, group.values, group.special);
    }
  }

  card.append(content);
  return card;
}

function renderResults() {
  const game = games.find((item) => item.id === gameSelect.value);
  resultsContainer.replaceChildren(...latestResults.map((ticket, index) =>
    renderTicket(ticket, game, index)
  ));
  resultsTitle.textContent = latestResults.length === 1
    ? "Tu combinación está lista"
    : "Tus combinaciones están listas";
  resultCount.textContent = `${latestResults.length} ${latestResults.length === 1 ? "línea" : "líneas"}`;
  resultCount.hidden = false;
  resultActions.hidden = false;
  statusMessage.textContent = "";
}

function renderHorseOptions() {
  horseCountsContainer.replaceChildren();
  for (let race = 1; race <= 5; race += 1) {
    const label = document.createElement("label");
    label.append(document.createTextNode(`Carrera ${race}`));
    const input = document.createElement("input");
    input.type = "number";
    input.min = "2";
    input.max = "30";
    input.value = "12";
    input.inputMode = "numeric";
    input.setAttribute("aria-label", `Número de caballos participantes en la carrera ${race}`);
    label.append(input);
    horseCountsContainer.append(label);
  }
}

function selectGame(gameId) {
  gameSelect.value = gameId;
  const game = games.find((item) => item.id === gameId);
  description.textContent = game.description;
  horseOptions.hidden = game.type !== "quintuple";
  super11Options.hidden = game.type !== "super11";
  for (const card of gamesGrid.querySelectorAll(".game-card")) {
    card.setAttribute("aria-pressed", String(card.dataset.gameId === gameId));
  }
  latestResults = [];
  resultsContainer.innerHTML = `<div class="empty-state"><span class="empty-icon" aria-hidden="true">✳</span><p>Tu próxima combinación está a un clic.</p><span>Selecciona un juego y pulsa «Generar».</span></div>`;
  resultsTitle.textContent = "Aún no hay combinación";
  resultCount.hidden = true;
  resultActions.hidden = true;
  statusMessage.textContent = "";
}

function normalizeLineCount() {
  const value = Number.parseInt(lineCountInput.value, 10);
  const normalized = clamp(Number.isFinite(value) ? value : 1, 1, 10);
  lineCountInput.value = String(normalized);
  return normalized;
}

function ticketToText(ticket, game) {
  if (game.type === "national") {
    return ticket.number;
  }
    if (game.type === "mi-dia") {
    return `Fecha: ${ticket.fecha} | Número de la suerte: ${ticket.suerte}`;
  }
  if (game.type === "once-coupon") {
    return `Número (sin serie): ${ticket.number}`;
  }
  if (game.type === "triplex") {
    return `Número: ${ticket.number}`;
  }
  if (game.type === "quiniela") {
    return `Partidos: ${ticket.matches.join(" ")} | Pleno al 15 (local/visitante): ${ticket.pleno.join("-")}`;
  }
  if (game.type === "quinigol") {
    return ticket.matches.map((score, index) => `${index + 1}: ${score.join("-")}`).join(" | ");
  }
  if (game.type === "quintuple") {
    return `Ganadores por carrera: ${ticket.winners.join(", ")} | Segundo de la carrera 5: ${ticket.second}`;
  }
  return ticket.groups.map((group) => `${group.label}: ${group.values.join(", ")}`).join(" | ");
}

function getResultsText() {
  const game = games.find((item) => item.id === gameSelect.value);
  return latestResults.map((ticket, index) =>
    `${game.name} · Combinación ${index + 1}\n${ticketToText(ticket, game)}`
  ).join("\n\n");
}

function renderGamesGrid() {
  gamesGrid.replaceChildren();
  gamesCount.textContent = `${games.length} juegos`;
  for (const game of games) {
    const card = document.createElement("button");
    card.className = "game-card";
    card.type = "button";
    card.dataset.gameId = game.id;
    card.setAttribute("aria-pressed", "false");

    const icon = document.createElement("span");
    icon.className = "game-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = game.icon;

    const name = document.createElement("span");
    name.className = "game-card-name";
    name.textContent = game.name;

    const provider = document.createElement("span");
    provider.className = "game-card-provider";
    provider.textContent = game.provider || "SELAE";

    const detail = document.createElement("span");
    detail.className = "game-card-detail";
    detail.textContent = game.detail;

    card.append(icon, provider, name, detail);
    card.addEventListener("click", () => selectGame(game.id));
    gamesGrid.append(card);
  }
}

for (const provider of [...new Set(games.map((game) => game.provider || "SELAE"))]) {
  const optionGroup = document.createElement("optgroup");
  optionGroup.label = provider === "ONCE" ? "Juegos de la ONCE" : "Loterías y Apuestas del Estado";
  for (const game of games.filter((item) => (item.provider || "SELAE") === provider)) {
    const option = document.createElement("option");
    option.value = game.id;
    option.textContent = game.name;
    optionGroup.append(option);
  }
  gameSelect.append(optionGroup);
}

renderHorseOptions();
renderGamesGrid();
gameSelect.addEventListener("change", () => selectGame(gameSelect.value));
super11CountInput.addEventListener("change", getSuper11Count);
document.querySelector("#generate-button").addEventListener("click", () => {
  const game = games.find((item) => item.id === gameSelect.value);
  latestResults = makeUniqueTickets(game, normalizeLineCount());
  renderResults();
});
document.querySelector("#decrease-lines").addEventListener("click", () => {
  lineCountInput.value = String(clamp(normalizeLineCount() - 1, 1, 10));
});
document.querySelector("#increase-lines").addEventListener("click", () => {
  lineCountInput.value = String(clamp(normalizeLineCount() + 1, 1, 10));
});
lineCountInput.addEventListener("change", normalizeLineCount);
document.querySelector("#copy-button").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(getResultsText());
    statusMessage.textContent = "Resultados copiados al portapapeles.";
  } catch (error) {
    statusMessage.textContent = "No se pudieron copiar. Selecciona y copia los resultados manualmente.";
  }
});
document.querySelector("#download-button").addEventListener("click", () => {
  const blob = new Blob([getResultsText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `combinaciones-${gameSelect.value}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  statusMessage.textContent = "Archivo descargado.";
});

selectGame(games[0].id);
