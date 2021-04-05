var  oracion : any;
oracion = prompt("Ingrese frase u oracion que quiera invertir:", "");
var cont= oracion.length;
for(var i= cont-1; i>=0; i--)
    document.write(oracion.charAt(i));