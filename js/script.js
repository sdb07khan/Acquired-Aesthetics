gsap.registerPlugin(ScrollTrigger);

// Infinite rotation banner HIGHLIGHT
window.addEventListener("load", animation);

function animation() {
  const TL = gsap.timeline({ repeat: -1 });

  TL.to(".banner__image", { rotate: "+=360", duration: 10, ease: "none" });

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

// two images slides on opposite direction on scroll HIGHLIGHT

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
// text reveal animation for marketing section HIGHLIGHT

const myText = new SplitType(".marketingStrategy__heading");
const myText2 = new SplitType(".marketingStrategy__heading2");

const textReveal = gsap.timeline();

textReveal.to(".word", {
  y: 0,
  stagger: 0.05,
  delay: 0.1,
  duration: 0.2,
});

ScrollTrigger.create({
  animation: textReveal,
  trigger: ".marketingContainer",
  Start: "50% 100%",
  end: "+=1000",
  toggleActions: "play none none reverse",
  // scrub: 1,
});

ScrollTrigger.create({
  animation: textReveal,
  trigger: ".marketingContainer2",
  Start: "50% 100%",
  end: "top 20%",
  toggleActions: "play none none reverse",
});

//////////////////////////////////////////////////////////////
// text reveal animation for scroll image section HIGHLIGHT

const scrollText = new SplitType(".descriptionHeading");
const scrollText2 = new SplitType(".descriptionHeading2");

const textRevealScrollSec = gsap.timeline();

textRevealScrollSec.to(".char", {
  y: 0,
  delay: 0.1,
  duration: 0.4,
});

ScrollTrigger.create({
  animation: textRevealScrollSec,
  trigger: ".descriptionBox",
  Start: "top 20%",
  end: "bottom 100%",
  toggleActions: "play none none reverse",
});

ScrollTrigger.create({
  animation: textRevealScrollSec,
  trigger: ".descriptionBox2",
  Start: "top 20%",
  end: "bottom 100%",
  toggleActions: "play none none reverse",
});

// footer text reveal animation  HIGHLIGHT

const footerScrollText = new SplitType(".collaborate__heading");

const footerScrollSec = gsap.timeline();

footerScrollSec.to(".word", {
  y: 0,
  duration: 0.1,
});

ScrollTrigger.create({
  animation: footerScrollSec,
  trigger: ".collaborate__heading",
  Start: "top 20%",
  end: "bottom 100%",
  toggleActions: "play none none reverse",
});
