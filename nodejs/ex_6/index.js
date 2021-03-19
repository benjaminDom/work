const greet=(firstname,lastname,funct)=>{
console.log(`Hi ${firstname} ${lastname}`);
const f=funct();
console.log(f);
}
const funct = () =>'This code gets executed after the greet function call';

 console.log(greet("Benjamin",'Dominguez',funct) ); 

