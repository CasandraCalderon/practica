var n;
n = prompt("Ingresar numero:", "");
var c = 1;
var p = 2;
var d = 2;
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
