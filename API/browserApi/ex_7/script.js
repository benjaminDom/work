window.alert(`This program adds all the numbers you input` );

let isAdult = window.confirm('Wpuld you  like to put a nummber ?');
let sum=0;
while(isAdult) {
    let number=window.prompt('please  input a number');
    sum= Number(number)+Number(sum);
    window.alert('The sum  so  far  is '+`${sum}`);
    isAdult=window.confirm('Wpuld you  like to put an other  nummber ?');
}

window.alert('The FINAL  sum  is '+`${sum}`);


