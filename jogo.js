/*
	Autor: João Pedro Coelho de Sousa RA:174456
*/

var selec ="X";
var selec2 = selec;
var troca= true;
var trava = [false,false,false,false,false,false,false,false,false];
var valores = ["Vazio1","Vazio2","Vazio3","Vazio4","Vazio5","Vazio6","Vazio7","Vazio8","Vazio9"];

function mudarInicio(){
	if(troca===true){
		if(selec=="X"){
			selec="O";
			document.getElementById("btvez").value = "vez:O";
		}else{
			selec="X";
			document.getElementById("btvez").value = "vez:X";
		}
	}
}

function selecionarCasa(num){
	if(trava[num]==false){
		var num2 = num+1;
		var num3 = num2.toString();
		selec2=selec;
		document.getElementById('casa' + num3).innerHTML = selec;
		troca=true; 
		mudarInicio();
		troca=false;
		trava[num]=true;
		valores[num]=selec;
		verificarVitoria();
	}
}


function verificarVitoria(){
	if((trava[0]==true)&& (trava[1]==true)&& (trava[2]==true)&& (trava[3]==true)&& (trava[4]==true)&& (trava[5]==true)&& (trava[6]==true)&&
		(trava[7]==true)&& (trava[8]==true)){
		document.getElementById("resultado").innerHTML = "O jogo deu velha";
	}

	if( ((valores[0]==valores[1])&&(valores[0]==valores[2])) || ((valores[3]==valores[4])&&(valores[3]==valores[5])) ||
		((valores[6]==valores[7])&&(valores[6]==valores[8])) || ((valores[0]==valores[3])&&(valores[0]==valores[6])) ||
		((valores[1]==valores[4])&&(valores[1]==valores[7])) || ((valores[2]==valores[5])&&(valores[2]==valores[8])) ||
		((valores[0]==valores[4])&&(valores[0]==valores[8])) || ((valores[2]==valores[4])&&(valores[2]==valores[6])) 
		){
		trava= [true,true,true,true,true,true,true,true,true];
		document.getElementById("resultado").innerHTML = "O jogador do simbolo "+selec2+" Venceu!";
	}
}