// Write your code below:
const heading = document.getElementById('main-heading');
heading.textContent='Fruit World';
heading.style.color='orange';
const header = document.getElementById('header');
header.style.backgroundColor='green';
header.style.borderBottom = '3px solid orange';
const heading2 = document.getElementById('basket-heading');
heading2.style.color='green';
const thank = document.getElementById('thanks');
thank.innerHTML="<p>Please visit us again</p>"

const fruit = document.getElementsByClassName('fruit');

fruit[2].style.backgroundColor = 'yellow';
for(let i=0; i<fruit.length; i++){
  fruit[i].style.fontWeight = 'bold';

}

const lists = document.getElementsByTagName('li');
lists[4].style.color='blue';
for(let i = 0; i<lists.length; i++){
  lists[i].style.fontStyle='italic';
}