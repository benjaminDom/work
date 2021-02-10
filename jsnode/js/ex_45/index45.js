let playerName="Patrik Laine is lame";
let teams="New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message="Winnipeg is the best Canadian city, Go Winnipeg";

let res1=playerName.substr(0,15);
let start=teams.indexOf("jets");
let end=teams.indexOf("jets")+4;
let res2=teams.substr(teams.indexOf("jets"),4);

let res3=message.slice(message.indexOf("the best"),message.indexOf("the best")+8);
let res4=message.slice(message.indexOf(","),message.indexOf(",")+4);
let res5='player';
console.log(res1);

res2=res2[0].toUpperCase()+res2.slice(1,res2.length);
console.log(res2);
/* console.log(start,end); */
console.log(res3);
console.log(res4);


console.log(`${res1.toUpperCase()}  ${res3} ${res2} ${res5} ${res4} Jets!!`);

