var numero;
var cont=0;
numero = prompt("Ingrese un numero:", "");
for (var i = 1; i<=numero; i++){
    if(numero%i==0)
        cont++;
}
if (cont<=2)
    document.write(true + "");
else
    document.write(false + "");