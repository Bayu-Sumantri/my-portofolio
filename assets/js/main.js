$(document).ready(function() {
    // Array yang berisi dua pilihan nama
    var names = ["bayu sumantri", "blackcat", "HanBay😆😅"];
    // Memilih secara acak satu dari dua nama tersebut
    var randomIndex = Math.floor(Math.random() * names.length);
    var HASIL = names[randomIndex];

    $('.slider').slider({
        indicators: false,
    });
    $("#date").text(Date());
    var typed = new Typed('.element', {
        strings: ["<h3>HALLO GUYS</h3><h5 class='light grey-text text-lighten-3 element'>please teach me how to code correctly and well</h5>"],
        typeSpeed: 4,
        fadeOut: true,
        cursorChar: '',
    });

    var typed = new Typed('.there', {
        strings: [HASIL],
        typeSpeed: 4,
        startDelay: 3500,
        cursorChar: '_',
        backSpeed: 0,
    });

    $("#myToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});
