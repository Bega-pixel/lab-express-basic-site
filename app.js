const express = require("express");
const app = express();

app.set('views', __dirname + './views');

//app.use(express.static(""));

app.use(function (req, res, next){
    console.log('request url:' + req.url);
    next();
});

app.get('/',(req, res)=>{
     res.render('/views/index.html');
    });
app.get('/about',(req, res)=>{
     res.render('/views/about.html');
    });
app.get('/works',(req, res)=>{
     res.render('/views/works.html');
    });

    app.get('*', (req, res) => {
        res.end('File not found ');
    });

app.listen(3000, () => {
    console.log("lab-express-basic-site on port 3000! ");
});