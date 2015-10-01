
// create new instance of fizzbuzz object
var fuzzBuzz = new Fizzbuzz("fizz", "buzz");
var btnFizzBuzz = document.getElementById("btn_fizzbuzz");
var btnWords = document.getElementById("btn_fizz_word");

//event function for fizzbuzz
function fizzHandler(e) {
  e.preventDefault();
  var start = document.getElementById("number_start").value;
  var end = document.getElementById("number_end").value;
  fuzzBuzz.read(start, end);
  fuzzBuzz.write(start, end);
}

//event function for word change form
function wordHandler(e) {
  e.preventDefault();
  var wordOne = document.getElementById("word_one").value;
  var wordTwo = document.getElementById("word_two").value;
  var fuzzBuzz = new Fizzbuzz(wordOne, wordTwo);
}

//event listeners
btnFizzBuzz.addEventListener("click", fizzHandler);

btnWords.addEventListener("click", wordHandler);

