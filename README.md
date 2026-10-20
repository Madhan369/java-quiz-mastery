# ☕ TechQuiz Mastery

A simple, fast, and interactive web quiz application to practice core Java programming concepts.

---

## 🌐 Live Demo

Experience the application in your browser:  
👉 [Click here to view the Live Demo](https://your-live-demo-link.com)

---

## 📌 What is this?

**TechQuiz Mastery** is a beginner-friendly quiz app designed to help learners and developers test their Java knowledge. 

Instead of just showing your final score, it gives you **instant feedback and explanations** for every question so you understand *why* an answer is correct or incorrect.

---

## 🛠️ How This is Made

The application is built completely from scratch using vanilla web technologies with **zero external libraries or dependencies**:

* **HTML5:** Clean structure, accessible labels, and `<canvas>` for animations.
* **CSS3:** Modern frosted-glass (glassmorphism) design, Dark/Light modes, and mobile-friendly layouts.
* **JavaScript (ES6):** Game logic, score calculations, question shuffling, and keyboard shortcuts.

---

## 🧠 Core Programming Concepts Involved

1. **State Management:** Keeps track of current score, active question, selected answers, and quiz screens.
2. **Fisher-Yates Shuffle:** Randomizes both the questions and the 4 answer choices (A–D) so every round feels fresh.
3. **HTML5 Canvas Animation:** Uses `requestAnimationFrame` with lightweight physics (gravity, velocity, and rotation) to create celebratory confetti bursts for scores of 80% and above.
4. **Event-Driven Navigation:** Listens for mouse clicks and keyboard events smoothly without input conflicts.
5. **Local Storage (`localStorage`):** Remembers your Light/Dark mode preference even after you refresh or close your browser.

---

## ✨ Features

* **3 Java Topics + Mixed Mode:**
  * ☕ **Java Basics** — Syntax, primitive data types, main method
  * 🧬 **OOP Concepts** — Classes, objects, inheritance, overloading
  * 🔢 **Loops & Arrays** — Array indexing, loops, conditionals
  * 🎯 **All Java Topics** — Random challenge from all categories
* **Session Lengths:** Choose **5 Questions** (Quick Run) or **10 Questions** (Full Quiz).
* **Double Randomization:** Both questions and answer options are shuffled every session.
* **Instant Explanations:** Clear concept breakdown appears immediately upon answer submission.
* **🎉 Celebration Confetti:** Interactive burst effect for high scores (80% or 100%).
* **📖 Post-Quiz Review:** Filter and review your answers by *All*, *Mistakes*, or *Correct*.
* **🌓 Dark & Light Mode:** Seamless toggle between sleek dark and clean light themes.
* **📱 Mobile Responsive:** Optimized for all screen sizes from mobile phones to desktops.

---

## ⌨️ Keyboard Shortcuts

You can navigate the entire quiz using only your keyboard:

| Key | Action |
|:---:|:---|
| <kbd>1</kbd> – <kbd>4</kbd> or <kbd>A</kbd> – <kbd>D</kbd> | Select an answer option |
| <kbd>Enter ↵</kbd> | Start quiz / Submit answer / Next question / Play again |
| <kbd>Esc</kbd> | Close the review answers section |
