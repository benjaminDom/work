window.alert(`This program adds all the numbers you input` );

let isAdult = window.confirm('Wpuld you  like to put a nummber ?');
let sum=0;
let count=0;
while(isAdult) {
    let number=window.prompt('please  input a number');
    count++;
    sum= Number(number)+Number(sum);
    window.alert('The sum  so  far  is '+`${sum}`);
    isAdult=window.confirm('Wpuld you  like to put an other  nummber ?');
}

let average=sum/count;

window.alert('The FINAL  sum  is '+`${sum}`);
window.alert(`The user input ${count} numbers`);
window.alert(`The average is: ${average}`);

