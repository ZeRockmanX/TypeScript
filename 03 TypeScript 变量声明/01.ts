/*
TypeScript 变量声明
变量是一种使用方便的占位符，用于引用计算机内存地址。
我们可以把变量看做存储数据的容器。
TypeScript 变量的命名规则：
变量名称可以包含数字和字母。
除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
变量名不能以数字开头。
变量使用前必须先声明，我们可以使用 var 来声明变量。
我们可以使用以下四种方式来声明变量：
声明变量的类型及初始值：
var [变量名] : [类型] = 值;
例如：
var uname:string = "Runoob";
声明变量的类型，但没有初始值，变量值会设置为 undefined：
var [变量名] : [类型];
例如：
var uname:string;
声明变量并初始值，但不设置类型类型，该变量可以是任意类型：
var [变量名] = 值;
例如：
var uname = "Runoob";
声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
var [变量名];
例如：
var uname;
*/
var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)

//类型断言
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
//语法格式：
//<类型>值
//或:
//值 as 类型
var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)
var str4:number = 1 as number
console.log(str4)

//变量作用域
/*
全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
*/
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)