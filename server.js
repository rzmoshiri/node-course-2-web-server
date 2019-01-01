const express = require ('express');

var app = express();



const hbs = require('hbs');

hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
})

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs')
// });

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=> {
res.render('home.hbs',{
    pageTitle:'This is HOME page...',
    welcomeMessage:'Welcome to this Web page Buddy...!!!',
    currentYear:new Date().getFullYear()
})
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About PAGE...',
        currentYear:new Date().getFullYear()
    });
});

app.get('/bad',(req,res)=>{
    res.send({
errorMessage : 'Unable to fulfiil The Request Buddy'
    });
    
});


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
});