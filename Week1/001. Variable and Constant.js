// 변수, 상수
// 변수 = 기억하고 싶은 값을 메모리에 저장한다. 읽어들여서 재사용한다.

// [변수의 5가지 주요 개념]
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const

// 1. var (같은 이름으로 변수 선언이 가능, 재할당 가능)
var myVar = "Hello World";
console.log(myVar); // Hello World

// 2. let (같은 이름으로 변수 선언 불가, 재할당 가능)
let myLet = "Hello World1";
console.log(myLet); // Hello World1

// 3. const (같은 이름으로 변수 선언 불가, 재할당 불가능)
const myConst = "Hello World2";
console.log(myConst); // Hello World2