// 最长公共子串

var one = 'abcde'.split('');
var two = 'abgde'.split('');

function ls (x, y) {
  var max = 0;
  var arry = [];
  x.forEach(function(item, i) {
    arry[i] = [];
    y.forEach(function(_item, j) {

      if( item == _item) {
        if(i > 0 && j > 0) {
            arry[i][j] = arry[i-1][j-1]+1;
        } else {
            arry[i][j] = 1;
        }
        if(arry[i][j] > max) {
          max = arry[i][j];
        }
      } else {
        arry[i][j] = 0;
      }

    })
  })
  return max;
}

console.log(ls(one, two));
