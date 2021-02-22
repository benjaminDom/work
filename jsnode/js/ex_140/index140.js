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


 const mutants_fil=mutants.filter(function (element) {
    let fil;
    if(element!='Magneto' || element!='Iceman' ||element!='Gambit'){
        fil=element;
    }
    return fil;
});

console.log(mutants_fil);


 