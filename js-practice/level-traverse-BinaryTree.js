


var obj = {
	value : '1',
	left : {
		value: '2',
		left : {
			value: 4,
			left: null,
			right: null,
		},
		right : {
			value: 5,
			left: null,
			right: null,
		}
	},
	right : {
		value: '3',
		left : {
			value: 6,
			left: null,
			right: null,
		},
		right : {
			value: 7,
			left: null,
			right: null,
		}
	}
}



function traverse(node) {
  var arry = [];
  var queue = [];

  var tmp = node;
  var last = node;
  var nlast = null;

  queue.push(tmp);
  while(queue.length!=0) {
    tmp = queue.pop();
    arry.push(tmp)

    if(tmp.left) {
      queue.push(tmp.left);
      nlast = tmp.left;
    }

    if(tmp.right) {
        queue.push(tmp.rights);
      nlast = tmp.right;
    }
    if(tmp = last) {
      last = nlast;
    }
  }
  return arry;
}

console.log(traverse(obj));
