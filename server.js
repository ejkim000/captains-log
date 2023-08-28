require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
    res.send(`<h1>Captain's Log index page</h1>`);
})



app.listen(PORT, ()=> {
    console.log(`Listening port ${PORT}`);
})