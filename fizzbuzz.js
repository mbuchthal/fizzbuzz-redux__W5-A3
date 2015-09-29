(function () {

// function fizzBuzz (num) {
//   var x = 1;
//   for (x; x <= num; x++) {
//     if ((x % 3 === 0) && (x % 5 === 0)) {
//       console.log("fizzbuzz");
//     } else if (x % 3 === 0) {
//       console.log("fizz");
//     } else if (x % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(x);
//     }
//   }
// }

// fizzBuzz(100);

function fizzBuzzPartDeux (num) {
  var x = 1;
  for (x; x <= num; x++) {
    var answer = "";
    if (x % 3 === 0) { answer += "fizz"; }
    if (x % 5 === 0) { answer += "buzz"; }
    console.log(answer || x);
  }
}




})();
