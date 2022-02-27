var estudiantes= [
	{
		"Usuario": "Jorge_Arguello",
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
		"Foto": "../img/JorgeArguello_Foto.jpg"
	},
]

// document.addEventListener("DOMContentLoaded", lista(estudiantes))
document.addEventListener("DOMContentLoaded", galeria())

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
function galeria(){
	for(i of estudiantes){
		var informacion='<h1>'+i.Nombres+'</h1></br>'
		var imagen='</br><img src="'+i.Foto+'"></br>'

		document.write(informacion, imagen)
		console.log(i)
	}
}

