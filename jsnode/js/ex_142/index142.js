firstPerson=['ben','dom','32 west pender st','37'];
secondPerson=['mon','smith','5615 presidents row','29'];

let str1=firstPerson.reduce(function name(a,c) {
return a+c;    
});

console.log(str1);
let str2=secondPerson.reduce(function name(a,c) {
    return a+c;    
    });
    
    console.log(str2);

    if(str1===str1){
        console.log('they  match');
     }else {console.log('they dont match');}
    
     if(str1===str2){
        console.log('they  match');
     }else {console.log('they dont match');}
    
    