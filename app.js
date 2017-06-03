import express from 'express';
import path from 'path';
import compression from 'compression';

const app = express();

app.use(compression());
app.use("/public", express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.get("/", (req, res) => res.render(path.join(__dirname, 'public/src/views/index')));

app.listen(app.get('port'));
