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


## project 2

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