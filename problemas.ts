var n: any;
n = prompt("Ingresar numero:", "");
var c: number= 1;
var p: number= 2;
var d: number= 2;
while (c <= n) {
   if (p % d == 0) {
      if (p == d) {
         document.write(p + ", ");
         c++;
      }
      d = 2;
      p++;
   }
   else
      d++;
}