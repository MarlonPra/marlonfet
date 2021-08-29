// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function notas() {
	var ex1, ex2, ex3, md, nf, nm, nt1, nt2, nt3, pc, rp, rp1, rp2, sc, sm, tc;
	document.write("Bienvenido al Note Calculator v1.0",'<BR/>');
	document.write("Sigue las instrucciones para saber tu promedio de notas",'<BR/>');
	document.write("",'<BR/>');
	document.write("Porfavor Digite su nombre completo",'<BR/>');
	nm = prompt();
	document.write("Porfavor Digite su Modalidad",'<BR/>');
	md = prompt();
	document.write("Porfavor Digite su Semestre",'<BR/>');
	sm = prompt();
	// Primer Corte
	document.write("Vamos a Calcular su Nota Final del Primer Corte",'<BR/>');
	document.write("",'<BR/>');
	document.write("Digite la nota final de sus trabajos",'<BR/>');
	nt1 = Number(prompt());
	document.write("Digite la nota final de sus Examenes",'<BR/>');
	ex1 = Number(prompt());
	document.write("Calculando...",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	pc = (nt1*0.4)+(ex1*0.6);
	document.write("Su Nota final del Primer Corte es ",pc,'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	// Segundo Corte
	document.write("Vamos a Calcular su Nota Final del Segundo Corte",'<BR/>');
	document.write("",'<BR/>');
	document.write("Digite la nota final de sus trabajos",'<BR/>');
	nt2 = Number(prompt());
	document.write("Digite la nota final de sus Examenes",'<BR/>');
	ex2 = Number(prompt());
	document.write("Calculando...",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	sc = (nt2*0.4)+(ex2*0.6);
	document.write("Su Nota final del Segundo Corte es ",sc,'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	// Tercer Corte
	document.write("Vamos a Calcular su Nota Final del Tercer Corte",'<BR/>');
	document.write("",'<BR/>');
	document.write("Digite la nota final de sus trabajos",'<BR/>');
	nt3 = Number(prompt());
	document.write("Digite la nota final de sus Examenes",'<BR/>');
	ex3 = Number(prompt());
	document.write("Calculando...",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	tc = (nt3*0.4)+(ex3*0.6);
	document.write("Su Nota final del Tercer Corte es ",tc,'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	document.write("",'<BR/>');
	// Nota Anual
	document.write("Ahora vamos a calcular su Nota Final Total",'<BR/>');
	document.write("",'<BR/>');
	document.write("¿Quiere recibir saber tu nota?",'<BR/>');
	rp = prompt();
	document.write("¿Seguro?",'<BR/>');
	rp1 = prompt();
	document.write("¿Segurisimo? estas apunto de ver tu Nota Final",'<BR/>');
	rp2 = prompt();
	document.write("Calculando...",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	document.write(".",'<BR/>');
	nf = (pc*0.3)+(sc*0.3)+(tc*0.4);
	document.write("Alumno ",nm," de ",md,"  ",sm," semestre"," Sus notas son las siguientes",'<BR/>');
	document.write("Primero Corte ",pc,'<BR/>');
	document.write("|----------------------------------------------|",'<BR/>');
	document.write("Segundo Corte ",sc,'<BR/>');
	document.write("|----------------------------------------------|",'<BR/>');
	document.write("Tercer Corte ",tc,'<BR/>');
	document.write("|----------------------------------------------|",'<BR/>');
	document.write("Nota Final ",nf,'<BR/>');
}

