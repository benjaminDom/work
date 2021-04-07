const express=require('express');
const brain=require('brain.js')
const app=express();
const port=3000;
const { json } = require('express');
let list=[];
const bImage="/images/back.jpg";
const iLogo= "/images/logo.png";
let idList=[];
 app.set('view engine','pug') 
 app.use(express.static('public'))

 const products=[
    {
        id:1,
        name:"First Shoe ",
        image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80",
        description:"Red  is the  color  of summer's hot itmes",
        color:'color:white; background-color:rgba(255, 0, 0, 0.8);',
        Testcolor:{Text:'white',bgColor:{r:255,g:0,b:0}},
        brainTextColor:{white: 1}

    },
    {
        id:2,
        name:"second shoe yhea  ",
        image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        description:"Nike: always  on top  ofthe  game ",
        color:'color:black; background-color:rgba(0, 255, 0, 0.8);',
        Testcolor:{Text:'black',bgColor:{r:0,g:255,b:0}},
        brainTextColor:{black: 1}
    },
    
    {
        id:3,
        name:"Third shoe yhea  ",
        image:"https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
        description:"converse",
        color:'color:white; background-color:rgba(0, 0, 255, 0.8);',
        Testcolor:{Text:'white',bgColor:{r:0,g:0,b:255}},
        brainTextColor:{white: 1}
    }
    
    
    ]


app.get('/', (req,res)=>{
   /*  res.render('index',{title:"this is some title",message:"this is  some message"})  */
   /*  console.log("this is image",bImage) */
    res.render('index',{iLogo:iLogo})
    res.render('index',{bImage:bImage})
    

})

app.get('/button1',(req,res)=>{
    const Obj=products.find(e=> e.id==1);
    let Obj1={}
    Obj1.input= { r:Obj.Testcolor.bgColor.r, g:Obj.Testcolor.bgColor.g, b:Obj.Testcolor.bgColor.b };
    Obj1.output= Obj.brainTextColor; 
    
    list.push(Obj1);
    idList.push(1);
    res.render('footwear', { title: 'Hey', message: 'You clicked button 1, This is the list'+JSON.stringify(list),products:products});

})

app.get('/button2',(req,res)=>{
    const Obj=products.find(e=> e.id==2);
    let Obj2={}
    Obj2.input= { r:Obj.Testcolor.bgColor.r, g:Obj.Testcolor.bgColor.g, b:Obj.Testcolor.bgColor.b };
    Obj2.output= Obj.brainTextColor; 

/* 
    let Obj2={ 
        input: { r: 0.16, g: 0.09, b: 0.2 },
        output: { white: 1 } 
    }; */
    list.push(Obj2);
    idList.push(2);
    res.render('footwear', { title: 'Hey', message: 'You clicked button 2, This is the list'+JSON.stringify(list),products:products});

})

app.get('/button3',(req,res)=>{
    const Obj=products.find(e=> e.id==3);
    let Obj3={}
    Obj3.input= { r:Obj.Testcolor.bgColor.r, g:Obj.Testcolor.bgColor.g, b:Obj.Testcolor.bgColor.b };
    Obj3.output= Obj.brainTextColor;     
    
    /* let Obj3={ 
        input: { r: 0.5, g: 0.5, b: 1.0 },
        output: { white: 1 } 
    }; */
    list.push(Obj3);
    idList.push(3);
    res.render('footwear', { title: 'Hey', message: 'You clicked button 3, This is the list'+JSON.stringify(list),products:products});

})

app.get('/done',(req,res)=>{
    const net = new brain.NeuralNetwork();
    net.train(list);
    
    /*Backgrpound Color for feeding the Neural Network */
    let outObj={
        input: { r: 1, g: 0.4, b: 0 }
               }
    const output = net.run(outObj.input);
    var textColor = function(output) {

    if (output.black > .5) {
        return 'black';
    }
    return 'white';
    }     
    let resultColor=textColor(output);
    let buyList=[];
    /* let buyList=products.filter( ({id}) => idList.includes(id)   ) */
    for (let index = 0; index < idList.length; index++) {
        products.forEach(ele => {
            if(idList[index]==ele.id){
                buyList.push(ele)
            }
        });
        
    }
    console.log(buyList);
    console.log(idList);
    console.log(list);
    
    res.render('done',{Buylist:buyList,message3:resultColor,message4:outObj})

})

app.get('/footwear',(req,res)=>{
    
    res.render('footwear',{products:products})
})


app.get('/clear',(req,res)=>{
    idList=[];
    list=[];
    buyList=[];
    let outObj={
        input: { r: 1, g: 0.4, b: 0 }
               }
    let resultColor='None';
    res.render('done',{Buylist:buyList,message3:resultColor,message4:outObj})
})


app.listen(port,()=>{
    console.log(`server listening  on  port ${port}`);
})