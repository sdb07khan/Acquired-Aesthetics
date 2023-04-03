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
const container = document.querySelector(".ourWorkContainer");
const cards = gsap.utils.toArray(".workCardBox");

let scrollTween = gsap.to(cards, {
  xPercent: -75 * (cards.length - 1),
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

textReveal.to(".char", {
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
  scrub: 1,
});

ScrollTrigger.create({
  animation: textReveal,
  trigger: ".marketingContainer2",
  Start: "50% 100%",
  end: "top 20%",
  scrub: 1,
});

//////////////////////////////////////////////////////////////
// text reveal animation for scroll image section HIGHLIGHT

const scrollText = new SplitType(".descriptionHeading");
const scrollText2 = new SplitType(".descriptionHeading2");

const textRevealScrollSec = gsap.timeline();

textRevealScrollSec.to(".char", {
  y: 0,
  delay: 0.1,
  duration: 0.1,
});

ScrollTrigger.create({
  animation: textRevealScrollSec,
  trigger: ".descriptionBox",
  Start: "top 20%",
  end: "bottom 100%",
  scrub: 1,
});

ScrollTrigger.create({
  animation: textRevealScrollSec,
  trigger: ".descriptionBox2",
  Start: "top 20%",
  end: "bottom 100%",
  scrub: 1,
});
