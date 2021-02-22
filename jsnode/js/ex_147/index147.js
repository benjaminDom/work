let obj1={
    username: 'batman',
    password:'Alfred1960KPO!',
    
 };

 function shouldOpenBatCave(ob){
     let res=false;
if (ob.username==='batman' && ob.password==='Alfred1960KPO!'){ res=true;}
return res;
 }
 let r=shouldOpenBatCave( obj1);
if(r){console.log('welcome back batman ')}
else{console.log("Sorry, you can't enter the Batcave, try again.."); }


console.log(r);