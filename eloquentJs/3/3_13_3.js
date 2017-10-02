console.log('My code here');
function countBs(s) {
	var arry = s.match(/B/g);
	return arry.length;
}

function countChar(s, c) {
	var re = new RegExp(c,'g');
	var i = 0;
	while( (arry = re.exec(s))){
		i++;
	}
	return i;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

console.log('official code here');

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
