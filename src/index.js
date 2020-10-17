const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));

//!HTTP logger
app.use(morgan('combined'))

 //! template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs'); // định nghĩa handlebar bằng với handlebars function này.
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('Path: ', path.join(__dirname, 'resources', 'views'));
//! nó được định nghĩa là Route (hiểu cách khách là tuyến đường là dấu / ).
app.get('/', (req, res) => {
  res.render('home')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})