const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
const route = require('./routes');

app.use(
    express.urlencoded({
        extended: true,
    }),
); //middwere
app.use(express.json()); //middwere
//XMLHttpRequest, fetch, axios

//!HTTP logger
app.use(morgan('combined'));

//! template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs'); // định nghĩa handlebar bằng với handlebars function này.
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('Path: ', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
