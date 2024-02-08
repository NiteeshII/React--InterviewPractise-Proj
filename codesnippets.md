const nums = [1, 2, 3, 4, 5, 6];

const res = nums.forEach((item) => {
  return item * item;
});

console.log(res);

function getFunc() {
  let value = "Hey !";

  function func() {
    console.log(value);
  }

  return func;
}

getFunc()();

function foo() {
  let a = (b = 0);
  a++;
  return a;
}

foo();
console.log(typeof a);
console.log(typeof b);
