class Grid {
	constructor(rows, columns, tilewidth, tileheight) {
		this.rows = rows;
		this.columns = columns;
		this.tilewidth = tilewidth;
		this.tileheight = tileheight;
		this.tileX = 0;
		this.tileY = 0;
		this.tileOffsetX = this.tilewidth;
		this.tileOffsetY = this.tileheight;
		this.tiles = [];
		this.cellSize = ((this.tilewidth + this.tileheight) / 2);
	}
	
	createGrid() {
		for (let i = 0; i < this.columns; i++) {
			this.tiles[i] = [];
			for (let j = 0; j < this.rows; j++){
				this.tiles[i][j] = new Rectangle(this.tileX, this.tileY, this.tilewidth, this.tileheight);
				this.tileX += this.tileOffsetX;
			}
			this.tileX = 0;
			this.tileY += this.tileOffsetY;
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