import {createServer} from 'http'

createServer((req,res)=>{
console.log("logging is here");
res.end("something is there");
}).listen(8080);