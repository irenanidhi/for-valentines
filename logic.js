const heart = document.querySelector('.heart-button');
const textContainer = document.querySelector('#typed-text');
const cursor = document.querySelector('.cursor');
const wrapper = document.querySelector(".typewriter-wrapper");

const message = `To my favorite human, cat, pig and octopus...\nYou are the best thing to ever happen to me and I always want to be by your side to love you, to hold you... \nForever and ever <3 \nSo I was wondering...\nWill you be my Valentine? 💌`;

let index = 0;
let typingStarted = false;


heart.addEventListener("click", () => {
    if (typingStarted) return;

    typingStarted = true;
    heart.style.pointerEvents = "none";
    typeWriter();
});

function typeWriter() {
    if(index < message.length){
        textContainer.innerHTML += message.charAt(index);

        let delay = 40;
        if(message.charAt(index) === "." || message.charAt(index) === ","){
            delay = 250;
        }

        if(message.charAt(index) === "\n"){
            delay = 400;
        }
        index++;
        setTimeout(typeWriter, delay);
    }
    else{
        cursor.style.display = "none";
        showButtons();
    }
}

function showButtons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const yesBtn = document.createElement("button");
    yesBtn.innerText = "YES🫶🏻"
    yesBtn.classList.add("yes-btn");

    const noBtn = document.createElement("button");
    noBtn.innerText = "No🙄"
    noBtn.classList.add("no-btn");

    buttonContainer.appendChild(yesBtn);
    buttonContainer.appendChild(noBtn);
    document.body.appendChild(buttonContainer);
    
    let noAttempts = 0;

    noBtn.addEventListener('mouseover', () => {
        noAttempts++;
        
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 50;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

        yesBtn.style.transform = `scale(${1 + noAttempts * 0.1})`;

        if(noAttempts === 3) noBtn.innerText = "Are you sure about this 😒";
        if(noAttempts === 5) noBtn.innerText = "Wow you're still trying to say no 😣";
        if(noAttempts === 7) noBtn.innerText = "Are we breaking up...?😟"
    });

    yesBtn.addEventListener("click", () => {
        const celebration = document.createElement("div");
        celebration.classList.add("celebration");

        celebration.innerHTML = `
            <div class="celebration-content">
                <h1>YAYYYYY 💖</h1>
                <h2>You're officially my FOREVER Valentine.</h2>
                <p>Forever and ever, always. ✨</p>
            </div>
        `;

        document.body.appendChild(celebration);

        launchConfetti();
    });
}

function launchConfetti() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = `fall ${Math.random() * 10 + 2}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}