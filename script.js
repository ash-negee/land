function myFunction() {
    // Get the text field
    var copyText = 5142794354
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }