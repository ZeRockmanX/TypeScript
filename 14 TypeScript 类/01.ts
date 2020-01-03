class Car {
    // 字段
    engine: string;

    // 构造函数
    constructor(engine: string) {
        this.engine = engine
    }

    // 方法
    disp(): void {
        console.log("函数中显示发动机型号  :   " + this.engine)
    }
}

// 创建一个对象
var obj = new Car("XXSY1")

// 访问字段
console.log("读取发动机型号 :  " + obj.engine)

// 访问方法
obj.disp()


//类的继承
class Shape {
    Area: number

    constructor(a: number) {
        this.Area = a
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("圆的面积:  " + this.Area)
    }
}

var obj2 = new Circle(223);
obj2.disp()

//继承类的方法重写
class PrinterClass {
    doPrint(): void {
        console.log("父类的 doPrint() 方法。")
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint() // 调用父类的函数
        console.log("子类的 doPrint()方法。")
    }
}

//static 关键字
class StaticMem {
    static num: number;

    static disp(): void {
        console.log("num 值为 " + StaticMem.num)
    }
}

StaticMem.num = 12     // 初始化静态变量
StaticMem.disp()       // 调用静态方法

//instanceof 运算符
class Person { }
var obj3 = new Person()
var isPerson = obj3 instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);

//访问控制修饰符
class Encapsulate {
    str1: string = "hello"
    private str2: string = "world"
}

var obj4 = new Encapsulate()
console.log(obj4.str1)     // 可访问 
//console.log(obj4.str2)   // 编译错误， str2 是私有的

//类和接口
//类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number
    rebate: number

    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var obj5 = new AgriLoan(10, 1)
console.log("利润为 : " + obj5.interest + "，抽成为 : " + obj5.rebate)
