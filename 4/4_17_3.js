function arrayToList(arry) {
	var list = {};
	var oldlist =list;
	for (var i =0; i<arry.length; i++) {
		list['value'] = arry[i];
		list['rest'] = {};
		list = list['rest'];
	}
	return oldlist;
}
var list = arrayToList([1, 2, 3]);
console.log(list);


function listToArray(list) {
	var arry = [];
	while(list.rest){
		arry.push(list.value);
		list = list.rest;
	}
	return arry;
}

console.log(listToArray(list));

function prepend (first, list) {
	return { value: first, rest: list};
}


function nth(list, position) {
	var res;
	while(position+1){
		res =list.value;
		list = list.rest;
		position--;
	}
	return res;
}

// official code here

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
