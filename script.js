
const TOTAL_QUESTIONS = 50;
let currentQuestions = [];
let corrected = false;

const quizEl = document.getElementById("quiz");
const progressEl = document.getElementById("progress");
const progressTextEl = document.getElementById("progressText");
const answeredCountEl = document.getElementById("answeredCount");
const selectedCountEl = document.getElementById("selectedCount");
const bankSizeEl = document.getElementById("bankSize");
const summaryPanelEl = document.getElementById("summaryPanel");
const resultTitleEl = document.getElementById("resultTitle");
const resultTextEl = document.getElementById("resultText");
const resultPctEl = document.getElementById("resultPct");
const bestScoreEl = document.getElementById("bestScore");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuestionCard(question, index) {
  const options = shuffle(
    question.a.map((text, optionIndex) => ({
      text,
      isCorrect: optionIndex === question.r
    }))
  );

  const card = document.createElement("article");
  card.className = "question-card";
  card.dataset.index = index;
  card.dataset.day = question.day;

  const stateText = corrected ? "Corrigée" : "En attente";

  card.innerHTML = `
    <div class="question-head">
      <span class="question-number">Question ${index + 1}</span>
      <span class="day-chip day-${question.day}">Jour ${question.day}</span>
      <span class="question-state">${stateText}</span>
    </div>
    <div class="question-body">
      <div class="question-title">${question.q}</div>
      <div class="answers">
        ${options.map((option, optionPosition) => `
          <label class="answer-option" data-correct="${option.isCorrect}">
            <input type="radio" name="q${index}" value="${optionPosition}" />
            <span class="answer-letter">${String.fromCharCode(65 + optionPosition)}</span>
            <span class="answer-text">${option.text}</span>
          </label>
        `).join("")}
      </div>
      <div class="explanation" id="exp-${index}"></div>
    </div>
  `;
  return card;
}

function renderQuiz() {
  corrected = false;
  quizEl.innerHTML = "";
  currentQuestions = shuffle(banque).slice(0, TOTAL_QUESTIONS);
  currentQuestions.forEach((question, index) => {
    quizEl.appendChild(buildQuestionCard(question, index));
  });
  selectedCountEl.textContent = String(TOTAL_QUESTIONS);
  bankSizeEl.textContent = `Banque : ${banque.length} questions`;
  updateProgress();
  resetSummary();
}

function getAnsweredCount() {
  return currentQuestions.reduce((count, _, index) => {
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    return count + (checked ? 1 : 0);
  }, 0);
}

function updateProgress() {
  const answered = getAnsweredCount();
  const pct = Math.round((answered / TOTAL_QUESTIONS) * 100);
  answeredCountEl.textContent = String(answered);
  progressTextEl.textContent = `${pct}%`;
  progressEl.style.width = `${pct}%`;
}

function resetSummary() {
  summaryPanelEl.hidden = true;
  resultTitleEl.className = "";
  resultTitleEl.textContent = "Score : 0 / 50";
  resultTextEl.textContent = "Réponds aux questions puis corrige pour voir le détail.";
  resultPctEl.textContent = "0%";
  bestScoreEl.textContent = getBestScoreLabel();
}

function getBestScoreLabel() {
  const best = JSON.parse(localStorage.getItem("poo_best_score_v2") || "null");
  if (!best) return `0 / ${TOTAL_QUESTIONS}`;
  return `${best.score} / ${best.total}`;
}

function saveBestScore(score) {
  const current = JSON.parse(localStorage.getItem("poo_best_score_v2") || "null");
  if (!current || score > current.score || (score === current.score && current.total !== TOTAL_QUESTIONS)) {
    localStorage.setItem("poo_best_score_v2", JSON.stringify({
      score,
      total: TOTAL_QUESTIONS
    }));
  }
}

function clearVisualStates() {
  document.querySelectorAll(".question-card").forEach(card => {
    card.classList.remove("correct", "wrong");
    const state = card.querySelector(".question-state");
    if (state) state.textContent = corrected ? "Corrigée" : "En attente";
    card.querySelectorAll(".answer-option").forEach(option => {
      option.classList.remove("is-correct", "is-wrong", "is-disabled");
    });
  });
}

function correctQuiz() {
  let score = 0;
  corrected = true;
  clearVisualStates();

  currentQuestions.forEach((question, index) => {
    const card = document.querySelector(`.question-card[data-index="${index}"]`);
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    const options = card.querySelectorAll(".answer-option");
    const explanation = document.getElementById(`exp-${index}`);

    let isCorrect = false;

    options.forEach(option => {
      option.classList.add("is-disabled");
      const input = option.querySelector("input");
      const optionCorrect = option.dataset.correct === "true";

      if (optionCorrect) {
        option.classList.add("is-correct");
      }
      if (checked && input === checked && !optionCorrect) {
        option.classList.add("is-wrong");
      }
      input.disabled = true;
    });

    if (checked) {
      const selectedLabel = checked.closest(".answer-option");
      isCorrect = selectedLabel && selectedLabel.dataset.correct === "true";
      if (isCorrect) score++;
    }

    card.classList.add(isCorrect ? "correct" : "wrong");
    const state = card.querySelector(".question-state");
    if (state) {
      state.textContent = isCorrect ? "Bonne réponse" : (checked ? "À revoir" : "Non répondue");
    }

    explanation.innerHTML = `${isCorrect ? "<strong>Correct.</strong>" : "<strong>Correction :</strong>"} ${question.exp}`;
    explanation.classList.add("show");
  });

  const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
  saveBestScore(score);
  summaryPanelEl.hidden = false;
  resultTitleEl.textContent = `Score : ${score} / ${TOTAL_QUESTIONS}`;
  resultPctEl.textContent = `${pct}%`;
  bestScoreEl.textContent = getBestScoreLabel();

  if (pct >= 80) {
    resultTitleEl.className = "result-pass";
    resultTextEl.textContent = "Très bon résultat. Tu maîtrises bien l'ensemble des 5 jours du cours.";
  } else if (pct >= 60) {
    resultTitleEl.className = "result-mid";
    resultTextEl.textContent = "Base correcte, mais plusieurs notions méritent encore une vraie révision ciblée.";
  } else {
    resultTitleEl.className = "result-low";
    resultTextEl.textContent = "Reprends les chapitres clés et refais un nouveau tirage : les fondations ne sont pas encore assez solides.";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function enableInputs() {
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.disabled = false;
  });
}

quizEl.addEventListener("change", event => {
  if (event.target.matches('input[type="radio"]') && !corrected) {
    updateProgress();
  }
});

function restartQuiz() {
  renderQuiz();
  enableInputs();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("submit").addEventListener("click", correctQuiz);
document.getElementById("submitBottom").addEventListener("click", correctQuiz);
document.getElementById("restart").addEventListener("click", restartQuiz);
document.getElementById("restartTop").addEventListener("click", restartQuiz);

renderQuiz();
