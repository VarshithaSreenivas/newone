var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#a2f3f4";
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.color="skyblue";

console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color='yellow';
console.log(itemList.firstChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor='blue';
console.log(itemList.lastChild);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='40px';
container.insertBefore(newDiv,h1);

var newDiv2=document.createElement('div');
newDiv2.className='hello';
newDiv2.id='hello1';
newDiv2.setAttribute('title','Hello Div');

var newDiv2Text=document.createTextNode('Hello sir');
newDiv2.appendChild(newDiv2Text);

var title=document.querySelector('.list-group-items');
var li=document.querySelector(' header h2 ');
container.insertBefore(newDiv2,li);
console.log(newDiv2);





