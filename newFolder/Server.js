const http = require ('http');
const fs = require('fs');
// const nserver = http.createServer((req,res) => {
//     console.log('Request received');
//     res.end('Hii from Server');
// })
// nserver.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// })



// const http = require ('http');
// const mserver = http.createServer((req,res) => {
//     const log = `${Date.now()}: New Req From Log\n`;
//     fs.appendFile('log.txt', log, (err) => {
//         if (err) {
//             console.error('Error writing to log file:', err);
//         }
//     });
//     console.log('Request received');
//     res.end('Hii from Server agaiiin');
// })
// mserver.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// })












const mserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req From Log\n`;

    // Log the request asynchronously
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error('Error writing to log:', err);
        }
    });

    // Handle routes directly
    switch (req.url) {
        case '/':
            res.end('Hii from Home');
            break;
        case '/about':
            res.end('Hii I am Karan');
            break;
        case '/Contact-Us':
            res.end('Number is 7651995122');
            break;
        default:
            res.end('404 Not Found');
    }
});

mserver.listen(3000, () => {
    console.log('Server is running on port 3000');
});
