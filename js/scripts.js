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

 
