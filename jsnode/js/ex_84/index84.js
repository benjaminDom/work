let string="*";

let number = 1;
let cond3= (number % 2==0);
console.log(cond3);


do  {
  
   if (number % 2!=0){
    /* console.log(number); */
    console.log(string);
   }
    string=string+"*";
  number++;
}while (number < 14)