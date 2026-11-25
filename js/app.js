/**
 * TioProject — Project Physics Pre 2026
 * Arquitectura Serverless (GitHub Pages + JSON / Google Apps Script)
 */

// ==========================================
// 1. CONFIGURACIÓN GENERAL (Fácil de editar)
// ==========================================
const CONFIG = {
  whatsappNumber: "51912138703",
  facebookUrl: "https://www.facebook.com/projectphysicspre/?locale=es_LA",
  // Cuando tengas tu link de TikTok, pégalo aquí entre comillas (ej. "https://www.tiktok.com/@tioproject"):
  tiktokUrl: "",
  // Cuando publiques tu Google Apps Script como Web App, pega la URL aquí para cargar tus PDFs de Drive en vivo:
  googleAppsScriptUrl: ""
};

// ==========================================
// 2. MICRO-RETOS INTERACTIVOS (Estilo Brilliant)
// ==========================================
const MICRO_CHALLENGES = [
  {
    tag: "FÍSICA • CINEMÁTICA",
    question: "Un móvil viaja de Lima a Chosica a $40\text{ km/h}$ y regresa por la misma ruta a $60\text{ km/h}$. ¿Cuál fue su rapidez media en todo el viaje?",
    options: [
      { id: "A", text: "$50\text{ km/h}$ (el promedio simple)" },
      { id: "B", text: "$48\text{ km/h}$ (media armónica)" },
      { id: "C", text: "$0\text{ km/h}$ (porque volvió al inicio)" }
    ],
    correct: "B",
    explanation: "¡Clásica trampa de admisión! La rapidez media es $\frac{\text{distancia total}}{\text{tiempo total}} = \frac{2d}{\frac{d}{40} + \frac{d}{60}} = \frac{2(40)(60)}{40+60} = 48\text{ km/h}$. La opción C corresponde a la velocidad media vectorial, no a la rapidez media."
  },
  {
    tag: "ÁLGEBRA • ECUACIONES",
    question: "¿Cuántas soluciones reales tiene la ecuación $\sqrt{x - 2} = -3$?",
    options: [
      { id: "A", text: "Una solución: $x = 11$" },
      { id: "B", text: "Ninguna solución ($\text{CS} = \emptyset$)" },
      { id: "C", text: "Dos soluciones: $x = 11$ y $x = -7$" }
    ],
    correct: "B",
    explanation: "Si elevas al cuadrado sin analizar el universo, obtienes $x - 2 = 9 \Rightarrow x = 11$. Pero la raíz cuadrada principal $\sqrt{\cdot}$ en los reales siempre devuelve un valor $\ge 0$, jamás $-3$. Por tanto, no tiene solución."
  },
  {
    tag: "FÍSICA • HIDROSTÁTICA",
    question: "Un cubo de hielo flota en un vaso lleno de agua hasta el borde. Cuando el hielo se derrite por completo (a temperatura constante), ¿qué ocurre con el nivel del agua?",
    options: [
      { id: "A", text: "El agua se rebalsa del vaso" },
      { id: "B", text: "El nivel del agua baja ligeramente" },
      { id: "C", text: "El nivel del agua se mantiene exactamente igual" }
    ],
    correct: "C",
    explanation: "Por el Principio de Arquímedes, el peso del hielo es igual al peso del agua desalojada por su parte sumergida. Al derretirse, el agua líquida formada ocupa exactamente el mismo volumen que estaba sumergido. ¡No se rebalsa!"
  }
];

// ==========================================
// 3. ÁRBOL DE HABILIDADES (Roadmap por curso)
// ==========================================
const ROADMAPS = {
  fisica: {
    mermaid: `
      flowchart TD
        F1["01. Análisis Dimensional y Vectores"] --> F2["02. Cinemática (MRU / MRUV)"]
        F1 --> F3["03. Estática y DCL"]
        F2 --> F4["04. Dinámica Lineal y Circular"]
        F3 --> F4
        F4 --> F5["05. Trabajo, Potencia y Energía"]
        F5 --> F6["06. Electrostática y Electrodinámica"]
        classDef default fill:#131317,stroke:#52525B,stroke-width:1.5px,color:#F4F4F6;
    `,
    nodes: {
      F1: {
        title: "01. Análisis Dimensional y Vectores",
        badge: "BASE OBLIGATORIA",
        weight: "Fijo en UNI y UNMSM",
        prereq: "Trigonometría básica (triángulos notables)",
        desc: "Sin dominar descomposición vectorial y ecuaciones dimensionales, el 70% de la física preuniversitaria se vuelve memorización ciega.",
        pdfTeoria: "Separata 01 - Vectores y Dimensiones",
        pdfPractica: "Boletín 01 - 30 Problemas Graduados"
      },
      F2: {
        title: "02. Cinemática (MRU, MRUV y Caída Libre)",
        badge: "ALTA FRECUENCIA",
        weight: "Fijo en UNMSM (DECO)",
        prereq: "01. Vectores",
        desc: "Análisis escalar y vectorial del movimiento, lectura de gráficas $x-t$ y $v-t$, y movimiento parabólico.",
        pdfTeoria: "Guía Gráfica de Cinemática",
        pdfPractica: "Boletín 02 - Problemas Tipo DECO"
      },
      F3: {
        title: "03. Estática y Diagrama de Cuerpo Libre",
        badge: "CLAVE PARA MECÁNICA",
        weight: "Fijo en UNI / UNFV / UNAC",
        prereq: "01. Vectores",
        desc: "Primera y segunda condición de equilibrio, fuerzas internas (tensión, normal, elástica) y rozamiento.",
        pdfTeoria: "Manual de DCL sin Errores",
        pdfPractica: "Boletín 03 - Estática y Torque"
      },
      F4: {
        title: "04. Dinámica Lineal y Circular",
        badge: "NÚCLEO DEL CURSO",
        weight: "Fijo en todas las universidades",
        prereq: "02. Cinemática + 03. Estática",
        desc: "Segunda Ley de Newton ($\sum \vec{F} = m\vec{a}$), fuerza centrípeta y sistemas acelerados.",
        pdfTeoria: "Guía Teórica de Dinámica",
        pdfPractica: "Boletín 04 - Dinámica Nivel Admisión"
      },
      F5: {
        title: "05. Trabajo, Potencia y Energía Mecánica",
        badge: "ALTO IMPACTO",
        weight: "Muy frecuente en UNI y UNMSM",
        prereq: "04. Dinámica",
        desc: "Teorema del trabajo y la energía cinética, conservación de la energía mecánica y fuerzas no conservativas.",
        pdfTeoria: "Resumen de Conservación de Energía",
        pdfPractica: "Boletín 05 - Energía y Potencia"
      },
      F6: {
        title: "06. Electrostática y Electrodinámica",
        badge: "BLOQUE II",
        weight: "Fijo en Examen Final / Admisión",
        prereq: "01. Vectores + 05. Energía",
        desc: "Ley de Coulomb, campo y potencial eléctrico, circuitos resistivos y leyes de Kirchhoff.",
        pdfTeoria: "Guía de Electricidad Pre",
        pdfPractica: "Boletín 06 - Circuitos y Campo"
      }
    }
  },
  algebra: {
    mermaid: `
      flowchart TD
        A1["01. Exponentes y Productos Notables"] --> A2["02. Polinomios y Factorización"]
        A2 --> A3["03. Ecuaciones e Inecuaciones"]
        A3 --> A4["04. Valor Absoluto y Logaritmos"]
        A3 --> A5["05. Funciones Reales y Gráficas"]
        A4 --> A5
        classDef default fill:#131317,stroke:#52525B,stroke-width:1.5px,color:#F4F4F6;
    `,
    nodes: {
      A1: {
        title: "01. Leyes de Exponentes y Productos Notables",
        badge: "CIMIENTO ALGEBRAICO",
        weight: "Base para todo el examen",
        prereq: "Aritmética básica",
        desc: "Manipulación rápida de expresiones, identidades de Legendre, Gauss y condiciones cúbicas.",
        pdfTeoria: "Formulario de Productos Notables",
        pdfPractica: "Boletín 01 - Álgebra Desde Cero"
      },
      A2: {
        title: "02. Polinomios y Factorización",
        badge: "HERRAMIENTA CLAVE",
        weight: "Fijo en UNFV / UNAC / UNMSM",
        prereq: "01. Exponentes y Productos Notables",
        desc: "Cambio de variable, división algebraica (Horner/Ruffini) y aspa doble especial.",
        pdfTeoria: "Guía de Factorización",
        pdfPractica: "Boletín 02 - Polinomios"
      },
      A3: {
        title: "03. Ecuaciones e Inecuaciones",
        badge: "FIJO DE EXAMEN",
        weight: "Fijo en UNI y UNMSM",
        prereq: "02. Factorización",
        desc: "Método de los puntos críticos, discriminante en cuadráticas y restricciones de existencia.",
        pdfTeoria: "Manual de Inecuaciones",
        pdfPractica: "Boletín 03 - Puntos Críticos"
      },
      A4: {
        title: "04. Valor Absoluto y Logaritmos",
        badge: "NIVEL INTERMEDIO",
        weight: "Fijo en UNMSM / UNI",
        prereq: "03. Inecuaciones",
        desc: "Definición formal de $|x|$, desigualdad triangular y propiedades de logaritmos.",
        pdfTeoria: "Guía de Logaritmos",
        pdfPractica: "Boletín 04 - Valor Absoluto"
      },
      A5: {
        title: "05. Funciones Reales y Gráficas",
        badge: "MÁXIMO PUNTAJE",
        weight: "Tema estrella en UNI y UNMSM",
        prereq: "03. Inecuaciones + 04. Logaritmos",
        desc: "Cálculo de dominio y rango, función inversa, composición y desplazamiento de gráficas.",
        pdfTeoria: "Atlas de Funciones Elementales",
        pdfPractica: "Boletín 05 - Funciones DECO y UNI"
      }
    }
  },
  geometria: {
    mermaid: `
      flowchart TD
        G1["01. Triángulos y Congruencia"] --> G2["02. Circunferencia y Cuadriláteros"]
        G1 --> G3["03. Razones Trigonométricas"]
        G2 --> G4["04. Semejanza y Relaciones Métricas"]
        G3 --> G5["05. Identidades y Resolución de Triángulos"]
        classDef default fill:#131317,stroke:#52525B,stroke-width:1.5px,color:#F4F4F6;
    `,
    nodes: {
      G1: {
        title: "01. Triángulos y Congruencia",
        badge: "BASE GEOMÉTRICA",
        weight: "Fijo en todas las áreas",
        prereq: "Ángulos entre paralelas",
        desc: "Líneas notables, casos LAL-ALA-LLL y los 5 trazos auxiliares más usados en admisión.",
        pdfTeoria: "Guía de Trazos Auxiliares",
        pdfPractica: "Boletín 01 - Triángulos"
      },
      G2: {
        title: "02. Circunferencia y Cuadriláteros",
        badge: "ALTA FRECUENCIA",
        weight: "Fijo en UNMSM y UNI",
        prereq: "01. Triángulos",
        desc: "Ángulos asociados a la circunferencia, cuadrilátero inscriptible y teoremas de Poncelet/Pitot.",
        pdfTeoria: "Teoremas de Circunferencia",
        pdfPractica: "Boletín 02 - Cuadriláteros"
      },
      G3: {
        title: "03. Razones Trigonométricas de Ángulos Agudos",
        badge: "BASE PARA FÍSICA",
        weight: "Indispensable",
        prereq: "01. Triángulos rectángulos",
        desc: "Triángulos rectángulos notables exactos y aproximados, resolución de triángulos rectángulos.",
        pdfTeoria: "Tabla de Triángulos Notables",
        pdfPractica: "Boletín 03 - RT Agudos"
      },
      G4: {
        title: "04. Semejanza y Relaciones Métricas",
        badge: "NIVEL ADMISIÓN",
        weight: "Fijo en UNI / UNMSM",
        prereq: "02. Circunferencia",
        desc: "Teorema de Thales, semejanza de triángulos y relaciones métricas en triángulos oblicuángulos.",
        pdfTeoria: "Formulario de Relaciones Métricas",
        pdfPractica: "Boletín 04 - Semejanza"
      },
      G5: {
        title: "05. Identidades Trigonométricas y Leyes",
        badge: "BLOQUE II",
        weight: "Fijo en UNI / UNAC",
        prereq: "03. RT Agudos",
        desc: "Identidades pitagóricas, arco doble/compuesto, Ley de Senos y Ley de Cosenos.",
        pdfTeoria: "Chuleta de Identidades",
        pdfPractica: "Boletín 05 - Trigonometría"
      }
    }
  },
  quimica: {
    mermaid: `
      flowchart TD
        Q1["01. Estructura Atómica y Tabla Periódica"] --> Q2["02. Enlace Químico y Nomenclatura"]
        Q2 --> Q3["03. Cálculos Químicos y Estequiometría"]
        Q3 --> Q4["04. Soluciones y Ácido-Base"]
        classDef default fill:#131317,stroke:#52525B,stroke-width:1.5px,color:#F4F4F6;
    `,
    nodes: {
      Q1: {
        title: "01. Estructura Atómica y Tabla Periódica",
        badge: "BASE QUÍMICA",
        weight: "Fijo en UNMSM / UNFV",
        prereq: "Notación científica",
        desc: "Números cuánticos, configuración electrónica y ubicación rápida en la tabla periódica.",
        pdfTeoria: "Guía de Tabla Periódica",
        pdfPractica: "Boletín 01 - Átomo"
      },
      Q2: {
        title: "02. Enlace Químico y Nomenclatura Inorgánica",
        badge: "INDISPENSABLE",
        weight: "Fijo en todas las áreas",
        prereq: "01. Tabla Periódica",
        desc: "Enlace iónico vs covalente, hibridación y formulación de óxidos, hidróxidos, ácidos y sales.",
        pdfTeoria: "Manual de Nomenclatura",
        pdfPractica: "Boletín 02 - Enlace y Funciones"
      },
      Q3: {
        title: "03. Cálculos Químicos y Estequiometría",
        badge: "FIJO DE EXAMEN",
        weight: "Fijo en UNMSM (DECO) y UNI",
        prereq: "02. Nomenclatura",
        desc: "Concepto de mol, balanceo redox, reactivo limitante, pureza y rendimiento.",
        pdfTeoria: "Guía Paso a Paso de Estequiometría",
        pdfPractica: "Boletín 03 - Estequiometría"
      },
      Q4: {
        title: "04. Soluciones, Cinética y Ácido-Base",
        badge: "BLOQUE II",
        weight: "Fijo en Ciencias de la Salud e Ingeniería",
        prereq: "03. Estequiometría",
        desc: "Molaridad, normalidad, diluciones, cálculo de pH y equilibrio químico.",
        pdfTeoria: "Formulario de Soluciones y pH",
        pdfPractica: "Boletín 04 - Soluciones"
      }
    }
  }
};

// ==========================================
// 4. INICIALIZACIÓN DE LA APP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Render Lucide Icons
  if (window.lucide) lucide.createIcons();

  // Setup TikTok link if user configured it in CONFIG.tiktokUrl
  setupSocialLinks();

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Init Micro-Challenges
  initMicroChallenges();

  // Init Mermaid & Skill Tree
  initSkillTree();

  // Init Vault (PDFs from JSON or Google Apps Script)
  initVault();

  // Init Error Hunt ("¿Dónde está el error?")
  initErrorHunt();

  // Init Solved Doubts Wall
  initSolvedDoubts();

  // Render KaTeX across initial static content
  renderMath();
});

function renderMath(target = document.body) {
  if (window.renderMathInElement) {
    renderMathInElement(target, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function setupSocialLinks() {
  if (CONFIG.tiktokUrl && CONFIG.tiktokUrl.trim() !== "") {
    const placeholder = document.getElementById("tiktok-placeholder");
    if (placeholder) {
      placeholder.outerHTML = `
        <a href="${CONFIG.tiktokUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 hover:text-white transition">
          <span class="font-mono font-bold text-silver-300">TikTok</span>
          <span>@TioProject</span>
        </a>
      `;
    }
    const footerSlot = document.getElementById("footer-tiktok-slot");
    if (footerSlot) {
      footerSlot.innerHTML = `<span>•</span> <a href="${CONFIG.tiktokUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">TikTok Oficial</a>`;
    }
  }
}

// ==========================================
// MÓDULO: MICRO-RETOS DE PORTADA
// ==========================================
let currentChallengeIdx = 0;

function initMicroChallenges() {
  const prevBtn = document.getElementById("prev-challenge-btn");
  const nextBtn = document.getElementById("next-challenge-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentChallengeIdx = (currentChallengeIdx - 1 + MICRO_CHALLENGES.length) % MICRO_CHALLENGES.length;
      renderChallenge();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentChallengeIdx = (currentChallengeIdx + 1) % MICRO_CHALLENGES.length;
      renderChallenge();
    });
  }

  renderChallenge();
}

function renderChallenge() {
  const container = document.getElementById("challenge-container");
  const counter = document.getElementById("challenge-counter");
  if (!container) return;

  const ch = MICRO_CHALLENGES[currentChallengeIdx];
  if (counter) counter.textContent = `${currentChallengeIdx + 1} / ${MICRO_CHALLENGES.length}`;

  container.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-4">
      <span class="px-2.5 py-1 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-xs text-silver-300">${ch.tag}</span>
      <span class="font-mono text-xs text-silver-500">Elige una alternativa</span>
    </div>
    <p class="text-base sm:text-lg font-medium text-white leading-relaxed mb-6">${ch.question}</p>
    <div class="space-y-3" id="challenge-options">
      ${ch.options.map(opt => `
        <button data-opt="${opt.id}" class="challenge-opt w-full text-left p-4 rounded-xl border border-obsidian-700 bg-obsidian-950/70 hover:border-silver-400 transition flex items-center gap-3.5">
          <span class="w-7 h-7 rounded-lg bg-obsidian-800 border border-obsidian-700 flex items-center justify-center font-mono text-xs font-bold text-silver-200 shrink-0">${opt.id}</span>
          <span class="text-sm text-silver-200">${opt.text}</span>
        </button>
      `).join("")}
    </div>
    <div id="challenge-feedback" class="hidden mt-6 p-4 rounded-xl border text-sm leading-relaxed"></div>
  `;

  renderMath(container);

  const buttons = container.querySelectorAll(".challenge-opt");
  const feedbackEl = document.getElementById("challenge-feedback");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-opt");
      const isCorrect = chosen === ch.correct;

      buttons.forEach(b => {
        b.disabled = true;
        const optId = b.getAttribute("data-opt");
        b.classList.remove("hover:border-silver-400");
        if (optId === ch.correct) {
          b.classList.add("border-emerald-500", "bg-emerald-950/30");
        } else if (optId === chosen && !isCorrect) {
          b.classList.add("border-rose-500", "bg-rose-950/30");
        } else {
          b.classList.add("opacity-50");
        }
      });

      feedbackEl.classList.remove("hidden");
      if (isCorrect) {
        feedbackEl.className = "mt-6 p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/25 text-emerald-100 text-sm leading-relaxed";
        feedbackEl.innerHTML = `<p class="font-bold text-emerald-300 mb-1">✓ ¡Excelente criterio! No caíste en la trampa.</p><p>${ch.explanation}</p>`;
      } else {
        feedbackEl.className = "mt-6 p-4 rounded-xl border border-rose-500/40 bg-rose-950/25 text-rose-100 text-sm leading-relaxed";
        feedbackEl.innerHTML = `<p class="font-bold text-rose-300 mb-1">✕ ¡Cuidado! Caíste en la trampa clásica.</p><p>${ch.explanation}</p>`;
      }
      renderMath(feedbackEl);
    });
  });
}

// ==========================================
// MÓDULO: ÁRBOL DE HABILIDADES (Mermaid.js)
// ==========================================
let currentCourse = "fisica";
let selectedNodeId = "F1";

function getCompletedNodes() {
  try {
    return JSON.parse(localStorage.getItem("tioproject_completed_nodes") || "[]");
  } catch {
    return [];
  }
}

function toggleNodeComplete(nodeId) {
  const completed = getCompletedNodes();
  const idx = completed.indexOf(nodeId);
  if (idx >= 0) {
    completed.splice(idx, 1);
  } else {
    completed.push(nodeId);
  }
  localStorage.setItem("tioproject_completed_nodes", JSON.stringify(completed));
  updateProgressUI();
  renderNodeInspector(currentCourse, nodeId);
  renderMermaidCourse(currentCourse);
}

function updateProgressUI() {
  const completed = getCompletedNodes();
  const allNodeIds = Object.values(ROADMAPS).flatMap(c => Object.keys(c.nodes));
  const total = allNodeIds.length;
  const count = completed.filter(id => allNodeIds.includes(id)).length;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  const textEl = document.getElementById("roadmap-progress-text");
  const barEl = document.getElementById("roadmap-progress-bar");
  if (textEl) textEl.textContent = `${count} de ${total} temas dominados`;
  if (barEl) barEl.style.width = `${pct}%`;
}

function initSkillTree() {
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      flowchart: { curve: "basis", padding: 15 }
    });
  }

  const tabs = document.querySelectorAll(".roadmap-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCourse = tab.getAttribute("data-course");
      const firstNode = Object.keys(ROADMAPS[currentCourse].nodes)[0];
      selectedNodeId = firstNode;
      renderMermaidCourse(currentCourse);
      renderNodeInspector(currentCourse, firstNode);
    });
  });

  updateProgressUI();
  renderMermaidCourse(currentCourse);
  renderNodeInspector(currentCourse, selectedNodeId);
}

async function renderMermaidCourse(courseKey) {
  const wrapper = document.getElementById("mermaid-diagram-wrapper");
  if (!wrapper || !window.mermaid) return;

  const courseData = ROADMAPS[courseKey];
  const completed = getCompletedNodes();

  // Build style overrides for completed and selected nodes
  let extraStyles = "";
  Object.keys(courseData.nodes).forEach(nid => {
    if (nid === selectedNodeId) {
      extraStyles += `
style ${nid} fill:#FFFFFF,stroke:#FFFFFF,stroke-width:2px,color:#070709`;
    } else if (completed.includes(nid)) {
      extraStyles += `
style ${nid} fill:#064E3B,stroke:#10B981,stroke-width:1.5px,color:#ECFDF5`;
    }
  });

  const graphDefinition = courseData.mermaid + extraStyles;
  const uniqueId = `mermaid-${courseKey}-${Date.now()}`;

  try {
    const { svg } = await mermaid.render(uniqueId, graphDefinition);
    wrapper.innerHTML = svg;

    // Attach click listeners to SVG nodes
    Object.keys(courseData.nodes).forEach(nid => {
      const nodeEl = wrapper.querySelector(`[id*="flowchart-${nid}-"]`);
      if (nodeEl) {
        nodeEl.addEventListener("click", () => {
          selectedNodeId = nid;
          renderNodeInspector(courseKey, nid);
          renderMermaidCourse(courseKey);
        });
      }
    });
  } catch (err) {
    console.error("Error rendering Mermaid diagram:", err);
  }
}

function renderNodeInspector(courseKey, nodeId) {
  const inspector = document.getElementById("node-inspector");
  if (!inspector) return;

  const node = ROADMAPS[courseKey].nodes[nodeId];
  if (!node) return;

  const isDone = getCompletedNodes().includes(nodeId);
  const waMsg = encodeURIComponent(`Hola TioProject, quisiera el material del tema "${node.title}".`);

  inspector.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-3">
      <span class="px-2.5 py-1 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-[11px] text-silver-300">${node.badge}</span>
      <span class="font-mono text-xs text-silver-400">${node.weight}</span>
    </div>
    <h3 class="text-xl font-bold text-white leading-snug">${node.title}</h3>
    <p class="text-xs font-mono text-silver-400 mt-2">Prerrequisito: <span class="text-silver-200">${node.prereq}</span></p>
    <p class="text-sm text-silver-300 mt-4 leading-relaxed">${node.desc}</p>

    <div class="mt-6 space-y-2.5">
      <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-700 hover:border-white transition group">
        <div class="flex items-center gap-3">
          <i data-lucide="book-open" class="w-4 h-4 text-silver-300"></i>
          <div>
            <p class="text-xs font-mono text-silver-400">GUÍA TEÓRICA (PDF)</p>
            <p class="text-sm font-semibold text-white">${node.pdfTeoria}</p>
          </div>
        </div>
        <i data-lucide="arrow-up-right" class="w-4 h-4 text-silver-400 group-hover:text-white"></i>
      </a>

      <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-700 hover:border-white transition group">
        <div class="flex items-center gap-3">
          <i data-lucide="file-check" class="w-4 h-4 text-silver-300"></i>
          <div>
            <p class="text-xs font-mono text-silver-400">BOLETÍN DE PRÁCTICA</p>
            <p class="text-sm font-semibold text-white">${node.pdfPractica}</p>
          </div>
        </div>
        <i data-lucide="arrow-up-right" class="w-4 h-4 text-silver-400 group-hover:text-white"></i>
      </a>
    </div>

    <div class="mt-6 pt-5 border-t border-obsidian-800">
      <button id="toggle-complete-btn" class="w-full py-3 px-4 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider transition flex items-center justify-center gap-2 ${
        isDone
          ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/30"
          : "bg-white text-obsidian-950 hover:bg-silver-200"
      }">
        <i data-lucide="${isDone ? "check-circle-2" : "circle"}" class="w-4 h-4"></i>
        <span>${isDone ? "Tema Dominado (Clic para desmarcar)" : "Marcar tema como dominado"}</span>
      </button>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  renderMath(inspector);

  const btn = document.getElementById("toggle-complete-btn");
  if (btn) {
    btn.addEventListener("click", () => toggleNodeComplete(nodeId));
  }
}

// ==========================================
// MÓDULO: BÓVEDA DE PDFS (JSON / Google Drive)
// ==========================================
let allMaterials = [];

async function initVault() {
  const sourceUrl = CONFIG.googleAppsScriptUrl.trim() !== ""
    ? CONFIG.googleAppsScriptUrl
    : "data/materiales.json";

  try {
    const res = await fetch(sourceUrl);
    allMaterials = await res.json();
    renderVault(allMaterials);
  } catch (err) {
    console.error("Error cargando materiales:", err);
  }

  const searchInput = document.getElementById("vault-search");
  const courseSelect = document.getElementById("vault-course-filter");
  const levelSelect = document.getElementById("vault-level-filter");

  const applyFilters = () => {
    const q = (searchInput?.value || "").toLowerCase().trim();
    const course = courseSelect?.value || "ALL";
    const level = levelSelect?.value || "ALL";

    const filtered = allMaterials.filter(item => {
      const matchesQuery =
        item.titulo.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q) ||
        item.curso.toLowerCase().includes(q);
      const matchesCourse = course === "ALL" || item.curso === course;
      const matchesLevel = level === "ALL" || item.nivel === level;
      return matchesQuery && matchesCourse && matchesLevel;
    });

    renderVault(filtered);
  };

  searchInput?.addEventListener("input", applyFilters);
  courseSelect?.addEventListener("change", applyFilters);
  levelSelect?.addEventListener("change", applyFilters);
}

function renderVault(items) {
  const grid = document.getElementById("vault-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 rounded-2xl border border-obsidian-700 bg-obsidian-900">
        <p class="text-silver-300 font-medium">No se encontraron separatas con ese filtro.</p>
        <p class="text-xs text-silver-500 mt-1">Prueba buscando otro tema o pídelo directamente en el grupo de WhatsApp.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => `
    <article class="rounded-2xl border border-obsidian-700 bg-obsidian-900 p-5 flex flex-col justify-between hover:border-silver-400 transition group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-[11px] font-semibold text-white">${item.curso}</span>
          <span class="font-mono text-[11px] text-silver-400">${item.nivel} • ${item.paginas} págs</span>
        </div>
        <h3 class="text-base font-bold text-white group-hover:text-silver-200 transition">${item.titulo}</h3>
        <p class="text-xs text-silver-400 mt-2 leading-relaxed">${item.descripcion}</p>
      </div>

      <div class="mt-5 pt-4 border-t border-obsidian-800 flex items-center justify-between gap-3">
        <span class="font-mono text-[11px] text-silver-500">${item.universidad}</span>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white text-obsidian-950 font-bold text-xs hover:bg-silver-200 transition">
          <i data-lucide="download" class="w-3.5 h-3.5"></i>
          <span>Obtener PDF</span>
        </a>
      </div>
    </article>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// MÓDULO: CLUB CAZA-ERRORES
// ==========================================
function initErrorHunt() {
  const lines = document.querySelectorAll(".error-line");
  const feedback = document.getElementById("error-hunt-feedback");
  if (!lines.length || !feedback) return;

  lines.forEach(lineBtn => {
    lineBtn.addEventListener("click", () => {
      const lineNum = lineBtn.getAttribute("data-line");
      lines.forEach(b => {
        b.classList.remove("border-emerald-500", "bg-emerald-950/25", "border-rose-500", "bg-rose-950/25");
      });

      feedback.classList.remove("hidden");

      if (lineNum === "2") {
        lineBtn.classList.add("border-emerald-500", "bg-emerald-950/25");
        feedback.className = "rounded-xl p-4 text-sm border border-emerald-500/40 bg-emerald-950/25 text-emerald-100 leading-relaxed";
        feedback.innerHTML = `
          <p class="font-bold text-emerald-300 mb-1">✓ ¡Ojo de físico/matemático! Detectaste el error en la Línea 2.</p>
          <p>Al cancelar $(x - 2)$ sin restringir el dominio, se pierde la condición $x \neq 2$. En $x = 2$ ocurre una división entre cero ($0/0$). El conjunto solución correcto es $\langle -2; +\infty \rangle - \{2\}$.</p>
        `;
      } else {
        lineBtn.classList.add("border-rose-500", "bg-rose-950/25");
        feedback.className = "rounded-xl p-4 text-sm border border-rose-500/40 bg-rose-950/25 text-rose-100 leading-relaxed";
        feedback.innerHTML = `
          <p class="font-bold text-rose-300 mb-1">✕ Esa línea es válida. Revisa el paso de simplificación.</p>
          <p>Pista: Cuando cancelas un factor algebraico con variable en el denominador, ¿qué restricción debes garantizar antes de tacharlo?</p>
        `;
      }
      renderMath(feedback);
    });
  });
}

// ==========================================
// MÓDULO: MURO DE DUDAS RESUELTAS
// ==========================================
async function initSolvedDoubts() {
  const container = document.getElementById("solved-doubts-list");
  if (!container) return;

  try {
    const res = await fetch("data/dudas.json");
    const doubts = await res.json();

    container.innerHTML = doubts.map(d => `
      <div class="rounded-2xl border border-obsidian-700 bg-obsidian-900 p-5 space-y-3">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-white font-semibold">${d.curso}</span>
          <span class="text-silver-500">${d.alumno}</span>
        </div>
        <p class="text-sm font-medium text-silver-200">"${d.pregunta}"</p>
        <div class="p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-800 text-xs sm:text-sm text-silver-300 leading-relaxed">
          <span class="font-mono text-[11px] uppercase text-silver-400 block mb-1">Respuesta TioProject:</span>
          ${d.explicacion}
        </div>
      </div>
    `).join("");

    renderMath(container);
  } catch (err) {
    console.error("Error cargando dudas:", err);
  }
}
