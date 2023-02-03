"use strict";
// javascript에선 함수 호출 방식과 관계없이 this를 지정할 수 있음.
// 즉, this값을 바꿀 수 있음.
// => 우리가 원하는 객체의 값으로 지정하려고 씀

// call
// this를 내가 원하는 객체로 지정 가능하다.
let dog = {
  name: "삐삐",
  age: 5,
};

function printDog(kind, gogo) {
  console.log(this.name, this.age, kind, gogo);
}

printDog.call(dog, "시츄!", "gigi");
// 즉, dog이란 객체에서 printDog이란 함수를 call했어~
// printDog에 전달 할 인자들을 각각의 값으로 넘겨준다~

// -2) apply
// - call과 같은데, 2번째 파라미터부터는 배열로 넘겨줘..!

printDog.apply(dog, ["dwdw", "dw"]);
// 즉 printDog에 전달 될 파라미터를 배열로 줘서 그 함수에서 spread되게끔 만들어줘!

console.log(Math.max.apply(null, [1, 2, 3, 4]));
// 여기도 max함수는 인자로 스프레드를 받는데, 배열로 넘겨서 스프레드를 할 수 있다.

// bind
// 함수가 영원히 그 객체가 호출하게끔 대상을 영구적으로 바꾸고 싶을 때!
