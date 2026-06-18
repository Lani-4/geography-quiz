const questions = [
    {
        question: "what continent has the most country in the world?",
        options: ["Africa","Asia", "Europe", "North America" ],
        answer: 0
    },
    {
        question:"What is the only continent in the world that has land located in all four hemispheres?",
        options: ["Asia","Europe","Africa","Oceania"],
        answer: 2
    },
    {
        question: "What is the largest continent by land area?",
        options: ["Africa","North America","Asia","Europe"],
        answer: 2
    },
    {
        question: "Which country has the largest population?",
        options: ["India", "China", "United States", "Indonesia"],
        answer: 0
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney","Melbourne", "Perth", "Canberra"],
        answer: 3
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
        answer: 1
    },
    {
        question: "Which desert is the largest hot desert on Earth?",
        options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
        answer: 1
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Thailand", "Japan", "South Korea"],
        answer: 2
    },
    {
        question: "On which continent is the Mount Kilimanjaro located?",
        options: ["Asia", "South America", "Africa", "Europe"],
        answer: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Malta", "Vatican City","San Marino"],
        answer: 2
    },
]




// === GRAB HTML ELEMENTS ===
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionBtns = document.querySelectorAll('.option-btn');
const currentSpan = document.getElementById('current');
const finalScore = document.getElementById('final-score');

// === GAME STATE ===
let currentQuestion = 0;
let score = 0;  

// === START GAME ===
startBtn.addEventListener('click', function() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadQuestion();
});

// === LOAD QUESTION ===
function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    currentSpan.textContent = currentQuestion + 1;

    optionBtns.forEach(function(btn, index) {
        btn.textContent = q.options[index];
        btn.className = 'option-btn';
        btn.disabled = false;
    });
}

// === HANDLE ANSWER ===
optionBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        const correct = questions[currentQuestion].answer;

        optionBtns.forEach(b => b.disabled = true);

        if (index === correct) {
            btn.classList.add('correct');
            score++;
        } else {
            btn.classList.add('wrong');
            optionBtns[correct].classList.add('correct');
        }

        setTimeout(function() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }, 1500);
    });
});

// === SHOW RESULT ===
function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScore.textContent = score;
}

// === RESTART ===
restartBtn.addEventListener('click', function() {
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});