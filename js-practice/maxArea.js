//题目来源： //https://www.nowcoder.com/question/next?pid=5583018&qid=105234&tid=11705513

var arry = [6, 2, 5, 4, 5, 1, 6];

function allArea(arry) {
  var result =[];
  var sum = 0;
  for(var i = 0; i < arry.length; i++) {
    sum = 0;
    for(var j = i; j< arry.length; j++) {
      if(arry[j] >= arry[i]) {
        sum++;
      } else {
        break;
      }
    }
    for(var j = i -1 ; j >= 0; j--) {
      if(arry[j]>= arry[i]) {
        sum++;
      } else {
        break;
      }
    }
    result[i] = arry[i]*sum;
  }
   var max = 0;
   result.forEach(function(item) {
     if(item > max) {
       max = item;
     }
   })
   return max;
}
console.log(allArea(arry));
