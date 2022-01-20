const express = require('express');
const path = require('path');
const app = express();

app.use('/client',express.static(path.resolve(__dirname,'client')));

app.get('/*',(req,resp)=>{
    resp.sendFile(path.resolve(__dirname,'client','index.html'));
});

app.listen(process.env.PORT || 5000 , ()=> console.log('server is running'));