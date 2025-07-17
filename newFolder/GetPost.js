const http = require('http');
const fs = require('fs');   
const mserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req From Log\n`;

    // Log the request asynchronously
    fs.appendFile('Get.txt', log, (err) => {
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
        case '/signup':
            if (req.method === 'GET') {
                res.end('Signup Page');
            } else if (req.method === 'POST') {
                res.end('Signup successful');
            }
            break;
        case '/login':
            if (req.method === 'GET') {
                res.end('Login Page');
            } else if (req.method === 'POST') {
                res.end('Login successful');
            }
            break;
        default:
            res.end('404 Not Found');
    }
});

mserver.listen(3000, () => {
    console.log('Server is running on port 3000');
});
