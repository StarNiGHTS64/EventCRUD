const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

//Import Routes
const eventRoutes = require('./routes/event');

//Settings
//Search for a port in the OS and if its not available uses port 3000
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'contraseña',
  port: 3306,
  database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', eventRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting Server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
