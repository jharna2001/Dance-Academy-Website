const express = require("express")
const path =require("path")
const fs = require("fs")
const app = express();
const hostname = '127.0.0.1';
const port =  80;

// EXPRESS SPECIFIC STUFF

app.use('/static', express.static('static')) // for serving static files 
app.use(express.urlencoded())
//PUG SPECIFIC STUFF
app.set('view engine', 'pug')  // Set the templete engine as pug
app.set('views', path.join(__dirname, 'views'))

//END POINTS
app.get('/',(req, res)=>{
     const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact',(req, res)=>{
    const params = {}
   res.status(200).render('contact.pug', params);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port} `)
})