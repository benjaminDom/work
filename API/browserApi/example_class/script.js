/* let name = window.prompt('Please input your name  man ');
let superHero = prompt('Please input your favourite superheroe name man ');
console.log("your  name  is "+name);
console.log("your  supoer  hero  is  "+superHero);
 */

window.onload= function() {
    const p=document.querySelector('p');
    console.log('p element',p);
    console.log('p element attributes ',p.attributes);
    console.log('p element attributes 0',p.attributes[0]);
    console.log('p element attributes node vaklue',p.attributes[0].nodeValue);
    console.log('p element attributes value',p.attributes[0].value);
    


setTimeout(function () {
    p.attributes[0].value="red";
},2000);

}

