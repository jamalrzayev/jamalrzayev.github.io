const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});

const percentages = document.querySelectorAll('.skills__indicator-percentage'),
      bars = document.querySelectorAll('.skills__indicator-bar');

percentages.forEach( (item, i) => {
    bars[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1350) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});


