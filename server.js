// const jsonString = '{"name":"brijesh","age":30,"city":"New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);


// const objectToConvert = {
//     name : "Yo Yo Honey Singh",
//     age : 59,
// }

// const jsonStringfy = JSON.stringify(objectToConvert);
// console.log(jsonStringfy);

const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// app.get('/', function (req, res) {
//   res.send('Hello World')
// }) 

// app.get('/PalakPanner',(req,res)=>{
//       const obj = {
//          name : "Palak",
//          veg : true,
//          type : "Indian",
//       }
//       res.send(obj);
      
// })






const MenuRoutes = require('./routes/MenuRoutes');
app.use('/menu',MenuRoutes);

const PersonRoutes = require('./routes/PersonRoutes')
app.use('/person',PersonRoutes);

app.listen(3000,()=>{
    console.log("Sever Started");
})
