//TypeScript 中命名空间使用 namespace 来定义
//如果我们需要在外部可以调用 SomeNameSpaceName 中的类类和接口，则需要在类和接口添加 export 关键字。
//IShape.ts 文件代码：
namespace Drawing {
    export interface IShape {
        draw();
    }
}

//Circle.ts 文件代码：
/// <reference path = "IShape.ts" /> 
namespace Drawing {
    export class Circle implements IShape {
        public draw() {
            console.log("Circle is drawn");
        }
    }
}

//Triangle.ts 文件代码：
/// <reference path = "IShape.ts" /> 
namespace Drawing {
    export class Triangle implements IShape {
        public draw() {
            console.log("Triangle is drawn");
        }
    }
}

//TestShape.ts 文件代码：
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape: Drawing.IShape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());


//嵌套命名空间
//Invoice.ts 文件代码：
namespace Runoob {
    export namespace invoiceApp {
        export class Invoice {
            public calculateDiscount(price: number) {
                return price * .40;
            }
        }
    }
}

//InvoiceTest.ts 文件代码：
/// <reference path = "Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));