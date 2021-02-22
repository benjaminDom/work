let obj1={
    username: 'batman',
    password:'Alfred1960KPO!',
    
 };

 function validate(u,p){
     let res=false;
if (u==='batman' && p==='Alfred1960KPO!'){ res=true;}
return res;
 }
 let r=validate( obj1.username,obj1.password);
if(r){console.log('welcome back batman ')}
else{console.log("Sorry, you can't enter the Batcave, try again.."); }


console.log(r);