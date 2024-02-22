import http from 'http'
import fs from 'fs'


const sendFile = (name, res) =>{
    fs.readFile(`./${name}`, (err, data)=>{
        if(err){
            res.writeHead(500);
            res.end("Server Error");
        }
        else{
            res.end(data)
        }

})}



const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        sendFile("index.html", res)
    } else if(req.url === '/about'){
        sendFile("about.html", res)
    } else if (req.url === '/contact'){
        sendFile("contact.html", res)
    } else if(req.url === '/cock'){
        sendFile("cock.html", res)
    }else if(req.url === "/style.css"){
            sendFile("/style.css", res)
        
        }}
)


server.listen(2000, () =>{
    console.log("listining on port http://localhost:5000");
})