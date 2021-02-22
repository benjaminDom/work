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

/*   for (let index = 0; index < mutants.length; index++) {
    let element=mutants[index];
    console.log(element);
if (element=='Magneto') {
        
    }else{
        console.log(element );    
    }
     
    
}  */
 
let inx=mutants.indexOf('Magneto');
mutants.splice(inx,1);

for (let index = 0; index < mutants.length; index++) {
    const element = mutants[index];
    console.log(element);
    
}


mutants.forEach(element => {
     
   console.log(element.toUpperCase()); 
});