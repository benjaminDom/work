let numbers=[];
for (let index = 0; index < 100; index++) {
    numbers[index]=index;
}
console.log(' original');
console.log(numbers);

const odd=numbers.filter(function (num) {
    let res;
    if(num%2!=0){
        res=num;
    }
    return res;
});
console.log('odd');
console.log(odd);

const even=numbers.filter(function (num) {
    let res;
    if(num%2==0){
        res=num;
    }
    return res;
});

console.log('even');
console.log(even);
