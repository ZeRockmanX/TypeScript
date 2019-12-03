/**
TypeScript 主要包含以下几种运算：
算术运算符
逻辑运算符
关系运算符
按位运算符
赋值运算符
三元/条件运算符
字符串运算符
类型运算符
 */
//算术运算符
var num1: number = 10
var num2: number = 2
var res: any = 0
res = num1 + num2
console.log("加:" + res);
res = num1 - num2;
console.log("减:" + res)
res = num1 * num2
console.log("乘:" + res)
res = num1 / num2
console.log("除:" + res)
res = num1 % num2
console.log("余数:" + res)
num1++
console.log("num1 自增运算:" + num1)
num2--
console.log("num2 自减运算:" + num2)

//关系运算符
var num1: number = 5;
var num2: number = 9;
console.log("num1 的值为:" + num1);
console.log("num2 的值为:" + num2);
res = num1 > num2
console.log("num1 大于n num2: " + res)
res = num1 < num2
console.log("num1 小于 num2: " + res)
res = num1 >= num2
console.log("num1 大于或等于  num2: " + res)
res = num1 <= num2
console.log("num1 小于或等于 num2: " + res)
res = num1 == num2
console.log("num1 等于 num2: " + res)
res = num1 != num2
console.log("num1 不等于 num2: " + res)

//逻辑运算符
var avg: number = 20;
var percentage: number = 90;
console.log("avg 值为: " + avg + " ,percentage 值为: " + percentage);
var res1: boolean = ((avg > 50) && (percentage > 80));
console.log("(avg>50)&&(percentage>80): ", res1);
var res2: boolean = ((avg > 50) || (percentage > 80));
console.log("(avg>50)||(percentage>80): ", res2);
var res3: boolean = !((avg > 50) && (percentage > 80));
console.log("!((avg>50)&&(percentage>80)): ", res3);

//短路运算符(&& 与 ||)
//&& 与 || 运算符可用于组合表达式。 && 运算符只有在左右两个表达式都为 true 时才返回 true。
//考虑以下实例：
var a = 10
var result1 = (a < 10 && a > 5)
//以上实例中 a < 10 与 a > 5 是使用了 && 运算符的组合表达式，第一个表达式返回了 false，由于 && 运算需要两个表达式都为 true，所以如果第一个为 false，就不再执行后面的判断(a > 5 跳过计算)，直接返回 false。
//|| 运算符只要其中一个表达式为 true ，则该组合表达式就会返回 true。
//考虑以下实例：
var a = 10
var result2 = (a > 5 || a < 10)
//以上实例中 a > 5 与 a < 10 是使用了 || 运算符的组合表达式，第一个表达式返回了 true，由于 || 组合运算只需要一个表达式为 true，所以如果第一个为 true，就不再执行后面的判断(a < 10 跳过计算)，直接返回 true。

//位运算符
var a: number = 2;   // 二进制 10 
var b: number = 3;   // 二进制 11
var result;
result = (a & b);
console.log("(a & b) => ", result)
result = (a | b);
console.log("(a | b) => ", result)
result = (a ^ b);
console.log("(a ^ b) => ", result);
result = (~b);
console.log("(~b) => ", result);
result = (a << b);
console.log("(a << b) => ", result);
result = (a >> b);
console.log("(a >> b) => ", result);
result = (a >>> 1);
console.log("(a >>> 1) => ", result);

//赋值运算符
var a: number = 12
var b: number = 10
a = b
console.log("a = b: " + a)
a += b
console.log("a+=b: " + a)
a -= b
console.log("a-=b: " + a)
a *= b
console.log("a*=b: " + a)
a /= b
console.log("a/=b: " + a)
a %= b
console.log("a%=b: " + a)

//三元运算符
var num:number = -2 
var result5 = num > 0 ? "大于 0" : "小于 0，或等于 0" 
console.log(result5)

//类型运算符
//typeof 是一元运算符，返回操作数的数据类型。
var num = 12 
console.log(typeof num);   //输出结果: number
//instanceof 运算符用于判断对象是否为指定的类型，后面章节我们会具体介绍它。

//其他运算符
//负号运算符(-)
var x:number = 4 
var y = -x; 
console.log("x 值为: ",x);   // 输出结果 4 
console.log("y 值为: ",y);   // 输出结果 -4

//字符串运算符: 连接运算符 (+)
var msg:string = "RUNOOB"+".COM" 
console.log(msg)
