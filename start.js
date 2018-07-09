const express = require('express');
const path = require('path');

const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// homepage
app.get('*', (req, res) => res.render('index'));

// port
app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`); // eslint-disable-line
});
