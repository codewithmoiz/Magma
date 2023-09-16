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

  gsap.from("#pg3",{
    x: 300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#pg3",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })

  gsap.from("#pg4",{
    x: -300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#pg4",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })
  gsap.from("#pg5",{
    x: 300,
    // scale: 0,
    // height: 0,
    duration: 1.5,
    // opacity: 0,
    stagger: 0.5,
    scrollTrigger:{
      trigger: "#pg5",
      scroller: "main",
      start: "top bottom",
      end: "top top",
      // markers: true,
      scrub: 3,
    }
  })

  var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var clutter = "";

document.querySelector("#pg6>h1").textContent.split(" ").forEach(function (dets) {
  clutter += `<span style="color: #dadada69;"> ${dets} </span>`; // Initially set the color to gray
});

document.querySelector("#pg6>h1").innerHTML = clutter; // Update the innerHTML

// Now, add the animation to change the color from gray to white using GSAP and ScrollTrigger
gsap.to("#pg6>h1>span", {
  scrollTrigger: {
    trigger: "#pg6>h1>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "main",
    scrub: 0.5,
  },
  color: "#fff", // Set the text color to white during the animation
  stagger: 0.2, // Adjust the stagger time as needed
});

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