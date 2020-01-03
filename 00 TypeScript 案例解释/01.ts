// function 数组接收案例

// function 函数名 (参数名:<类型>) : [return 类型] {...函数体...})
function test(name: string): [string, number] {
    return ["tx1", 100];
}
var [xx, yy] = test("Tom");
console.log(xx);
console.log(yy);

//箭头函数 (Lambda 函数)
var foo = (x: number) => 10 + x
console.log(foo(100))      //输出结果为 110

var foo2 = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo2(100)