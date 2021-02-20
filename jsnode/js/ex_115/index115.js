function getLongerText(name1, name2) {
let out;

    let name1s = name1.split('');
    let len1 = name1s.length;

    let name2s = name2.split('');
    let len2 = name2s.length;


if(len1>len2){

    out=name1;
}else if(len2>len1){
    out=name2;
}
return out;

}

let longerWord=getLongerText("hijjjjjjjj","hello");
console.log(longerWord);