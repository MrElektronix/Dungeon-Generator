let canvas, context;
let grid;
let game;


let Init = ()=> {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	game = new Game(600, 600, canvas, context);
}


Init();