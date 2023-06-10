//old title
console.dir(document.title);
//new title
document.title="DOM Manipulation";
console.log(document.title);

//all properties n elements of document
console.log(document);

//To access every/all - attribute/element of the document
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//console.(document.all);

console.log(document.URL);
console.log(document.doctype);
//console.log(document.all[10]);
console.log(document.forms[0]);

//To select things 
//document.all[10].textContent="Hello";
console.log(document.getElementById('header-title'));

//changing id
var mytitle=document.getElementById('header-title');
console.log(mytitle);

//To change content of changed id
//mytitle.textContent="My first DOM";
//mytitle.innerText="Title";

//display with style n span
console.log(mytitle.textContent);

//display only title name
console.log(mytitle.innerText);

//put h3 inside h1
mytitle.innerHTML= '<h3>Namaste</h3>';

//To style the h1
//mytitle.style.borderBottom="solid 3px #000";

//To style main header
console.log(document.getElementById('main-header'));
var m=document.getElementById('main-header');
m.style.borderBottom="solid 3px #000";

//Get Elements By Class Name
var item=document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[0]);

//Styling h2
console.log(document.getElementsByClassName('title'));
var h=document.getElementsByClassName('title');
h[0].style.fontWeight='bold';
h[0].style.color='green';

