var oracion;
oracion = prompt("Ingrese frase u oracion para comprobar si es palindromo:", "");
var cont = oracion.length;
var pal = oracion.charAt(cont - 1);
for (var i = cont - 2; i >= 0; i--)
    pal = pal + oracion.charAt(i);
if (oracion == pal)
    document.write(true + "");
else
    document.write(false + "");
