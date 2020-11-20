// when the page loads
window.onload = function() {
  // check if there is content supplied with the URL
  // if there is:
  if (location.hash) {
    // put it into the frame
    frame.src = location.hash.substr(1);
    // show the frame
    frame.style.display = "block";
  }
  // if there is not:
  else {
    // redirect to the help page
    window.location.href = "/help";
  }
};
