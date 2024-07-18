const jose = require('node-jose');
const fs = require("fs")
// const http = require('http')

// fs.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1)
    
//     fs.readFile('./files/input.txt', 'utf-8', (error2, data2) => {
//         console.log(data2);
//         fs.readFile('./files/append.txt', 'utf-8', (error3, data3) => {
//             console.log(data3)
//             fs.writeFile('./files/output.txt', `${data2}\n\n ${data3} \n${new Date()}`, () => {
//                 console.log('file written successfully')
//             })
//         })
//     })
// })

// let testIn = fs.readFileSync('./files/input.txt', 'utf-8')
// console.log(testIn)

// let data = `data in input.txt: ${testIn} \n written on ${new Date()}`
// let content = fs.writeFileSync('./files/output.txt', data)

// const server = http.createServer((request, response) => {
//     response.end('hello from the server!');
//     console.log(response);
// })

// server.listen(8000, 'localhost', ()=>{
//     console.log('server is running');
// })




// Define the key store
const keystore = jose.JWK.createKeyStore();

// Generate an RSA key
keystore.generate('RSA', 2048, { alg: 'RS256', use: 'sig' }).then((result) => {
    // Convert to JWKS
    const jwks = keystore.toJSON(true);
    console.log('JWKS:', JSON.stringify(jwks, null, 2));

    // Save JWKS to a file
    fs.writeFileSync('jwks.json', JSON.stringify(jwks, null, 2));
});
