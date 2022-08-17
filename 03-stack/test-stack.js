const Stack = require('./Stack');

const numbers = new Stack();
numbers.push(1);
numbers.push(2);
numbers.push(3);

function printStack(stack) {
  let newStack = new Stack();
  while (stack.peek()) {
    let top = stack.pop();
    newStack.push(top);
    console.log(top);
  }
  stack = newStack;
}

console.log(printStack(numbers));