function range(start, end ){
	var step = 1,
			arry = [];
	if((typeof arguments[2] === 'number') && (arguments[2] !== 0)){
		step = arguments[2];
	}
	if(step > 0){
		for(var i =start; i <= end; i+=step) {
			arry.push(i);
		}
	} else {
		for(var i =start; i >= end; i+=step) {
			arry.push(i);
		}
	}
	return arry;
}

function sum(arry){
	var sum = 0;
	for(var i =0; i<arry.length; i++){
		sum += arry[i];
	}
	return sum;
}

console.log(range(1, 4));

console.log(range(5, 2, -1));

//official code here:
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
