(function() {
    let fab = $('.js-fab');
    let footer = $('.footer');
    let footerBottom = $('.footer__bottom');
    let case1 = $('.js-case-1');
    let caseImage1 = $('.js-case-1 .case__left-content');
    let case2 = $('.js-case-2');
    let caseImage2 = $('.js-case-2 .case-reverse__left-content');
    let case3 = $('.js-case-3');
    let caseImage3 = $('.js-case-3 .case__left-content');
    let firstSection = $('.first-section');
    let symbols = [
        '♡',
        '♥️',
        '☕️',
        '☀️',
        '🍏',
        '🔥',
        '💪',
        '🥦',
        '🦑'
    ];
    let count = 1;
    //Hide email at the bottom
    $(window).scroll(function() {
        let footerOffset = footer.offset().top;
        let fabOffset = fab.offset().top + fab.height();
        if (fabOffset > footerOffset) fab.css('opacity', '0.2');
        else fab.css('opacity', '1');
    });
    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height() * 0.66;
        if (scroll > caseImage1.offset().top) case1.addClass("js-visible");
        if (scroll > caseImage2.offset().top) case2.addClass("js-visible");
        if (scroll > caseImage3.offset().top) case3.addClass("js-visible");
    });
    $('.js-ee').click(function() {
        $('.js-ee').text(symbols[count]);
        count++;
        if (count >= symbols.length) count = 0;
    });
})();

//# sourceMappingURL=404.c080671a.js.map
