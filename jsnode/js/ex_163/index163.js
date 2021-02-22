function add(){
    let sum=0;
for (let index = 0; index < arguments.length; index++) {
  
    sum=arguments[index]+sum;
    
}
    return sum;
}
res1=add(2,4);
res2=add(2,4,3);
res3=add(2);

console.log(res1,res2,res3);