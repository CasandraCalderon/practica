var arraytexto: string[] = [];
var nombre: string;
var nombre2: string;
var a;
var b;
var cont: number=0;
export{};
function añadir() {
  let palbras = (<HTMLInputElement>document.getElementById('texto')).value.split(" ");
  arraytexto = arraytexto.concat(palbras);
  (<HTMLInputElement>document.getElementById('texto')).value = "";
}
export{};
function mostrar() {
    arraytexto.sort();
    for (var i=0; i<arraytexto.length-1; i++){
        cont=0;
        nombre=arraytexto[i];
        a=nombre.charAt(0);
        for (var j=0; j<arraytexto.length-1; j++){
            nombre2=arraytexto[j];
            b=nombre2.charAt(0);
            if (a==b){
                cont++;
            }
        }
        if(cont>1){
            if(cont % 2==0){
                document.write(2 +"");
            }
            else{
                document.write(1 +"");
            }
            break;
        }
        
    }
    if (cont==1){
        document.write(0 +"");
    }
    
}


