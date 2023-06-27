const http = require('http');
const url = require('url');

const port = 3000;
const hostname = '127.0.0.1';

// server-instanz erstellen & funktionaliät festlegen
const server = http.createServer((req, res) => {
    // query parameter abhholen
    const parsedURL = url.parse(req.url, true);
    const params = parsedURL.query;

    // berechnen des ergebnisses: parameter a & b entahlten die zahlen
    let zahl_a = parseInt(params.a);
    let zahl_b = parseInt(params.b);
    let result = zahl_a + zahl_b;

    // generieren der response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK, Ergebnis ist ' + result);
    // res.end(`OK, Ergebnis ist ${result}`);
});


// server starten
server.listen(port, hostname, () => {console.log("")});
