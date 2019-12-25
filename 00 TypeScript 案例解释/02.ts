// 接口定义
interface Cat<T> {
    Catname: string; // 定义catname取值必须是string字符串
    BirthInfo: keyof T;// 定义BirthInfo取的是Key名 例如 BirthInfo: 'month' , month是interface Birth的key名而不是值
    Age: T;// 定义age取的是value值 例如 BirthInfo: 'month' , month是interface Birth的key名而不是值
}
// 接口定义
interface Birth {
    //作为参数的类型时至少要定义ageNumber和week的种类
    ageNumber: number;
    year?: number;
    month?: number;
    day?: number;
    week: string;
}
// 变量/常量定义
const howOld: Birth =
{
    // howOld使用<Birth>接口,所以必须至少要实现(分配)ageNumber和week的值
    ageNumber: 2019,
    week: 'Monday',
}
//变量/常量定义
var someCat: Array<Cat<Birth>> = [
    //Array<Cat<Birth>>作为参数someCat时至少要定义:
    //第一层:变量someCat是数组类型
    //第二层:使用的是Cat接口,必须定义catname,BirthInfo,age
    //第三层(1): BirthInfo作为使用<Birth>接口,必须是ageNumber,year,month,day,week里面的一种,并且BirthInfo: keyof T是取的key名,所以就是这五个名字
    //第三层(2): Age作为使用<Birth>接口,必须是使用Birth类型的值,howOld是使用<Birth>的,所以可以分配上去
    {
        Catname: 'tom',
        BirthInfo: 'month',
        Age: howOld,
    },
    {
        Catname: "jack",
        BirthInfo: 'week',
        Age: howOld,
    }
]
console.log(someCat);
someCat.forEach(function (value) {
    console.log('==================111');
    console.log(value.BirthInfo);
    console.log('==================222');
    value.BirthInfo = "year";  // 如果填错会提示
    console.log(value.BirthInfo);
    console.log('==================333');
    console.log(value.Age);
    console.log('==================444');
    console.log(value.Age.ageNumber);
    console.log('==================555');
    value.Age.ageNumber = 2020;// 如果填错会提示
    console.log('==================666');
});

//===================================================================
export type PageForDisplay =
    Partial<{  // Partial表示所有都是可选,类似全部的都加了"?"
        device: string;
        memo: string;
    }>;

var testPageForDisplay: PageForDisplay = {
    device: "device is string",
}
console.log(testPageForDisplay.device);

export interface PatternMatcher<T> {
    key: keyof T;
    pattern: string;
    input: (chars: string) => void;
    clear: () => void;
}

var testPatternMatcher: PatternMatcher<PageForDisplay> = {
    key: "memo",  //因为PatternMatcher的key类型是keyof T，所以只能取<PageForDisplay>中的键名device或memo
    pattern: "this is pattern",
    input: (bb: string) => { console.log("this is input bb"); },
    clear: () => { console.log("this is clear"); return "aa" },
}
console.log(testPatternMatcher.key);
console.log(testPatternMatcher.pattern);
testPatternMatcher.input("ignore");
//console.log(testPatternMatcher.input("ignore")); // 如果沒有return值则console.log会输出undefine
console.log(testPatternMatcher.clear());
//===================================================================