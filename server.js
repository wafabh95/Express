const express = require('express')

const app = express()



closedTime = (req,res,next)=>{

    let date= new Date()

    let h = date.getHours()

    console.log('Il est  ' + h +'H, le site ouvre de 9H a 17H' );

    if (h<23 && h>9) next();

};

app.get('/home',closedTime,(req,res)=>{

    res.sendFile(__dirname + '/home.html')

})
app.get('/ourservices',closedTime,(req,res)=>{

    res.sendFile(__dirname + '/ourservices.html')

})

app.get('/contact',closedTime,(req,res)=>{

    res.sendFile(__dirname + '/contacts.html')

})

app.listen(5000, ()=>{
    console.log('The server is running');
  });