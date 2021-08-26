const texto = (cadena = "")=> 
(!cadena) ? console.warn("No ingresaste ninguna cadena"): 
console.log (`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
texto();


//1
const cadena = prompt("Ingresa un texto");
(!cadena) ? prompt("No ingresaste ninguna cadena de texto"):
prompt(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

let cadena = prompt("Ingresa un texto");
if (!cadena) {
	prompt("No ingresaste ninguna cadena de texto");
} else{
	prompt(`La cadena ${cadena} tiene ${cadena.length} caracteres`):
}

//2
const texto = (cadena = "", longitud = undefined) =>
	(!cadena) 
		? console.warn("No ingresaste ninguna cadena de texto")
		: (longitud === undefined)
		? console.warn("No ingresaste la longitud para recortar la cadena de texto")
		: console.log (cadena.slice(0,longitud));
texto("Hola mundo",4);
texto();
texto("Hola Hola");

//3
	const texto = (cadena = "", arr = undefined) =>
	(!cadena) ? console.warn("No ingresaste ninguna cadena")
	: (arr === undefined)
	? console.warn("No ingresaste el caracter")
	: console.log (cadena.split(arr));
texto('hola que tal', ' ')

//4
	const repetirTexto = (texto = "", veces = undefined)=>{
	if (!texto) return console.warn("No ingresaste ninguna cadena");
	if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir");
	if (veces === 0) return console.warn("El número de veces no puede ser 0");
	if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");
		for (let i = 1; i<=veces; i++) {
			console.log(`${texto}, ${i}`);
		}
}
repetirTexto("Hola mundo" , 5);

//5
	const invertirTexto = (cadena = "") => console.log(cadena.split("").reverse().join(""))
	invertirTexto();
	invertirTexto("Hola mundo");
	invertirTexto("")

	const invertirTexto = (cadena = "")=>
	(!cadena) ? console.warn("No ingresaste ninguna cadena")
	: console.log (cadena.split("").reverse().join(""));
	invertirTexto ();
	invertirTexto("Hola mundo")
	invertirTexto("")

//6
	const contarTexto = (cadena = "",texto = "")=>{
		let i = 0,
		cont = 0;
		while (i !== -1) {
			i = cadena.indexOf(texto,i);
			if (i!==-1) {
				i++;
				cont++;
			}
		}
			return console.log(`La palabra ${texto} se repite ${cont} veces`);
	}
	contarTexto("Hola mundo mundo mundo","mundo")

//7
	const palindromo = (palabra = "") =>{
		if (!palabra) return console.warn("No ingresaste ninguna cadena");
		palabra = palabra.toLowerCase();
		let alReves = palabra.split("").reverse().join("");
		return (palabra===alReves)
		? (`${palabra} Es palindromo`)
		: (`${palabra} No es palindromo`)
	}
	palindromo();
	palindromo("ala")
	palindromo("salas")

	const invertirTexto = (cadena) =>{
		let palindromo = cadena.split("").reverse().join("")
		return palindromo === cadena ? "es palindromo" : "no es palindromo"	
	}
	console.log(invertirTexto("oso"))
	console.log(invertirTexto("ana"))

//8
	const eliminarCaracteres = (texto ="", patron="")=>
	(!texto) ? console.warn("No ingresaste ninguna cadena")
	: (!patron) console.log (texto.replace(new RegExp(patron, "ig"),""));	

	const removerCaracteres = (cadena = "")=>{
		if (cadena == "") return console.warn("No ingresaste ninguna cadena");
		return cadena.replace(/t/g, '');
	}
	console.log(removerCaracteres("todostodos"))
	console.log(removerCaracteres("hola a todos"))
	removerCaracteres("")

//9
	const numAleatorio = () => console.log(Math.floor(Math.random()*100)+500);
	numAleatorio()

//10
	const capicua = (num = 0)=>{
	if (!num) return console.warn("No ingresaste ningún número");
	if (typeof num !== "number") return console.warn("El valor ingresado NO es un número");

	num = num.toString();
	let alreves = num.split("").reverse().join("");
	return (num === alreves)
		? console.info(`${num} es capicua`) 
		: console.info(`${num} no es capicua`)
	}
	capicua();
	capicua(202);
	capicua(808);
	capicua(501);
	capicua("202");
	capicua("");

//11
	EXPONENTE
	const factorial = (num1, num2)=>{
		if (!num1 && !num2) return console.warn("No ingresaste ningún número");

		let exp = ""
		console.log (exp = Math.pow(num1,num2))
	}
	factorial();
	factorial(7, 4);
	factorial(5, 2);
	factorial(7, 2);
	factorial(5,3)

	const fact = (numero = undefined)=>{
		if (numero === undefined) return console.warn("No ingresaste un número");
	if (typeof numero !== "number") return console.warn("El valor ingresado NO es un número");
	if (numero === 0) return return console.warn("El número no puede ser 0");
	if (Math.sign(numero) === -1) return return console.warn("El número no puede ser negativo");
		let num = 1
		for (let i = numero; i>1 ; i--) {
			num *= i;
			
		}
	return console.log(`El factorial de ${numero} es ${num}`);
	}
	fact(4)
	fact(3)
	fact()

//12
	const fact = (numero = undefined)=>{
		if (numero === undefined) return console.warn("No ingresaste un número");
	if (typeof numero !== "number") return console.warn("El valor ingresado NO es un número");
	if (numero === 0) return return console.warn("El número no puede ser 0");
	if (numero === 1) return return console.warn("El número no puede ser 1");
	if (Math.sign(numero) === -1) return return console.warn("El número no puede ser negativo");
	


//13
	const numParImpar = (num)=>{
		if (!num) return console.warn("No ingresaste ningún número");
		return (num % 2 == 0)
			? console.log(`El número ${num} es par`)
			: console.log(`El número ${num} es impar`);
	}
	numParImpar(4);
	numParImpar(9);
	numParImpar(3);
	numParImpar(24);

//14
	const convertirGrados = (grados = undefined, unidad = undefined) =>{
		if (grados === undefined) return console.warn("No ingresaste los grados a convertir");
		if (typeof grados !== "number") return console.warn("El valor ingresado NO es un número");
		if (unidad === undefined) return console.warn("No ingresaste la unidad a convertir");
		if (typeof unidad !== "string") return console.warn("El valor ingresado NO es una cadena de texto");
		if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("La unidad ingresada NO es reconocida");

			if (unidad === "C") {
				return console.log(`${grados}°C = ${Math.round((grados * (9 / 5))+32)}°F`);
			} else if (unidad === "F") {
				return console.log(`${grados}°F = ${Math.round((grados-32) * (5 / 9))}°C`);
			} else {
				return console.error("El tipo de grados a convertir NO es válido");
			}
}
	convertirGrados(8, "C")
	convertirGrados(0, "C")
	convertirGrados(32,)
	convertirGrados(0,"D")
	convertirGrados(32, "F")