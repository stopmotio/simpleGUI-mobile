//JavaScript for lander page

var iframe = document.getElementById('iframe');


function devAskToLaunch() {
  //Dev command. Will be kept in the final release because it can be useful to access webapps directly.
  var tempvar = prompt("Direct frame to where? (relative to OS directory)");
  var fullpath = "OS/" + tempvar;
  if (tempvar === null) {
    //Don't do anything, user clicked cancel.
  } else {
    iframe.src = fullpath;
    // That's all folks. It's probably working harder not parsing the comments than parsing the code (remember it does have to sift through comments, this is negligible nowadays but in the days of BASIC it was slow to do so)
  }
}

function iframegohere(director) {
  iframe.src = director;
}

function home() {
  iframe.src = "OS/menu.html";
}

/*
I call de pizza plaece
and i tell dem i want a ghost pizza
pizza baker man says dont call again or i break ur frunkin knees
and i teell him RRR
*/