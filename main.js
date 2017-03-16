/**
 * Created by Pablo on 18/02/2017.
 */

const fs = require('fs');
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

let hbs = exphbs(require('./engine'));

app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');

//Asignación de las rutas de la web
require('./routes')(app, express);


const port = 80;
app.listen(port, () => {
    console.log(`Web server started at http://localhost:${port}`)
});



module.exports.config = JSON.parse(fs.readFileSync('./private/config.json', 'utf8'));