const flaechen = require('./flaechen.js');
const figlet = require('figlet');

console.log(`Eine Kugel mit Radius 3 hat ein Volumen von ${flaechen.kugelVol(3).toPrecision(10)}.`);
console.log(`Ein Zylinder mit Radius 3 und Höhe 5 hat ein Volumen von ${flaechen.zylinderVol(3, 5).toPrecision(10)}`);
console.log(`Ein Kegel mit Radius 3 und Höhe 5 hat ein Volumen von ${flaechen.zylinderVol(3, 5).toPrecision(10)}`);

// Wird asynchron ausgeführt, daher als 2. augegeben
figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

// synchrone ausführung, wird als erstes augegeben
console.log(
    figlet.textSync("Boo!", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    })
);
