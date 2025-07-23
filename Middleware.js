const express = require('express')
const fs= require('fs')
const data1 = require('./YOURDATA.json') 
const app = express();
app.use(express.urlencoded({extended:false}));//this a middleware that tell the node the data yourdata is which type thiss tell to the node
app.use((req,res,next)=>{
    console.log('Midddleware 1 Started')
    next()
})
app.use((req,res,next)=>{
    console.log('Midddleware 2 Started')
    next()//ye next middleware ko call karke chlta hai jo bhi stack mai hota hai .
})
// app.use((req,res,next)=>{
//     console.log('Midddleware 3 Started')
//     return res.end("Next is route thats why middleware end")/// res.end kr doge to next middleware ya next jo bhi hai route bo execute nhi krega
// })
app.use((req,res,next)=>{
    fs.appendFile('./MiddleTXT.txt',`\n${Date.now()}:${req.method}:${req.path}`,(err,data)=>{
        next();

        })
})




app.get('/data1',(req,res)=>{
    return res.json(data1)
})
app.listen(7000,()=>{
    console.log("Your Server on Port 7000")
})