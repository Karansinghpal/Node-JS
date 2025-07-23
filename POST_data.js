const express = require('express')
const fs = require('fs');
const users = require('./YOURDATA.json')
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/users' , (req,res)=>{
    return res.json(users)
});
app.post('/api/users' , (req,res)=>{
    const body = req.body;
    users.push({...body ,id: users.length + 1 });
     fs.writeFile("./YOURDATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({system:"needs Updation",id:users.length });
        
    });

    app.delete('/del/users' , (req,res)=>{
        return res.json({system:"needs Updation", });
        
    });

    
});
app.listen(9000,()=>{
    console.log("Your server Will be run on 9000 PORT >>>>")
});