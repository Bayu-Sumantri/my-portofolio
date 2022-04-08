$(document).ready(function() {
  var teks_out = prompt("bisa masukkan nama kamu");
  if (teks_out){
      if (teks_out.length <= 8) {
        teks_out = teks_out.toUpperCase()
        hacil = teks_out
      }else{
          hacil = "THERE"
      }
  }else{
    hacil = "THERE"
  }



  $('.slider').slider({
    indicators: false,
  });
  $("#date").text(Date());
  var typed = new Typed('.element', {
    strings: ["<h3>HALLO GUYS</h3><h5 class='light grey-text text-lighten-3 element'>please teach me how to code correctly and well</h5>"],
    typeSpeed: 40,
    fadeOut: true,
    cursorChar: '',
  });

  var typed = new Typed('.there', {
    strings: [hacil],
    typeSpeed: 40,
    startDelay: 3500,
    cursorChar: '_',
    backSpeed: 0,
  });

  $("#myToTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

});
