// object created
var Fizzbuzz = (function() {

// closure
  var _fizzbuzz = function() {
  };

// the fizzbuzz function itself
  var doFizzBuzz = function(start, end) {
    var answer = [];
    for (start; start <= end; start++) {
      if ((start % 3 === 0) && (start % 5 === 0)) {
        answer.push("fizzbuzz");
      } else if (start % 3 === 0) {
        answer.push("fizz");
      } else if (start % 5 === 0) {
        answer.push("buzz");
      } else {
        answer.push(start);
      }
    }
    return answer;
  };

  _fizzbuzz.prototype = {

// the read method to obtain numbers from click event and pass them to fizzbuzz
    read: function(num1, num2) {
      this.result = doFizzBuzz(num1, num2);
    },

// the Dom manipulation - both writes and removes text
    write: function(start, end) {
      var results = document.getElementById("results_fizzbuzz");
      var elFirstNum = document.getElementById("firstnum");
      var elLastNum = document.getElementById("secondnum");

// removes text from previous inquiries
      while (results.hasChildNodes()) {
        results.removeChild(results.firstChild);
      }
      elFirstNum.textContent = "";
      elLastNum.textContent = "";
      elFirstNum.textContent = " -- " + start + " to ";
      elLastNum.textContent = end;

// adds text
      var fuzzList = document.createElement("ol");
      for (var i = 0; i < this.result.length; i++ ) {
        var fuzzListItem = document.createElement("li");
        fuzzListItem.appendChild(document.createTextNode(this.result[i]));
        fuzzList.appendChild(fuzzListItem);
        results.appendChild(fuzzList);
      }
      return fuzzList;
    }
  };

  return _fizzbuzz;
})();

// create new instance of fizzbuzz object
var fuzzBuzz = new Fizzbuzz();
var btnFizzBuzz = document.getElementById("btn_fizzbuzz");

//event listener that calls
btnFizzBuzz.addEventListener("click", function(e) {
  e.preventDefault();
  var start = document.getElementById("number_start").value;
  var end = document.getElementById("number_end").value;
  fuzzBuzz.read(start, end);
  fuzzBuzz.write(start, end);
});
