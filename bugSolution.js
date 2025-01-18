function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error("Invalid input types for addition.");
    return NaN; //Or throw an error
  }
}

function bar() {
  let result = foo(1, parseInt('2'));
  console.log(result); // Output: 3
}

bar();