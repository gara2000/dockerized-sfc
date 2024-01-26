const express = require('express');
const axios = require("axios");
const cors = require("cors");
const asyncHandler = require("express-async-handler");

const port = 3000;
const address = "172.3.0.2";
// const address = "localhost";

const backendAddress = "http://172.3.0.3:8080";
// const backendAddress = "http://api_gateway:8080";
// const backendAddress = "http://localhost:8888";

const app = express();

app.use(cors());

app.get("/api/user/users", asyncHandler(
    async (req, res) => {
        console.log(backendAddress+req.path);
        const response = await axios.get(backendAddress+req.path); 
        console.log(response.data);
        res.send(response.data);
}));

app.listen(port, address, () => {
  console.log(`Controller listening at http://${address}:${port}`);
});
