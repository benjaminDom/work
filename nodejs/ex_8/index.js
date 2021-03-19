const http = require('http')  
const port = 3001;

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end("<h1>Congrats you're using your first Node.js Web Server</h1><br/><img src='https://images.unsplash.com/photo-1598669014781-1a75f2ee6492?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'></img>");
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log(`Unable to start the server on port ${port}`, err)
  }

  console.log(`This HTTP server is running on port${port}`);
})