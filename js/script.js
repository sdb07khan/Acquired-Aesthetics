gsap.registerPlugin(ScrollTrigger);

// Infinite rotation banner HIGHLIGHT
window.addEventListener("load", animation);

function animation() {
  const TL = gsap.timeline({ repeat: -1 });

  TL.to(".banner__image", { rotate: "+=360", duration: 10, ease: "none" });

  // two images slides on opposite direction on scroll HIGHLIGHT
  const tl = gsap.timeline();

  tl.to(".scrollImageOne", {
    x: "-100vw",
    scale: 0.8,
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
    scale: 0.8,
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
    scale: 0.8,
    duration: 8,
  });

  ScrollTrigger.create({
    animation: tl3,
    trigger: ".scrollImageThree",
    Start: "top bottom",
    //  end: "bottom -20%",
    scrub: 1,
  });

  const tl4 = gsap.timeline();

  tl4.from(".scrollImageFour", {
    x: "-100vw",
    scale: 0.8,
    duration: 8,
  });

  ScrollTrigger.create({
    animation: tl4,
    trigger: ".scrollImageFour",
    Start: "top bottom",
    // end: "bottom -20%",
    scrub: 1,
  });
}

/////////////////////////////////////////////////////////////
// work section HIGHLIGHT (pin & horizontal scroll)

// this is for the heading animation
const myWork = gsap.timeline();

myWork.to(".workHeading", {
  scale: "0.8",
  duration: 10,
});

ScrollTrigger.create({
  animation: myWork,
  trigger: ".workHeading",
  Start: "top bottom",
  scrub: true,
});

// this is for the scroll animation
const container = document.querySelector(".ourWorkContainer");
const sliderBox = document.querySelector(".workCardSlideBox");
const cards = gsap.utils.toArray(".workCardBox");

let scrollTween = gsap.to(".workCardSlideBox", {
  // xPercent: -100 * (cards.length - 1),
  x: `-${sliderBox.offsetWidth - window.innerWidth + 20}`,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: "+=2000",
  },
});

//////////////////////////////////////////////////////////////
// text reveal animation for marketing section 1 HIGHLIGHT

const myText = new SplitType(".marketingStrategy__heading");

const textReveal1 = gsap.timeline({ paused: true });

textReveal1.to("#marketingHeading1-js .word", {
  y: 0,
  stagger: 0.05,
  delay: 0.1,
  duration: 0.5,
});

ScrollTrigger.create({
  animation: textReveal1,
  trigger: ".marketingContainer",
  start: "top 50%",
  // end: "60% 10%",
  toggleActions: "play pause none none",
});

//////////////////////////////////////////////////////////////
// text reveal animation for marketing section 2 HIGHLIGHT

const myText2 = new SplitType(".marketingStrategy__heading2");

const textReveal2 = gsap.timeline({ paused: true });

textReveal2.to("#marketingHeading2-js .word", {
  y: 0,
  stagger: 0.05,
  delay: 0.1,
  duration: 0.5,
});

ScrollTrigger.create({
  animation: textReveal2,
  trigger: ".marketingContainer2",
  start: "top 50%",
  // end: "60% 10%",
  toggleActions: "play pause none none",
});

//////////////////////////////////////////////////////////////
// text reveal animation for scroll image section HIGHLIGHT

const scrollText = new SplitType(".descriptionHeading");
const scrollText2 = new SplitType(".descriptionHeading2");

const textRevealScrollSec = gsap.timeline();

textRevealScrollSec.to("#descriptionHeading-js .char", {
  y: 0,
  delay: 0.1,
  duration: 1,
});

ScrollTrigger.create({
  animation: textRevealScrollSec,
  trigger: ".descriptionBox",
  start: "top 70%",
  end: "60% 10%",
  toggleActions: "play none none none",
});

const textRevealScrollSec1 = gsap.timeline();

textRevealScrollSec1.to("#descriptionHeading1-js .char", {
  y: 0,
  delay: 0.1,
  duration: 1,
});

ScrollTrigger.create({
  animation: textRevealScrollSec1,
  trigger: ".descriptionBox2",
  start: "top 70%",
  end: "60% 10%",
  toggleActions: "play none none none",
});

// footer text reveal animation  HIGHLIGHT

const footerScrollText = new SplitType(".collaborate__heading");

const footerScrollSec = gsap.timeline();

footerScrollSec.to("#footerHeader-js .word", {
  y: 0,
  duration: 1,
});

ScrollTrigger.create({
  animation: footerScrollSec,
  trigger: ".collaborate__heading",
  start: "top 50%",
  end: "bottom 100%",
  toggleActions: "play none none none",
});

//hero heading animation HIGHLIGHT

const heroHeading = new SplitType("#heroHeading-js");

const heroHeadingReveal = gsap.timeline();

heroHeadingReveal.set("#heroHeading-js .char", {
  autoAlpha: 0,
  yPercent: 60,
  rotateX: 70,
});

heroHeadingReveal.to(
  "#heroHeading-js .char",
  {
    autoAlpha: 1,
    rotateX: 0,
    yPercent: 0,
    stagger: 0.05,
    delay: 0.25,
    duration: 0.8,
    ease: "expo.out",
  },
  0.05
);

ScrollTrigger.create({
  animation: heroHeadingReveal,
  trigger: ".headingContainer",
  Start: "20%",
  end: "70% 10%",
  toggleActions: "play none none none",
});
