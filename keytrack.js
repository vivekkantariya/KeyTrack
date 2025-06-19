// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sample text data 
const sampletext = [
    "Success is not reserved for the most intelligent or the most talented—it often belongs to those who take action despite uncertainty. Opportunities don’t always arrive gift-wrapped; you have to go out and create them. Waiting around might feel safe, but it rarely leads to progress. Life rewards those who dare to try, to stumble, and to stand back up again. The brave learn more, grow faster, and uncover paths others never see. Action, no matter how small, creates momentum. So take that first step today—because bold moves, not passive thoughts, are what ultimately shape a successful future.",

    "Motivation is fleeting—it comes and goes like waves. You may feel fired up one day and completely drained the next. That’s where discipline steps in. Discipline is your ability to act regardless of how you feel. It is built through daily effort, even on the hard days. When motivation fades, discipline keeps you on track, pushing you toward your goals. True achievement doesn’t depend on being constantly inspired—it’s about commitment, structure, and routine. You show up not because it’s easy, but because it’s necessary. With discipline, you’ll outlast and outperform those who rely on motivation alone.",

    "The future is created by what you do consistently, not occasionally. Small daily habits, repeated over time, form the foundation of lasting success. Reading a few pages each day, exercising for thirty minutes, or dedicating time to learning a new skill can make a massive difference in the long run. These actions may seem insignificant in the moment, but their effects compound. Over weeks, months, and years, they shape your knowledge, health, and mindset. Big transformations aren’t about grand gestures—they’re about micro-movements done faithfully. The smallest habits, when done daily, will eventually build the life you dream of.",

    "Goals act like a compass—they provide direction and purpose. Without clear objectives, your energy and efforts scatter, leaving you feeling lost. When you set specific goals, your decisions become aligned, and your actions take on meaning. A goal turns work into a mission and time into investment. It helps you prioritize what matters and ignore distractions. Even if the goal shifts over time, having one keeps you focused and productive. Whether it’s personal growth, career progress, or health improvement, setting a goal puts you in control. Your tools and talents mean little without a destination to guide them.",

    "Failure is not a sign of defeat—it’s a powerful teacher. Every mistake, setback, or misstep offers valuable lessons if you’re willing to reflect and learn. Rather than fearing failure, embrace it as part of the journey. Each failure shows what doesn’t work, narrowing your path to what does. It builds resilience, sharpens your skills, and strengthens your resolve. The most successful people didn’t avoid failure—they grew because of it. They tried, failed, adjusted, and tried again. Don’t let setbacks stop you; let them refine you. Growth is rarely linear, but it always moves forward when you learn from failure.",

    "Just as your body needs rest to function, your mind requires downtime to stay sharp and healthy. In today’s hustle-driven world, it’s easy to overlook the value of rest. But constant stimulation leads to burnout, decreased focus, and poor decision-making. Taking intentional breaks—whether through sleep, quiet reflection, or leisure—restores your energy and mental clarity. It fuels creativity, boosts emotional balance, and improves your ability to handle stress. Rest isn’t laziness; it’s maintenance for your brain. By recharging regularly, you equip yourself to perform at your best and stay resilient in the face of life’s constant demands and challenges.",

    "Gratitude changes your internal world. When you make it a habit to notice and appreciate what you already have—your health, loved ones, opportunities, and even small moments—you shift your mindset from scarcity to abundance. This shift reduces stress, improves relationships, and brings more joy into your life. Rather than focusing on what’s missing, gratitude highlights what’s meaningful. It doesn’t require big things; a quiet morning, a kind word, or a small win can fill your heart with thankfulness. Practicing gratitude daily trains your brain to seek the positive, making you more resilient, optimistic, and emotionally grounded over time.",

    "Real growth never happens in your comfort zone. It comes when you challenge yourself to do things that feel unfamiliar or even uncomfortable. Whether it’s speaking in public, learning a new skill, or taking a risk, these moments of discomfort are where transformation begins. When you push past your limits, you discover new strengths, expand your mindset, and build confidence. Fear tries to hold you back, but courage propels you forward. Every challenge you face, every fear you conquer, becomes a stepping stone. Embrace discomfort—it’s the birthplace of change, the arena of growth, and the path to your potential.",

    "Technology offers amazing tools, but without boundaries, it can dominate your life. Mindless scrolling, constant notifications, and digital noise can leave you drained and distracted. Use technology intentionally—set time limits, avoid unnecessary apps, and create tech-free zones to reconnect with the real world. Don’t let devices interrupt your focus or rob you of peace. Balance your screen time with offline activities like walking, reading, or talking face-to-face. Remember, you are in control of your attention. When used mindfully, technology enhances productivity and connection. But if left unchecked, it can weaken relationships, damage mental health, and disrupt your priorities.",

    "Reading is one of the most powerful habits you can cultivate. Books open up new worlds, ideas, and perspectives that you might never encounter otherwise. Even ten minutes a day can expose you to knowledge that broadens your thinking, sharpens your skills, or challenges your beliefs. Whether it’s fiction that deepens empathy or nonfiction that teaches you something new, reading nourishes the mind. It builds vocabulary, improves focus, and reduces stress. In a world full of noise, reading offers quiet growth. Make it a daily ritual—you never know which paragraph might inspire your next big idea or breakthrough."
];



// traversing sample data 
// let textdata = sampletext.forEach((el) => {
//     console.log("text added",[el])
// })

// text area finding 
let referenceBox = document.querySelector("#referenceText")
let typingarea = document.querySelector("#input")

// adding sample data in the textbox [logic building]
// // let addtext = document.querySelector("textarea").value(sampletext[randomIndex])
// addtext.append(sampletext[0])
// console.log(sampletext[0]);

// randomly generated text data stored in textarea
const randomIndex = Math.floor(Math.random() * sampletext.length);
let finaltext = sampletext[randomIndex];

// Render function for text as character 
function renderReferenceText(text, userInput = '') {
    let html = '';

    for (let i = 0; i < text.length; i++) {
        let charClass = "untyped";

        if (i < userInput.length) {
            charClass = text[i] === userInput[i] ? "correct" : "incorrect";
        }

        html += `<span class="${charClass}">${text[i]}</span>`;
    }

    referenceBox.innerHTML = html
}

// text display 
renderReferenceText(finaltext);
let timeLeft = 60;
let timerStarted = false;
let intervalId;
let correct = 0;

typingarea.addEventListener("input", () => {
    const typedText = typingarea.value;

    // Start timer when first key typed 
    if (!timerStarted && typedText.length > 0) {
        timerStarted = true;
        startTimer();
    }

    // Reset correct count for every input event
    correct = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === finaltext[i]) {
            correct++;
        }
    }

    const total = typedText.length;
    const accuracy = total === 0 ? 100 : Math.round((correct / total) * 100);

    // Live update DOM
    renderReferenceText(finaltext, typedText);
    document.getElementById("accuracy").innerText = `Accuracy: ${accuracy}%`;
});

// timer function
function startTimer() {
    intervalId = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            typingarea.disabled = true;

            const finalText = typingarea.value;
            const wordCount = finalText.trim().split(/\s+/).length;
            const charCount = finalText.length;

            const wpm = wordCount;
            const cpm = charCount;

            document.getElementById("wpm").innerText = `WPM: ${wpm}`;
            document.getElementById("cpm").innerText = `CPM: ${cpm}`;

            showModal(wpm, cpm, Math.round((correct / finalText.length) * 100));
        }

    }, 1000);
}

const modal = document.getElementById("resultModal");
const finalStats = document.getElementById("finalStats");
const saveBtn = document.getElementById("saveScore");
const usernameInput = document.getElementById("username");

function showModal(wpm, cpm, accuracy) {
    finalStats.innerHTML = `
        <p>WPM: ${wpm}</p>
        <p>CPM: ${cpm}</p>
        <p>Accuracy: ${accuracy}%</p>
    `;
    modal.classList.remove("hidden");


}

saveBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (!username) {
        alert("Please enter your name");
        return;
    }

    const wpm = parseInt(document.getElementById("wpm").innerText.split(": ")[1]);
    const cpm = parseInt(document.getElementById("cpm").innerText.split(": ")[1]);
    const accuracy = parseInt(document.getElementById("accuracy").innerText.split(": ")[1]);

    const record = {
        name: username,
        wpm,
        cpm,
        accuracy,
        date: new Date().toLocaleString()
    };

    // Saved to local storage
    const previousScores = JSON.parse(localStorage.getItem("keytrackScores")) || [];
    previousScores.push(record);
    localStorage.setItem("keytrackScores", JSON.stringify(previousScores));

    window.location.href = "scoreboard.html";

    addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            modal.classList.remove("modal-content")
        } else {
            prompt("error ")
        }
    })
});


// Normalize curly quotes to straight quotes
function normalizeQuotes(text) {
    return text
        .replace(/[\u2018\u2019]/g, "'")   // single quotes
        .replace(/[\u201C\u201D]/g, '"')  // double quotes
        .replace(/[\u2013\u2014]/g, '-')   // en dash (–) & em dash (—) → hyphen (-)
        .replace(/\u00A0/g, ' ');          // non-breaking space → regular space

}

finaltext = normalizeQuotes(finaltext);
renderReferenceText(finaltext);

document.querySelector("#restartBtn").addEventListener("click", () => {
    clearInterval(intervalId);               
    timeLeft = 60;                           // reset time
    timerStarted = false;                    // start again
    typingarea.disabled = false;             // typing enable
    typingarea.value = "";                   // input field cleared
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`; // Reset 
    document.getElementById("accuracy").innerText = `Accuracy: 100%`;   
    document.getElementById("wpm").innerText = `WPM: 0`;                
    document.getElementById("cpm").innerText = `CPM: 0`;               

    finaltext = sampletext[Math.floor(Math.random() * sampletext.length)]; // New random text
    finaltext = normalizeQuotes(finaltext); // Normalize again (optional)
    renderReferenceText(finaltext);         // Display new text
});
  