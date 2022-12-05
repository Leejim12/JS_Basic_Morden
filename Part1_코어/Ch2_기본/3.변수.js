```
변하는 변수 : let(모던함), var(오래됨)
안변하는 변수 : const
```
// 선언
let message;

// 저장
message = 'Hello';

// 변수명 이용해 접근
alert(message);

// 한 줄에 여러 변수 선언 가능
let user = 'John',age=25,msg='Hello';
    // 같은 변수 여러 번 선언 시 에러 발생.

// 함수형 언어에서는 변수값 변경 금지함
// ex : 스칼라, 얼랭
// ==> 중대한 개발에는 더 적합.
// ==> 시야를 넓히는 데 도움이 됨.

```
* 변수 명명 규칙
변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.
첫 글자는 숫자가 될 수 없습니다.
```

// 대문자 상수 사용
```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00

** 하드 코딩한 값은 대문자 상수로
```

////////////////////과제////////////////////////
// 1
let name = 'John',admin=name;
alert(admin);

// 2
let userPlanet = 'Earth';
let currentUserName;