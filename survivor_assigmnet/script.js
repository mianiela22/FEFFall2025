// SURVIVOR QUIZ QUESTIONS AND ANSWERS
let QA = [
    {
        question: "What is Jeff Probst's iconic catchphrase when revealing votes?",
        answer: "the tribe has spoken"
    },
    {
        question: "What is the name of the necklace that protects you from elimination?",
        answer: "immunity"
    },
    {
        question: "How many days do contestants typically spend on the island?",
        answer: "39"
    },
    {
        question: "What is the motto of Survivor? (Hint: Three words starting with O, O, and O)",
        answer: "outwit outplay outlast"
    },
    {
        question: "What is the name of the ceremony where contestants vote someone out?",
        answer: "tribal council"
    },
    {
        question: "Who is the host of Survivor?",
        answer: "jeff probst"
    },
    {
        question: "What fire-making tool do the final 4 sometimes use to determine who goes to final 3?",
        answer: "flint"
    },
    {
        question: "What do you win if you survive all 39 days and get the jury votes?",
        answer: "million"
    }
];

// Keep track of total questions
const totalQuestions = QA.length;
let currentQuestionNumber = 1;

// Get references to HTML elements
const questionElement = document.getElementById('question');
const userAnswerInput = document.getElementById('userAnswer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const progressElement = document.getElementById('progress');

// Function to get the next question from the array
function getQuestion() {
    // Check if there are questions left
    if (QA.length > 0) {
        // Remove and return the last question from array
        return QA.pop();
    } else {
        // No more questions
        return null;
    }
}

// Function to display the next question
function nextQuestion() {
    // Clear the previous answer input
    userAnswerInput.value = '';
    
    // Get the next question
    const questionPop = getQuestion();
    
    // Check if we got a question or if quiz is complete
    if (questionPop !== null) {
        // Display the question
        questionElement.textContent = questionPop.question;
        
        // Store the correct answer for checking later
        questionElement.dataset.answer = questionPop.answer;
        
        // Update progress
        progressElement.textContent = `Question ${currentQuestionNumber} of ${totalQuestions}`;
    } else {
        // Quiz is complete!
        questionElement.textContent = "🎉 Quiz Complete! 🎉";
        progressElement.textContent = "All Done!";
        resultElement.innerHTML = "🏆 The tribe has spoken! You've completed the quiz! 🏆";
        resultElement.className = 'complete';
        
        // Hide the submit button
        submitButton.style.display = 'none';
        
        // Hide the answer input
        userAnswerInput.style.display = 'none';
    }
}

// Function to check the user's answer
function checkAnswer() {
    // Get the user's answer (convert to lowercase and trim whitespace)
    const userAnswer = userAnswerInput.value.toLowerCase().trim();
    
    // Get the correct answer from the question element
    const correctAnswer = questionElement.dataset.answer.toLowerCase();
    
    // Check if user entered something
    if (userAnswer === '') {
        resultElement.textContent = "⚠️ Please enter an answer!";
        resultElement.className = 'incorrect';
        return;
    }
    
    // Compare answers (allow partial matches for flexibility)
    if (correctAnswer.includes(userAnswer) || userAnswer.includes(correctAnswer)) {
        // Correct answer!
        resultElement.textContent = "✅ Correct! Your torch is safe! 🔥";
        resultElement.className = 'correct';
        
        // Move to next question after 2 seconds
        setTimeout(() => {
            resultElement.textContent = '';
            resultElement.className = '';
            currentQuestionNumber++;
            nextQuestion();
        }, 2000);
        
    } else {
        // Incorrect answer
        resultElement.textContent = `❌ Incorrect! The answer was: ${questionElement.dataset.answer}`;
        resultElement.className = 'incorrect';
        
        // Move to next question after 3 seconds
        setTimeout(() => {
            resultElement.textContent = '';
            resultElement.className = '';
            currentQuestionNumber++;
            nextQuestion();
        }, 3000);
    }
}

// Add click event to submit button
submitButton.addEventListener('click', checkAnswer);

// Allow pressing Enter to submit
userAnswerInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Start the quiz by loading the first question
nextQuestion();