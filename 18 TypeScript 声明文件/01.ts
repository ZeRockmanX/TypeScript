//声明文件
//声明文件以 .d.ts 为后缀
//声明文件或模块的语法格式如下：
//declare module Module_Name {}
//CalcThirdPartyJsLib.js 文件代码：
var Runoob;  
(function(Runoob) {
    var Calc = (function () { 
        function Calc() { 
        } 
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0; 
 
        for (var i = 0; i <= limit; i++) { 
            sum = sum + i; 
        }
        return sum; 
    }
    Runoob.Calc = Calc; 
    return Calc; 
})(Runoob || (Runoob = {})); 
var test = new Runoob.Calc();

//如果我们想在 TypeScript 中引用上面的代码，则需要设置声明文件 Calc.d.ts，代码如下：
//Calc.d.ts 文件代码：
declare module Runoob { 
   export class Calc { 
      doSum(limit:number) : number; 
   }
}
//声明文件不包含实现，它只是类型声明，把声明文件加入到 TypeScript 中：
//CalcTest.ts 文件代码：
/// <reference path = "Calc.d.ts" /> 
var obj = new Runoob.Calc(); 
// obj.doSum("Hello"); // 编译错误
console.log(obj.doSum(10));