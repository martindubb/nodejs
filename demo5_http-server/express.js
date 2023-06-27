const express = require('express');
const app = express();

const port = 3000;
const hostname = '127.0.0.1';

// static file middleware
app.use(express.static("assets"));

app.get('/', function (req, res) {
    const params = req.query;
    let result = parseInt(params.a) + parseInt(params.b);
    res.send(result.toString());
});

// aufruf: localhost:3000/echo/hallo von der anderen seite der bergs
app.get('/echo/:message', (req, res) => {
    let msg = req.params.message;
    res.send(msg);
});

// ip endpunkt
app.get('/ip', (req, res) => {
    res.send(req.ip);
});


// server starten
app.listen(port, hostname, () => {
    console.log(`server listening on ${hostname}:${port}.`);
});
