Algoritmo Notas
	Escribir "Bienvenido al Note Calculator v1.0"
	Escribir "Sigue las instrucciones para saber tu promedio de notas"
	Escribir ""
	Escribir "Porfavor Digite su nombre completo"
	Leer nm
	Escribir "Porfavor Digite su Modalidad"
	Leer md
	Escribir "Porfavor Digite su Semestre"
	Leer sm
	//Primer Corte
	Escribir "Vamos a Calcular su Nota Final del Primer Corte"
	Escribir ""
	Escribir "Digite la nota final de sus trabajos"
	Leer nt1
	Escribir "Digite la nota final de sus Examenes"
	Leer ex1
	Escribir "Calculando..."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	PC = (nt1*0.4) + (ex1*0.6)
	Imprimir "Su Nota final del Primer Corte es " PC
	Escribir ""
	Escribir ""
	Escribir ""
	Escribir ""
	//Segundo Corte
	Escribir "Vamos a Calcular su Nota Final del Segundo Corte"
	Escribir ""
	Escribir "Digite la nota final de sus trabajos"
	Leer nt2
	Escribir "Digite la nota final de sus Examenes"
	Leer ex2
	Escribir "Calculando..."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	SC = (nt2*0.4) + (ex2*0.6)
	Imprimir "Su Nota final del Segundo Corte es " SC
	Escribir ""
	Escribir ""
	Escribir ""
	Escribir ""
	//Tercer Corte
	Escribir "Vamos a Calcular su Nota Final del Tercer Corte"
	Escribir ""
	Escribir "Digite la nota final de sus trabajos"
	Leer nt3
	Escribir "Digite la nota final de sus Examenes"
	Leer ex3
	Escribir "Calculando..."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	TC = (nt3*0.4) + (ex3*0.6)
	Imprimir "Su Nota final del Tercer Corte es " TC
	Escribir ""
	Escribir ""
	Escribir ""
	Escribir ""
	//Nota Anual
	Escribir "Ahora vamos a calcular su Nota Final Total"
	Escribir ""
	Escribir "¿Quiere recibir saber tu nota?"
	Leer rp
	Escribir "¿Seguro?"
	Leer rp1
	Escribir "¿Segurisimo? estas apunto de ver tu Nota Final"
	Leer rp2
	Escribir "Calculando..."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	Escribir "."
	NF = (PC*0.3) + (SC*0.3) + (TC*0.4)
	Imprimir "Alumno " nm " de " md "  " sm " semestre"  " Sus notas son las siguientes"
	Imprimir "Primero Corte " PC
	Escribir "|----------------------------------------------|"
	Imprimir "Segundo Corte " SC
	Escribir "|----------------------------------------------|"
	Imprimir "Tercer Corte " TC
	Escribir "|----------------------------------------------|"
	Imprimir "Nota Final " NF
FinAlgoritmo
