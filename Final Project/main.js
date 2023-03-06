const resolver = {
  resolve: function resolve(options, callback) {

    // The string to resolve
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
    
    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    };
    
    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === "function") {
          callback(); 
        }
      }, options.timeout);
    };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}

const strings = [
    'Ready For The Adventure Of A Lifetime?'
];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector('[data-target-resolver]')
}

// Callback function when resolve completes
function callback() {
    setTimeout(() => {
      counter ++;
      
      if (counter >= strings.length) {
        counter = 0;
      }
      
      let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
      resolver.resolve(nextOptions, callback);
    }, 1000);
  }
  
  resolver.resolve(options, callback);


// Quiz Page //

var questionCount = 0;
var moonScore = 0;
var marsScore = 0;
var nabooScore = 0;
var coruscantScore = 0;
var hothScore = 0;
var cancriScore = 0;

//Variables for each quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", moon);
q1a2.addEventListener("click", mars);
q1a3.addEventListener("click", cancri);
q1a4.addEventListener("click", hoth, naboo);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);
q1a5.addEventListener("click", disableBtn1);
q1a6.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", hoth);
q2a2.addEventListener("click", mars);
q2a3.addEventListener("click", moon);
q2a4.addEventListener("click", naboo);
q2a5.addEventListener("click", cancri);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);
q2a5.addEventListener("click", disableBtn2);
q2a6.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", naboo);
q3a2.addEventListener("click", hoth);
q3a3.addEventListener("click", cancri);
q3a4.addEventListener("click", mars);
q3a5.addEventListener("click", moon);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);
q3a5.addEventListener("click", disableBtn3);
q3a6.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", naboo);
q4a2.addEventListener("click", mars);
q4a3.addEventListener("click", cancri);
q4a4.addEventListener("click", moon);
q4a5.addEventListener("click", hoth);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);
q4a5.addEventListener("click", disableBtn4);
q4a6.addEventListener("click", disableBtn4);

//#TODO: Define quiz functions here
function disableBtn1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
    document.getElementById("q1a5").disabled = true;
    document.getElementById("q1a6").disabled = true;
}
function disableBtn2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
    document.getElementById("q2a5").disabled = true;
    document.getElementById("q2a6").disabled = true;
}
function disableBtn3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
    document.getElementById("q3a5").disabled = true;
    document.getElementById("q3a6").disabled = true;
}
function disableBtn4() {
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
    document.getElementById("q4a5").disabled = true;
    document.getElementById("q4a6").disabled = true;
}


function moon() {
  moonScore += 1;
  questionCount += 1;
  //alert("One point to moon!");
  if (questionCount >=4){
    updateResult();
  }
}

function mars() {
  marsScore += 1;
  questionCount += 1;
  //alert("One point to mars!");
  if (questionCount >=4){
    updateResult();
  }
}

function naboo() {
  nabooScore += 1;
  questionCount += 1;
  //alert("One point to naboo!");
  if (questionCount >=4){
    updateResult();
  }
}

function cancri() {
  cancriScore += 1;
  questionCount += 1;
    //alert("One point to cancri!");
  if (questionCount >=4){
      updateResult();
  }  
}

function hoth() {
  hothScore += 1;
  questionCount += 1;
    //alert("One point to hoth!");
  if (questionCount >=4){
      updateResult();
  }  
}
  
function updateResult() {
  if (moonScore >=3) {
    result.innerHTML = "Your next trip is...The Moon!";
  }
  else if (marsScore >=3) {
    window.location.href = "mars.html";
  }
  else if (nabooScore >=3) {
    window.location.href = "naboo.html";
  }
  else if (hothScore >=3) {
    window.location.href = "hoth.html";
  }
  else if (cancriScore >=3) {
    window.location.href = "cancri.html";
  }
  else {
    result.innerHTML = "Hmm... try again!";
  }
}

function refresh(){
  result.innerHTML = "Your result is...";
  var questionCount = 0;
  var moonScore = 0;
  var marsScore = 0;
  var nabooScore = 0;
  var hothScore = 0;
  var cancriScore = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q1a5").disabled = false;
  document.getElementById("q1a6").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q2a5").disabled = false;
  document.getElementById("q2a6").disabled = false;
  
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q3a5").disabled = false;
  document.getElementById("q3a6").disabled = false;
  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  document.getElementById("q4a5").disabled = false;
  document.getElementById("q4a6").disabled = false;
}
