//接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)

//联合类型和接口
interface RunOptions {
    program: string;
    commandline: string[] | string | (() => string);
}

// commandline 是字符串
var options: RunOptions = { program: "test1", commandline: "Hello" };
console.log(options.commandline)

// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

// commandline 是一个函数表达式
options = { program: "test1", commandline: () => { return "**Hello World**"; } };

var fn: any = options.commandline;
console.log(fn());

//接口和数组
interface namelist {
    [index: number]: string
}

//var list2:namelist = ["John",1,"Bran"] // 错误元素 1 不是 string 类型
interface ages {
    [index: string]: number
}

var agelist: ages;
agelist["John"] = 15   // 正确 
//agelist[2] = "nine"   // 错误

//接口继承
//单继承实例
interface Person {
    age: number
}

interface Musician extends Person {
    instrument: string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Drums"
console.log("年龄:  " + drummer.age)
console.log("喜欢的乐器:  " + drummer.instrument)

//多继承实例
interface IParent1 {
    v1: number
}

interface IParent2 {
    v2: number
}

interface Child extends IParent1, IParent2 { }
var Iobj: Child = { v1: 12, v2: 23 }
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2)