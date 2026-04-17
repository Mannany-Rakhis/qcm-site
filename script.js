let questions = [];
let index = 0;
let score = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    questions = shuffle([...banque]).slice(0, 5);
    index = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.q;
    document.getElementById("feedback").innerText = "";
    document.getElementById("explication").innerText = "";

    let html = "";
    q.a.forEach((choice, i) => {
        html += `<button onclick="check(${i})">${choice}</button>`;
    });

    document.getElementById("choices").innerHTML = html;
}

function check(i) {
    let q = questions[index];
    let buttons = document.querySelectorAll("#choices button");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;

        if (idx === q.r) {
            btn.classList.add("correct");
        } else if (idx === i) {
            btn.classList.add("wrong");
        }
    });

    if (i === q.r) {
        score++;
        document.getElementById("feedback").innerText = "✅ Bonne réponse";
    } else {
        document.getElementById("feedback").innerText = "❌ Mauvaise réponse";
    }

    document.getElementById("explication").innerText = q.exp;
}

document.getElementById("nextBtn").onclick = () => {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
};

function endQuiz() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText =
        "Score : " + score + " / " + questions.length;
}

function restart() {
    startQuiz();
}

startQuiz();