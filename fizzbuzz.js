// // object created
// // vars created here to be used in both _fizzbuzz and doFizzBuzz
// var Fizzbuzz = (function () {
//    var firstWord;
//    var secondWord;

// // closure example
//   var _fizzbuzz = function(word1, word2) {
//     this.word1 = word1;
//     this.word2 = word2;
//     firstWord = this.word1;
//     secondWord = this.word2;
//   };

// // the function where fizzbuzz happens
//   var doFizzBuzz = function(start, end) {
//     var answer = [];

//     for (start; start <= end; start++) {
//       if ((start % 3 === 0) && (start % 5 === 0)) {
//         answer.push(firstWord + secondWord);
//       } else if (start % 3 === 0) {
//         answer.push(firstWord);
//       } else if (start % 5 === 0) {
//         answer.push(secondWord);
//       } else {
//         answer.push(start);
//       }
//     }
//     return answer;
//   };

//   _fizzbuzz.prototype = {

// // the read method to obtain numbers from click event and pass them to fizzbuzz
//     read: function(num1, num2) {
//       this.result = doFizzBuzz(num1, num2);
//     },

// // the Dom manipulation - both writes and removes text
//     write: function(start, end, results) {
//       var elFirstNum = document.getElementById("firstnum");
//       var elLastNum = document.getElementById("secondnum");

// // removes text from previous inquiries
//       while (results.hasChildNodes()) {
//         results.removeChild(results.firstChild);
//       }
//       elFirstNum.textContent = "";
//       elLastNum.textContent = "";
//       elFirstNum.textContent = " -- " + start + " to ";
//       elLastNum.textContent = end;

// // adds text
//       var fuzzList = document.createElement("ol");
//       for (var i = 0; i < this.result.length; i++ ) {
//         var fuzzListItem = document.createElement("li");
//         fuzzListItem.appendChild(document.createTextNode(this.result[i]));
//         fuzzList.appendChild(fuzzListItem);
//         results.appendChild(fuzzList);
//       }
//       return fuzzList;
//     }
//   };

//   return _fizzbuzz;
// })();
