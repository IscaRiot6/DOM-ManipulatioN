//create p object with color red
var pred = document.createElement('p');
pred.textContent ='Hey I’m red!'; 
pred.style.color = 'red';  

//create h3 with blue text
var h3blue = document.createElement('h3');
//set style and content
h3blue.textContent ='I’m a blue h3!'; 
h3blue.style.color = 'blue';  

//create div with black border and pink background
var div = document.createElement('div');

//alternative solution below
//div.innerHTML = '<h1>I’m in a div</h1><p>ME TOO!</p>'; 

div.style.background = 'pink'; 
div.style.borderStyle = 'solid';
div.style.borderColor = 'black'; 

//create h1 with text
var h1 = document.createElement('h1');
h1.textContent ='I’m in a div'; 

//create p with text
var pme2 = document.createElement('p');
pme2.textContent ='ME TOO!'; 

//select body element
const body = document.querySelector('body');

//append p with red text in body
body.appendChild(pred);
//append h3 with blue text in body
body.appendChild(h3blue);

//append h1 in div
div.appendChild(h1);
//append p in div
div.appendChild(pme2);

//append div in body
body.appendChild(div);

