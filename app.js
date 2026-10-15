const games = [
    {
        id: "euromillones",
        name: "Euromillones",
        icon: "E",
        detail: "5 números - 2 estrellas",
        price: "2,50 €",
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
        detail: "6 números - reintegro",
        price: "1,00 €",
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
        detail: "6 números - reintegro",
        price: "0,50 €",
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
        detail: "5 números + clave",
        price: "1,50 €",
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
        detail: "6 números - sueño",
        price: "2,50 €",
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
        detail: "6 números - caballo",
        price: "1,00 €",
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
        price: "3,00 € / 6,00 €",
        description: "Genera un número de cinco cifras, del 00000 al 99999.",
        type: "national"
    },
    {
        id: "quiniela",
        name: "La Quiniela",
        icon: "Q",
        detail: "14 partidos + Pleno al 15",
        price: "0,75 €",
        description: "Pronostica 14 partidos con 1, X o 2 y genera el Pleno al 15.",
        type: "quiniela"
    },
    {
        id: "quinigol",
        name: "Quinigol",
        icon: "Q",
        detail: "6 partidos - goles",
        price: "1,00 €",
        description: "Genera los goles de cada equipo en los 6 partidos (0, 1, 2 o M).",
        type: "quinigol"
    },
    {
        id: "quintuple",
        name: "Quíntuple Plus",
        icon: "5",
        detail: "5 carreras - caballos",
        price: "1,00 €",
        description: "Elige un caballo ganador por carrera y el segundo de la quinta.",
        type: "quintuple"
    },
    /* --- NUEVOS JUEGOS DE LA ONCE --- */
    {
        id: "cupon_once",
        name: "Cupón Diario / Cuponazo",
        icon: "O",
        detail: "Número de 5 cifras y Serie",
        price: "2,00 € / 3,00 €",
        description: "Genera un número de 5 cifras (00000-99999) y una serie de 3 cifras (001-300).",
        type: "once_cupon"
    },
    {
        id: "sueldazo_once",
        name: "Sueldazo Fin de Semana",
        icon: "S",
        detail: "Número y Serie del Sueldazo",
        price: "2,00 €",
        description: "Genera un número de 5 cifras (00000-99999) y una serie de 3 cifras (001-055).",
        type: "once_sueldazo"
    },
    {
        id: "triplex_once",
        name: "Triplex de la ONCE",
        icon: "T",
        detail: "Número de 3 cifras",
        price: "0,50 €",
        description: "Genera un número de tres cifras aleatorias del 000 al 999.",
        type: "once_triplex"
    },
    {
        id: "super11_once",
        name: "Super 11 de la ONCE",
        icon: "S",
        detail: "Número de 5 a 11 cifras.",
        price: "1,00 €",
        description: "Genera combinaciones aleatorias eligiendo de 5 a 11 números.",
        type: "once_super11"
    },
    {
        id: "midia_once",
        name: "Mi Día de la ONCE",
        icon: "D",
        detail: "1 fecha (Día, Mes, Año).",
        price: "1,00 €",
        description: "Genera una fecha especial aleatoria con un número de la suerte.",
        type: "once_midia"
    }
];

const gameSelect = document.querySelector("#game-select");
const lineCountInput = document.querySelector("#line-count");
const resultsContainer = document.querySelector("#results");
const ticketsContainer = document.querySelector("#tickets-container");
const resultsTitle = document.querySelector("#results-title");
const resultCount = document.querySelector("#result-count");
const resultActions = document.querySelector("#result-actions");
const statusMessage = document.querySelector("#status-message");
const description = document.querySelector("#game-description");
const horseOptions = document.querySelector("#horse-options");
const horseCountsContainer = document.querySelector("#horse-counts");
const gamesGrid = document.querySelector("#games-grid");
let latestResults = [];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomInt(min, max) {
  const range = max - min + 1;
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
  if (!horseCountsContainer) return [];
  return Array.from(horseCountsContainer.querySelectorAll("input"), (input) => {
    const count = clamp(Number.parseInt(input.value, 10) || 2, 2, 30);
    input.value = String(count);
    return count;
  });
}

function makeTicket(game) {
  if (game.type === "national") {
    return { number: String(randomInt(0, 99999)).padStart(5, "0") };
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
    return { winners, second: randomInt(1, horseCounts[4] || 12) };
  }
  /* --- LÓGICA DE GENERACIÓN PARA LA ONCE --- */
  if (game.type === "once_cupon") {
    return {
      number: String(randomInt(0, 99999)).padStart(5, "0"),
      serie: String(randomInt(1, 300)).padStart(3, "0")
    };
  }
  if (game.type === "once_sueldazo") {
    return {
      number: String(randomInt(0, 99999)).padStart(5, "0"),
      serie: String(randomInt(1, 55)).padStart(3, "0")
    };
  }
  if (game.type === "once_triplex") {
    return { number: String(randomInt(0, 999)).padStart(3, "0") };
  }
          if (game.type === "once_super11") {
        // Leemos la cantidad que hay en la cajita de la pantalla
        const lineCountInput = document.querySelector("#line-count");
        let count = parseInt(lineCountInput ? lineCountInput.value : 11) || 11;
        
        // Nos aseguramos de que esté estrictamente entre 5 y 11
        if (count < 5) count = 5;
        if (count > 11) count = 11;

        const numbers = [];
        while (numbers.length < count) {
            const num = randomInt(1, 85);
            if (!numbers.includes(num)) numbers.push(num);
        }
        numbers.sort((a, b) => a - b);
        return {
            number: numbers.map(n => String(n).padStart(2, "0")).join(" ")
        };
    }


    if (game.type === "once_midia") {
        // Genera una fecha realista aleatoria y un número de la suerte (0-11)
        const year = randomInt(1920, 2026);
        const month = randomInt(1, 12);
        const day = randomInt(1, 28); // 28 para evitar líos con bisiestos
        const luck = randomInt(0, 11);
        
        const dateStr = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
              return {
            number: dateStr,
            serie: String(luck)
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

function makeUniqueTickets(game, count) {
  const tickets = [];
  const seen = new Set();
  let attempts = 0;
  while (tickets.length < count && attempts < 1000) {
    const ticket = makeTicket(game);
    const key = JSON.stringify(ticket);
    if (!seen.has(key)) {
      seen.add(key);
      tickets.push(ticket);
    }
    attempts++;
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
  group.className = "ticket-line";
  const groupLabel = document.createElement("span");
  groupLabel.className = "ticket-label";
  groupLabel.textContent = label;
  group.append(groupLabel);
  
  const numbersContainer = document.createElement("div");
  numbersContainer.className = "ticket-numbers";
  for (const value of values) {
    numbersContainer.append(createBall(value, special, wide));
  }
  group.append(numbersContainer);
  container.append(group);
}

function renderTicket(ticket, game, index) {
    const card = document.createElement("article");
    card.className = "result-card";

    const heading = document.createElement("div");
    heading.className = "result-card-heading";
    heading.style.fontWeight = "700";
    heading.style.marginBottom = "0.5rem";
    heading.textContent = `${game.name} - Combinación ${index + 1}`;
    card.append(heading);

    const content = document.createElement("div");
    content.className = "result-balls";

    if (game.type === "national") {
        addLabeledGroup(content, "Número", [ticket.number], false, true);
    } else if (game.type === "quiniela") {
        addLabeledGroup(content, "14 Signos", ticket.matches, false, false);
        addLabeledGroup(content, "Pleno 15", [`L:${ticket.pleno[0]} V:${ticket.pleno[1]}`], true, true);
    } else if (game.type === "quinigol") {
        const formattedGoles = ticket.matches.map(score => `${score[0]}-${score[1]}`);
        addLabeledGroup(content, "Goles", formattedGoles, false, true);
    } else if (game.type === "quintuple") {
        addLabeledGroup(content, "Ganadores", ticket.winners, false, false);
        addLabeledGroup(content, "2ª Quinta", [ticket.second], true, false);
    } else if (game.type === "once_cupon" || game.type === "once_sueldazo") {
        addLabeledGroup(content, "Número", [ticket.number], false, true);
        addLabeledGroup(content, "Serie", [ticket.serie], true, true);
    } else if (game.type === "once_triplex") {
        addLabeledGroup(content, "Número", [ticket.number], false, true);
            } else if (game.type === "once_super11") {
            addLabeledGroup(content, "Números", ticket.number.split(" "), false, false);
        } else if (game.type === "once_midia") {
            addLabeledGroup(content, "Fecha", [ticket.number], false, true);
            addLabeledGroup(content, "Número de la Suerte", [ticket.serie], true, false);

    } else {
        ticket.groups.forEach((group) => {
            addLabeledGroup(content, group.label, group.values, group.special, false);
        });
    }

    card.append(content);
    return card;
}


function renderResults() {
  const activeGame = games.find((item) => item.id === gameSelect.value);
  if (!activeGame) return;

  if (ticketsContainer) {
    ticketsContainer.replaceChildren(...latestResults.map((ticket, index) =>
      renderTicket(ticket, activeGame, index)
    ));
  }

  if (resultsTitle) {
    resultsTitle.textContent = "Tus combinaciones:";
  }
  if (resultCount) {
    resultCount.textContent = `${latestResults.length} línea(s) generada(s)`;
    resultCount.hidden = false;
  }
  if (resultActions) resultActions.hidden = false;
}

function renderHorseOptions() {
  if (!horseCountsContainer || !horseOptions) return;
  horseCountsContainer.replaceChildren();
  for (let race = 1; race <= 5; race += 1) {
    const label = document.createElement("label");
    label.textContent = `Carrera ${race}: `;
    const input = document.createElement("input");
    input.type = "number";
    input.min = "2";
    input.max = "38";
    input.value = "12";
    input.style.width = "50px";
    input.style.marginLeft = "5px";
    label.append(input);
    horseCountsContainer.append(label);
  }
}

function selectGame(gameId) {
  if (!gameSelect) return;
  gameSelect.value = gameId;
  const game = games.find((item) => item.id === gameId);
  if (!game) return;

  if (description) {
    description.textContent = `${game.description} • Precio por apuesta: ${game.price}`;
  }

  if (horseOptions) {
    horseOptions.hidden = game.type !== "quintuple";
    if (game.type === "quintuple") renderHorseOptions();
  }

  latestResults = [];
  if (ticketsContainer) ticketsContainer.replaceChildren();
  if (resultsTitle) resultsTitle.textContent = "Aún no hay combinación";
  if (resultCount) resultCount.hidden = true;
  if (resultActions) resultActions.hidden = true;
       const labelElement = document.querySelector("label[for='line-count']");
    const inputElement = document.querySelector("#line-count");
    
    if (labelElement && inputElement) {
        if (game.type === "once_super11") {
            labelElement.textContent = "Números a jugar (5-11):";
            inputElement.value = "11";
            inputElement.min = "5";
            inputElement.max = "11";
            inputElement.setAttribute("step", "1");
        } else {
            labelElement.textContent = "Combinaciones:";
            inputElement.value = "1";
            inputElement.min = "1";
            inputElement.max = "10";
            inputElement.setAttribute("step", "1");
        }
    }

}

function init() {
  if (!gameSelect) return;
  
  gameSelect.replaceChildren();
  games.forEach((game) => {
    const option = document.createElement("option");
    option.value = game.id;
    option.textContent = game.name;
    gameSelect.append(option);
  });

  if (gamesGrid) {
    gamesGrid.replaceChildren();
    games.forEach((game) => {
      const card = document.createElement("article");
      card.className = "game-card";
      
      const badge = document.createElement("div");
      badge.className = "game-badge";
      badge.textContent = game.icon;
      
      const title = document.createElement("h3");
      title.textContent = game.name;
      
      const detail = document.createElement("p");
      detail.textContent = `${game.detail} • Precio: ${game.price}`;
      
      card.append(badge, title, detail);
      card.addEventListener("click", () => selectGame(game.id));
      gamesGrid.append(card);
    });
  }

  gameSelect.addEventListener("change", (e) => selectGame(e.target.value));

        document.querySelector("#decrease-lines")?.addEventListener("click", (e) => {
        e.stopImmediatePropagation(); // Detiene el doble clic automático
        const isSuper11 = games.find(g => g.id === gameSelect.value)?.type === "once_super11";
        const minVal = isSuper11 ? 5 : 1;
        let current = parseInt(lineCountInput.value) || 1;
        if (current > minVal) {
            lineCountInput.value = String(current - 1);
        }
    });

    document.querySelector("#increase-lines")?.addEventListener("click", (e) => {
        e.stopImmediatePropagation(); // Detiene el doble clic automático
        const isSuper11 = games.find(g => g.id === gameSelect.value)?.type === "once_super11";
        const maxVal = isSuper11 ? 11 : 10;
        let current = parseInt(lineCountInput.value) || 1;
        if (current < maxVal) {
            lineCountInput.value = String(current + 1);
        }
    });
 
    document.querySelector("#generate-button")?.addEventListener("click", () => {
    const activeGame = games.find((item) => item.id === gameSelect.value);
    if (!activeGame) return;
            // Si es el Super 11 solo queremos generar 1 línea de combinaciones
        const count = activeGame.type === "once_super11" ? 1 : clamp(Number(lineCountInput.value) || 1, 1, 10);
        latestResults = makeUniqueTickets(activeGame, count);
        renderResults();
  });

  setupActionButtons();

  selectGame(games[0].id);
}

// ==========================================
// FUNCIONES PARA COPIAR Y DESCARGAR TICKET
// ==========================================

function formatResultsAsText() {
  const activeGame = games.find((item) => item.id === gameSelect.value);
  if (!activeGame || !latestResults.length) return "";

  let text = `✨ AZAR - GENERADOR DE LOTERÍAS ✨\n`;
  text += `Juego: ${activeGame.name}\n`;
  text += `--------------------------------------\n`;

  latestResults.forEach((ticket, index) => {
    text += `Combinación ${index + 1}: `;
    
    if (activeGame.type === "national") {
      text += `Número: ${ticket.number}`;
    } else if (activeGame.type === "quiniela") {
      text += `14 Signos: [${ticket.matches.join(", ")}] | Pleno 15: L:${ticket.pleno[0]} V:${ticket.pleno[1]}`;
    } else if (activeGame.type === "quinigol") {
      const formattedGoles = ticket.matches.map(score => `${score[0]}-${score[1]}`);
      text += `Goles: ${formattedGoles.join(" | ")}`;
    } else if (activeGame.type === "quintuple") {
      text += `Ganadores: [${ticket.winners.join(", ")}] | 2º Quinta: ${ticket.second}`;
    } else if (activeGame.type === "once_cupon" || activeGame.type === "once_sueldazo") {
      text += `Número: ${ticket.number} | Serie: ${ticket.serie}`;
           } else if (activeGame.type === "once_triplex") {
            text += `Número: ${ticket.number}`;
        } else if (activeGame.type === "once_super11") {
            text += `Números: ${ticket.number}`;
               } else if (activeGame.type === "once_midia") {
            text += `Fecha: ${ticket.number} | Número de la Suerte: ${ticket.serie}`;
        } else {
            // Este ELSE general añade los números para El Gordo, Primitiva, Euromillones, etc.
            const groupsText = ticket.groups.map(g => `${g.label}: ${g.values.join(", ")}`).join(" | ");
            text += groupsText;
        }

        text += '\n';
    });

  text += `--------------------------------------\n`;
  text += `* Resultados aleatorios generados solo por diversión.`;
  return text;
}

function showStatus(message, isError = false) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? "#d10014" : "#009639";
  
  setTimeout(() => {
    statusMessage.textContent = "";
  }, 3000);
}

function setupActionButtons() {
  const copyButton = document.querySelector("#copy-button");
  const downloadButton = document.querySelector("#download-button");

  copyButton?.addEventListener("click", async () => {
    const text = formatResultsAsText();
    if (!text) return;
    
    try {
      await navigator.clipboard.writeText(text);
      showStatus("📋 ¡Copiado al portapapeles con éxito!");
    } catch (err) {
      showStatus("❌ No se pudo copiar el texto.", true);
    }
  });

  downloadButton?.addEventListener("click", () => {
    const text = formatResultsAsText();
    if (!text) return;

    const activeGame = games.find((item) => item.id === gameSelect.value);
    const fileName = `combinacion_${activeGame ? activeGame.id : "azar"}.txt`;
    
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    
    URL.revokeObjectURL(url);
    showStatus("💾 Archivo descargado correctamente.");
  });
}

document.addEventListener("DOMContentLoaded", init);
if (document.readyState !== "loading") init();