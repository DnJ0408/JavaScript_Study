// 1. (Arithmetic Operators)산술 연산자
    // 1-1. 더하기 연산자
    console.log(1 + 1); // 2
    console.log(1 + "1"); // 11

    // 1-2. 빼기 연산자
    console.log(1 - "2"); // -1
    console.log(1 - 2); // -1

    // 1-3. 곱하기 연산자
    console.log(2 * 3); // 6
    console.log("2" * 3); // 6

    // 1-4. 나누기 연산자
    console.log(4 / 2); // 2
    console.log("4" / 2); // 2

    // 1-5. 나머지 연산자
    console.log(5 / 2); // 1

// 2. Assignment(할당 연산자)
    // 2-1. 등호 연산자(=)
    let x = 10;
    console.log(x); // 10

    // 2-2. 더하기 등호 연산자(+=)
    x += 5;
    console.log(x); // 15

    // 3-3. 빼기 등호 연산자(-=)
    x -= 5;
    console.log(x); // 10

    // 4-4. 곱하기 등호 연산자(*=)
    x *= 2;
    console.log(x); // 20

    // 4-5. 나누기 등호 연산자(/=)
    x /= 2;
    console.log(x); // 10

// 3.comparison operators(비교 연산자)
    //3-1. 일치 연산자(===)
    console.log(2 === 2); // true
    console.log("2" === 2); // false
    console.log(2 === "2"); // false

    // 3-2. 불일치 연산자(!==)
    console.log(2 !== 2); // false
    console.log("2" !== 2); // true
    console.log(2 !== "2"); // true

    // 3-3. 작다(<) 연산자
    console.log(2 < 3); // true
    console.log(2 < "3"); // true
    console.log("2" < 3); // true

    // 3-4. 크다(>) 연산자
    console.log(2 > 3); // false
    console.log(2 > "3"); // false
    console.log("2" > 3); // false

    // 3-5. 작거나 같다(<=) 연산자
    console.log(2 <= 3); // true
    console.log(2 <= "3"); // true
    console.log("2" <= 3); // true
    console.log(2 <= 2); // true

    // 3-6. 크거나 같다(>=) 연산자
    console.log(2 >= 3); // false
    console.log(2 >= "3"); // false
    console.log("2" >= 3); // false
    console.log(2 >= 2); // true

// 4. logical operators(논리 연산자)
    // 4-1. 논리곱(&&) 연산자
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false

    // 4-2. 논리합(||) 연산자
    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false

    // 4-3. 논리부정(!) 연산자
    console.log(!true); // false
    console.log(!false); // true
    console.log(!(2 > 1)); // false

// 5. ternary operator(삼항 연산자)
// // 조건에 따라 값을 선택한다.
    // 5-1. 삼항 연산자(?:)
    let y = 10;
    let result = (y > 5) ? "크다" : "작다";
    console.log(result); // "크다"

    let z = 20;
    let answer = (z > 10) ? "크다" : "작다"; 

// 6. type operators(타입 연산자)
    // 6-1. typeof 연산자
    console.log(typeof 123); // "number"
    console.log(typeof "123"); // "string"
    console.log(typeof true); // "boolean"
    console.log(typeof undefined); // "undefined"
    console.log(typeof null); // "object"
    console.log(typeof {}); // "object"
    console.log(typeof []); // "object"
    console.log(typeof function(){});   // "function"