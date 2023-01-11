function encriptar() {
	var texto = document.getElementById("inpuText").value.toLowerCase();//toLowerCase, para que de forma transparente convierta todas
	var textCifrado = texto.replace(/e/igm,"enter");                   // las letras mayúsculas en minúsculas
	var textCifrado = textCifrado.replace(/o/igm,"ober");
	var textCifrado = textCifrado.replace(/i/igm,"imes");
	var textCifrado = textCifrado.replace(/a/igm,"ai");
	var textCifrado = textCifrado.replace(/u/igm,"ufat");
	if(texto == "" || texto == +texto){
		alert("Escriba un texto");
		window.location.reload();
	}
	if(texto == "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"){
		alert("no vale");
		window.location.reload();
	}
	//los slash son para que busque todas las letras que hayan en la frase u oración
	//la letra i; es para que haga el cambio tanto en letras mayúsculas como minúsculas
	//la letra g; es para que busque en toda la frase y reemplace las letras
	//la letra m; es para que busque en todas las frases que el usuario haya escrito
	document.getElementById("imagen1").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto1").innerHTML = textCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}
function desencriptar() {
	var texto = document.getElementById("inpuText").value.toLowerCase();
	var textCifrado = texto.replace(/enter/igm,"e");
	var textCifrado = textCifrado.replace(/ober/igm,"o");
	var textCifrado = textCifrado.replace(/imes/igm,"i");
	var textCifrado = textCifrado.replace(/ai/igm,"a");
	var textCifrado = textCifrado.replace(/ufat/igm,"u");
	if(texto == "" || texto == +texto){
		alert("No hay nada para desencriptar");
		window.location.reload();
	}
	//Esto hace que cuando el usuario de clic en encriptar, la imágen del muñeco y los textos que hay en el
	//desaparezcan y aparezca el texto que usuario escribio ya reemplazado y tambien el cuadro de copiar
	document.getElementById("imagen1").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto1").innerHTML = textCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

}
function copiar() {
	var frases = document.querySelector("#texto1");
	frases.select();
	document.execCommand("copy");
}
