let tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part1 , .line h5", {
  opacity: 0,
  onStart: function () {
    let h5loader = document.querySelector("#line1-part1 h5");
    let grow = 0;
    let intervalID = setInterval(function () {
      if (grow === 100) {
        clearInterval(intervalID);
      }
      h5loader.textContent = grow;
      grow++;
    }, 30);
  },
});
tl.to("#loader", {
  opacity: 0,
  delay: 2.5,
  duration: 0.4,
});
tl.from("#page1",{
    y:1000,
    duration:0.5,
    delay:0.3,
});
tl.to("#loader",{
  display : "none",
})