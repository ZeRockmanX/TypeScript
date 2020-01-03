// 函数返回值
// 函数定义
function greet(): string { // 返回一个字符串
    return "Hello World"
}

function caller() {
    var msg = greet() // 调用 greet() 函数 
    console.log(msg)
}

// 调用函数
caller()
//带参数函数
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1, 2))

//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // 正确
//let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确

//默认参数
function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000)
calculate_discount(1000, 0.30)

//剩余参数
function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)

//匿名函数
//不带参数匿名函数：
var msg = function () {
    return "hello world";
}
console.log(msg())

//带参数匿名函数：
var res3 = function (a: number, b: number) {
    return a * b;
};
console.log(res3(12, 2));

//匿名函数自调用
//匿名函数自调用在函数后使用 () 即可：
(function () {
    var x = "Hello!!";
    console.log(x)
})()

//构造函数
//TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

//递归函数
function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1;
    } else {
        return (number * factorial(number - 1));     // 调用自身
    }
};
console.log(factorial);      // 输出 720

//箭头函数 (Lambda 函数)
var foo = (x: number) => 10 + x
console.log(foo(100))      //输出结果为 110

var foo2 = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo2(100)
//单个参数 () 是可选的：
var display = x => {
    console.log("输出为 " + x)
}
display(12)
//无参数时可以设置空括
var disp = () => {
    console.log("Function invoked");
}
disp();

//函数重载
function disp2(s1: string): void;
function disp2(n1: number, s1: string): void;

function disp2(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp2("abc")
disp2(1, "xyz");
