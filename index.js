// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = new Array();
for(var i=0;i<a.length;i++)
{
var c=a[i]*2;
b.push(c);
}
console.log(b);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var d=""; 
for(var i=0;i<colors.length;i++){
     d +=colors[i]+" ";
     
} 
console.log(d);
var d2=""; 
for(var i=0;i<colors.length;i++){
    if(i==colors.length-1){
        d2 +=colors[i];
    }else{d2 +=colors[i]+"+";}
    
    
} 

console.log(d2);
var d3=""; 
for(var i=0;i<colors.length;i++){
    if(i==colors.length-1){
        d3+=colors[i];
    }else{
        d3 +=colors[i]+",";
    }
    
    
} 
console.log(d3);


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var arr = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var max;
for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      max = arr[j];
      arr[j] = arr[i];
      arr[i] = max;
    }
  }
}
console.log(arr);



// 编程程序，找出下列数组中出现频率最高的元素。
var  arr= [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var res = {};
for (var i=0,l=arr.length;i<l;i++) {
    if (!res[arr[i]]) {
        res[arr[i]] = 1;
    } else {
        res[arr[i]]++;
    }
}
// 遍历 res
var keys = Object.keys(res);
var maxNum = 0, maxEle;
for (var i=0,l = keys.length;i<l;i++) {
    if (res[keys[i]] > maxNum) {
        maxNum = res[keys[i]];
        maxEle = keys[i];
    }
}
console.log(maxEle);