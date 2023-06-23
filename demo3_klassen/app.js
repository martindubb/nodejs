class Auto {
    constructor(marke, modell, baujahr){
        this.marke = marke;
        this.modell = modell;
        this.baujahr = baujahr;
        this.farbe;
    }
    get infos(){
        return this.marke + ', ' + this.modell + ' - ' + this.baujahr + ', farbe: ' + this.farbe;
    }

    set changeFarbe(farbe) {
        this.farbe = farbe;
    }

    get max_vel(){
        let ps = 123;
        return ps * 3;
    }
}

let mein_vw = new Auto("volkswagen", "golf", 2018);
let mein_bmw = new Auto("bmw", "3", 2017);

console.log(mein_vw);
console.log(mein_bmw);

console.log(mein_vw.infos);
console.log(mein_bmw.infos);

mein_bmw.changeFarbe = "rot";
console.log("farbe meines bmw: " + mein_bmw.farbe);
console.log("farbe meines vw: " + mein_vw.farbe);
console.log(mein_vw.infos);
console.log(mein_bmw.infos);

console.log(mein_vw);
console.log(mein_bmw);

console.log("höchstgewschwindigkeit: " + mein_vw.max_vel);
