import express from 'express';
import path from 'path';
import compression from 'compression';

const app = express();

app.use(compression());
app.use("/public", express.static(__dirname + '/public'));
app.use("/public/bootstrap", express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.get("/", (req, res) => res.render(path.join(__dirname, 'public/src/views/index'),
  { site_title: "Rock, Paper, Scissors (lizard, spock!!!)" }));

app.listen(app.get('port'));

console.log(`Server is at: http://localhost:${app.get('port')}`);
