// Background Audio Element
const bgMusic = document.getElementById('bgMusic');

// Screen par touch/click hote hi khas time se gaana start hoga
function playAudio() {
    // ⬇️ Yahan seconds set karein (e.g., 30 = 30 seconds se, 60 = 1 minute se)
    bgMusic.currentTime = 96.5; 

    bgMusic.play().then(() => {
        console.log("Music started from specified time!");
    }).catch(error => {
        console.log("Autoplay waiting for user interaction:", error);
    });
}

// Global click/touch event for immediate music start
document.addEventListener('click', playAudio, { once: true });
document.addEventListener('touchstart', playAudio, { once: true });

// Function to trigger confetti blast
function triggerConfetti() {
    confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
    });
}

// Automatic confetti explosion on load
window.addEventListener('DOMContentLoaded', () => {
    triggerConfetti();
});

// DOM Elements - Pages
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

// DOM Elements - Buttons
const celebrateBtn = document.getElementById('celebrateBtn');
const nextPageBtn1 = document.getElementById('nextPageBtn1');
const nextPageBtn2 = document.getElementById('nextPageBtn2');
const prevPageBtn1 = document.getElementById('prevPageBtn1');
const prevPageBtn2 = document.getElementById('prevPageBtn2');

// Prank Elements
const prankBtn = document.getElementById('prankBtn');
const prankHint = document.getElementById('prankHint');
const secretTextBox = document.getElementById('secretTextBox');

// Page 3 Code Verification Elements
const codeInput = document.getElementById('codeInput');
const submitCodeBtn = document.getElementById('submitCodeBtn');
const errorMsg = document.getElementById('errorMsg');
const finalBox = document.getElementById('finalBox');

// Correct Passcode Setting
const CORRECT_CODE = "LOVE2026";

// Navigation Logic
nextPageBtn1.addEventListener('click', () => {
    page1.classList.remove('active-page');
    page2.classList.add('active-page');
});

prevPageBtn1.addEventListener('click', () => {
    page2.classList.remove('active-page');
    page1.classList.add('active-page');
});

nextPageBtn2.addEventListener('click', () => {
    page2.classList.remove('active-page');
    page3.classList.add('active-page');
});

prevPageBtn2.addEventListener('click', () => {
    page3.classList.remove('active-page');
    page2.classList.add('active-page');
});

celebrateBtn.addEventListener('click', () => {
    triggerConfetti();
});

// Teleport Prank Logic
let clickCount = 0;

prankBtn.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        prankBtn.style.transform = 'translate(130px, -20px)';
        prankHint.innerText = "Haha pakad ke dikhao! 😜";
    } 
    else if (clickCount === 2) {
        prankBtn.style.transform = 'translate(-130px, 20px)';
        prankHint.innerText = "Phirse miss ho gaya! 😂";
    } 
    else if (clickCount === 3) {
        prankBtn.style.transform = 'translate(90px, -50px)';
        prankHint.innerText = "Ek aakhri try! 🤐";
    }
    else if (clickCount >= 4) {
        // Prank Over: Show Secret Code & Next Button
        prankBtn.style.transform = 'translate(0, 0)';
        prankHint.style.display = 'none';
        prankBtn.style.display = 'none'; // Prank button hide kar dein
        secretTextBox.style.display = 'block';
        nextPageBtn2.style.display = 'block'; // Show Enter Code button
        triggerConfetti();
    }
});

// Secret Code Verification Logic
submitCodeBtn.addEventListener('click', () => {
    const userEnteredCode = codeInput.value.trim().toUpperCase();

    if (userEnteredCode === CORRECT_CODE) {
        errorMsg.style.display = 'none';
        finalBox.style.display = 'block';
        triggerConfetti();
    } else {
        errorMsg.style.display = 'block';
        finalBox.style.display = 'none';
    }
});