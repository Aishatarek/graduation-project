
(function() {

    /* ====================
    Preloader
    ======================= */
	window.onload = function () {
		window.setTimeout(fadeout, 300);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}

    // =========== sticky menu 
    window.onscroll = function () {
        var header_navbar = document.querySelector(".hero-section-wrapper-5 .header");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

      // header-6  toggler-icon
      let navbarToggler6 = document.querySelector(".header-6 .navbar-toggler");
      var navbarCollapse6 = document.querySelector(".header-6 .navbar-collapse");

      document.querySelectorAll(".header-6 .page-scroll").forEach(e =>
          e.addEventListener("click", () => {
              navbarToggler6.classList.remove("active");
              navbarCollapse6.classList.remove('show')
          })
      );
      navbarToggler6.addEventListener('click', function() {
          navbarToggler6.classList.toggle("active");
      })




	// WOW active
    new WOW().init();

})();