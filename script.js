// ==========================================================================
// DOM Element References
// ==========================================================================
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const topicCards = document.querySelectorAll(".topic-card");
const countPills = document.querySelectorAll(".count-pill");

const quizHeader = document.getElementById("quiz-header");
const topicBadgeText = document.getElementById("topic-badge-text");
const scoreCounter = document.getElementById("score-counter");
const questionProgress = document.getElementById("question-progress");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const explanationBox = document.getElementById("explanation-box");
const explanationBadge = document.getElementById("explanation-badge");
const explanationText = document.getElementById("explanation-text");
const validationMsg = document.getElementById("validation-msg");

const controlsContainer = document.getElementById("controls-container");
const nextButton = document.getElementById("next-btn");
const nextBtnText = document.getElementById("btn-text");

const resultDiv = document.getElementById("result");
const resultActions = document.getElementById("result-actions");
const reviewSection = document.getElementById("review-section");
const reviewToggleBtn = document.getElementById("review-toggle-btn");
const reviewList = document.getElementById("review-list");
const restartButton = document.getElementById("restart-btn");
const changeTopicBtn = document.getElementById("change-topic-btn");
const filterPills = document.querySelectorAll(".filter-pill");

// Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

// ==========================================================================
// Theme Management (Light / Dark Mode with Persistence)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("techquiz_theme") || "dark";
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeLabel) {
    themeLabel.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
  }
  localStorage.setItem("techquiz_theme", theme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

initTheme();

// ==========================================================================
// Topic Meta Information (Simple Java Topics)
// ==========================================================================
const topicDisplayNames = {
  "java-basics": "☕ Java Basics",
  "oop-concepts": "🧬 OOP Concepts",
  "loops-arrays": "🔢 Loops & Arrays",
  "all": "🎯 All Java Topics",
};

// ==========================================================================
// Simple & Easy Java Question Bank (18 Beginner-Friendly Questions)
// ==========================================================================
const questionBank = [
  // --- Category: Java Basics (Simple & Easy) ---
  {
    category: "java-basics",
    question: "Who is known as the father of Java Programming?",
    answers: [
      { text: "Guido van Rossum", correct: false },
      { text: "James Gosling", correct: true },
      { text: "Dennis Ritchie", correct: false },
      { text: "Bjarne Stroustrup", correct: false },
    ],
    explanation: "James Gosling created Java in 1995 while working at Sun Microsystems.",
  },
  {
    category: "java-basics",
    question: "What is the file extension of a compiled Java bytecode file?",
    answers: [
      { text: ".java", correct: false },
      { text: ".class", correct: true },
      { text: ".exe", correct: false },
      { text: ".txt", correct: false },
    ],
    explanation: "Source files end with `.java`, which the Java compiler compiles into `.class` bytecode files.",
  },
  {
    category: "java-basics",
    question: "Which method is the main entry point to start executing a Java program?",
    answers: [
      { text: "start()", correct: false },
      { text: "main()", correct: true },
      { text: "init()", correct: false },
      { text: "run()", correct: false },
    ],
    explanation: "Every standalone Java application begins execution inside `public static void main(String[] args)`.",
  },
  {
    category: "java-basics",
    question: "What is the default value of an unassigned boolean variable in Java?",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true },
      { text: "null", correct: false },
      { text: "0", correct: false },
    ],
    explanation: "In Java, uninitialized boolean class fields automatically default to `false`.",
  },
  {
    category: "java-basics",
    question: "Which data type is used to store text (words or sentences) in Java?",
    answers: [
      { text: "int", correct: false },
      { text: "char", correct: false },
      { text: "String", correct: true },
      { text: "double", correct: false },
    ],
    explanation: "`String` is used to represent text surrounded by double quotes (e.g. \"Hello\").",
  },
  {
    category: "java-basics",
    question: "Which terminal command is used to compile a Java source file?",
    answers: [
      { text: "javac", correct: true },
      { text: "java", correct: false },
      { text: "compile", correct: false },
      { text: "run", correct: false },
    ],
    explanation: "`javac Program.java` compiles the file into bytecode, and `java Program` runs it.",
  },

  // --- Category: OOP Concepts (Simple & Easy) ---
  {
    category: "oop-concepts",
    question: "What is a blueprint or template used for creating objects in Java called?",
    answers: [
      { text: "Method", correct: false },
      { text: "Class", correct: true },
      { text: "Variable", correct: false },
      { text: "Package", correct: false },
    ],
    explanation: "A Class is a blueprint that defines the variables and methods that its objects will have.",
  },
  {
    category: "oop-concepts",
    question: "Which keyword is used to create a new object instance in Java?",
    answers: [
      { text: "create", correct: false },
      { text: "new", correct: true },
      { text: "make", correct: false },
      { text: "build", correct: false },
    ],
    explanation: "The `new` keyword allocates memory for a new object (e.g. `Car myCar = new Car();`).",
  },
  {
    category: "oop-concepts",
    question: "Which keyword is used when one class wants to inherit from another class?",
    answers: [
      { text: "implements", correct: false },
      { text: "extends", correct: true },
      { text: "inherits", correct: false },
      { text: "super", correct: false },
    ],
    explanation: "The `extends` keyword enables a subclass to inherit fields and methods from a superclass.",
  },
  {
    category: "oop-concepts",
    question: "What is it called when two methods in the same class have the same name but different parameters?",
    answers: [
      { text: "Method Overloading", correct: true },
      { text: "Method Overriding", correct: false },
      { text: "Encapsulation", correct: false },
      { text: "Abstraction", correct: false },
    ],
    explanation: "Method Overloading allows multiple methods with identical names but different argument lists.",
  },
  {
    category: "oop-concepts",
    question: "Which keyword is used to refer to the current object instance in Java?",
    answers: [
      { text: "super", correct: false },
      { text: "this", correct: true },
      { text: "current", correct: false },
      { text: "self", correct: false },
    ],
    explanation: "`this` refers to the current instance of the class (commonly used in constructors like `this.name = name`).",
  },
  {
    category: "oop-concepts",
    question: "Can a 'private' variable be accessed directly from another class?",
    answers: [
      { text: "Yes, always", correct: false },
      { text: "No, it is only accessible inside its own class", correct: true },
      { text: "Yes, if they are in the same package", correct: false },
      { text: "Yes, using import", correct: false },
    ],
    explanation: "Variables declared `private` can only be read or modified within the class that declared them.",
  },

  // --- Category: Loops & Arrays (Simple & Easy) ---
  {
    category: "loops-arrays",
    question: "What is the index number of the first element in a Java array?",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: true },
      { text: "-1", correct: false },
      { text: "any number", correct: false },
    ],
    explanation: "Java arrays are zero-indexed, meaning the first item is always at index `0`.",
  },
  {
    category: "loops-arrays",
    question: "How do you find the total number of items in a Java array named 'numbers'?",
    answers: [
      { text: "numbers.size()", correct: false },
      { text: "numbers.length", correct: true },
      { text: "numbers.count()", correct: false },
      { text: "numbers.length()", correct: false },
    ],
    explanation: "Arrays in Java provide the `.length` property (without parentheses) to get the total elements.",
  },
  {
    category: "loops-arrays",
    question: "Which loop in Java is guaranteed to run its code block at least once?",
    answers: [
      { text: "for loop", correct: false },
      { text: "while loop", correct: false },
      { text: "do-while loop", correct: true },
      { text: "for-each loop", correct: false },
    ],
    explanation: "A `do-while` loop executes its block first, before checking the condition at the bottom.",
  },
  {
    category: "loops-arrays",
    question: "Which keyword is used to exit a loop immediately in Java?",
    answers: [
      { text: "stop", correct: false },
      { text: "break", correct: true },
      { text: "continue", correct: false },
      { text: "exit", correct: false },
    ],
    explanation: "The `break` statement immediately terminates the loop and jumps to the code following it.",
  },
  {
    category: "loops-arrays",
    question: "Which statement is used to skip the rest of the current loop iteration and move to the next cycle?",
    answers: [
      { text: "pass", correct: false },
      { text: "continue", correct: true },
      { text: "next", correct: false },
      { text: "skip", correct: false },
    ],
    explanation: "The `continue` statement skips remaining statements in the current iteration and starts the next.",
  },
  {
    category: "loops-arrays",
    question: "Which of the following correctly prints text to the screen in Java?",
    answers: [
      { text: "print(\"Hello\")", correct: false },
      { text: "System.out.println(\"Hello\")", correct: true },
      { text: "Console.write(\"Hello\")", correct: false },
      { text: "echo \"Hello\"", correct: false },
    ],
    explanation: "`System.out.println()` outputs text to the standard console followed by a new line.",
  },
];

// Option letter mapping
const optionLetters = ["A", "B", "C", "D"];

// ==========================================================================
// Application State
// ==========================================================================
let selectedTopic = "java-basics";
let selectedCount = 5;

let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswerSubmitted = false;
let userQuizHistory = [];

// ==========================================================================
// Utility: Fisher-Yates Shuffle
// ==========================================================================
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// ==========================================================================
// Start Screen Interaction (Topic & Count Selection)
// ==========================================================================
topicCards.forEach((card) => {
  card.addEventListener("click", () => {
    topicCards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedTopic = card.dataset.topic;
  });
});

countPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    countPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    selectedCount = parseInt(pill.dataset.count, 10);
  });
});

startBtn.addEventListener("click", startQuiz);

// ==========================================================================
// Start Quiz Session
// ==========================================================================
function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  isAnswerSubmitted = false;
  userQuizHistory = [];
  stopConfetti();

  // Filter question pool by chosen topic
  let filteredPool = [];
  if (selectedTopic === "all") {
    filteredPool = [...questionBank];
  } else {
    filteredPool = questionBank.filter((q) => q.category === selectedTopic);
  }

  // Shuffle questions and randomize their answer choices (A-D)
  const shuffledPool = shuffleArray(filteredPool);
  activeQuestions = shuffledPool
    .slice(0, Math.min(selectedCount, shuffledPool.length))
    .map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));

  // Toggle views
  startScreen.classList.add("hide");
  quizHeader.classList.remove("hide");
  questionContainer.classList.remove("hide");
  controlsContainer.classList.remove("hide");
  nextButton.classList.remove("hide");
  resultDiv.classList.add("hide");
  resultActions.classList.add("hide");
  reviewSection.classList.add("hide");

  // Update topic badge
  topicBadgeText.innerText = topicDisplayNames[selectedTopic] || "TechQuiz";

  hideValidation();
  updateProgress();
  setNextQuestion();
}

// ==========================================================================
// Progress Tracker
// ==========================================================================
function updateProgress() {
  const currentNum = currentQuestionIndex + 1;
  const total = activeQuestions.length;
  const percent = Math.round((currentNum / total) * 100);

  questionProgress.innerText = `Question ${currentNum} of ${total}`;
  progressPercent.innerText = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  scoreCounter.innerText = `Score: ${score}`;
}

// ==========================================================================
// Render Next Question & Option Selection Handler
// ==========================================================================
function selectOptionByIndex(index) {
  if (isAnswerSubmitted) return;
  const cards = answerButtons.querySelectorAll(".answer-card");
  if (index >= 0 && index < cards.length) {
    cards.forEach((c) => c.classList.remove("selected"));
    const card = cards[index];
    card.classList.add("selected");
    const radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
    hideValidation();
    // Blur any focused input/radio so window key events are never blocked
    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
  }
}

function setNextQuestion() {
  isAnswerSubmitted = false;
  resetState();
  hideValidation();
  hideExplanation();
  nextBtnText.innerText = "Submit Answer";
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }
  showQuestion(activeQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  question.answers.forEach((answer, index) => {
    const card = document.createElement("label");
    card.classList.add("answer-card");
    card.htmlFor = `answer-${index}`;
    card.dataset.index = index;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = `answer-${index}`;
    radio.name = "quiz-answer";
    radio.value = index;

    const letterSpan = document.createElement("span");
    letterSpan.classList.add("option-letter");
    letterSpan.innerText = optionLetters[index] || (index + 1);

    const textSpan = document.createElement("span");
    textSpan.classList.add("option-text");
    textSpan.innerText = answer.text;

    card.appendChild(radio);
    card.appendChild(letterSpan);
    card.appendChild(textSpan);

    card.addEventListener("click", () => {
      selectOptionByIndex(index);
    });

    answerButtons.appendChild(card);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function hideValidation() {
  if (validationMsg) validationMsg.classList.add("hide");
}

function showValidation() {
  if (validationMsg) {
    validationMsg.classList.remove("hide");
    validationMsg.style.animation = "none";
    validationMsg.offsetHeight;
    validationMsg.style.animation = "";
  }
}

function hideExplanation() {
  if (explanationBox) explanationBox.classList.add("hide");
}

// ==========================================================================
// Submission & Feedback Handler
// ==========================================================================
nextButton.addEventListener("click", () => {
  // Phase 1: Submit and Reveal Feedback
  if (!isAnswerSubmitted) {
    const checkedRadio = answerButtons.querySelector('input[name="quiz-answer"]:checked');

    if (!checkedRadio) {
      showValidation();
      return;
    }

    isAnswerSubmitted = true;
    const selectedAnswerIndex = parseInt(checkedRadio.value, 10);
    const currentQ = activeQuestions[currentQuestionIndex];
    const isCorrect = currentQ.answers[selectedAnswerIndex].correct;

    if (isCorrect) {
      score++;
      scoreCounter.innerText = `Score: ${score}`;
    }

    // Save history
    userQuizHistory.push({
      question: currentQ.question,
      userAnswer: currentQ.answers[selectedAnswerIndex].text,
      correctAnswer: currentQ.answers.find((a) => a.correct).text,
      isCorrect: isCorrect,
      explanation: currentQ.explanation,
    });

    // Lock and highlight options
    const allCards = answerButtons.querySelectorAll(".answer-card");
    allCards.forEach((card) => {
      card.classList.add("disabled");
      const cardIdx = parseInt(card.dataset.index, 10);
      const isCardCorrect = currentQ.answers[cardIdx].correct;

      if (isCardCorrect) {
        card.classList.add("correct");
        const pill = document.createElement("span");
        pill.classList.add("answer-status-pill", "status-correct");
        pill.innerText = "✓ Correct";
        card.appendChild(pill);
      } else if (cardIdx === selectedAnswerIndex && !isCorrect) {
        card.classList.add("incorrect");
        const pill = document.createElement("span");
        pill.classList.add("answer-status-pill", "status-incorrect");
        pill.innerText = "✕ Your Choice";
        card.appendChild(pill);
      } else {
        card.classList.add("dimmed");
      }
    });

    // Reveal explanation box
    explanationBox.classList.remove("hide");
    if (isCorrect) {
      explanationBadge.className = "explanation-badge is-correct";
      explanationBadge.innerHTML = "✅ Correct! Why this is right:";
    } else {
      explanationBadge.className = "explanation-badge is-wrong";
      explanationBadge.innerHTML = "❌ Incorrect. Concept explanation:";
    }
    explanationText.innerText = currentQ.explanation;

    // Update button text
    if (currentQuestionIndex === activeQuestions.length - 1) {
      nextBtnText.innerText = "See Results";
    } else {
      nextBtnText.innerText = "Next Question";
    }
    return;
  }

  // Phase 2: Next Question
  currentQuestionIndex++;
  if (currentQuestionIndex < activeQuestions.length) {
    updateProgress();
    setNextQuestion();
  } else {
    endQuiz();
  }
});

// ==========================================================================
// Quiz Completion & Results Dashboard
// ==========================================================================
function endQuiz() {
  questionContainer.classList.add("hide");
  quizHeader.classList.add("hide");
  controlsContainer.classList.add("hide");
  resultDiv.classList.remove("hide");
  resultActions.classList.remove("hide");

  const totalQuestions = activeQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const wrongAnswers = totalQuestions - score;

  let badgeEmoji = "🏆";
  let title = "Outstanding Performance!";
  let feedback = `You mastered the ${topicDisplayNames[selectedTopic]} challenge!`;

  if (percentage < 50) {
    badgeEmoji = "📖";
    title = "Keep Practicing!";
    feedback = `Brush up on key concepts in ${topicDisplayNames[selectedTopic]} and try again.`;
  } else if (percentage < 80) {
    badgeEmoji = "👏";
    title = "Great Job!";
    feedback = `Solid understanding of ${topicDisplayNames[selectedTopic]} fundamentals.`;
  }

  resultDiv.innerHTML = `
    <div class="result-badge-wrap">
      <span>${badgeEmoji}</span>
    </div>
    <h2 class="result-heading">${title}</h2>
    <div class="result-score-highlight">${percentage}%</div>
    <p class="result-caption">${feedback}</p>
    
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-val correct">${score} / ${totalQuestions}</span>
        <span class="stat-lbl">Correct Answers</span>
      </div>
      <div class="stat-item">
        <span class="stat-val wrong">${wrongAnswers} / ${totalQuestions}</span>
        <span class="stat-lbl">Incorrect Answers</span>
      </div>
    </div>
  `;

  renderReviewList();

  // Trigger celebratory confetti burst when user scores 80% or 100%
  if (percentage >= 80) {
    triggerConfetti();
  }
}

// ==========================================================================
// Review Answers List & Filter Tabs
// ==========================================================================
function renderReviewList() {
  reviewList.innerHTML = "";

  userQuizHistory.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.classList.add(item.isCorrect ? "review-correct" : "review-wrong");
    card.dataset.status = item.isCorrect ? "correct" : "incorrect";

    card.innerHTML = `
      <div class="review-card-top">
        <span class="review-question-text">Q${index + 1}. ${item.question}</span>
        <span class="review-badge ${item.isCorrect ? "correct" : "wrong"}">
          ${item.isCorrect ? "✓ Correct" : "✕ Incorrect"}
        </span>
      </div>
      <div class="review-answers-compare">
        <div class="answer-row">
          <span class="answer-label">Your Answer:</span>
          <span class="answer-val-user ${item.isCorrect ? "correct" : "wrong"}">${item.userAnswer}</span>
        </div>
        ${
          !item.isCorrect
            ? `
        <div class="answer-row">
          <span class="answer-label">Correct Answer:</span>
          <span class="answer-val-actual">${item.correctAnswer}</span>
        </div>
        `
            : ""
        }
      </div>
      <div class="review-explanation">
        <strong>💡 Key Concept:</strong> ${item.explanation}
      </div>
    `;

    reviewList.appendChild(card);
  });
}

// Toggle Review Section
reviewToggleBtn.addEventListener("click", () => {
  const isHidden = reviewSection.classList.contains("hide");
  if (isHidden) {
    reviewSection.classList.remove("hide");
    reviewToggleBtn.querySelector("span").innerText = "🔼 Hide Review";
    reviewSection.scrollIntoView({ behavior: "smooth" });
  } else {
    reviewSection.classList.add("hide");
    reviewToggleBtn.querySelector("span").innerText = "📖 Review Questions";
  }
});

// Filter Pills
filterPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    filterPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");

    const filter = pill.dataset.filter;
    const cards = reviewList.querySelectorAll(".review-card");

    cards.forEach((card) => {
      const status = card.dataset.status;
      if (filter === "all") {
        card.style.display = "flex";
      } else if (filter === "incorrect" && status === "incorrect") {
        card.style.display = "flex";
      } else if (filter === "correct" && status === "correct") {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Restart Quiz (Same topic and count)
restartButton.addEventListener("click", startQuiz);

// Change Topic (Go back to Start Screen)
changeTopicBtn.addEventListener("click", () => {
  stopConfetti();
  resultDiv.classList.add("hide");
  resultActions.classList.add("hide");
  reviewSection.classList.add("hide");
  quizHeader.classList.add("hide");
  questionContainer.classList.add("hide");
  controlsContainer.classList.add("hide");
  startScreen.classList.remove("hide");
});

// ==========================================================================
// Canvas Confetti Celebration Engine (Triggered for scores >= 80%)
// ==========================================================================
const confettiCanvas = document.getElementById("confetti-canvas");
let confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;
let confettiAnimationId = null;
let confettiParticles = [];

const confettiColors = [
  "#6366f1", "#8b5cf6", "#d946ef", "#10b981", "#f59e0b", "#38bdf8", "#ec4899", "#f43f5e"
];

function resizeConfettiCanvas() {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeConfettiCanvas);

function triggerConfetti() {
  if (!confettiCanvas || !confettiCtx) return;
  stopConfetti();
  resizeConfettiCanvas();

  const particleCount = 130;
  confettiParticles = [];

  for (let i = 0; i < particleCount; i++) {
    // Launch celebratory bursts from left and right corners towards center
    const isLeft = i % 2 === 0;
    const startX = isLeft ? window.innerWidth * 0.15 : window.innerWidth * 0.85;
    const startY = window.innerHeight * 0.85;
    const angle = isLeft 
      ? (Math.random() * 40 + 35) * (Math.PI / 180)   // 35° to 75°
      : (Math.random() * 40 + 105) * (Math.PI / 180); // 105° to 145°
    const speed = Math.random() * 14 + 10;

    confettiParticles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: -Math.sin(angle) * speed,
      size: Math.random() * 9 + 6,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      gravity: 0.38,
      drag: 0.96,
      shape: Math.random() > 0.35 ? "rect" : "circle",
    });
  }

  animateConfetti();
}

function animateConfetti() {
  if (!confettiCtx || !confettiCanvas) return;

  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  let activeParticles = 0;

  for (let i = 0; i < confettiParticles.length; i++) {
    const p = confettiParticles[i];

    p.vx *= p.drag;
    p.vy *= p.drag;
    p.vy += p.gravity;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;

    // Fade gradually as particles descend
    if (p.y > window.innerHeight * 0.35) {
      p.opacity -= 0.007;
    }

    if (p.opacity > 0 && p.y < window.innerHeight + 60) {
      activeParticles++;
      confettiCtx.save();
      confettiCtx.globalAlpha = Math.max(0, p.opacity);
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);

      confettiCtx.fillStyle = p.color;
      if (p.shape === "rect") {
        confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        confettiCtx.beginPath();
        confettiCtx.arc(0, 0, p.size / 3, 0, Math.PI * 2);
        confettiCtx.fill();
      }

      confettiCtx.restore();
    }
  }

  if (activeParticles > 0) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    stopConfetti();
  }
}

function stopConfetti() {
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
  if (confettiCtx && confettiCanvas) {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
  confettiParticles = [];
}

// ==========================================================================
// Keyboard Navigation Support (1-4, A-D, Enter, Escape)
// ==========================================================================
window.addEventListener("keydown", (e) => {
  // Only ignore if user is actively typing in a text field
  const activeTag = document.activeElement ? document.activeElement.tagName : "";
  const activeType = document.activeElement ? (document.activeElement.type || "").toLowerCase() : "";
  if (activeTag === "TEXTAREA" || (activeTag === "INPUT" && activeType !== "radio" && activeType !== "checkbox")) {
    return;
  }

  const key = e.key.toUpperCase();

  // 1. Enter Key Navigation
  if (e.key === "Enter") {
    // If on start screen, start quiz
    if (!startScreen.classList.contains("hide")) {
      e.preventDefault();
      startBtn.click();
      return;
    }

    // If quiz is active, trigger submit or next
    if (!questionContainer.classList.contains("hide") && !nextButton.classList.contains("hide")) {
      e.preventDefault();
      nextButton.click();
      return;
    }

    // If on results screen, trigger restart
    if (!resultDiv.classList.contains("hide") && !resultActions.classList.contains("hide")) {
      e.preventDefault();
      restartButton.click();
      return;
    }
  }

  // 2. Escape Key (Close review if open)
  if (e.key === "Escape") {
    if (!reviewSection.classList.contains("hide")) {
      reviewToggleBtn.click();
      return;
    }
  }

  // 3. Option Selection Keys (A-D or 1-4)
  if (!questionContainer.classList.contains("hide") && !isAnswerSubmitted) {
    let targetIndex = -1;

    if (key === "A" || key === "1") targetIndex = 0;
    else if (key === "B" || key === "2") targetIndex = 1;
    else if (key === "C" || key === "3") targetIndex = 2;
    else if (key === "D" || key === "4") targetIndex = 3;

    if (targetIndex !== -1) {
      e.preventDefault();
      selectOptionByIndex(targetIndex);
    }
  }
});
