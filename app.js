const express = require('express');
const connectToDatabase = require('./connection');
const router = require('./router');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', require('./router'))
connectToDatabase();

app.listen(port, ()=>{
    console.log("App is listening on port : ", port)
})