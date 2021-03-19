const http = require('http')  
const port = 2000;

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end("<h1>Hello Node.js Server yhea !</h1><br/><img src='https://images.unsplash.com/photo-1525287957446-e64af7954611?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'></img>");
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})