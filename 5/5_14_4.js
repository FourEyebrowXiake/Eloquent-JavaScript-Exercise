function every(arry, judge){
	for(var i =0; i<arry.length; i++){
		if(!judge(arry[i])){
			return false;
		}
	}
	return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}
