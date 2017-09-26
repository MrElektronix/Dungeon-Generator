let canvas, context;
let grid;
let game;

let roomWidth, roomHeight;
let roomX, roomY, calcRoomX, calcRoomY;
let node;

let roomAmount;

let Init = ()=> {
	roomAmount = 3;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	game = new Game(1000, 600, canvas, context);
	grid = new Grid(100, 100, 10, 10);
	grid.createGrid();

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
		randomRoomSize();
		roomX = Math.floor(Math.random() * (canvas.width - grid.tileOffset));
		roomY = Math.floor(Math.random() * (canvas.height - grid.tileOffset));

		calcRoomX = calcRoom(roomX);
		calcRoomY = calcRoom(roomY);
		
		if (calcRoomX == 0 && calcRoomY == 0) {
			for (let i = 0; i < grid.columns; i++) {
					for(let j = 0; j < grid.rows; j++) {
						if (roomX == grid.tiles[i][j].x && roomY == grid.tiles[i][j].y) {
							
							if (roomX >= 100) {
								Math.floor(roomX /= grid.cellSize);
							}
							
							if (roomY >= 100){
								Math.floor(roomY /= grid.cellSize);
							}
							
							
							if ((roomX + roomWidth) >= 90){
								roomX -= 5;							
							}
							
							if ((roomY + roomHeight) >= 90) {
								roomY -= 5;
								
							}
							//console.log("room X : " + roomX + " : " + "room Y: " + roomY);
							
							for (let i = roomY;  i < (roomHeight + roomY); i++) {
								for (let j = roomX; j < (roomWidth + roomX); j++){
									console.log("X: " + roomX + " Y: " + roomY);
									grid.tiles[i][j].color = "white";
								}
							}
						}
					}
				}
			i++;
		}
	}
}


let randomRoomSize = ()=>{
	let roomSize = 8;
	//let minimumRoomSize = 1;
	roomWidth = roomSize;
	roomHeight = roomSize;
}

let calcRoom = (item)=> {
	let result = (item % grid.tileOffset);
	return result;
}


Init();