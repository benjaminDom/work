mutants=[
    ' Professor X',
 'Cyclops',
 'Iceman',
 'Angel',
 'Magneto',
 'Beast',
 'Phoenix',
 'Logan',
 'Gambit'
 ];

let mutants_2= mutants.map(function(name){

    if(name=='Professor X'|| name=='Logan'|| name=='Phoenix'|| name=='Gambit' ){
name='<3'+name;
    }
return name;

 });

 console.log('original');
 mutants.forEach(element => {
    console.log(element);
});
console.log('new');
 mutants_2.forEach(element => {
     console.log(element);
 });