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
 let str='';
 mutants.forEach( function (element) {
    
    if(element=='Iceman' || element=='Logan' ||element=='Phoenix'){
        str=str+element;
    }

 
 });

 console.log(str);
