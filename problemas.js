var arraytexto = [];
var a;
var nuevas = 0;
function añadir() {
    var palbras = document.getElementById('texto').value.split(" ");
    arraytexto = arraytexto.concat(palbras);
    document.getElementById('texto').value = "";
}
function mostrar() {
    arraytexto.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < arraytexto.length - 1; i++) {
        if (i < arraytexto.length) {
            a = arraytexto[i];
            while (a < arraytexto[i + 1] - 1) {
                nuevas++;
                a++;
            }
            a = 0;
        }
    }
    document.write(nuevas.toString());
}
