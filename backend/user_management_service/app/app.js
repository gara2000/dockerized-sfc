const express = require("express");
const cors = require("cors");
const data = require("./data");

const port = 3000;
const address = "172.4.0.3";

const app = express();

app.use(cors());

app.get("/api/user/users", (req, res)=>{
    res.send(data.users);
})

app.listen(port, address, ()=>{
    console.log(`Server listening on port http://${address}:${port}`);
})