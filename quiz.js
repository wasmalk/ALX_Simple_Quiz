// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer from the checked radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
