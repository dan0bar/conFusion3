const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require('./routes/leaderRouter')
const promotionsRouter = require('./routes/promoRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());

console.log('Connecting Routers')
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter)
app.use('/promotions', promotionsRouter)

console.log('Using logging Middleware Morgan')
app.use(morgan('dev'));

console.log('Using static files')
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server!</h1></body></html>')
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`);
})