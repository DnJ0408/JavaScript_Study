// 1. Boolean(불리언)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;
console.log(bool1); // true
console.log(typeof bool1); // boolean
console.log(bool2); // false
console.log(typeof bool2); // boolean

// 2. undefined : 정의되지 않음
let x;
console.log(x); // undefined

// 3. null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null != undefined
let y = null;
console.log(y); // null

// 4. object(객체) Remember "key-value pair"
let person = {
    name: 'Jin',
    age: 3,
    getMarried: false
};
console.log(typeof person); // object

// 5. array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!!!
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];
console.log(typeof number); // object
console.log(typeof fruits); // object