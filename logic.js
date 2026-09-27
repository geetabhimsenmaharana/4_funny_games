
const questions = [

    "You wake up and discover your cat is now your boss. What is your first question?",

    "You have to explain the internet to a 5-year-old using only food. How do you explain it?",

    "You accidentally become president of the Moon. What is your first new law?",

    "Your phone can talk for one day. What secret do you think it will reveal?",

    "You find $1 million but you can only spend it on something completely useless. What do you buy?",

    "A chicken challenges you to a dance battle. What is your strategy?",

    "You can replace one normal human activity with AI. What do you automate?",

    "Your refrigerator sends you a resignation letter. Why did it quit?",

    "You have 10 seconds to convince an alien that humans are worth keeping. What do you say?",

    "Your alarm clock is angry at you. What do you think it says?"

];


const reactions = [

    "😂 The AI Judge has no idea what you just said, but it respects the confidence.",

    "🤖 Interesting... extremely questionable... but interesting.",

    "🤣 This answer deserves a standing ovation from absolutely nobody.",

    "😐 The AI Judge has reviewed your answer and needs a vacation.",

    "🧠 Surprisingly intelligent. The AI Judge is slightly concerned.",

    "😂 That was terrible. Somehow, I loved it.",

    "🔥 The AI Judge approves. You may continue existing.",

    "🤨 We need to talk about your thought process.",

    "👏 Incredible. Completely useless, but incredible.",

    "🚨 The AI Judge has contacted absolutely no authorities."

];


// Make a copy of all questions
let availableQuestions = [...questions];

let score = 0;


// Pick a random question
function showQuestion() {

    // If there are no questions left
    if (availableQuestions.length === 0) {

        endGame();

        return;
    }


    // Pick a random position
    const randomIndex =
        Math.floor(Math.random() * availableQuestions.length);


    // Get the random question
    const randomQuestion =
        availableQuestions[randomIndex];


    // Remove it so it cannot appear again
    availableQuestions.splice(randomIndex, 1);


    // Show the question
    document.getElementById("question").textContent =
        randomQuestion;


    // Clear the answer box
    document.getElementById("answer").value = "";


    // Reset buttons
    document.getElementById("result").style.display = "none";

    document.getElementById("nextButton").style.display = "none";

    document.getElementById("submitButton").style.display = "inline-block";

    document.getElementById("answer").disabled = false;
}


function judgeAnswer() {

    const answer =
        document.getElementById("answer").value.trim();


    if (answer === "") {

        document.getElementById("result").style.display = "block";

        document.getElementById("result").textContent =
            "🤖 The AI Judge says: You have to actually answer the question!";

        return;
    }


    const randomReaction =
        reactions[Math.floor(Math.random() * reactions.length)];


    const randomPoints =
        Math.floor(Math.random() * 11) + 1;


    score += randomPoints;


    document.getElementById("score").textContent = score;


    document.getElementById("result").style.display = "block";


    document.getElementById("result").innerHTML =
        randomReaction +
        "<br><br>" +
        "You received <strong>" +
        randomPoints +
        " points!</strong>";


    document.getElementById("submitButton").style.display = "none";

    document.getElementById("nextButton").style.display = "inline-block";

    document.getElementById("answer").disabled = true;
}


function nextQuestion() {

    showQuestion();
}


function endGame() {

    document.getElementById("question").textContent =
        "🎉 Game Over!";


    document.getElementById("answer").style.display = "none";

    document.getElementById("submitButton").style.display = "none";

    document.getElementById("nextButton").style.display = "none";


    document.getElementById("result").style.display = "block";


    document.getElementById("result").innerHTML =
        "Your final score is <strong>" +
        score +
        "</strong>! 😂<br><br>" +
        "The AI Judge has officially finished judging you.";


    document.getElementById("restartButton").style.display =
        "inline-block";
}


function restartGame() {

    // Start with all questions again
    availableQuestions = [...questions];

    score = 0;


    document.getElementById("score").textContent = score;


    document.getElementById("answer").style.display = "block";

    document.getElementById("restartButton").style.display = "none";


    showQuestion();
}


// Start the game
showQuestion();

