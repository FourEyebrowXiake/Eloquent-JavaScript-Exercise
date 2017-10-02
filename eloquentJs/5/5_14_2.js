function average(array) {
	function add(a, b) {
		return a+b;
	}
	return array.reduce(add) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var different = ancestry.filter(function(person){
	return byName[person].mother != null;
}).map(function(person){
	return person.born - byName[person.mother].born;
});

console.log(average(different));
