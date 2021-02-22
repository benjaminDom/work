numbers = [];

for (let index = 0; index < 101; index++) {
    numbers[index] = index;

}
numbers.forEach(element => {
    console.log(element);

});

let number_add=numbers.map(function (num){
    return num=num+10;

});

console.log("this is number_add");
number_add.forEach(element => {
    console.log(element);

});