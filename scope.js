const name = "sheikh rasel";
console.log("location", location);
if (true) {
  const data = 58;
  console.log("inside the if block", data, name);
  doMath(88, 999);
}
// console.log(data);

// while(true){

// }
for (const num of [1, 2, 5, 4, 6]) {
}

// function scope or local scope
function doMath(a, b) {
  console.log(a, b);
  const sum = a + b;
  const total = sum + 10;
  // console.log('calling double It', doubleIt(450))
  function doubleIt(x) {
    return x * 2;
  }
}
// console.log(a, b)

// console.log('calling double It', doubleIt(450))

// var location = 'gaibandha'
// Temporal dead zone
let location = "gaibandha";
