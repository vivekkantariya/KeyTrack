// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// sample text data 
const sampletext = [
    "Life is full of small moments that often go unnoticed. The quiet of the morning, the smell of coffee, and the sound of birds outside your window set the tone for a peaceful day. These simple details can bring a sense of calm before the rush begins. As the day unfolds, responsibilities pile up, and we forget to pause. But slowing down to appreciate these little things can improve our mindset. Taking time to breathe, reflect, and reset isn't just helpful—it's necessary. Each day is a new page, and we are the authors of our own story.",
    "In today’s digital age, productivity tools have changed how we work. From task managers to AI writing assistants, technology saves us time and boosts efficiency. However, staying productive is not just about using apps—it’s about discipline. Scheduling breaks, avoiding multitasking, and setting goals are vital habits. Digital distractions like social media can reduce output, so we must stay focused. Using keyboard shortcuts and learning software tools also improve workflow. Ultimately, the best productivity system is the one that matches your habits. Combine technology with good time management, and you’ll achieve more with less effort.",
    "Learning is a continuous journey that never truly ends. Whether you’re in school or working in a professional field, knowledge expands your perspective. Reading books, watching tutorials, and asking questions are powerful ways to grow. The internet has made learning more accessible than ever before. You can explore languages, build websites, or understand physics—right from your bedroom. What matters most is curiosity and consistency. It’s okay to make mistakes while learning. In fact, failure often teaches better lessons than success. So never stop learning, because every new skill opens another door of opportunity.",
    "Nature has an incredible way of healing the mind. A walk in the park, a hike through the forest, or even sitting quietly by a lake can reduce stress. These moments allow us to disconnect from devices and reconnect with ourselves. Fresh air, sunlight, and greenery offer a kind of therapy that no screen can match. Many people overlook how much they need nature until they spend time in it again. Even a few minutes outdoors can reset your mental energy. Balance in life comes from understanding what restores you—and nature often plays that role beautifully.",
    "A growth mindset is the belief that abilities can be developed through effort and learning. This simple idea changes how people approach challenges. Instead of seeing obstacles as failures, they view them as chances to improve. Whether you’re learning to code, playing an instrument, or training for a marathon, persistence is key. Motivation can fade, but discipline keeps you going. Celebrate small wins along the way and reflect on your progress. Remember, you don’t have to be perfect—you just need to improve a little every day. Over time, those little steps create massive change.",
]

// traversing sample data 
// let textdata = sampletext.forEach((el) => {
//     console.log("text added",[el])
// })

// text area finding 
let textarea = document.querySelector("#referenceText")
let typingarea = document.querySelector("#input")
console.log(textarea);

// adding sample data in the textbox [logic building]
// // let addtext = document.querySelector("textarea").value(sampletext[randomIndex])
// addtext.append(sampletext[0])
// console.log(sampletext[0]);

// randomly generated text data stored in textarea
const randomIndex = Math.floor(Math.random() * sampletext.length);
let finaltext = sampletext[randomIndex];
textarea.innerText = finaltext

// input event 
let keyeventtext = typingarea.addEventListener("input", (eve) => {
    const typedText = typingarea.value;
    let correct = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === finaltext[i]) {
            console.log("Correct Gueesed");
            correct++;
        }else{
            console.log("Not Correct Gueesed");
        }
    }

    let total = typedText.length;
    let accuracy = total === 0 ? 0 : Math.round((correct / total) * 100);

    console.log("Typed:", typedText);
    console.log("Correct Characters:", correct);
    let acc = console.log("Accuracy:", accuracy + "%");
})
