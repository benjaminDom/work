const express=require('express');
const app=express();
const port=2000;
const bodyParser=require('body-parser')

app.set('view engine','pug');
app.use(express.static('public'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const products=[
{
    id:1,
    name:"First Shoe ",
    image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80",
    description:"Red  is the  color  of summer's hot itmes"
},
{
    id:2,
    name:"second shoe yhea  ",
    image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    description:"Nike: always  on top  ofthe  game "
},

{
    id:3,
    name:"Third shoe yhea  ",
    image:"https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
    description:"converse"
}


]

app.get('/',(req,res)=>{
    res.render('index',{products:products});

})

app.get('/create',(req,res)=>{
    res.render('create')
})


app.post('/create',urlencodedParser, (req,res)=>{
    const body=req.body;
    products.push(body);
    console.log("creating  body ", body);
    res.send(`product count ${products.length}`);
})

app.get('/:id',(req,res)=>{
const product=products.find(p =>p.id==req.params.id);
res.render('details',{product:product})
})



app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);

})