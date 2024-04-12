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
// Write the code as shown in the video below:
// QuerySelector is used to grab only single element
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';

// QuerySelectorAll is used to grab all the elements with same class/tag
const fruitItems = document.querySelectorAll('.fruit');

for(let i=0; i<fruitItems.length; i++){
fruitItems[i].style.backgroundColor = 'white';
fruitItems[i].style.padding = '10px';
fruitItems[i].style.margin = '10px';
fruitItems[i].style.borderRadius = '5px';

}



const OddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0; i<OddFruitItems.length; i++){
OddFruitItems[i].style.backgroundColor = 'lightgray';
}
// Write answer to the questions asked below:
const basketHead = document.querySelector('#basket-heading');

basketHead.style.color = 'brown';
const EvenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < EvenFruitItems.length; i++) {
    EvenFruitItems[i].style.backgroundColor = 'brown'; // Corrected to set background color to "brown"
    EvenFruitItems[i].style.color = 'white';
}

const fruito = document.querySelectorAll('.fruit');


for (let i = 0; i < fruito.length; i++) {
  const edit = document.createElement('button');
const text = document.createTextNode('Edit');
edit.classList.add ('edit-btn');
edit.appendChild(text);
    fruito[i].appendChild(edit);
}


const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'; 

    fruits.appendChild(newLi);
}); 
fruits.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
}); // Added closing brace
