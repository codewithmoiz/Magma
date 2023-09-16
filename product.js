function loco (){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });
  
  
  
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  loco();

  
gsap.to("#section3>div",{
    // x: -200,
    scale: 0.8,
    // height: 0,
    duration: 2.5,
    // opacity: 0,
    // stagger: 0.5,
    scrollTrigger:{
      trigger: "#section3",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 4
    }
  })

  gsap.from("#page13",{
    x: -200,
    scale: 0,
    duration: 2,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#page13",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      // scrub: 4
    }
  })
  
  gsap.from(".page14-inner",{
    // x: -200,
    scale: 0,
    duration: 2,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#page13",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 4
    }
  })

  gsap.from(".first",{
    // x: -200,
    scale: 0,
    // height: 0,
    duration: 2.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: ".page14-inner",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 4
    }
  })
  
  gsap.from(".second",{
    // x: -200,
    scale: 0,
    // height: 0,
    duration: 3,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: ".page14-inner",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 4
    }
  })
  
  gsap.from(".last",{
    // x: -200,
    scale: 0,
    // height: 0,
    duration: 2.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: ".page14-inner",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 4,
    }
  })

  gsap.from("#section2 h2,#section2 h1",{
    y: 200,
    // scale: 0,
    duration: 1,
    opacity: 0,
  })

  gsap.from("#section4>h1",{
    // x: -200,
    scale: 0,
    // height: 0,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section4",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })

  gsap.from("#section5",{
    x: 300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section5",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })

  gsap.from("#section6",{
    x: -300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section6",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#section7",{
    x: 300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section7",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#section8",{
    x: -300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section8",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#section9",{
    // x: -300,
    // y: -300,
    scale: 2,
    // height: 0,
    duration: 1.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section9",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#section10",{
    // x: -300,
    // y: -300,
    scale: 2,
    // height: 0,
    duration: 1.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section10",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#section11",{
    // x: -300,
    // y: -300,
    scale: 2,
    // height: 0,
    duration: 1.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section11",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#section12",{
    // x: -300,
    // y: -300,
    scale: 2,
    // height: 0,
    duration: 1.5,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#section12",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })