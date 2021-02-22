obj={
    add:function(a,b){if(typeof a!=='number' || typeof b!=='number'){console.log("input only numbers")} return a+b;},
    substract:function(a,b){if(typeof a!=='number' || typeof b!=='number'){console.log("input only numbers")} return a-b;},
    multiply:function(a,b){if(typeof a!=='number' || typeof b!=='number'){console.log("input only numbers")} return a*b;},
    divide:function(a,b){if(typeof a!=='number' || typeof b!=='number'){console.log("input only numbers")} return a/b;},
    reminder:function(a,b){if(typeof a!=='number' || typeof b!=='number'){console.log("input only numbers")} return a%b;}
}
console.log(obj.add(2,10));
console.log(obj.substract(10,5));
console.log(obj.multiply(3, 100));
console.log(obj.divide(40, 2));
console.log(obj.reminder(20, 2));
