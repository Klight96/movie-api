const fs = require("fs")
const http = require('http')

// fs.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1)
//     fs.readFile(`./files/${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(data2);
//         fs.readFile('./files/append.txt', 'utf-8', (error3, data3) => {
//             console.log(data3)
//         })
//     })
// })

const server = http.createServer((request, response) => {
    response.end('hello from the server!');
    console.log(response);
})

server.listen(8000, 'localhost', ()=>{
    console.log('server is running');
})