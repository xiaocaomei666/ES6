/**                                         1. 声明的三种方式 */
// let a = 1;
// console.log(a)


// 以后开发 要使用let声明局部变量，尽量不要用var
// for(let i=0;i<9;i++){
//     console.log(i)
// }


// const声明的是常量
// const a = 11;
// let a = 22;

/**                                          2. 解构 */
// 数组解构 数组是按照顺序来解构的
// 可以这样子声明
// let [a,b,c] = [1,2,3]
// console.log(a)
// console.log(b)
// console.log(c)


// 结构要保持一致
// let [a,[b,c],d] = [1,[2,3],4]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// 默认值
// let [foo = '小草莓'] = []
// console.log(foo)

// // undefined是没有值的
// let [name='小草莓',tel] = [undefined,'18813299693']
// console.log(name+tel)

// null是有值的 
// let [name='小草莓',tel] = [undefined,null]
// console.log(name+tel)

// 对象解构 对象是按照key值来解构的
// let {name,tel} = {name:'小草莓',tel:'188132996932'}
// console.log(name+tel)

// 顺序颠倒不影响赋值，与key值一一对象
// let {sex,age} = {age:'18',sex:'女生'}
// console.log(sex,age)

// 当字符串已经先声明，赋值的时候要加上圆括号，不然会报错（解构失败）
// let name;
// ({name} = {name:'小草莓'});
// console.log(name)


//字符串的解构  实际开发用的不多
// const [a,b,c,d,e,f] = 'ABCDEF'
// console.log(a,b,c,d,e,f)

/**                                          3. 扩展运算符和rest运算符 */
// 对象拓展运算符 ... 
// 用法一：用在参数不确定的时候。避免代码报错
function wmx(...args){
    console.log(args[0])
    console.log(args[1])
    console.log(args[2])
    console.log(args[3])
}
wmx(1,2,3)

// 用法二：解决内存堆栈的引用的问题
// let array1 = ['a','b','c']
// let array2 = array1
// console.log(array2)
// array2.push('d')
// console.log(array1) //打印的是['a','b','c','d']

let array1 = ['a','b','c']
let array3 = [...array1]
array3.push('d')
console.log(array1) //打印的是['a','b','c']


// rest运算符 ...
function rest(first,...args){
    console.log(args.length) //8
    // for..of循环代替let..i循环
    // for…of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for…of循环
    for(let val of args){
        console.log(val) //2,3,4,5,6,7,8,9
    }
}
rest(1,2,3,4,5,6,7,8,9)

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
let e1 = 11/4;
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
console.log(Math.pow(2,53)-1) // 9007199254740991

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// 判断是否在安全值内
let e4 = Math.pow(2,53)-1
let e5 = Math.pow(2,53)
console.log(Number.isSafeInteger(e5)) // false
console.log(Number.isSafeInteger(e4)) // true


/**              6.JSON数组格式转换成数组/文本或者变量转换成数组/找到符合条件的数组元素 */
// 将json数组格式(有length属性)转换成数组 Array.from()
let s1 = {
    '0' : '小草莓',
    '1' : '喜欢',
    '2' : '睡觉觉',
    length:3
}
let arrS1 = Array.from(s1)
console.log(arrS1) //  ["小草莓", "喜欢", "睡觉觉"]

// 文本或变量转换成数组 Array.of()
let s2 = '3,4,5,6'
let arrS2 = Array.of(s2)
console.log(arrS2) // ["3,4,5,6"]

let arrS3 = Array.of(3,4,5,6)
console.log(arrS3) // [3, 4, 5, 6]
console.log('分界线')
let s22 = '[3,4,5,6]'
console.log(eval(s22)) // [3, 4, 5, 6]
console.log(Array.of(s22)) // ["[3,4,5,6]"]

// 找到符合条件的数组元素 find(xxx)实例方法  如果找到了符合条件的值，就进行返回(返回满足条件的值)；如果找不到会显示undefined
let s3 = [1,2,3,4,5,6,7,8,9]
let s4 = s3.find(function(value,index,arr){
    return value>4
})
console.log(s4) // 5
let s5 = s3.find(function(value,index){
    return index > 10
})
console.log(s5) // undefined
let s6 = ['小草莓棒棒哒','小草莓','棒棒','哒']
let s7 = s6.find(function(value){
    return value = '棒棒'
})
console.log(s7)

/**              8.填充数组、数组的遍历--07 */
// 对数组进行填充 fill()实例方法 
let arrE = [0,1,2,3,4,5,6,7,8,9]
arrE.fill('wmx',2,6)
console.log(arrE) // [0,1, "wmx", "wmx", "wmx", "wmx",  6, 7, 8, 9]

let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang',2,5);
console.log(arr); // [0,1,'jspang','jspang','jspang',5,6,7,8,9]

let arr2=[0,1,2,5,6,7,8,9];
arr2.fill('jspang',2,5);
console.log(arr2); // [0, 1, "jspang", "jspang", "jspang", 7, 8, 9]

// 数组的遍历
// for…of循环 简单直观高效率
for(let val of arrE){
    console.log(val) // 0,1, "wmx", "wmx", "wmx", "wmx",  6, 7, 8, 9
}
// 获取索引值  .keys()
for(let index of arrE.keys()){
    console.log(index) // 0 1 2 3 4 5 6 7 8 9 
}

// 获取索引值和对应的值 .entries()
for(let [index,val] of arrE.entries()){
    console.log(`${index} --- ${val}`)
}

// 不规则循环生成条目
// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
// entries 条目
let arr3 = ['jspang','技术胖','大胖逼逼叨']
let list = arr3.entries()
console.log(list.next().value) // [0, "jspang"]
console.log('------------')
console.log(list.next().value) // [1, "技术胖"]
console.log('++++++++++++')
console.log(list.next().value) // [2, "大胖逼逼叨"]
console.log('************')




