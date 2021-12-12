//Create A Responsive Menu Hide Show Side Menu
const header = document.querySelector(".header");
const skip = document.querySelector(".skip");

let tabHeader = document.getElementsByClassName("resume-tab-head")[0];
let tabBody = document.getElementsByClassName("resume-tab-content")[0];

let tabsPane = tabHeader.getElementsByTagName("button");

// Onscroll Change Nav Bar Background
window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
    this.scrollY > 800 ? skip.classList.add("show") : skip.classList.remove("show");
}

/* == Onclick Responsive Menu Link == */
for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");

        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByClassName("tabbing")[i].classList.add("active");
    });
}


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });



/* === Overlay === */
function openContact() {
    document.getElementById("contactOverlay").style.display = "block";
}

function closeContact() {
    document.getElementById("contactOverlay").style.display = "none";
}



function openPortfolio() {
  document.getElementById("portfolioOverlay").style.display = "block";
}

function closePortfolio() {
  document.getElementById("portfolioOverlay").style.display = "none";
}



function openBlog() {
  document.getElementById("blogOverlay").style.display = "block";
}

function closeBlog() {
  document.getElementById("blogOverlay").style.display = "none";
}
/* === Overlay === */
$(window).on("load", function() {
  $(".loading").fadeOut(4000);
  $(".load").fadeIn(4000);
});

/*
var loadCircle;

function loadScreen() {
  loadCircle = setTimeout(showAlert, 500);
}

function showAlert() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("message").style.display = "block";
}
*/


/* == Scroll Reveal == */
ScrollReveal().reveal('.experience-head', { delay: 500 });
ScrollReveal().reveal('.experience-body', { delay: 500 });
ScrollReveal().reveal('.experience-column', { delay: 500 });
ScrollReveal().reveal('.resume-head', { delay: 500 });
ScrollReveal().reveal('.resume-body', { delay: 500 });
ScrollReveal().reveal('.resume-tab-head', { delay: 500 });
ScrollReveal().reveal('.resume-tab-content', { delay: 500 });
ScrollReveal().reveal('.blog-head', { delay: 500 });
ScrollReveal().reveal('.blog-body', { delay: 500 });
ScrollReveal().reveal('.blog-column', { delay: 500 });
/* == || Scroll Reveal == */


