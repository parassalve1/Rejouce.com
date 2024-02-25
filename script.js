

function cursorEffect(){
    

    let page1Content = document.querySelector("#page1-content")
    let cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
        
            left:dets.x,
            top:dets.y,
        
        })
    })

    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale : 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale : 0,
            opacity: 0
        })
    })

}

cursorEffect()

let page2


function page2animation(){
    gsap.from(".elem h1",{
        top :120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end: "top 37%",
            // markers:true,
            scrub:2
        }
    })
}

page2animation()

function slider(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
         
      });
}
slider()

let tl = gsap.timeline()
tl.from("#loder h3",{
    x:400,
    opacity:0,
    duration:2,
    stagger:0.3
})
tl.to("#loder h3",{
    opacity:0,
    x:-50,
    stagger:0.3
})
tl.to("#loder",{
    duration:2,
    opacity:0
})
tl.to("#loder",{
   display:"none"
})

tl.from("#page1 #page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    delay:-0.5
})