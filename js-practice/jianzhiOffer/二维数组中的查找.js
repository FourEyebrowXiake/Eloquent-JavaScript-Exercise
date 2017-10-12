// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


var arry = [[1,2,3],
            [2,3,4],
            [3,4,5]]


function Find_(target, array)
{
    var hang = array.length,
        lie  = array[0].length;
    if(hang === 0 && lie === 0){
        return false;
    }
    var i = 0,
        j = lie  - 1;
    while(i < hang && j > -1){
        if(array[i][j] < target){
            i ++;
        }else if(array[i][j] > target){
            j --;
        }else{
            return true;
        }
    }

    if (i > hang - 2 || j < 1) {
        return false;
    }
}

console.log(Find_(5,arry));
