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
