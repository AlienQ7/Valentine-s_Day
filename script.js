const messages = [
    "I knew you'll tap No !",
    "Again ???",
    "I Meow you...",
    "Stop,Just say Yes",
    "Let me be your Valentine,Belu",
    "Nono I love you >3",
    "Ok fine, tap No Again ;)...",
    "Just kidding, say yes please! ❤️",
    "Your trapped until you say yes!!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
