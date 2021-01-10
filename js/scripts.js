//Auto close hamburger menu mobile
$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
  });
  
  // Add active class to the current button (highlight it)
  var header = document.getElementById("myNavbar");
  var lis = header.getElementsByClassName("nav-item");
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
  }


  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
       // event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
    
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })
 
/*Modal Image Gallery*/
function openModal(n) {
  document.getElementById(n).style.display = "block";
}

function closeModal(n) {  
  document.getElementById(n).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slidesMural = document.getElementsByClassName("mySlidesMural");
  
  var mask = document.getElementsByClassName("mask");
  var captionText = document.getElementById("caption");

  var captionTextMural = document.getElementById("captionMural");
  var mural = document.getElementsByClassName("mural");

  //Slides Masks
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < mask.length; i++) {
    mask[i].className = mask[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  mask[slideIndex-1].className += " active";
  captionText.innerHTML = mask[slideIndex-1].alt;


//Slides Murals
  if (n > slidesMural.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesMural.length}
  for (i = 0; i < slidesMural.length; i++) {
    slidesMural[i].style.display = "none";
  }
  for (i = 0; i < mural.length; i++) {
    mural[i].className = mural[i].className.replace(" active", "");
  }
  slidesMural[slideIndex-1].style.display = "block";
  mural[slideIndex-1].className += " active";
  captionTextMural.innerHTML = mural[slideIndex-1].alt;

}