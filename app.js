
// create new instance of fizzbuzz object
var fuzzBuzz = new Fizzbuzz("fizz", "buzz");
var btnFizzBuzz = document.getElementById("btn_fizzbuzz");
var btnWords = document.getElementById("btn_fizz_word");
var results = document.getElementById("results_fizzbuzz");

//event function for fizzbuzz
function fizzHandler(e) {
  e.preventDefault();
  var start = document.getElementById("number_start").value;
  var end = document.getElementById("number_end").value;
  fuzzBuzz.read(start, end);
  fuzzBuzz.write(start, end, results);
}

//event function for word change form
function wordHandler(e) {
  e.preventDefault();
  var wordOne = document.getElementById("word_one").value;
  var wordTwo = document.getElementById("word_two").value;
  var elWordOne = document.getElementById("display_word_one");
  var elWordTwo = document.getElementById("display_word_two");
  var fuzzBuzz = new Fizzbuzz(wordOne, wordTwo);
  elWordOne.textContent = "";
  elWordTwo.textContent = "";
  elWordOne.textContent = wordOne;
  elWordTwo.textContent = wordTwo;
}

//event listeners
btnFizzBuzz.addEventListener("click", fizzHandler);
btnWords.addEventListener("click", wordHandler);
