/*const edad=2;
console.log('Edad: ', edad);
let edadUsuario=prompt('Cuantos años tienes?');
alert('Edad de usuario: '+edadUsuario);

*/

/*let hora=prompt('que hora es?');

let saludo='';
if(hora<12){
	saludo='Buenos dias';

}else if(hora<20){
	saludo='Buenas tardes';

}else{
	saludo('Buenas noches');
}
alert(saludo);
*/

let nombre='';
let saludo='';
switch(nombre){
	case'Maria':
		saludo='Hola Maria';
		break;
	case'Juan':
	saludo='Hola Juan';
	break;
	default:
		saludo:'Hola';


}


let calificacion=prompt('cual es la calificacion?');
let nota='';
switch(true){
case (calificacion>0 && calificacion<=5):
	nota='Insuficiente';
	break;
case (calificacion>5 && calificacion<=8):
	nota='Suficiente';
	break;
case (calificacion>8 && calificacion<=10):
	nota='Sobresaliente';
	break;
default:
	nota='Calificacion no valida';

}
console.log(nota);


let invitados=[];
let i=0;

do{

	invitados[i]=prompt();
	i++;

}while(i<=5);

let nota='';
switch(true){
case (calificacion>0 && calificacion<=5):
	nota='Insuficiente';
	break;
case (calificacion>5 && calificacion<=8):
	nota='Suficiente';
	break;
case (calificacion>8 && calificacion<=10):
	nota='Sobresaliente';
	break;
default:
	nota='Calificacion no valida';

}
console.log(nota);
