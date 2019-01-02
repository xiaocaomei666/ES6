'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
function wmx() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
wmx(1, 2, 3);

// 用法二：解决内存堆栈的引用的问题 let array1 = ['a','b','c'] let array2 = array1
// console.log(array2) array2.push('d') console.log(array1)
// //打印的是['a','b','c','d']

var array1 = ['a', 'b', 'c'];
var array3 = [].concat(array1);
array3.push('d');
console.log(array1); //打印的是['a','b','c']

// rest运算符 ...
function rest(first) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    console.log(args.length); //8
    // for..of循环代替let..i循环 for…of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for…of循环
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val); //2,3,4,5,6,7,8,9
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9);

/**                                         4.字符串模板 */
var name = '小草莓';
var her = name + '\u559C\u6B22\u5403\u5403\u5403\uFF0C\u7761\u89C9\u89C9';
console.log(her); //小草莓喜欢吃吃吃，睡觉觉

// 支持html标签
var her2 = '<br>' + name + '</br>';

// 字符串查找includes,支持中文
var string1 = '小草莓';
var string2 = '啦啦啦小草莓喜欢打代码';
// ES5
console.log(string2.indexOf(string1)); // 3 打印的是所查找的字符串所在的下标
// ES6
console.log(string2.includes(string1)); // true 存在所查找的字符串

// 判断所查找的字符串是否在开头 startsWith
var string3 = '小草莓喜欢吃吃吃，睡觉觉';
console.log(string2.startsWith(string1)); // false
console.log(string3.startsWith(string1)); // true

// 判断所查找的字符串是否在结尾 endsWith
var string4 = '小草莓喜欢吃吃吃，睡觉觉小草莓';
console.log(string4.endsWith(string1)); // true

// 复制字符串
console.log('小草莓|'.repeat(3)); // 小草莓|小草莓|小草莓|

/**                                         5.数字操作 */
// 验证是否是数字 Number.isFinite() 来进行数字验证，只要是数字，不论是浮点型还是整型都会返回true，其他时候会返回false
var e1 = 11 / 4;
console.log(Number.isFinite(e1)); // true
console.log(Number.isFinite('wmx')); // false
console.log(Number.isFinite(undefined)); // false
console.log(Number.isFinite(NaN)); // false

// NaN验证
console.log('NaN验证');
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(e1)); // false
console.log(Number.isNaN('wmx')); // false

// 二进制声明 binary 0B
var binary = 21;
console.log(binary);

// 八进制的声明 0O
var e2 = 438;
console.log(e2); // 438

// 判断是否是整数  Number.isInteger
var e3 = 666;
console.log(Number.isInteger(e1)); // false
console.log(Number.isInteger(e3)); // true

// 整数转浮点 Number.parseFloat
console.log(Number.parseFloat(e1)); // 2.75

// 浮点转整数 Number.parseInt
console.log(Number.parseInt(e1)); // 2

// 整数的取值范围
console.log(Math.pow(2, 53) - 1); // 9007199254740991

// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// 最小安全整数
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 判断是否在安全值内
var e4 = Math.pow(2, 53) - 1;
var e5 = Math.pow(2, 53);
console.log(Number.isSafeInteger(e5)); // false
console.log(Number.isSafeInteger(e4)); // true

/**              6.JSON数组格式转换成数组/文本或者变量转换成数组/找到符合条件的数组元素 */
// 将json数组格式(有length属性)转换成数组 Array.from()
var s1 = {
    '0': '小草莓',
    '1': '喜欢',
    '2': '睡觉觉',
    length: 3
};
var arrS1 = Array.from(s1);
console.log(arrS1); //  ["小草莓", "喜欢", "睡觉觉"]

// 文本或变量转换成数组 Array.of()
var s2 = '3,4,5,6';
var arrS2 = Array.of(s2);
console.log(arrS2); // ["3,4,5,6"]

var arrS3 = Array.of(3, 4, 5, 6);
console.log(arrS3); // [3, 4, 5, 6]
console.log('分界线');
var s22 = '[3,4,5,6]';
console.log(eval(s22)); // [3, 4, 5, 6]
console.log(Array.of(s22)); // ["[3,4,5,6]"]

// 找到符合条件的数组元素 find(xxx)实例方法  如果找到了符合条件的值，就进行返回(返回满足条件的值)；如果找不到会显示undefined
var s3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var s4 = s3.find(function (value, index, arr) {
    return value > 4;
});
console.log(s4); // 5
var s5 = s3.find(function (value, index) {
    return index > 10;
});
console.log(s5); // undefined
var s6 = ['小草莓棒棒哒', '小草莓', '棒棒', '哒'];
var s7 = s6.find(function (value) {
    return value = '棒棒';
});
console.log(s7);

/**              8.填充数组、数组的遍历--07 */
// 对数组进行填充 fill()实例方法
var arrE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrE.fill('wmx', 2, 6);
console.log(arrE); // [0,1, "wmx", "wmx", "wmx", "wmx",  6, 7, 8, 9]

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill('jspang', 2, 5);
console.log(arr); // [0,1,'jspang','jspang','jspang',5,6,7,8,9]

var arr2 = [0, 1, 2, 5, 6, 7, 8, 9];
arr2.fill('jspang', 2, 5);
console.log(arr2); // [0, 1, "jspang", "jspang", "jspang", 7, 8, 9]

// 数组的遍历 for…of循环 简单直观高效率
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arrE[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var val = _step2.value;

        console.log(val); // 0,1, "wmx", "wmx", "wmx", "wmx",  6, 7, 8, 9
    }
    // 获取索引值  .keys()
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arrE.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var index = _step3.value;

        console.log(index); // 0 1 2 3 4 5 6 7 8 9
    }

    // 获取索引值和对应的值 .entries()
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = arrE.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            _index = _step4$value[0],
            _val = _step4$value[1];

        console.log(_index + ' --- ' + _val);
    }

    // 不规则循环生成条目 entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
    // entries 条目
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var arr3 = ['jspang', '技术胖', '大胖逼逼叨'];
var list = arr3.entries();
console.log(list.next().value); // [0, "jspang"]
console.log('------------');
console.log(list.next().value); // [1, "技术胖"]
console.log('++++++++++++');
console.log(list.next().value); // [2, "大胖逼逼叨"]
console.log('************');

/**              9.函数 --08 */
console.log('函数-------------');
// 默认值参数
function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return a + b;
}
console.log(add(2)); // 3

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
    'use strict';

    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add3(1, 2)); // 3 去掉默认值，开启严格模式便不会报错

console.log('_-------------------+');

// 获取传递参数的个数
function add4(a, b) {
    'use strict';

    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add4.length); // 2  在开启严格模式时，打印的值为需要传递的参数的个数

// 去掉严格模式时，打印的值为必须传入的参数个数
function add5(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    if (a == 0) {
        throw new Error('This is error');
    }
    return a + b;
}

console.log(add5.length); // 1
console.log('222');
console.log('444444444');

/**              10.ES6中的函数和数组补漏 --09 */
var json = {
    a: 'wmx',
    b: '666'
};
function func(_ref) {
    var a = _ref.a,
        _ref$b = _ref.b,
        b = _ref$b === undefined ? '棒棒哒' : _ref$b;

    console.log(a, b);
}
func(json);
