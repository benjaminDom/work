function rever(name)
{

let name1=name.split('');
/* console.log(name1); */
let name2=name1.reverse();
let res =name2.join("");
    return res;
}

let result=rever('Hola  basura');
console.log(result);

