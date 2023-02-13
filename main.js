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


let userValue = userText.value.split("");
// console.log(userValue);

let randomText = typing.querySelectorAll("span")



let errorCounter = 0;
let wordsCounter = 0;
let index = 0;
let QuestionIndex=0;
let characterCount =0;

// variable for one time not accurate alert 
let alertCount = 0;

// variables for CountDown
let timer =60;
let interval = null

// words to type
let text = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia itaque esse alias libero tenetur deserunt iure accusantium quibusdam dignissimos necessitatibus velit adipisci, fugiat culpa consectetur nisi porro numquam atque.",
"another Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia itaque esse alias libero tenetur deserunt iure accusantium quibusdam dignissimos necessitatibus velit adipisci, fugiat culpa consectetur nisi porro numquam atque.",
 "Last Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia itaque esse alias libero tenetur deserunt iure accusantium quibusdam dignissimos necessitatibus velit adipisci, fugiat culpa consectetur nisi porro numquam atque."]
// disable userText
userText.disabled = true;

// start typing speed test game

function startEvent(){
start.addEventListener("click", ()=>{
    start.innerText ="Start Typing"; // change text on click
    userText.disabled =false; //enabled

    // appending Spans
    text[QuestionIndex].split("").forEach(characters =>{
        let spanTxt = document.createElement("span");
        spanTxt.innerHTML = characters;
        typing.appendChild(spanTxt);
    }) ;
    // start CountDown
     interval =setInterval(countDown,1000);
    time.style.display = 'grid';
    result.style.display = 'none'; //display result
    start.style.pointerEvents= "none";
})
}


function nextQuestions(){
    QuestionIndex++

    if(QuestionIndex === text.length){
        stopUser();
        return
    }
    text[QuestionIndex].split("").forEach(characters =>{
        let spanTxt = document.createElement("span");
        spanTxt.innerHTML = characters;
        
        typing.appendChild(spanTxt);
    }) ;


}

startEvent();

let countDown = ()=>{
    if (timer > 0){
        timer--;
        counter.innerText = timer;
        userText.focus();

        console.log(userText.value)
        console.log(text[QuestionIndex])
        console.log(userText.value === text[QuestionIndex])
        
        if(QuestionIndex + 1 == text.length && characterCount == text[QuestionIndex].length && userText.value === text[QuestionIndex]){
            stopUser();
            alert("congratulations");

        }

        else if (characterCount == text[QuestionIndex].length && userText.value === text[QuestionIndex]){
            alert("ok111")
            typing.innerText="";
            characterCount=0;
            index=0;
            // userValue[index] === randomText[index].innerText
            userText.value = ""
            nextQuestions()
            timer=61;
        }
        else if (characterCount == text[QuestionIndex].length && !(userText.value === text[QuestionIndex])){
            

            if (alertCount < 1){
            alert("Not Accurate")
            alertCount++
            }
            
        }
    }
    else{
        stopUser()
        alert("Game Over")
     }
     disableArrowKeys()
}


userText.addEventListener("input", e => {
     userValue = userText.value.split("");
    // // console.log(userValue);

     randomText = typing.querySelectorAll("span")
    // console.log(RandomText)

    // if backspace is used
    if(e.inputType === "deleteContentBackward"){
        index--;
        randomText[index].classList.remove("correct");
        randomText[index].classList.remove("incorrect");
        characterCount--
        alertCount=0;
    }

    // if letter is correct
    else if(userValue[index] === randomText[index].innerText){
        randomText[index].classList.add("correct");
        index++;
        characterCount++

    }

    // if letter is not correct
    else
    {
        {
        randomText[index].classList.add("incorrect");
        index++;
        errorCounter++
        characterCount++
    }
}
// console.log(randomText[index].classList.contains("correct"))
});


function stopUser(){
    userText.disabled =true; //disabled
    // time.style.display = 'none';
    // result.style.display = 'flex'; //display result

    // wordsCounter = userText.value;
    // characters.innerHTML =index; // total character
    // words.innerText = wordsCounter.split(" ").length - 1; //total words
    // errors.innerText = errorCounter; // total errors

    // Stop Timer
    clearInterval(interval);
    timer = 0; // reset timer
    characterCount =0;
 
}

function disableArrowKeys(){
    window.addEventListener("keydown", function(e){

// to disable arrow keys

        if([13,37,38,39,40].indexOf(e.keyCode) > -1){
            e.preventDefault();
        }
        // else if("Enter")
    },false)
}