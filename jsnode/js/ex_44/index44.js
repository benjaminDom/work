let text = 'HELLO';
let res='';

for (i = 1; i <= 5; i++) 
{ 
    res += text.charAt(text.length - i).toLowerCase(); 
}


/* res=text.charAt(text.length-1);
res=res+text.charAt(text.length-2); */
console.log(`the final result  is ${res} yhea  `);