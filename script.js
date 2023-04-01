gsap.registerPlugin(ScrollTrigger);

// Infinite rotation banner HIGHLIGHT
window.addEventListener("load", animation);

function animation() {
  const TL = gsap.timeline({ repeat: -1 });

  TL.to(".banner__image", { rotate: "+=360", duration: 10, ease: "none" });
}

// logos marquee HIGHLIGHT

// // Next, select the elements you need
// const logoContainer = document.querySelector(".featuredTextContainer");
// const logoContent = document.querySelector(".featuredLogoList");
// const logoSpans = document.querySelectorAll(".featuredLogo");

// // Calculate the total width of the marquee content
// let logoContentWidth = 0;
// logoSpans.forEach((span) => (logoContentWidth += span.offsetWidth));

// // Set the width of the marquee content to be twice the total width
// logoContent.style.width = logoContentWidth * 2 + "rem";

// // Create a GSAP timeline for your animation
// const logoAnimation = gsap.timeline({ repeat: -1 }); // Set repeat to -1 for an infinite loop

// // Add animations to your timeline
// logoAnimation.to(logoContent, {
//   x: -logoContentWidth,
//   duration: 10,
//   ease: "steps(12)",
//   repeatDelay: 0,
// });

// // Finally, create a scroll trigger to restart the animation when it ends
// const scrollTrigger = {
//   trigger: logoContainer,
//   start: "0 100%", // Start the trigger when the top of the container is 100% visible
//   end: `+=${logoContentWidth}`, // End the trigger when the bottom of the container is 500px below the top
//   onEnter: () => logoAnimation.play(0), // Restart the animation from the beginning when it enters the trigger
//   onLeaveBack: () => logoAnimation.pause(0), // Pause the animation when it leaves the trigger
// };

// gsap.timeline().add(scrollTrigger); // Add the scroll trigger to your timeline

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
  scrub: true,
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
  end: "bottom -40%",
  scrub: true,
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
  end: "bottom -40%",
  scrub: true,
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
  end: "bottom -40%",
  scrub: true,
});

/////////////////////////////////////////////////////

// First, make sure you have included GSAP in your project

// // Next, select the elements you need
// const marqueeContainer = document.querySelector(".runningLogo");
// const marqueeContent = document.querySelector(".runningLogoBox");
// const marqueeSpans = document.querySelectorAll(".allLogos");

// // Calculate the total width of the marquee content
// let marqueeContentWidth = 0;
// marqueeSpans.forEach((span) => (marqueeContentWidth += span.offsetWidth));

// // Set the width of the marquee content to be twice the total width
// marqueeContent.style.width = marqueeContentWidth * 2 + "rem";

// // Create a GSAP timeline for your animation
// const animationTimeline = gsap.timeline({ repeat: -1 }); // Set repeat to -1 for an infinite loop

// // Add animations to your timeline
// animationTimeline.to(marqueeContent, {
//   x: -marqueeContentWidth,
//   duration: 10,
//   ease: "none",
//   repeatDelay: 0,
// });

// // Finally, create a scroll trigger to restart the animation when it ends
// const marqueeTrigger = {
//   trigger: marqueeContainer,
//   start: "0 100%", // Start the trigger when the top of the container is 100% visible
//   end: `+=${marqueeContentWidth}`, // End the trigger when the bottom of the container is 500px below the top
//   onEnter: () => animationTimeline.play(0), // Restart the animation from the beginning when it enters the trigger
//   onLeaveBack: () => animationTimeline.pause(0), // Pause the animation when it leaves the trigger
// };

// gsap.timeline().add(marqueeTrigger); // Add the scroll trigger to your timeline
