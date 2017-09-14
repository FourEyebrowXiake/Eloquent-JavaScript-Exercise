console.log("2.20.3 :");

var marix = [];
for(var i=0; i<8; i++){
  	var  a = [];
  	var j;
  if(i%2 == 0) {
		j = 0;
    } else {
    	j = 1;
    }
  for( ; j<8; j+=2){
  	a[j] = '#';
  }
  marix[i] = a ;
}

console.log('my code :')
console.log(marix);

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log('official code :')
console.log(board);
