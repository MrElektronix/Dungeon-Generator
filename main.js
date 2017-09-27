let canvas, context;
let grid;
let game;

let roomWidth, roomHeight;
let roomX, roomY, calcRoomX, calcRoomY;

let roomAmount;
let Rooms;

let Init = ()=> {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	Rooms = [];
	roomAmount = 6;
	
	
	grid = new Grid(70, 70, 10, 10);
	grid.createGrid();

	game = new Game((grid.rows * 10), (grid.columns * 10), canvas, context);
	RoomSize();
	createRoom();
	Update();
}


let Update = ()=> {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	grid.drawGrid();
	
	requestAnimationFrame(Update);
}

let createRoom = ()=> {
		for (i = 0; i < roomAmount;){
			roomX = Math.floor(Math.random() * (grid.rows));
			roomY = Math.floor(Math.random() * (grid.columns));
			
			if (roomX + roomWidth >= grid.rows - roomWidth){
				roomX -= roomWidth;
			}
			
			if (roomY + roomHeight >= grid.columns - roomHeight){
				roomY -= roomHeight;
			}
			
			for (let i = roomY;  i < (roomHeight + roomY); i++) {
				for (let j = roomX; j < (roomWidth + roomX); j++){
					grid.tiles[i][j].color = "white";
				}
			}
			i++;
		}
}


let RoomSize = ()=>{
	let roomSize = 4;
	roomWidth = roomSize;
	roomHeight = roomSize;
}


Init();