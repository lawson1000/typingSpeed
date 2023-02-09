// selecting all tags 
let time = document.querySelector("#time");
let counter = document.querySelector("#counter");
let start = document.querySelector("#start");

let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let errors = document.querySelector("#errors");

let typing = document.querySelector("#typing");
let userText = document.querySelector("#userText");

// variables for CountDown
let timer =0;
let interval = null

// words to type
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatum tempora rem, minus iste est in iure, nesciunt quos architecto corporis doloribus quae sit id dignissimos perspiciatis. Voluptates, laborum laboriosam!"

// disable userText
userText.disabled = true;

// start typing speed test game

start.addEventListener("click", ()=>{
    start.innerText ="Start Typing"; // change text on click
    userText.disabled =false; //enabled

    // appending Spans
    text.split("").forEach(characters =>{
        let spanTxt = document.createElement("span");
        spanTxt.innerHTML = characters;
        typing.appendChild(spanTxt);
    }) ;

    // start CountDown
    interval =setInterval(countDown,1000);
})

let countDown = ()=>{
    if (timer < 60){
        timer++;
        counter.innerText = timer;
    }
    else{
        userText.disabled =true; //disabled
        time.getElementsByClassName.display = 'none';
        result.getElementsByClassName.display = 'none';
    }
}


