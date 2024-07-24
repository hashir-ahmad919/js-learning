# Projects  related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1

``` javascript
console.log("Hashir")

const heading = document.querySelector('h1');
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    const id = e.target.id;

    switch (id) {
      case 'grey':
        console.log(id);
        body.style.backgroundColor = id;
        break;
      case 'white':
        console.log(id);
        body.style.backgroundColor = id;
        break;
      case 'blue':
        console.log(id);
        body.style.backgroundColor = id;
        break;
      case 'yellow':
        console.log(id);
        body.style.backgroundColor = id;
        break;

      default:
        console.log('NO colour selected');
    }
  });
});


```


## project 2 solution

``` javascript

// (weight / height) *10000
// const height = parseInt(document.querySelector('#height').value);
// this use case will give you empty

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const result = document.querySelector('#result');

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    results.innerHTML = `<span>${bmi}</span>`;
  }

  // 
  if(bmi < 18.6){
    result.innerHTML = `<span>UnderWeight</span>`
  }
  else if(bmi > 18.6 && bmi < 24.9){
    result.innerHTML = `<span>Normal Range</span>`
  }
  else{
    result.innerHTML = `<span>Overweight</span>`
  }

  console.log(height, weight);
});


```




## project 3 solution

``` javascript

const clock = document.getElementById("clock");

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())

  clock.innerText = date.toLocaleTimeString()
}, 1000)


```


## project 4 solution code

``` javascript

// const rndmNum = Math.floor(Math.random() * 100 + 1)
let rndmNum = parseInt(Math.random() * 100 + 1);
// console.log(rndmNum)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  });
}

validateGuess = (guess) => {
  // 
  if(isNaN(guess)){
    alert("please enter valid number")
  } else if(guess < 1) {
    alert("Please enter a number more thn 1")
  } else if(guess > 100) {
    alert("please enter a number less thn 100")
  } else {
    prevGuess.push(guess)

    if(numGuess === 11) {
      displayGuess(guess)
      displayMsg(`Game over, Random number was: ${rndmNum}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

checkGuess = (guess) => {
  //
  if(guess === rndmNum) {
    displayMsg(`You guessed it right`)
    endGame()
  } else if(guess < rndmNum){
    displayMsg(`Number is TOOO low`)
  } else if(guess > rndmNum){
    displayMsg(`Number is TOOO high`)
  }
}


function displayGuess(guess){
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}
                        

function displayMsg(msg) {
  //
  lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

endGame = () => {
  userInput.value = ''
  userInput.setAttribute("disabled","")
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
}


newGame = () => { 
  const newGameBtn = document.querySelector("#newGame")
  newGameBtn.addEventListener('click', (e) => {
    rndmNum = parseInt(Math.random() * 100 + 1);
    prevGuess =[]
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}



```