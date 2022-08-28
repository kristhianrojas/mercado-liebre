const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//servidor del puerto 3000
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});


//vista de Home
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

//vista de Registro
app.get('/register', (req, res) => {
    
    res.sendFile(path.join(__dirname, './views/register.html'));
})

//vista de login
app.get('/login', (req, res) => {
    
    res.sendFile(path.join(__dirname, './views/login.html'));
})

