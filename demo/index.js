/**                                         1. 声明的三种方式 */
// let a = 1; console.log(a) 以后开发 要使用let声明局部变量，尽量不要用var for(let i=0;i<9;i++){
//  console.log(i) } const声明的是常量 const a = 11; let a = 22;

/**                                          2. 解构 */
// 数组解构 数组是按照顺序来解构的 可以这样子声明 let [a,b,c] = [1,2,3] console.log(a) console.log(b)
// console.log(c) 结构要保持一致 let [a,[b,c],d] = [1,[2,3],4] console.log(a)
// console.log(b) console.log(c) console.log(d) 默认值 let [foo = '小草莓'] = []
// console.log(foo) // undefined是没有值的 let [name='小草莓',tel] =
// [undefined,'18813299693'] console.log(name+tel) null是有值的 let [name='小草莓',tel]
// = [undefined,null] console.log(name+tel) 对象解构 对象是按照key值来解构的 let {name,tel} =
// {name:'小草莓',tel:'188132996932'} console.log(name+tel) 顺序颠倒不影响赋值，与key值一一对象 let
// {sex,age} = {age:'18',sex:'女生'} console.log(sex,age)
// 当字符串已经先声明，赋值的时候要加上圆括号，不然会报错（解构失败） let name; ({name} = {name:'小草莓'});
// console.log(name) 字符串的解构  实际开发用的不多 const [a,b,c,d,e,f] = 'ABCDEF'
// console.log(a,b,c,d,e,f)

/**                                          3. 扩展运算符和rest运算符 */
// 对象拓展运算符 ... 用法一：用在参数不确定的时候。避免代码报错
function wmx(...args) {
    console.log(args[0])
    console.log(args[1])
    console.log(args[2])
    console.log(args[3])
}
wmx(1, 2, 3)

// 用法二：解决内存堆栈的引用的问题 let array1 = ['a','b','c'] let array2 = array1
// console.log(array2) array2.push('d') console.log(array1)
// //打印的是['a','b','c','d']

let array1 = ['a', 'b', 'c']
let array3 = [...array1]
array3.push('d')
console.log(array1) //打印的是['a','b','c']

// rest运算符 ...
function rest(first, ...args) {
    console.log(args.length) //8
    // for..of循环代替let..i循环 for…of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for…of循环
    for (let val of args) {
        console.log(val) //2,3,4,5,6,7,8,9
    }
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9)

/**                                         4.字符串模板 */
let name = '小草莓';
let her = `${name}喜欢吃吃吃，睡觉觉`
console.log(her) //小草莓喜欢吃吃吃，睡觉觉

// 支持html标签
let her2 = `<br>${name}</br>`

// 字符串查找includes,支持中文
let string1 = '小草莓'
let string2 = '啦啦啦小草莓喜欢打代码'
// ES5
console.log(string2.indexOf(string1)) // 3 打印的是所查找的字符串所在的下标
// ES6
console.log(string2.includes(string1)) // true 存在所查找的字符串

// 判断所查找的字符串是否在开头 startsWith
let string3 = '小草莓喜欢吃吃吃，睡觉觉'
console.log(string2.startsWith(string1)) // false
console.log(string3.startsWith(string1)) // true

// 判断所查找的字符串是否在结尾 endsWith
let string4 = '小草莓喜欢吃吃吃，睡觉觉小草莓'
console.log(string4.endsWith(string1)) // true

// 复制字符串
console.log('小草莓|'.repeat(3)) // 小草莓|小草莓|小草莓|

/**                                         5.数字操作 */
// 验证是否是数字 Number.isFinite() 来进行数字验证，只要是数字，不论是浮点型还是整型都会返回true，其他时候会返回false
let e1 = 11 / 4;
console.log(Number.isFinite(e1)) // true
console.log(Number.isFinite('wmx')) // false
console.log(Number.isFinite(undefined)) // false
console.log(Number.isFinite(NaN)) // false

// NaN验证
console.log('NaN验证')
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(e1)) // false
console.log(Number.isNaN('wmx')) // false

// 二进制声明 binary 0B
let binary = 0B10101;
console.log(binary)

// 八进制的声明 0O
let e2 = 0o666;
console.log(e2) // 438

// 判断是否是整数  Number.isInteger
let e3 = 666;
console.log(Number.isInteger(e1)) // false
console.log(Number.isInteger(e3)) // true

// 整数转浮点 Number.parseFloat
console.log(Number.parseFloat(e1)) // 2.75

// 浮点转整数 Number.parseInt
console.log(Number.parseInt(e1)) // 2

// 整数的取值范围
console.log(Math.pow(2, 53) - 1) // 9007199254740991

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// 判断是否在安全值内
let e4 = Math.pow(2, 53) - 1
let e5 = Math.pow(2, 53)
console.log(Number.isSafeInteger(e5)) // false
console.log(Number.isSafeInteger(e4)) // true

/**              6.JSON数组格式转换成数组/文本或者变量转换成数组/找到符合条件的数组元素 */
// 将json数组格式(有length属性)转换成数组 Array.from()
let s1 = {
    '0': '小草莓',
    '1': '喜欢',
    '2': '睡觉觉',
    length: 3
}
let arrS1 = Array.from(s1)
console.log(arrS1) //  ["小草莓", "喜欢", "睡觉觉"]

// 文本或变量转换成数组 Array.of()
let s2 = '3,4,5,6'
let arrS2 = Array.of(s2)
console.log(arrS2) // ["3,4,5,6"]

let arrS3 = Array.of(3, 4, 5, 6)
console.log(arrS3) // [3, 4, 5, 6]
console.log('分界线')
let s22 = '[3,4,5,6]'
console.log(eval(s22)) // [3, 4, 5, 6]
console.log(Array.of(s22)) // ["[3,4,5,6]"]

// 找到符合条件的数组元素 find(xxx)实例方法  如果找到了符合条件的值，就进行返回(返回满足条件的值)；如果找不到会显示undefined
let s3 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]
let s4 = s3.find(function (value, index, arr) {
    return value > 4
})
console.log(s4) // 5
let s5 = s3.find(function (value, index) {
    return index > 10
})
console.log(s5) // undefined
let s6 = ['小草莓棒棒哒', '小草莓', '棒棒', '哒']
let s7 = s6.find(function (value) {
    return value = '棒棒'
})
console.log(s7)

/**              8.填充数组、数组的遍历--07 */
// 对数组进行填充 fill()实例方法
let arrE = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]
arrE.fill('wmx', 2, 6)
console.log(arrE) // [0,1, "wmx", "wmx", "wmx", "wmx",  6, 7, 8, 9]

let arr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
arr.fill('jspang', 2, 5);
console.log(arr); // [0,1,'jspang','jspang','jspang',5,6,7,8,9]

let arr2 = [
    0,
    1,
    2,
    5,
    6,
    7,
    8,
    9
];
arr2.fill('jspang', 2, 5);
console.log(arr2); // [0, 1, "jspang", "jspang", "jspang", 7, 8, 9]

// 数组的遍历 for…of循环 简单直观高效率
for (let val of arrE) {
    console.log(val) // 0,1, "wmx", "wmx", "wmx", "wmx",  6, 7, 8, 9
}
// 获取索引值  .keys()
for (let index of arrE.keys()) {
    console.log(index) // 0 1 2 3 4 5 6 7 8 9
}

// 获取索引值和对应的值 .entries()
for (let [index,
    val]of arrE.entries()) {
    console.log(`${index} --- ${val}`)
}

// 不规则循环生成条目 entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
// entries 条目
let arr3 = ['jspang', '技术胖', '大胖逼逼叨']
let list = arr3.entries()
console.log(list.next().value) // [0, "jspang"]
console.log('------------')
console.log(list.next().value) // [1, "技术胖"]
console.log('++++++++++++')
console.log(list.next().value) // [2, "大胖逼逼叨"]
console.log('************')

/**              9.函数 --08 */
console.log('函数-------------')
// 默认值参数
function add(a, b = 1) {
    return a + b;
}
console.log(add(2)) // 3

// 主动抛出错误
// function add2(a, b = 1) {
//     if (a == 0) {
//         throw new Error('这是一个错误')
//     }
//     return a + b;
// }
// console.log(add2(0)) // '控制台抛出一个错误'

// 函数中的严谨模式
// function add3(a, b = 1) {
//     'use strict'
//     if (a == 0) {
//         throw new Error('This is error');
//     }
//     return a + b;
// }

// console.log(add3(1)); // 终端报错，原因是在使用默认值的时候，使用了严格模式，存在冲突。因此要取消默认值


// 函数中的严谨模式
function add3(a, b) {
    'use strict'
    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add3(1,2)); // 3 去掉默认值，开启严格模式便不会报错

console.log('_-------------------+')

// 获取传递参数的个数
function add4(a, b) {
    'use strict'
    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add4.length); // 2  在开启严格模式时，打印的值为需要传递的参数的个数

// 去掉严格模式时，打印的值为必须传入的参数个数
function add5(a, b=2) {
    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add5.length); // 1
console.log('222')
console.log('6666')

/**              10.ES6中的函数和数组补漏 --09 */
let json = {
    a:'wmx',
    b:'666'
}
function func({a,b='棒棒哒'}) { 
    console.log(a,b)
 }
 func(json) // wmx666 函数能解构Json

 console.log('以下是用...进行数组的解构赋值')

//  以下是用...进行数组的解构赋值

 let arr4 = ['wmx','棒棒哒','888']

 function func2(a,b,c){
     console.log('啦啦啦',a,b,c)
 }
 func2(...arr4) // '啦啦啦','wmx','棒棒哒','888'

//  in是用来判断对象或者数组中是否存在某个值的
console.log('a' in json) // true
console.log('c' in json) // false
console.log(0 in arr4) // true

let arr5 = [,,,,,]
console.log(arr5.length) // 5 以前会使用length属性进行判断，为0表示没有数组元素。但是这并不准确，或者说真实开发中有弊端。
console.log(0 in arr5) // false 判断该数组中是否全是空值


let arr6 = ['小草莓','','棒棒哒','','888']

// 数组的遍历方法  forEach循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了
arr6.forEach((item,index) => {
    console.log(item ,index) // 小草莓 0       1     棒棒哒 2   3      888 4
})

let arr7 = ['小草莓','小草莓','棒棒哒','小草莓','888']

console.log('filter 过滤8888888888888888888888888888888')
// filter 过滤 filter为“过滤”、“筛选”之意。指数组filter后，返回过滤后的新数组
arr6.filter(x => console.log(x)) // 小草莓    棒棒哒   888 

let f1 = [0,1,2,3,4]
let arrF1 = f1.filter(item => {
    return item
})
console.log(arrF1) // [1,2,3,4]

let arrF2 = f1.filter(item => {
    return item>2
})
console.log(arrF2) // [3,4]


// some   some意指“某些”，指是否“某些项”合乎条件
// some要求至少有1个值让callback返回true就可以了
console.log('some意指“某些”，指是否“某些项”合乎条件')
arr6.some(x =>console.log(x)) // 小草莓    棒棒哒   888 

let some1 = [5,8,10,2,6]
let current = 8
let arrSome1 = some1.some(item => {
    return item>11
})
console.log(arrSome1) // false

function higherCurrent(value){
    return value>current
}
if(some1.some(higherCurrent)){
    console.log('存在满足的条件')
}else{
    console.log('不存在满足的条件')
}
//存在满足的条件

// every every需要每一个妃子都要让朕满意，
if(some1.every(higherCurrent)){
    console.log('都满足条件')
}else{
    console.log('不存在都满足条件') 
}
//不存在都满足条件



// map map在这里起到一个替换的作用
console.log('map')
console.log(arr6.map(x => 'web')) // ["web", "web", "web", "web", "web"]

// 在实际使用的时候，我们可以利用map方法方便获得对象数组中的特定属性值们。
var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
  ];
var emilArray = users.map(item => {
    return item.email
})
console.log(emilArray) //  ["zhang@email.com", "jiang@email.com", "li@email.com"]
console.log(emilArray.join('-')) // zhang@email.com-jiang@email.com-li@email.com
console.log(emilArray.toString('*')) // zhang@email.com,jiang@email.com,li@email.com

// join()方法就是在数组元素中间，加了一些间隔
let arr8 = ['wmx','棒棒','hahaha']
console.log('join')
console.log(arr8.join('?')) // wmx?棒棒?hahaha

//  toString()方法 转换成字符串 默认加逗号
console.log(arr8.toString()) // wmx,棒棒,hahaha

/**              11.ES6中的对象 --10 */
// 对象赋值
console.log('对象赋值')
let nameMe = 'wmx'
let age = 18
var obj = {nameMe,age}
console.log(obj) // {nameMe: "wmx", age: 18}

// 对象Key值构建
console.log('对象Key值构建')
let key = 'age'
var obj2 = {
    [key]:100
}
console.log(obj2.age) // 100

// 自定义对象方法
console.log('自定义对象方法')
var obj3 = {
    add(a,b){
        return a+b;
    }
}
console.log(obj3.add(1,2)) // 3

// Object.is( ) 对象比较
console.log('对象的比较方法,以前进行对象值的比较，经常使用===来判断')
var obj4 = {name:'wmx'};
var obj5 = {name:'wmx'};
console.log(obj4.name === obj5.name) // true
console.log('那ES6为我们提供了is方法进行对比。')
console.log(Object.is(obj4.name,obj5.name)) // true

console.log('===为同值相等，is()为严格相等')
console.log(+0 === -0); //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //true
console.log(Object.is(NaN,NaN)); //true

// Object.assign( )合并对象
console.log('Object.assign( )合并对象')
var a = {a:'wmx'};
var b = {b:'666'};
var c = {c:'hahaha'};
let d = Object.assign(a,b,c)
console.log(d) // {a: "wmx", b: "666", c: "hahaha"}


/**              第12节：Symbol在对象中的作用 --11 */
console.log('全局标记 symbol')
// 声明  打印
var sss = Symbol()
console.log(typeof(sss)) // symbol
var s = Symbol('wmx')
console.log(s) // Symbol(wmx) (控制台打印红色字体)
console.log(s.toString()) // Symbol(wmx)(控制台打印的是正常的字体)
// 构建对象的key
var wmx = Symbol();
var wmxObj = {
    [wmx]:'小草莓'
}
console.log(wmxObj) // {Symbol(): "小草莓"}
console.log(wmxObj[wmx]) // 小草莓
wmxObj[wmx] = '变异小草莓'
console.log(wmxObj[wmx]) // 变异小草莓

// Symbol对象元素的保护作用
let objSymbol = {name:'wmx','skill':'web'}
let ageSymbol = Symbol()
obj[ageSymbol] = 18
for(let val in objSymbol){
    console.log(val) // name skill 
    console.log(objSymbol[val]) // wmx  web
}
console.log(objSymbol) // {name: "wmx", skill: "web"}


/**             13. Set和WeakSet数据结构 --12 */
console.log('Set的数据结构是以数组的形式构建的')
// set的声明
let setArr = new Set(['大一','大二','大三','大四'])
console.log(setArr) // Set(4) {"大一", "大二", "大三", "大四"}

console.log('Set和Array的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。')


let setArr2 = new Set(['大一','大二','大三','大四','大一'])
console.log(setArr2) // Set(4) {"大一", "大二", "大三", "大四"}

// set的增删查清空
setArr.add('毕业啦')
console.log('追加 add',setArr) // Set(5) {"大一", "大二", "大三", "大四", "毕业啦"}

setArr.delete('大一')
console.log('删除 delete',setArr) // Set(4) {"大二", "大三", "大四", "毕业啦"}

console.log('用has进行值的查找，返回的是true或者false。',setArr.has('毕业啦'))  // true

setArr.clear()
console.log(setArr) // Set(0) {}

let setArr3 = new Set(['大一','大二','大三','大四','大一'])
for(let item of setArr3){
    console.log(item) // "大一", "大二", "大三", "大四"
}
console.log(setArr3.size) // 4

setArr3.forEach(item => {
    console.log(item) // "大一", "大二", "大三", "大四"
})

console.log('WeakSet的声明')
// WeakSet的声明的声明
let weakObj = new WeakSet();
let objW = {a:'wmx',b:'888'};
weakObj.add(objW)
console.log(weakObj) // WeakSet {{a:'wmx',b:'888'}}

// let weakObj2 = new WeakSet({a:'wmx',b:'888'});
// console.log(weakObj2) // 如果你直接在new 的时候就放入值，将报错。
let objW2 = objW
weakObj.add(objW2)
console.log(weakObj) // WeakSet {{a:'wmx',b:'888'}}


let objW3 = {a:'wmx',b:'888'};
weakObj.add(objW3)
console.log(weakObj) // WeakSet {{a:'wmx',b:'888'},{a:'wmx',b:'888'}}


