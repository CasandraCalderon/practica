var arraytexto: any[] = [];
var a;
var nuevas: number=0;
export {};
function añadir() {
    let palbras = (<HTMLInputElement>document.getElementById('texto')).value.split(" ");
    arraytexto = arraytexto.concat(palbras);
    (<HTMLInputElement>document.getElementById('texto')).value = "";
  }
export {};
function mostrar() {
    arraytexto.sort(function(a, b) {
        return a - b;
    });
    for (var i=0; i<arraytexto.length-1; i++){
        if(i<arraytexto.length){
            a=arraytexto[i];
            while (a<arraytexto[i+1]-1){
                nuevas++;
                a++;
            }
            a=0;
        }
    
    }
    document.write(nuevas.toString());
}