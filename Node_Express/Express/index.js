const express = require("express");
const app = express();
 
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// app.use((req, res) => {
//     res.send({
//         name: "Abhijeet Sharan",
//         age : "24",
//     });
// })

// app.use((req, res) => {
//     console.log(req);
//     console.log("Request Received");
// })


//Path Parameters
app.get("/:username/:id", (req, res) => {
    const username = req.params.username;
    console.log(username);
    res.send(`Hello, ${username}`);
});

//Query Strings
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (q) {
        res.send(`Search results for query: ${q}`);
    } else {
        res.send("No query provided");
    }
});


app.listen(port, () => { 
    console.log(`Server running on port ${port}`);
});