// 'Education' in Dutch. Because that's what this is, a learning experience

 // HTML ID's are unique, so you have to reference each 

// Region Toggle
document.getElementById("regionToggle").addEventListener("click", function() {
    document.getElementById("FacialBias").classList.toggle("hide");
    var x = document.getElementById("regionToggle");
    if (x.innerHTML === "UK CV") {
      x.innerHTML = "Euro CV";
    } else {
      x.innerHTML = "UK CV";
  }
});

// Portfolio Toggle
document.getElementById("leafletToggle").addEventListener("click", function() {
    document.getElementById("Leaflet").classList.toggle("hide"); // subBar a link
    document.getElementById("Portfolio").classList.toggle("hide"); // Div containing the Header link and leaflet map(s)
    var x = document.getElementById("leafletToggle");
    if (x.innerHTML === "Show Portfolio") {
      x.innerHTML = "Hide Portfolio";
    } else {
      x.innerHTML = "Show Portfolio";
  }
});

// TODO hospitality experience toggle

// Snippets from w3schools to use later

/*
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "EURO CV") {
    x.innerHTML = "UK CV";
  } else {
    x.innerHTML = "EURO CV";
  }
}
*/

/*
HTML

<button id="myButton">Toggle visibility</button>

<div id="myElement" class="hide">
    Hello world!
</div>

<script src="script.js"></script>

CSS

.hide {
    display: none;
}

JS

// Toggle Hide

document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myElement").classList.toggle("hide");
});

// Toggle Text

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "EURO CV") {
    x.innerHTML = "UK CV";
  } else {
    x.innerHTML = "EURO CV";
  }
}

https://www.w3schools.com/js/js_whereto.asp
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://www.w3schools.com/howto/howto_js_toggle_text.asp
https://www.w3schools.com/js/js_htmldom_css.asp
*/