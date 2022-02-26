var estudiantes= [
	{
		"Usuario": "Jorge_Arguello",
		"Nombres": "Jorge Alexander",
		"Apellidos": "Arguello Gusqui",
		"Foto": "../img/JorgeArguello_Foto.jpg"
	},
	{
		"Usuario": "Nicol_Brito",
		"Nombres": "Alisson Nicol",
		"Apellidos": "Brito Serrano"
	}
]
for(i of estudiantes){
	document.write('<a href=""'+i.Usuario+'.html">'+i.Nombres+'</a></br>')
	document.write('</br><img src="'+i.Foto+'"></br>')
	console.log(i)
}
/**
// JSON Read
fetch("students.json")
	.then(response=>response.json())
	.then(data=>{
		console.log(data.Nombres)
		document.write("<h1>"+data.ArguelloJorge.Nombres+"</h1>")
		document.write('<img src="'+data.ArguelloJorge.Foto +'"> </img>')
})
**/
