gsap.registerPlugin(ScrollTrigger);

// Infinite rotation banner HIGHLIGHT
window.addEventListener("load", animation);

function animation() {
  const TL = gsap.timeline({ repeat: -1 });

  TL.to(".banner__image", { rotate: "+=360", duration: 10, ease: "none" });
}

// two images slides on opposite direction on scroll HIGHLIGHT

const tl = gsap.timeline();

tl.to(".scrollImageOne", {
  x: "-100vw",
  duration: 8,
});

ScrollTrigger.create({
  animation: tl,
  trigger: ".scrollImageOne",
  Start: "top bottom",
  end: "bottom -20%",
  scrub: 1,
});

const tl2 = gsap.timeline();

tl2.from(".scrollImageTwo", {
  x: "-100vw",
  duration: 8,
});

ScrollTrigger.create({
  animation: tl2,
  trigger: ".scrollImageTwo",
  Start: "top bottom",
  end: "bottom -20%",
  scrub: 1,
});

const tl3 = gsap.timeline();

tl3.to(".scrollImageThree", {
  x: "-100vw",
  duration: 8,
});

ScrollTrigger.create({
  animation: tl3,
  trigger: ".scrollImageThree",
  Start: "top bottom",
  end: "bottom -20%",
  scrub: 1,
});

const tl4 = gsap.timeline();

tl4.from(".scrollImageFour", {
  x: "-100vw",
  duration: 8,
});

ScrollTrigger.create({
  animation: tl4,
  trigger: ".scrollImageFour",
  Start: "top bottom",
  end: "bottom -20%",
  scrub: 1,
});

//////////////////////////////////////////////////////////////
// text reveal animation HIGHLIGHT

// import gsap from "gsap-trial";

// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

// let mySplitText = new SplitText(".marketingStrategy__heading", {
//   type: "chars",
// });

// let chars = mySplitText.chars;

// function splitText() {
//   const myText = document.getElementById("myText");
//   const mySplitText = new SplitText(myText, { type: "chars" });
// }

// function animateText() {
//   const mySplitText = new SplitText("#myText", { type: "chars" });
//   gsap.to(mySplitText.chars, {
//     duration: 1,
//     opacity: 0,
//     stagger: 0.1,
//     ease: "power2.out",
//   });
// }

/////////////////////////////////////////////////////////////
// work section HIGHLIGHT (pin & horizontal scroll)

// this is for the heading animation
const myWork = gsap.timeline();

myWork.to(".workHeading", {
  scale: "0.8",
  duration: 8,
});

ScrollTrigger.create({
  animation: myWork,
  trigger: ".workHeading",
  Start: "top bottom",
  scrub: true,
});

// this is for the scroll animation
const container = document.querySelector(".workCardSlideBox");
const cards = gsap.utils.toArray(".workCardBox");

let scrollTween = gsap.to(cards, {
  xPercent: -73 * (cards.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: "+=2000",
  },
});

ScrollTrigger.create({
  trigger: ".workButton",
  pin: true,
  end: "bottom 0%",
});
