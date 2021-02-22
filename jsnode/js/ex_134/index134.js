numbers = [];

for (let index = 0; index < 101; index++) {
    numbers[index] = index;

}
numbers.forEach(element => {
    console.log(element);

});
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    sum = numbers[index] + sum;
    console.log(sum);
   
}
if(sum==5050){
    console.log('Good Job');

}else{
    console.log('Take a look');
}




