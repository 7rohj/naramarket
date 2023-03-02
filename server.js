const express = require("express");
const app = express();
const port = 5000;
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 

app.listen(port, () => console.log(`${port}포트입니다.`));

app.get("/", (req,res) => {  
	res.sendFile(__dirname + '/index.html'); 
	});

app.post("/add", (req,res) => {  
    res.sendFile(__dirname + '/add.html'); 
    });

app.post('/add', function(req, res){
    console.log(req.body.str);
    console.log(req.body.end);
    res.send('전송완료')
    });