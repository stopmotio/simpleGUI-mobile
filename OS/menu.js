document.addEventListener("DOMContentLoaded", ready);
var dpi = window.devicePixelRatio;


function ready() {
  //Only call when page is ready and the view is hiDPI
  if(dpi > 1) {
    //We know that the frame is ready and viewer is hiDPI
    document.body.style.backgroundImage = 'url("../backgrounds/default_interior_HQ.jpg")';
    console.log("User has HiDPI/Retina device; high-quality background loaded.");
    // I'd load the high quality icons if I had them but I didn't save the PSD and vectorizer.io is not as keen to do everything for free as it used to be. I don't blame them.
  } else {
    //We aren't HiDPI
    console.log("we're on not hiDPI; sticking with low quality for better performance");
  }
}