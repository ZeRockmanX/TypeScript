// for循环
var num: number = 5;
var i: number;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)

var j: any;
var k: any = "a b c"
for (j in k) {
    console.log(k[j])
}

//for…of 、forEach、every 和 some 循环
let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});

//while 循环
var num: number = 5;
var factorial: number = 1;

while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为：" + factorial);

//do...while 循环
var n: number = 10;
do {
    console.log(n);
    n--;
} while (n >= 0);

//break 语句
var i: number = 1
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("在 1~10 之间第一个被 5 整除的数为 : " + i)
        break     // 找到一个后退出循环
    }
    i++
}  // 输出 5 然后程序执行结束

//continue 语句
var num: number = 0
var count: number = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue
    }
    count++
}
console.log("0 ~20 之间的奇数个数为: " + count)    //输出10个偶数