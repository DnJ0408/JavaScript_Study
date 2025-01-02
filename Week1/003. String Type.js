// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " "
let str = "Hello World!";
console.log(str); // Hello World!
console.log(typeof str); // string

    // 2-1. 문자열 길이 확인하기
    console.log(str.length); // 12

    // 2-2. 문자열 결합하기
    let str1 = "Hello, ";
    let str2 = "World!";
    let result = str1.concat(str2); 
    console.log(result); // Hello, World!

    // 2-3. 문자열 자르기
    let str3 = "Hello, World!";
    console.log(str3.substr(7, 5)); // World
    console.log(str3.slice(7, 12)); // World

    // 2-4. 문자열 검색
    let str4 = "Hello, World!";
    console.log(str4.search("World")); // 7

    // 2-5. 문자열 대체
    let str5 = "Hello, World!";
    let result01 = str5.replace("World", "JavaScript");
    console.log(result01); // Hello, JavaScript

    // 2-6. 문자열 분할
    let str6 = "Apple, Banana, Kiwi";
    let result02 = str6.split(",");
    console.log(result02); // ['Apple', 'Banana', 'Kiwi']