
 window.onload=function(){
    let imgArr=['./img/batmanwb.png','./img/flashwb.png','./img/supermanwb.png','./img/wonder_womanwb.png'];
    let body = document.querySelector("body");
   
    imgArr.forEach(element => {
        let img=document.createElement('img');
        img.setAttribute('src',element);
        console.log(element.replace('wb',''));
        img.addEventListener("mouseover",function(event) {
             img.setAttribute('src',element.replace('wb',''));  
           /*  img.setAttribute('src','./img/batman.png'); */
         });
         img.onmouseout=function() {
             img.setAttribute('src',element);
         }
        
         document.body.appendChild(img);
       
     
    });

    
        


}

