function imagenRnd(){
	var element = document.getElementById("imgs");
	var fotos = [
            'images/aularioII-edificio.JPG',
            'images/deparIII-edificio3.JPG',
            'images/deporte-estadio.JPG',
            'images/labosII-edificio.JPG',]
	fotoRnd = fotos[Math.floor(Math.random()*fotos.length)]
	element.innerHTML = '<img src="' + fotoRnd + '">';
};
