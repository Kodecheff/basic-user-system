const express = require('express');
const app = express()
const userRoute = require('./user')


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PATCH, DELETE, POST")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

app.use(express.json())
app.use(userRoute)


module.exports = app;