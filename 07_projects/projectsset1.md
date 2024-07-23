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