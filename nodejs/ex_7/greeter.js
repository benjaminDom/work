const greet=(firstname,lastname,funct = () =>"We're using node modules yeah!!!")=>{
    console.log(`Hi ${firstname} ${lastname}`);
    const f=funct();
    console.log(f);
    }
    
    module.exports=greet;