const hello : string = "Hello World!"
console.log(hello)

/*
以上代码首先通过 tsc 命令编译：

tsc Test.ts
得到如下 js 代码：

var hello = "Hello World!";
console.log(hello);
最后我们使用 node 命令来执行该 js 代码。

$ node Test.js
Hello World

空白和换行
TypeScript 会忽略程序中出现的空格、制表符和换行符。

空格、制表符通常用来缩进代码，使代码易于阅读和理解。

TypeScript 区分大小写
TypeScript 区分大写和小写字符。

分号是可选的
每行指令都是一段语句，你可以使用分号或不使用， 分号在 TypeScript 中是可选的，建议使用。
*/