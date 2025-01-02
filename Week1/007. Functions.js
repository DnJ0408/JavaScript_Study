// 1. Define Function(함수 정의하기)

    // 1-1. Function Declaration(함수 선언문)
    function add(Parameter) {/*함수 내부에서 실행할 로직*/}

    // 1-2. Function Expresstion(함수 표현식)
    let sum = function(Parameter) {/*함수 내부에서 실행할 로직*/}

// 2. 함수 호출
    // 2-1. 함수 호출하기
        // 함수 이름 뒤에 괄호를 사용하여 호출
        function add() {}

// 3. 함수 매개변수(매개체가 되는 변수)와 반환
    // 3-1. Parameter(함수 매개변수)
        // 함수를 정의할 때 입력값을 받기 위해 사용하는 변수
        function add(x, y) {}

    // 3-2. 함수 반환
        // return 함수의 실행을 종료하고 결과값을 함수 호출부로 반환
        
        // 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
        function add(x, y) { return x + y; }
        let result = add(4, 5);
        console.log(result); // 9

// 4. 함수 스코프(변수 영향의 범위)

    // 4-1. Global Scope(전역 스코프)
    let x = 10;

    function printX() {
      console.log(x); // 10
    }
    printX(); // 10

    // 4-2. Local Scope(지역 스코프)
    function printX() {
        let x = 10;
        console.log(x); // 10
      }
      printX(); // ReferenceError: x is not defined

    // 4-3. Block Scope(블록 스코프)
    if (true) {
        let x = 10;
        console.log(x); // 10
      }
      console.log(x); // ReferenceError: x is not defined

// 5. Arrow Function(화살표 함수)
// ES6 이후 새로운 문법
    // 5-1. 기본적인 화살표 함수
    let a = (x, y) => {
        return x + y;
      }
      console.log(a(2, 3)); // 5

    // 5-2. 한 줄로 된 화살표 함수
    // 중괄호 생략이 가능
    let b = (x, y) => x + y;
    console.log(b(2, 3)); // 5

    // 5-3. 매개변수가 하나인 화살표 함수
    // 소괄호도 생략 가능
    let square = x => x * x;
    console.log(square(3)); // 9