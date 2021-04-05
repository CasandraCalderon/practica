var arraytexto = [];
var nombre;
var nombre2;
var a;
var b;
var cont = 0;
function añadir() {
    var palbras = document.getElementById('texto').value.split(" ");
    arraytexto = arraytexto.concat(palbras);
    document.getElementById('texto').value = "";
}
function mostrar() {
    arraytexto.sort();
    for (var i = 0; i < arraytexto.length - 1; i++) {
        cont = 0;
        nombre = arraytexto[i];
        a = nombre.charAt(0);
        for (var j = 0; j < arraytexto.length - 1; j++) {
            nombre2 = arraytexto[j];
            b = nombre2.charAt(0);
            if (a == b) {
                cont++;
            }
        }
        if (cont > 1) {
            if (cont % 2 == 0) {
                document.write(2 + "");
            }
            else {
                document.write(1 + "");
            }
            break;
        }
    }
    if (cont == 1) {
        document.write(0 + "");
    }
}
