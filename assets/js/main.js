(function ($) {
    $(document).ready(function () {

		// header sticky
		var windowOn = $(window);
		windowOn.on('scroll', function () {
			var scroll = windowOn.scrollTop();
				if (scroll > 50) {
					$(".header-area").addClass("header-sticky");
				} else {
					$(".header-area").removeClass("header-sticky");
				}
		});

    	// offcanvas humbarger
		let offcanvasElement = $('.header-offcanvas');
		offcanvasElement.on('show.bs.offcanvas', function () {
			$('.humbarger-btn').addClass('open');
			$('.btn-close span:nth-child(1)').css({
				transform: 'rotate(45deg)',
				marginBottom: '0'
			});
			$('.btn-close span:nth-child(2)').css({
				transform: 'rotate(-45deg)',
				marginTop: '-4px'
			});
		});
		offcanvasElement.on('hide.bs.offcanvas', function () {
			$('.humbarger-btn').removeClass('open');
			$('.btn-close span:nth-child(1)').css({
				transform: '',
				marginBottom: ''
			});
			$('.btn-close span:nth-child(2)').css({
				transform: '',
				marginTop: ''
			});
		});
    		// offcanvas menu 
		$(".mobile-nav > ul > li > a").click(function (e) {
        e.preventDefault();
        let subMenu = $(this).next(".sub-menu");
        $(".mobile-nav .sub-menu").not(subMenu).slideUp();
        $(".mobile-nav > ul > li > a").not(this).removeClass('rotate active');
        $(this).toggleClass('rotate active');
        subMenu.stop(true, true).slideToggle();
      });

        // nice select
        // $('select').niceSelect();


        // card hover effect
        $(".integrated-card-wrapper").hover(
          function () {
            $(".integrated-card-img").addClass("effect-active");
            $(this).find(".integrated-card-img").removeClass("effect-active");
          },
          function () {
            $(".integrated-card-img").removeClass("effect-active");
          }
        );
       

      // brand slider 
      let brandSlider = new Swiper(".tp-brand-slider", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 145,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },

      });
      let singleProjectSlider = new Swiper(".featured-project-slider", {
        spaceBetween: 70,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });


        



 
        // animation
        gsap.registerPlugin(ScrollTrigger);
        if (window.innerWidth > 991) {
        // animation line
        gsap.utils.toArray(".animation-line").forEach((element) => {
          gsap.fromTo(
              element,
              {
                  y: 30,
                  opacity: 0,
              },
              {
                  y: 0,
                  opacity: 1,
                  duration: 1.5,
                  ease: "power2.out",
                  scrollTrigger: {
                      trigger: element,
                      start: "top 90%",
                      toggleActions: "play none none none"

                  },
              }
          );
      });
      gsap.fromTo('.quality-img-wrapper', 
        { x: 0 },
        {
          x: 50,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: '.title-line-animation-div',
            start: 'top 50%',
            end: 'top 30%',
          }
        }
      );
      
      gsap.fromTo('.main-center-img', 
        { x: 0 },
        {
          opacity: 1,
          x: '60px',
          duration: 1.5,
          ease: "power4.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: '.title-line-animation-div',
            start: 'top 50%',
            end: 'top 30%',
          }
        }
      );
      $(".arrow-1 , .arrow-2").each(function() {
        gsap.to($(this), {
          x: 0,
          y: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".animation-line-wrapper",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
      $(".inner-text").each(function() {
        gsap.fromTo(this, 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.5, ease: "power4.out",
            scrollTrigger: {
              trigger: ".animation-line-wrapper",
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });
      $('.animation-full-line').each(function() {
        var element = $(this);
        
        gsap.fromTo(element[0], 
          { width: '5%' },
          {
            width: '100%',
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element[0],
              start: 'top 80%',
              end: 'bottom top', // Adjust to a better scroll trigger endpoint
              // markers: true,
            }
          }
        );
      });

        }


 






        // OverlayScrollbars
        const {
            OverlayScrollbars,
            ClickScrollPlugin
        } = OverlayScrollbarsGlobal;
        // Initialize the ClickScrollPlugin
        OverlayScrollbars.plugin(ClickScrollPlugin);
        $("body").each(function () {
            OverlayScrollbars(this, {
                scrollbars: {
                    clickScroll: true,
                    autoHide: "leave",
                    dragScrolling: true,
                    clickScrolling: true,
                },
                scrollBehavior: 'smooth',
            });
        });
        // lenis
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

        // Listen for the 'scroll' event and log the event data to the console
        // lenis.on('scroll', (e) => {
        //     console.log(e);
        // });

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);
        // lenis




        
    });
})(jQuery);