/////////////////////////////////Exploring the DOM

let val;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link){
    console.log(link.getAttribute('href'));
});

console.log(links);
console.log(val);