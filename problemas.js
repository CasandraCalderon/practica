var arraytexto = [];
var primero;
var segundo;
var mult;
var mayor = 0;
function añadir() {
    var palbras = document.getElementById('texto').value.split(" ");
    arraytexto = arraytexto.concat(palbras);
    document.getElementById('texto').value = "";
}
function mostrar() {
    for (var j = 0; j <= arraytexto.length - 1; j++) {
        if (j + 1 <= arraytexto.length - 1) {
            primero = arraytexto[j];
            segundo = arraytexto[j + 1];
            mult = primero * segundo;
        }
        if (mult > mayor)
            mayor = mult;
    }
    document.write(mayor);
}
