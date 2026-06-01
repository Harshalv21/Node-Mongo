const http=require("http");
const server=http.createServer((req,resp)=>{
  switch (req.url) {
  case '/':
    resp.end()
    break;

    case '/about':
    resp.end("About....")
    break;

    case '/contact':
    resp.end("Contact....")
    break;

  default:
    resp.end("Error 404: Page not found")
    break;
}
})

server.listen("7000",()=>{
  console.log("Running");
  
})