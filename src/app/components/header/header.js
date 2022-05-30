// $(function () {
//   $(window).on('scroll', function () {
//     if ( $(window).scrollTop() > 10 ) {
//       $('.navbar').addClass('active');
//     } else {
//       $('.navbar').removeClass('active');
//     }
//   });
// });

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  console.log("HALOOO")
  // Do something with the scroll position
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
