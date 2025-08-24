const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("index",{bmi: null});
})

app.post("/calculate",(req,res)=>{
    const floatlength = (req.body.length);
    const floatweight = (req.body.mass);
    const bmi = floatweight/((floatlength/100)*(floatlength/100));
    res.render("index",{bmi: bmi.toFixed(2)});

})

app.listen('3000',()=>{
    console.log("Server started");
})