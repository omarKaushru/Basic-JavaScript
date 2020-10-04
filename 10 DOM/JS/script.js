/////////////////////////////////Exploring the DOM

// let val;
// val = this;
// val = window;
// val = window.document;
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].href;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');

// links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function(link){
//     console.log(link.getAttribute('href'));
// });

// console.log(links);
// console.log(val);

/////////////////////////////////DOM Selector (Single Element)
/// documnet get element by id
// let val;

// val = document.getElementById('header-title');
// val = document.getElementById('header-title').id;
// val = document.getElementById('header-title').className;

// //changing style
// val = document.getElementById('header-title').style.background = '#333';
// val = document.getElementById('header-title').style.color = '#fff';
// val = document.getElementById('header-title').style.padding = '10px';
// val = document.getElementById('header-title').style.display = 'none'; //item will hide
// val = document.getElementById('header-title').style.display = 'block'; //item wiil show

// //changing content

// val = document.getElementById('header-title').textContent = 'Md Omar Kausru';
// val = document.getElementById('header-title').innerText = 'Umar Ibn Hasan'; /// another approach for changing content
// val = document.getElementById('header-title').innerHTML = '<i> Md Omar Kaushru </i>.';
// //insted writing whole thing everytime we can just assign it into a variable as follow 
// val = document.getElementById('header-title');
// val.innerText = 'Hasan Ahmed'; 

// ///document query slector

// // we can use tag name, id or class by just  using  querySlector
// val= document.querySelector('#header-title'); // use hash while call by id;
// val= document.querySelector('.header-class'); //use "." while call by class-name
// val= document.querySelector('h3'); //we don't have to use anything while call by tag-name;

// val= document.querySelector('ol');
// val= document.querySelector('li');
// val= document.querySelector('ol li'); //first child of ol
// val.style.background ='red';
// val.style.color = 'white';

// val = document.querySelector('li:last-child');
// val = document.querySelector('li:nth-child(3)');
// val = document.querySelector('li:nth-child(2)').innerText = 'openCv';
// val = document.querySelector('li:nth-child(even)');
// console.log(val);

                        // /////DOM Selector (Multiple Elements)
// Multiselector 
// document.getElementsByClassName()
// let list = document.getElementsByClassName('sample-class');
// list[0].style.background = 'green';
// list[0].style.color = 'white';
// list[0].style.padding = '10px';
// list[0].textContent = 'Umar Ibn Hasan';
// //console.log(list[0]);

// // document.getElementsByTagName()
// list = document.getElementsByTagName('li');
// list = document.querySelector('ol').getElementsByTagName('li');

// let lis = Array.from(list);
// lis.forEach(function(item){
//     //console.log(item);
// });

// // document.querySelectorAll()
// // id -> #
// // classname -> .
// // tagname -> nothing

// list = document.querySelectorAll('ol li');
// list.forEach(function(item){
//     //console.log(item);
// });

// let liOdd = document.querySelectorAll('li:nth-child(odd)');
// let liEve = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(item){
//     item.style.background = 'grey';
//     item.style.color = 'white';
// });

// liEve.forEach(function(item){
//     item.style.background = 'red';
//     item.style.color = 'white';
// });
// 
// console.log(list);


////////////// Traversing the DOM

// let val;

// let list = document.querySelector('ul');
// let listItem = document.querySelector('ul li');

// val = list;
// val = listItem;

// //get the child node
// val = list;
// val = list.childNodes;
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1];
// val = list.childNodes[2];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[0].nodeType;
// ///output of childnodes
// // 1 Element
// // 2 Attribute
// // 3 Text Node
// // 8 Comment
// // 9 Document Itself
// // 10 Doctype
// val = list.childNodes;

// val = list.children;
// val = list.children[1];
// list.children[0].textContent = "Hello";
// val = list.children[1].children[0];
// val = list.children[1].children[0].href;


// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = listItem;
// val = listItem.parentElement;
// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// val = listItem.nextSibling.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// val = document.querySelector('ul li:last-child');
// val = val.previousSibling;
// val = val.previousElementSibling;

// console.log(val);

/////////////////////////////////// Add, Replace and Remove Elements

// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

// Add Attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem);
//console.log(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);


// Remove element

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

//console.log(link);