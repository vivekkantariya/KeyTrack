// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sample text data 
const sampletext = [
    "Success often comes to those who dare to act. Life rewards the brave, not those who merely sit and wait for opportunities to arrive.",
    "Discipline outweighs motivation. While motivation fades with time, discipline helps you persist and achieve even when you're not feeling inspired.",
    "Small daily habits shape your future. Whether it’s reading, exercising, or learning a new skill, consistency is more powerful than bursts of effort.",
    "Clear goals give direction to your efforts. Without a goal, even the best tools won’t help you reach your destination efficiently.",
    "Failures are not the end—they're lessons. Each mistake helps you refine your path, correct your approach, and come back stronger.",
    "The mind needs rest as much as the body. Taking time to recharge improves your focus, creativity, and emotional well-being.",
    "Gratitude transforms how you view life. By appreciating what you have, you invite more positivity and reduce unnecessary stress.",
    "Growth begins outside your comfort zone. Challenge yourself to try new things, face fears, and embrace discomfort for personal development.",
    "Technology is powerful, but it must be used mindfully. Limit distractions, control screen time, and stay intentional with your digital habits.",
    "Reading opens the mind to new ideas. Even ten minutes a day can introduce you to concepts that reshape your perspective."
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

// Initialize text display 
renderReferenceText(finaltext);
let timeLeft = 60;
let timerStarted = false;
let intervalId;
let correct = 0;

typingarea.addEventListener("input", () => {
    const typedText = typingarea.value;

    // Start timer on first keystroke
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

            const wpm = wordCount; // Because it's 1 minute
            const cpm = charCount;

            document.getElementById("wpm").innerText = `WPM: ${wpm}`;
            document.getElementById("cpm").innerText = `CPM: ${cpm}`;
        }
    }, 1000);
}

