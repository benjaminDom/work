const express = require('express');
const app = express();
app.get('/', (req, res) => {    
    res.send(`<h1>Imagine a very cool product here, you can do it!</h1>`)
})

app.get('/store', (req, res) => {    
    res.send(`<h1>hello from store </h1>`)
})

app.get('/store/:id', (req, res) => {    
    res.send(`<h1>THIS IS PRODUCT ${req.params.id} </h1>`)
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})