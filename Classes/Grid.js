class Grid {
	constructor(columns, rows, tilewidth, tileheight) {
		this.columns = columns;
		this.rows = rows;
		this.tilewidth = tilewidth;
		this.tileheight = tileheight;
		this.tileX = 0;
		this.tileY = 0;
		this.tileOffset = 40;
		this.tiles = [];
	}
	
	createGrid() {
		for (let i = 0; i < this.columns; i++) {
			this.tiles[i] = [];
			for (let j = 0; j < this.rows; j++){
				this.tiles[i][j] = new Rectangle(this.tileX, this.tileY, this.tilewidth, this.tileheight);
				this.tileX += this.tileOffset;
			}
			this.tileX = 0;
			this.tileY += this.tileOffset;
		}
	}
	
	drawGrid() {
		for (let i = 0; i < this.tiles.length; i++) {
			for (let j = 0; j < this.tiles.length; j++) {
				this.tiles[i][j].draw(context);
			}
		}
	}
}