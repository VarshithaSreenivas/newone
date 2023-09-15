console.log(document);
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='Hello';
console.log(DocumentType);
console.log(document.links);
headerTitle.innerHTML='<h4>Hii</h4>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 4px #000';

var items=document.getElementsByClassName('title');
console.log(items);
items[0].style.fontWeight='bold';
items[0].style.color="green";



