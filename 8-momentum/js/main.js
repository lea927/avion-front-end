// variables 

var name_for_greeting = "";
var toDoListsArr  = [];
var ulText = "<ul>";
var quoteArr = ["Hello","Hi"];

// events that will be executed when page initially loads
function loadPage() {
  displayTime();

  // updates time every minute
  setInterval(displayTime, 1000);

  // randomizes quotes every x milliseconds
  setInterval(randomizeQuote, 2000);

  // changes background every x milliseconds
  // setInterval(changeBackground,3000);
}

// change background
function changeBackground() {
  let bgUrlArr = ["../img/1st-bg.jpg","../img/2nd-bg.jpg"];

  // generates random integer
  function getRandInt(max) {
    return Math.floor(Math.random() * max)
  }

  console.log("url(" + bgUrlArr[getRandInt(bgUrlArr.length)] + ")");
  document.body.style.backgroundImage = "url(" + bgUrlArr[getRandInt(bgUrlArr.length)] + ")";
}

function toDoInput(toDoEntered) {

  toDoListsArr.length = 0;
  if ( event.keyCode == 13 ) {
    toDoListsArr.push(toDoEntered.value);

    for ( let i = 0; i < toDoListsArr.length ; i++) {
      ulText += "<li>" + toDoListsArr[i] + "</li>";
    }
    ulText += "</ul>";
    document.getElementById("text-todo").innerHTML = ulText;
  }

}

// dipslays todo form
function formToDo() {
  document.getElementById("form-todo").style.display = "block";

  document.getElementById("button-todo").style.display = "none";
  document.getElementById("button-todo-close").style.display = "block";
}

// closes todo form and replaces close button with todo button
function closeformToDo() {
  document.getElementById("form-todo").style.display = "none";

  document.getElementById("button-todo").style.display = "block";
  document.getElementById("button-todo-close").style.display = "none";
}

function removeToDo() {

}

// adds new quotes on the quote array
function quoteInput(quoteEnter) {
  if ( event.keyCode == 13 ) {
    alert("Successfully added quotes!");
    quoteArr.push(quoteEnter.value);
  }
}

// show forms where user can add quotes
function formQuotes() {
  // show quotes form
  document.getElementById("form-quotes").style.display = "block";

  // will hide Quotes button and display close button 
  document.getElementById("button-quotes-close").style.display = "block";
  document.getElementById("button-quotes").style.display = "none";
  
}

// closes form quotes and brings back quote button 
function closeFormQuotes() {
  // show quotes form
  document.getElementById("form-quotes").style.display = "none";

  // will hide Quotes button and display close button 
  document.getElementById("button-quotes-close").style.display = "none";
  document.getElementById("button-quotes").style.display = "block";
}

// randomizes quote values
function randomizeQuote() {

  // generates random integer which will be used as index for the quote array
  function getRandInt(max) {
    return Math.floor(Math.random() * max)
  }

  document.getElementById("text-quotes").innerHTML =  quoteArr[getRandInt(quoteArr.length)];
}

// accepts focus input user
function focusInput(focusEnter) {
  if ( event.keyCode == 13 ) {
    document.getElementById("text-focus").style.display = "block";
    document.getElementById("text-focus").innerHTML = focusEnter.value;

    // hides element/s after focus has been inputted 
    document.getElementById("textbox-focus").style.display = "none";

    // displays element/s after focus has been inputted 
    document.getElementById("header-focus").innerHTML = "Today";
    document.getElementById("text-focus-remarks").style.display = "block";
    document.getElementById("text-focus-remarks").innerHTML = "Good job!";
  }
}

// accepts name input from user
function nameInput(nameEntered) {
  if ( event.keyCode == 13 ) {    
   name_for_greeting = nameEntered.value;

   updateGreeting();
   setTimeout(updateToMantra, 2000);
   displayElements();
   hideElements();
  }
}

// gets hours and minutes of current time
function displayTime() {
  document.getElementById("time").style.display = "block";

  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  var amOrPm = "am";
  let new_m = "";

  //if minutes is less than 10 will display zero before the minute value
  if ( m < 10)  {    
    new_m = "0" + m;
  } else {
    new_m = m;
  }

 

  //returns AM if it's morning and PM if it's afternoon/evening & displays non 24-hr clock
  // if ( h > 12 ) {
  //   h -= 12;
  //   // amOrPm="pm";
  // } 

  var h = ( h > 12 ) ? h -= 12 : h = 0;
 

  document.getElementById("time").innerHTML = h + ":" + new_m;
}

//changes greetings depending on the time of day
function updateGreeting() {
  // displayTime();
  var d = new Date();
  var h_2 = d.getHours();
  var m = d.getMinutes();
  var greeting = "morning";

  if (h_2 >=0 && h_2 <= 11 && m <= 59) {
    greeting = "morning";
  }else if (h_2 >= 12 || h_2 <= 5 && m <= 59) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }

  document.getElementById("greeting-mantra-holder").innerHTML = "Good " + greeting + ", "+ name_for_greeting + ".";
}

// updates content of greeting-mantra-holder to mantra
function updateToMantra() {
  document.getElementById("greeting-mantra-holder").innerHTML = "Be still.";
}

// displays hidden elements and gets called after inputting name
function displayElements() {
  document.getElementById("greeting-mantra-holder").style.display = "block";
  document.getElementById("header-focus").style.display = "block";
  document.getElementById("textbox-focus").style.display = "block";
}

// hides elements after inputting name
function hideElements() {
  document.getElementById("hello-greeting").style.display = "none";
  document.getElementById("textbox-name").style.display = "none";
}