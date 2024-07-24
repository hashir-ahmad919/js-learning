## Project chnage bg color


``` javascript

// generate a random color

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 10 + 1)];
  }
  return color;
};

// console.log(randomColor())
const startChangingColor = () => {
  let intervalIdsetInterval(changeBgColor, 1000);

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  };
};
const stopChangingColor = () => {};

document
  .querySelector('#start')
  .addEventListener('click', startChangingColor, false);
document
  .querySelector('#stop')
  .addEventListener('click', stopChangingColor, false);


```