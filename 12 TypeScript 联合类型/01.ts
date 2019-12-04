//TypeScript 联合类型
var val: string | number
val = 12
console.log("数字为 " + val)
val = "Runoob"
console.log("字符串为 " + val)

//联合类型作为函数参数使用
function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}
disp("Runoob")
console.log("输出数组....")
disp(["Runoob", "Google", "Taobao", "Facebook"])

//联合类型数组
var arr: number[] | string[];
var i: number;
arr = [1, 2, 4]
console.log("**数字数组**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr = ["Runoob", "Google", "Taobao"]
console.log("**字符串数字**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
