//Greeting Message
var user = 'Bocephus';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest "Tactical" Egg Holster reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Product Price
var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);