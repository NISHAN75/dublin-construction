(function ($) {
    $(document).ready(function () {


        // nice select
        // $('select').niceSelect();

       





        



 
        // animation
        gsap.registerPlugin(SplitText, ScrollTrigger);
        let textWrappers = $(".animation-text");
        // Split text into lines and letters
        let mainTitleSplit = new SplitText(textWrappers, {
            type: "lines,chars",
            linesClass: "line-wrapper overflow-hidden",
            charsClass: "letter",
            tag: "span"
        });
        // Animate each line's letters
        $(".line-wrapper").each(function () {
            let letters = $(this).find(".letter");
            gsap.from(letters, {
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.04,
                ease: "power3.inOut"
            });
        });
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
        // animation

  


 






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

        // animation-line-wrapper
        gsap.to(".arrow-1", {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".animation-line-wrapper",
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
          
          gsap.to(".arrow-2", {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".animation-line-wrapper",
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });

          gsap.fromTo(".inner-text", 
            { y: 30, opacity: 0 }, // Starting position
            { y: 0, opacity: 1, duration: 2, ease: "power4.out",
            //   delay: 0.3,
              scrollTrigger: {
                trigger: ".animation-line-wrapper",
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
          gsap.fromTo('.animation-full-line', 
            { width: '5%' },
            {
              width: '100%',
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: '.title-line-animation-div',
                start: 'top 50%',
                end: 'top 30%',
              }
            }
          );
          
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
    });
})(jQuery);