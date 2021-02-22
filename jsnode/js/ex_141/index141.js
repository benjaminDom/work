tripExpenses=[200,300,200];
let budget=tripExpenses.reduce(function name(a,c) {
    console.log('thi is c ',c);
    console.log('thi is a ',a);
   
    return a+c;    
});

console.log(`hotel: ${tripExpenses[0]} , trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);

console.log(`Total trip budget: ${budget}`);