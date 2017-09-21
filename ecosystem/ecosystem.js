//Vector
function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
}

//Grid
function Grid(width, height) {
	this.space = new Array(width*height);
	this.width = width;
	this.height = height;
}
Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width &&
				 vector.y >= 0 && vector.y < this.height;
}
Grid.prototype.get = function(vector) {
	return this.space[vector.x +vector.y*this.width];
}
Grid.prototype.set = function(vector, value) {
	this.space[vector.x +vector.y*this.width] = value;
}
Grid.prototype.forEach= function(f, context) {
	for(var y = 0; y < this.height; y++){
		for(var x =0; x < this.width; x++){
			var value = this.space[x+y*this.width];
			if(value != null) {
				f.call(context, value, new Vector(x, y));
			}
		}
	}
}

// var grid = new Grid(10, 10);
// console.log(grid.get(new Vector(1, 1)));
//
// grid.set(new Vector(1,1), 7);
// console.log(grid.get(new Vector(1, 1)));




var directions = {
	"n": new Vector(0, 1),
	"ne": new Vector(1, 1),
	"e": new Vector(1, 0),
	"se": new Vector(1, -1),
	"s": new Vector(0, -1),
	"sw": new Vector(-1, -1),
	"w": new Vector(-1, 0),
	"nw": new Vector(-1, 1),
};
var directionName = "n ne e se s sw w nw".split(" ");
function randomELement(array) {
	return array[Math.floor(Math.random()*array.length)];
}

//只会随机移动
// function BouncingCritter() {
// 	this.direction = randomELement(directionName);
// };
// BouncingCritter.prototype.act = function(view) {
// 	if(view.look(this.direction) != " ") {
// 		this.direction = view.find(" ") || "s";
// 	}
// 	return {type:"move", direction: this.direction};
// }

//会沿着墙壁爬行
// function WallFollower() {
// 	this.dir = 's';
// }
// WallFollower.prototype.act = function(view) {
// 	var start = this.dir;
// 	if(view.look(dirPlus(dir, -3))!= " ")//如果左后方不为空
// 		start = this.dir = dirPlus(this.dir, -2);//就把方向往左调整90度
// 	while(view.look(this.dir) != " ") {
// 		this.dir = dirPlus(this.dir, 1);
// 		if(this.dir == start) break;
// 	}
// 	return {type: "move", direction: this.dir};
// }
// function dirPlus(dir, n) {
// 	var index = directionName.indexOf(dir);
// 	return directionName[(index + n + 8) % 8];
// }

//植物
function Plant() {
	this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(view) {
	if(this.energy > 15) {
		var space = view.find(" ");
		if(space)
			return {type: "reproduce", direction : space};
	}
	if(this.energy < 20) {
		return {type: "grow"};
	}
};

//食草动物
function SmartPlantEater() {
	this.energy = 20;
	this.digestion = 0;
}
SmartPlantEater.prototype.act = function(view) {
	if(this.digestion > 0 ) {
		this.digestion--;
	}
	var space = view.findAll(" ");
	var plant = view.findAll("*");
	var allSpace = plant.concat(space);

	if(this.energy > 50 && space)
		return {type: "reproduce", direction : space};
	var plant = view.find("*");
	if(plant && (this.digestion == 0)){
		return {type: "eat", direction: plant}
	}
	if(allSpace) {
		return {type: "move", direction: randomELement(allSpace)}
	}
}

//老虎
function Tiger() {
	this.energy = 30;
	this.digestion = 0;
}
Tiger.prototype.act = function(view) {
	if(this.digestion > 0) {
		this.digestion--;
	}
	var space = view.findAll(" ");
	var plant = view.findAll("*");
	var allSpace = plant.concat(space);

	if(this.energy > 70 && space)
		return {type: "reproduce", direction : space};
	var plantEater = view.find("O");
	if(plantEater && (this.digestion == 0)){
		return {type: "eat", direction: plantEater}
	}
	if(allSpace)
		return {type: "move", direction: randomELement(allSpace)}

}


//#
function Wall() {

}


//World
function elementFromChar(legend, ch) {
	if(ch == " ") {
		return null;
	}

	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}

function charFromElement(ele) {
	if(ele == null)
		return " ";
	else
		return ele.originChar;
}
function World(data, legend) {
	var grid = new Grid(data[0].length , data.length);
	this.grid = grid;
	this.legend = legend;

	data.forEach(function(line, y) {
		for(var x =0; x<line.length; x++) {
			grid.set(new Vector(x, y), elementFromChar(legend,line[x]));
		}
	});
}
World.prototype.toString = function() {
	var output = "";
	for( var i = 0; i < this.grid.height; i++) {
		for(var j = 0; j< this.grid.width; j++) {
			var element = this.grid.get(new Vector(j, i));
			output += charFromElement(element);
		}
		output += "\n";
	}
	return output;
}
World.prototype.turn = function() {
	var acted = [];
	this.grid.forEach(function(critter, vector){
		if(critter.act && acted.indexOf(critter)==-1){
			acted.push(critter);
			this.letAct(critter, vector);
		}
	},this)
}
World.prototype.letAct = function(critter, vector) {
	var action = critter.act(new View(this, vector));
	if(action && action.type == 'move') {
		var dest = this.checkDestination(action, vector);
		if(dest && this.grid.get(dest) == null) {
			this.grid.set(vector, null);
			this.grid.set(dest, critter);
		}
	}
}
World.prototype.checkDestination = function(action, vector) {
	if(directions.hasOwnProperty(action.direction)) {
		var dest = vector.plus(directions[action.direction]);
		if(this.grid.isInside(dest)) {
			return dest;
		}
	}
}

//actionTypes
var actionTypes = Object.create(null);
actionTypes.grow = function(critter) {
	critter.energy += 0.5;
	return true;
}
actionTypes.move = function(critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	var judgeCh = true;
	if(dest)
		var ch = this.grid.get(dest);
	if((ch == null) || (ch instanceof Plant)) {
		judgeCh =false;
	}
	if(dest == null ||
		critter.energy <= 1 || judgeCh)
		return false;

	critter.energy -= 1;
	this.grid.set(vector, ch);
	this.grid.set(dest, critter);
	return true;
}
actionTypes.eat = function(critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	var atDest = dest != null && this.grid.get(dest);
	if(!atDest || atDest.energy == null) {
		return false;
	}
	critter.energy += atDest.energy;
	critter.digestion += 1;
	this.grid.set(dest, null);
	return true;
}
actionTypes.reproduce = function(critter, vector, action) {
	var baby = elementFromChar(this.legend, critter.originChar);
	var dest = this.checkDestination(action, vector);
	if(dest == null ||
		critter.energy <= 2*baby.energy ||
		this.grid.get(dest) != null)
		return false;
	critter.energy -= 2*baby.energy;
	this.grid.set(dest, baby);
	return true;
}


//LifelikeWorld
function LifelikeWorld(map, legend) {
	World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);
LifelikeWorld.prototype.letAct = function(critter, vector) {
	var action = critter.act(new View(this, vector));
	var handle = action &&
		action.type in actionTypes &&
		actionTypes[action.type].call(this, critter, vector, action);

	if(!handle) {
		critter.energy -= 0.2;
		if(critter.energy <= 0)
			this.grid.set(vector, null);
	}
};





//View
function View(world, vector) {
	this.world = world;
	this.vector = vector;
}
View.prototype.look = function(dir) {
	var target =this.vector.plus(directions[dir]);
	if(this.world.grid.isInside(target))
		return charFromElement(this.world.grid.get(target))
	else
		return "#";
};
View.prototype.findAll = function(ch) {
	var found = [];
	for(var dir in directions) {
		if(this.look(dir)==ch) {
			found.push(dir);
		}
	}
	return found;
}
View.prototype.find = function(ch) {
	var found = this.findAll(ch);
	if(found.length > 0) {
		return randomELement(found);
	}
	return null;
}


var valley = new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
)

//
// console.log(world.toString());

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateWorld(world) {
	var n = 100;
	while(n) {
		valley.turn();
	  console.log(valley.toString());
		await sleep(1200);
		console.clear();
		n--;
	}
}

animateWorld(valley);
