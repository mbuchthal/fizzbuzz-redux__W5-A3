(function() {

var btnFizzBuzz = document.getElementById("btn_fizzbuzz");

btnFizzBuzz.addEventListener("click", function (e) {
  e.preventDefault();
  var results = document.getElementById("results_fizzbuzz");

  var num1 = document.getElementById("number_start").value;
  var num2 = document.getElementById("number_end").value;
  var answer;
  for (num1; num1 <= num2; num1++) {
    if ((num1 % 3 === 0) && (num1 % 5 === 0)) {
      answer = "fizzbuzz";
    } else if (num1 % 3 === 0) {
      answer = "fizz";
    } else if (num1 % 5 === 0) {
      answer = "buzz"
    } else {
      answer = num1;
    }

    var text = document.createTextNode(answer);
    results.appendChild(text);




  }
});

})();
