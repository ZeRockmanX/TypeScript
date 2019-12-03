TypeScript 安装
本文介绍 TypeScript 环境的安装。

我们需要使用到 npm 工具安装，如果你还不了解 npm，可以参考我们的NPM 使用介绍。

NPM 安装 TypeScript
如果你的本地环境已经安装了 npm 工具，可以使用以下命令来安装：

npm install -g typescript
安装完成后我们可以使用 tsc 命令来执行 TypeScript 的相关代码，以下是查看版本号：

$ tsc -v
Version 3.2.2
然后我们新建一个 test.ts 的文件，代码如下：

var message:string = "Hello World" 
console.log(message)
通常我们使用 .ts 作为 TypeScript 代码文件的扩展名。

然后执行以下命令将 TypeScript 转换为 JavaScript 代码：

tsc test.ts
这时候再当前目录下（与 test.ts 同一目录）就会生成一个 test.js 文件，代码如下：

var message = "Hello World";
console.log(message);
使用 node 命令来执行 test.js 文件：

$ node test.js 
Hello World