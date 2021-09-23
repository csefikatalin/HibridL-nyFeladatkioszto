$(function () {
    const osztalyok = [
        "nGRA1A",
        "nGRA1B",
        "nGRA2A",
        "nGRA2B",
        "nDEK1A",
        "fGRA",
    ];
    const osztalynevsor = [];
    const allatok = [];
    const sorsolas = []; //nev:"tanulo1",f1:"allat1",f2:"allat3",f3:"allat3"
  

    //az osztálynévsor beolvasásása
    $("#osztaly").change(function () {
        let fajlnev = "adatok/" + $("#osztaly").val() + ".json";
        adatokTombbe(fajlnev, osztalynevsor, allatokBeolvasasa);
    });
    //az állatok beolvasása
    function allatokBeolvasasa() {
        adatokTombbe("adatok/adatok.json", allatok, osszerendel);
    }

    //általános metódus adatok JSON fájlból való beolvasására
    function adatokTombbe(fajlnev, celtomb, myCallback) {
        $.ajax({
            url: fajlnev,
            success: function (result) {
                result.tomb.forEach((element) => {
                    celtomb.push(element);
                });

                myCallback(celtomb);
            },
        });
    }

    // a tanulónevek és az állatnevek összerendelése
    function osszerendel() {
        console.log(osztalynevsor);
        console.log(allatok);
        osztalynevsor.forEach(function (value) {
            const obj = {};
            obj.nev = value;
            /*   for (let index = 0; index < 3; index++) {
                let rnd = Math.floor(Math.random() * allatok.length);
                obj[index + 1] = allatok[rnd];
            } */
            let haromAllat = [];
            while (haromAllat.length < 3) {
                let rnd = Math.floor(Math.random() * allatok.length);
                let generaltAllat = allatok[rnd];
                if (!haromAllat.includes(generaltAllat)) {
                    haromAllat.push(generaltAllat);
                }
            }
            obj.haromAllat = haromAllat;
            sorsolas.push(obj);
        });

        window.sorsolas = sorsolas;
        console.log(window.sorsolas);
        window.megjelenit();
    }
});
