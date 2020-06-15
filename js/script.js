/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
    {
    quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
    source: 'Albert Einstein'
    },
    
    {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    source: 'Steve Jobs'
    },
    
    {
    quote: 'It\'s only after we\'ve lost everything that we\'re free to do anything',
    source: 'Chuck Palahniuk',
    citation: 'Fight Club',
    year: 1996
    },
    
    {
    quote: 'I predict future happiness for Americans, if they can prevent the government from wasting the labors of the people under the pretense of taking care of them.',
    source: 'Thomas Jefferson',
    tag: '(Politics)'
    },
    
    {
    quote: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Sorcerer\'s Stone',
    year: 1997
    },
    
    {
    quote: 'Perhaps one did not want to be loved so much as to be understood.',
    source: 'George Orwell',
    year: 1984
    },
    
    {
    quote: 'When I was your age, television was called books.',
    source: 'William Goldman',
    citation: 'The Princess Bride',
    year: 1973,
    tag: '(Humor)'
    }
    
];

// console.log(quotes);

//create more variables 
var quote;
var source;
var citation;
var year;
var tag;
var getQuote;
var getColor;

var message = '';

// set the innerHTML of the quote-box div to print out the page
/* function print(message) {     
     var outputDiv = document.getElementById('load-quote');
     outputDiv.innerHTML = message;
}  
*/

/***
 * `getRandomQuote` function
***/

 function getRandomQuote() {
    var randomQuote = Math.floor(Math.random()* quotes.length); // generator a random number 
     
    return quotes[randomQuote];  // returns to random quote object
  }

//console.log(getRandomQuote());

/***
 * `printQuote` function
***/

 function printQuote( ) {
   var getQuote = getRandomQuote(); // assign to a new variable equal to get quote
     
    // use let to allow the generator to generate different quotes
   let message = `<p class="quote">${getQuote.quote}</p>`;
   message += `<p class="source">${getQuote.source}`;
     
     // use if statement to check if the citation exists, if it's true then the HTML will print
     if (getQuote.citation) {
    message += `<span class="citation">${getQuote.citation}</span>`;
         }
     
      // use if statement to check if the year exists, if it's true then the HTML will print
     if (getQuote.year) {
         message += `<span class="year"> ${getQuote.year}</span>`;
     }
     
     /* Extra credit-1: use if statement to check if the tag exists, if it's true then the HTML will print */
     if (getQuote.tag) {
         message += `<span class="tag"> ${getQuote.tag}</span>`;
     }

     message += `</p>`;  // closing HTML tag
     
     document.getElementById('quote-box').innerHTML = message; // print out the html strings
     
 }

/* Extra credit-2 */
// when refresh a page the background color will changes every time 
function getRandomColor() {
    var getColor = getRandomQuote(); // assign a new variable equal to get quote
    
    // basic random color generator, source come from W3 school.
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    
    console.log(bgColor);
    
    document.body.style.background = bgColor;
}
getRandomColor();

//print quote
printQuote(); 

/* Extra credit-3 */
/*** Auto-refreshed quotes ****/
function timing () {
    timing = setInterval("location.reload(true);", 10000);  // "location.reload()" source come from stackOverflow // will refresh the page every 10s
}
timing();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

