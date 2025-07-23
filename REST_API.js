/** 
             PROJECT 1
 * REST API - JSON
 * GET/user - List all Users 
 * GET/users/1 = Get the users with id1
 * GET/users/2 = Get the users with id2
 * POST/Users = Create new Users
 * Patch/users/1 = Edit the users with ID1
 * DELETE/users/1 = delete the users with ID1\
 * 
 */
/**
 * PROJECT 1
 * 
 * REST API - JSON
 * GET /users      - List all Users
 * GET /users/:id  - Get the user with a specific ID
 */

// const express = require("express");
// const users = require("./YOURDATA.json"); // Make sure YOURDATA.json is a valid JSON array
// const app = express();

// // Get all users
// app.get("/users", (req, res) => {
//     return res.json(users); // send users in JSON
// });

// Get user by id
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
});

app.listen(8000, () => {
    console.log("Server started at PORT 8000 🚀");
});



/**    The Data will be in HTML Formate 
 * 
 * app.get('/Karan',(req, res)=>{
    const html = `
    <ul>
    ${Karan.map((user) =>`<li>${user.first_name} </li>`).join('')}
    </ul>`;
    res.send(html)
});

 */