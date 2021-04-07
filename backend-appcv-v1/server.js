'use strict';

const express = require ('express');
const app = express();
const db = require("./models");
const cors = require('cors');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// use cors
app.use(cors());

// call routes
var routes = require('./routes/routes');
routes(app);

db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server started on port 3000`);
    });
})
