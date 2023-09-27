const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function firstPageAnim(){
  var tl = gsap.timeline();
  tl.from("#nav",{
    y:-10,
    opacity:0,
    duration: 1.3,
    ease:Expo.easeInOut
  }).to(".boundingelem",{
    y:0,
    ease:Expo.easeInOut,
    duration:1.6,
    delay:-1,
    stagger:.2
  })
  .from("#herofooter",{
    y:10,
    opacity:0,
    duration:1.3,
    delay:-1,
    ease:Expo.easeInOut,
  })

}
function circleChapta(){
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev =0;
  window.addEventListener("mousemove",function(dets){
    xscale = gsap.utils.clamp(.8,1.2,dets.clientX-xprev);
    yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;
    circleMouseFollower(xscale,yscale);
  });
}
function circleMouseFollower(xscale,yscale){
  window.addEventListener("mousemove",function(dets){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  })
}
circleChapta();
firstPageAnim();
circleMouseFollower();

document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove",function(details){
       
      gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease: Power1,
      })
    });
});