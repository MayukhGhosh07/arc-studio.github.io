
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

Shery.imageMasker(".hero-img", {
  mouseFollower:true,
  text: "ARC",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".hero-img", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#nav-right h4", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#nav-left h4", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#main-hero-text h1", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".contact-wrapper h2", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});





 const timeout=setTimeout(() => {
   if(window.innerWidth>1042){
     Shery.mouseFollower({
       ease: "cubic-bezier(0.23, 1, 0.320, 1)",
       duration: 1,
     });
     }
     
  Shery.textAnimate("#main-hero-text h1", {
    style: 2,
    y: 10,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
 


 gsap.from("#nav #nav-left",{
     opacity:0,
     duration:1.5,
     x:-1030
     
 })  
 gsap.from("#nav #nav-right",{
     opacity:0,
     duration:1.5,
     x:1030
     
 })  
 
 gsap.from(".hero-img",{
    opacity:0,
     duration:1,
    x:1030
 })
 
 gsap.from("#main-para p",{
   duration:1,
   opacity:0,
   x:-1030,
 
 })
 gsap.from("#main-para h4",{
   duration:1,
   opacity:0,
   x:1030,
 
 })

},7500);

gsap.to(".banner1",{
  x:1030,
    duration:2,
    scrollTrigger:{
        trigger:".banner1",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",   
    }   
})


gsap.to(".banner2",{
  x:-1030,
    duration:2,
   
    scrollTrigger:{
        trigger:".banner2",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",   
    }
})
gsap.to(".banner3",{
  x:1030,
    duration:2,
   
    scrollTrigger:{
        trigger:".banner3",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",
    }
})
gsap.to(".banner4",{
  x:-1030,
    duration:2,
   
    scrollTrigger:{
        trigger:".banner4",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",
    }
})
gsap.to(".banner5",{
  x:1030,
    duration:2,
   
    scrollTrigger:{
        trigger:".banner5",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",
    }
})
gsap.to(".banner6",{
  x:-1030,
    duration:2,
   
    scrollTrigger:{
        trigger:".banner6",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",
    }
})
gsap.to(".banner7",{
  x:1030,
    duration:2,
   
    scrollTrigger:{
        trigger:".banner7",
        scroller:"#main",
        scrub:2,
        start:"top 90%",
        end:"top 40%",
    }
})

gsap.from("#work-wrapper",{
  duration:1,
  opacity:0,
  delay:1,
  y:200,
  scrollTrigger:{
    trigger:"#work-wrapper",
    scroller:"#main",
    scrub:true,
    start:"top 90%",
    end:"top 40%",

  }

})

gsap.from("#work-wrapper2",{
  duration:1,
  opacity:0,
  delay:1,
  y:200,
  scrollTrigger:{
    trigger:"#work-wrapper2",
    scroller:"#main",
    scrub:true,
    start:"top 90%",
    end:"top 40%",

  }

})

gsap.from(".contact-wrapper",{
  duration:1.2,
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger:".contact-wrapper",
    scroller:"#main",
    scrub:true,
    start:"top 90%",
    end:"top 40%",

  }
})

Shery.imageMasker(".work-col img", {
  mouseFollower:true,
  text: "VIEW",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".work-col-resp img", {
  mouseFollower:true,
  text: "VIEW",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".work-col img", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});





var num=document.getElementById("loading-nums")
i=0;
const interval = setInterval(() => {
  num.innerHTML=i+"%";
  i=i+1
  if(i==101){
    clearInterval(interval);
  }
  


},50);


//ANIMATION OF PRELOADER
 gsap.to("#preloader-wrapper",{
   top:"-500%",
  duration:3,
  delay:7.5,

 })

gsap.to(".load-line",{
  width:"50vw",
  duration:6,

})

gsap.to(".banner-border",{
  duration:2.5,
  width:"100vw",
  scrollTrigger:{
    trigger:".banner-border",
    scroller:"#main",
    scrub:true,
    start:"top 90%",
    end:"top 40%",

  }
})

gsap.to(".contact-border",{
  duration:2.5,
  width:"100vw",
  scrollTrigger:{
    trigger:".contact-border",
    scroller:"#main",
    scrub:true,
    start:"top 90%",
    end:"top 40%",

  }
})

gsap.to(".loader-top",{
  delay:6.1,
  display:"None",
  duration:1.2
})

gsap.to(".loader-end",{
  delay:6.1,
  display:"None",
  duration:1.2
})

gsap.to(".loader-text",{
  delay:6.2,
  duration:1,
  transform:"scale(1.5)",
  opacity:"100%",
  display:"Inline"


})









