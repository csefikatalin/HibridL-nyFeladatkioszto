$(function () {
    //nyomtatásgomb kezelése
    $("#nyomtat").attr("disabled", true);
    $("#nyomtat").on("click", function () {
        window.print();
    });
    window.megjelenit = megjelenit;
    function megjelenit() {
        $("#nyomtat").attr("disabled", false);
        let txt = "";
        window.sorsolas.forEach(function (value) {
            txt += "<div>" + value.nev + "</div>";
            txt += "<div>" + value.haromAllat[0] + "</div>";
            txt += "<div>" + value.haromAllat[1] + "</div>";
            txt += "<div>" + value.haromAllat[2] + "</div>";
        });

        $("article").append(txt);
    }
});
