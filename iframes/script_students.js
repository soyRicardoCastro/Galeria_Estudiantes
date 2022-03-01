var estudiantes= [
	{
		"Usuario": "Jorge_Arguello",
		"ColorC": "#87CEEB",
		"Foto": "../img/JorgeArguello_Foto.jpg",

		"Nombres": "ARGUELLO GUSQUI JORGE ALEXANDER",
		"FechaNacimiento": "02-07-2005",
		"Signo": "Cancer",
		"Edad": "16",
		"Sexo": "Masculino",
		"Artista": "Wos",
		"Color": "Azul celeste",
		"Hobbie": "Fotografía",
		"Comida": "Pizza",
		"Metas": "Estudiar ingeniería en informática, intentar ser uno de los mejores para vivir de lo que me gusta hacer que es la informática",
	},
]

// document.addEventListener("DOMContentLoaded", lista(estudiantes))
document.addEventListener("DOMContentLoaded", galeria())

function galeria(){
	for(i of estudiantes){
		var informacion=`
		<div class="for">
		<style>
		.for{
			background-color: ${i.ColorC};
		}
		</style>
			<img src="${i.Foto}" width="80px"></br>
			<h2>${i.Nombres}</h2>
			<p><strong>Fecha de Nacimiento: </strong>${i.FechaNacimiento}</p>
			<p><strong>Signo Zodiacal: </strong>${i.Signo}</p>
			<p><strong>Edad:</strong> ${i.Edad} años</p>
			<p><strong>Sexo:</strong> ${i.Sexo}</p>
			<p><strong>Artista:</strong> ${i.Artista}</p>
			<p><strong>Color:</strong> ${i.Color}</p>
			<p><strong>Pasa Tiempo:</strong> ${i.Hobbie}</p>
			<p><strong>Comida:</strong> ${i.Comida}</p>
			<p><strong>Metas:</strong> ${i.Metas}</p>
		</div>
			`
		document.write(informacion)
		console.log(i)
	}
}
/*
function lista(estudiantes){
	for(i of estudiantes){
		usuario= i.Usuario
		//var usuario= "estudiantes,"+i.Usuario
		document.write('<a href="javascript:mensajero()">'+i.Nombres+'</a>')
		//document.write('<button type="button" onclick="seleccionador('+i.Usuario+')">'+i.Nombres+'</button>')
		document.write('</br>')
		//document.getElementById('informacion').innerHTML='<h1>'+i.Nombres+'</h1>';
		return usuario
	}
}
*/

/*
function seleccionador(usuario){
	alert(usuario)
	for(i of estudiantes){
		usuario= String(usuario)
		if(i.Usuario==usuario){
			document.write(i.Nombres)
			alert(i.Nombres)
		}
	}
}
*/
