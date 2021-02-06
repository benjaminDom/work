const text='This  is  a string';
const name='name';

const message = text.concat(name);

console.log(message);


const text2 = 'JavaScript rocks!! right?';
const firstCharacter = text2.charAt(0); 

console.log(firstCharacter); // J

console.log(text2.charAt(0)); // J

console.log(text2.charAt(text2.length-1));

console.log(text2)
const newtext2=text2.replace("?","what is this");
console.log(newtext2);


const text3='I  do <p> Indeed  Java script  for a living ??</p>';
const tagToSearch='<p>';
const openP=text3.indexOf(tagToSearch)+tagToSearch.length;
const closeP=text3.length-tagToSearch.length;
const html1=text3.substr(openP,closeP);
console.log(html1);

let frinds='tute,mati,pepe,raul,juan,Mary';
let friendsArray=frinds(',');
