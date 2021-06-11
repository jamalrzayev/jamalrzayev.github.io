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
    menu.classList.remove('active');
});

const percentages = document.querySelectorAll('.skills__indicator-percentage'),
      bars = document.querySelectorAll('.skills__indicator-bar');

percentages.forEach( (item, i) => {
    bars[i].style.width = item.innerHTML;
});


// jQuery

$(document).ready(function(){

// modal windows
    
    $('.modal__close').on('click', function() {
        $('.modal__overlay, #thanx').fadeOut('slow');
    });

// php mailer

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url:"mailer/smart.php",
            data:$(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.modal__overlay, #thanx').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

// smooth scroll and pageup
    
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


