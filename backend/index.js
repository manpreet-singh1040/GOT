const gettingImg = require('./gettingImg.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const img = gettingImg.img;




const app=express();
app.use(bodyParser.json());
app.use(cors());
app.post('/',async (req,res)=>{

   //console.log(req.body);
    console.log(req.body);
    let url=await img(req.body.firstName);
     console.log(url);
    res.send(JSON.stringify({imageUrl: url.imageUrl}));
})
app.get('/',(req,res)=>{
    console.log(req.query);
    res.send(JSON.stringify(req.query));
})


app.listen(process.env.PORT||3001);
