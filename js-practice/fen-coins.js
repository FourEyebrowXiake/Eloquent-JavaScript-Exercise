// 给你六种面额 1、5、10、20、50、100 元的纸币，假设每种币值的数量都足够多，编写程序求组成N元（N为0~10000的非负整数）的不同组合的个数。


var N = 10 ;
var coins = [1, 5, 10, 20, 50, 100];
var F = [];

F[0] = 1;

for ( var i = 0; i < coins.length; i++) {
  for (var j = coins[i]; j<= N; j++) {
    if(!F[j]) {
      F[j] = 0;
    }
    F[j] = F[j] + F[j - coins[i]];
  }
}

console.log(F);
