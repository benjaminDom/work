function getShapePerimeter(base,height){
let perimeter;


    if(base===height){

     perimeter=4*base;

}
else {
    perimeter= 2*(base +height);
}


if(perimeter>100){
    console.log("the perimetyer is  too big");


}
else{ console.log("the perimetyer is fine")}
let s=`${perimeter} is the  shape  perimeter`
return s;
}


let Test=getShapePerimeter(7,70);

console.log(Test);

