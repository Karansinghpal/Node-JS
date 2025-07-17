const http = require('http');
const express = require('express');
 const app = express();
const fs = require('fs');//the simple way to make server is using express
app.get('/', (req, res) => {
    res.send('Hii from Homeeeee');
});
app.get('/about', (req, res) => {
    res.send('Hii I am Karan');
});
app.get('/Contact-Us', (req, res) => {
    res.send('Number is 7651995122');
});
app.get('/signup', (req, res) => {
    res.send('Signup Page');
});
app.post('/signup', (req, res) => {
    res.send('Signup successful');
});
app.get('/login', (req, res) => {
    res.send('Login Page');
});

app.get('/FullIntro', (req, res) => {
    return res.send('FullIntro' + req.query.name + ' ' + req.query.ContactUs);
});
myserver = http.createServer(app);
myserver.listen(3000, () => {
    console.log('Server is running on port 3000');
});