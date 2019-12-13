const foo = { bar: 2 };

function forkFrom(obj) {
  return Object.assign(obj, { baz: 3 });
}

const newFoo = forkFrom(foo);
console.log("foo = %j\n", newFoo);
