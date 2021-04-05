var cadena1: string;
var cadena2: any;
var red=cadena1;
var contador: number=0;
var cad2: number=0;
cadena1 = prompt("Ingresar cadena 1:", "");
cadena2 = prompt("Ingresar cadena 2:", "");
for(var i=0; i<=cadena1.length-1; i++){
  for (var j=0; j<=cadena2.length-1; j++){
    if(cadena1.charAt(i)==cadena2.charAt(j)){
      contador++;
      cadena2=cadena2.replace(cadena2.charAt(j));
      break;
    }
  }
}
document.write(contador.toString());