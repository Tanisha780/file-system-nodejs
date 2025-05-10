// basics of creating server using http modules

//http protocol
const http = require("http");
const server = http.createServer((req, res) => {
  // routing 
  if(req.url=='/about'){
    res.end("about page")
  }
  if(req.url=='/profile'){
    res.end('profile page')
  }
});
server.listen(3000, () => {
  console.log("server connected to 3000");
});
