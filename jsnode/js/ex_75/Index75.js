var arr=[0,-1,2];
let f=0;
let f1=-1;
let f2=1;

let x=0;
while(f<14){
f=f1+f2;
f1=f2;
f2=f;

console.log(f);
}