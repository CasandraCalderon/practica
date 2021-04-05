var direccion;
var numero = "";
var cont = 0;
var estado = 0;
direccion = prompt("Inserte direccion IPv4:", "");
for (var i = 0; i <= direccion.length; i++) {
    if (isNaN(direccion.charAt(i)) == false && direccion.charAt(i) != '.') {
        numero = numero + direccion.charAt(i);
    }
    else {
        if (numero != "") {
            if (direccion.charAt(i) == "." || direccion.charAt(i) == " ") {
                cont++;
                if (cont < 5) {
                    if (numero > 255) {
                        estado = 1;
                        break;
                    }
                    else {
                        numero = "";
                    }
                }
                else {
                    estado = 1;
                    break;
                }
            }
        }
        else {
            estado = 1;
            break;
        }
        if (cont == 4) {
            estado = 1;
            break;
        }
    }
}
cont++;
if (numero != '') {
    if (numero <= 255 && cont == 4) {
        document.write(true + "");
    }
    else
        document.write(false + "");
}
else {
    document.write(false + "");
}
