function showPage(pageName) {
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageName);

    if (page) {
        page.classList.add("active");
    }
}

function completeGoal() {
    alert("✅ Study button hojjete!");
}

function learn(subject) {
    const result = document.getElementById("learnResult");

    if (!result) return;

    if (subject === "Mathematics") {
        result.innerHTML = `
            <div class="card">
                <h3>➗ Mathematics</h3>

                <h4>📘 Lesson 1: Natural Numbers</h4>

                <p>
                    <b>Natural Numbers</b> jechuun lakkoofsota
                    lakkaa'uuf itti fayyadamnuudha.
                </p>

                <p><b>Fakkeenya:</b> 1, 2, 3, 4, 5, 6, ...</p>

                <h4>📖 Basic Operations</h4>

                <p>➕ Addition: 5 + 3 = 8</p>
                <p>➖ Subtraction: 10 - 4 = 6</p>
                <p>✖️ Multiplication: 3 × 4 = 12</p>
                <p>➗ Division: 20 ÷ 5 = 4</p>

                <h4>🧠 Yaadadhu</h4>

                <p>
                    Natural numbers 1 irraa jalqabanii gara fuulduraatti
                    lakkaa'amu.
                </p>

                <button onclick="alert('🎉 Mathematics Lesson 1 Completed!')">
                    ✅ Complete Lesson
                </button>
            </div>
        `;
    }

    else if (subject === "General Science") {
        result.innerHTML = `
            <div class="card">
                <h3>🔬 General Science</h3>

                <h4>📘 Lesson 1: Science</h4>

                <p>
                    Science jechuun waa'ee uumamaa fi wantoota
                    naannoo keenya jiran qorachuudha.
                </p>

                <p><b>Fakkeenya:</b> Plants, Animals, Water, Air.</p>

                <button onclick="alert('🎉 Science Lesson Completed!')">
                    ✅ Complete Lesson
                </button>
            </div>
        `;
    }

    else if (subject === "English") {
        result.innerHTML = `
            <div class="card">
                <h3>🇬🇧 English</h3>

                <h4>📘 Lesson 1: Nouns</h4>

                <p>
                    A <b>noun</b> is the name of a person, place,
                    animal, or thing.
                </p>

                <p>
                    <b>Examples:</b> boy, school, dog, book.
                </p>

                <button onclick="alert('🎉 English Lesson Completed!')">
                    ✅ Complete Lesson
                </button>
            </div>
        `;
    }

    else if (subject === "Afaan Oromoo") {
        result.innerHTML = `
            <div class="card">
                <h3>🟢 Afaan Oromoo</h3>

                <h4>📘 Barnoota 1: Jechoota Bu'uuraa</h4>

                <p>Akkam = Hello</p>
                <p>Galatoomi = Thank you</p>
                <p>Eeyyee = Yes</p>
                <p>Lakki = No</p>

                <button onclick="alert('🎉 Afaan Oromoo Lesson Completed!')">
                    ✅ Barnoota Xumuri
                </button>
            </div>
        `;
    }

    else if (subject === "Information Technology") {
        result.innerHTML = `
            <div class="card">
                <h3>💻 Information Technology</h3>

                <h4>📘 Lesson 1: Computer</h4>

                <p>
                    A computer is an electronic device that
                    processes information.
                </p>

                <p>
                    <b>Examples:</b> Keyboard, Mouse, Monitor, CPU.
                </p>

                <button onclick="alert('🎉 IT Lesson Completed!')">
                    ✅ Complete Lesson
                </button>
            </div>
        `;
    }
}
function quiz(subject) {
    alert("📝 " + subject + " Quiz");
}

function startGoal() {
    alert("🎯 Goal started!");
}

function changeName() {
    const newName = prompt("Maqaa kee galchi:");

    if (newName && newName.trim() !== "") {
        document.getElementById("name").textContent = newName.trim();
    }
}

function darkMode() {
    const checkbox = document.getElementById("darkMode");

    if (checkbox && checkbox.checked) {
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
    }
}

function reminder() {
    alert("⏰ Study Reminder");
}

function statistics() {
    alert("📊 Statistics");
}

function about() {
    alert("ℹ️ CHADGO ACADEMEY");
}

function privacy() {
    alert("🔒 Privacy");
}

function help() {
    alert("❓ Help & Support");
}

function resetApp() {
    alert("🔄 Reset Progress");
}