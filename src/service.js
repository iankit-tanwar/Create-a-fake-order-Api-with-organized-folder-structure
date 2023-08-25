const express = require('express');
const  testRoutes  = require('./routes/testRoutes');

const app = express();

require("dotenv").config()
let PORT = process.env.PORT;

app.use(testRoutes)

app.listen(PORT,()=>{
    console.log(`this server is running on PORT ${PORT}`)
})