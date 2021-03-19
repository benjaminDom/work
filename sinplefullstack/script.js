const characters=[
{
name:"Jhon rambo"

},
{
    name:"other"
}


];
const container=document.getElementById('characters');
const list=document.createElement('ol');
const entry=document.createElement('li');

characters.forEach(element => {
    entry.innerHTML=characters[0].name;
    list.appendChild(entry);    

});

container.appendChild(list);