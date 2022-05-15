// Import express module
const express= require('express');
// Establish object path to connection.js
const sequelize = require('./config/connection')
// Establish object for routes
const routes = require('./routes');
// Object for using express
const app= express();
// Listen to open port or 3301
const PORT = process.env.PORT || 3001;
// <iddleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);
// Listen to port
sequelize.sync({force:false}).then(()=>{
app.listen(PORT,()=>{
    console.log(`Listening to ${PORT}`);
});
});