const express = require('express');
const cors  = require('cors');
const path = require('path');
const { dbConnection } = require('./db/config.js');
require('dotenv').config();

console.log(process.env)
// crear el servidor/ aplicacion de express
const app = express();
//Base de datos
dbConnection();

//Directorio Publico

app.use(express.static('public'))

//Cors
app.use(cors( ));

//Lectura y parseo del body

app.use(express.json());

//Rutas 

app.use( '/api/auth', require('./routes/auth.js'));

//manejar posibles rutas
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'));
})



app.listen(process.env.PORT,() => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});