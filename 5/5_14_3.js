function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(arry, fun){
	var res = {};
	arry.forEach(function(person){
		var cen = fun(person);
		if(person in res){
			res[cen].push(person)
		} else {
			res[cen] = [person];
		}
	})
	return res;
}

var byCen = groupBy(ancestry, function(person){
	return Math.ceil(person.died/100);
});

for( var century in byCen ){
	var arry = byCen[century].map(function(person){
		return person.died -person.born;
	})
	console.log(century +" : "+average(arry));
}
