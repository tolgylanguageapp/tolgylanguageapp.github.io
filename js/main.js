import features from "../assets/feature.json" with {type: 'json'};


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
            $('.btn-social').addClass('btn-outline-dark');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
            $('.btn-social').removeClass('btn-outline-dark');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 200, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    // Smooth scrolling on the button links to contact form
    $(".btn-contact a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 300, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


function sendMail() {
    console.log('Start sending mail');
    const email = document.getElementById('email1').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    console.log(email, message, name);

    if (!email || !name || !message) {
        console.error('One or more fields are empty.');
        return;
    }

    else {
        const mailtoLink = `mailto:${`tolgysoftware@gmail.com`}?subject=${encodeURIComponent(message)}&body=${encodeURIComponent(name)}`;
        document.location = mailtoLink;
        //  window.location.href = mailtoLink;
    }

}

/*Consent banner Cookies */

function acceptCookies() {
    document.cookie = "cookies_accepted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    document.getElementById('cookie-banner').style.display = 'none';
    loadGoogleAnalytics();
}

function checkCookies() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('cookies_accepted='));
}

function loadGoogleAnalytics() {
    if (checkCookies()) {
        // Load Google Analytics script
        var script = document.createElement('script');
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-EJW9ELFG6L";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', "G-EJW9ELFG6L");
    }
}

if (checkCookies()) {
    document.getElementById('cookie-banner').style.display = 'none';
    loadGoogleAnalytics();
} else {
    document.getElementById('cookie-banner').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    if (checkCookies()) {
        document.getElementById('cookie-banner').style.display = 'none';
        loadGoogleAnalytics();
    } else {
        document.getElementById('cookie-banner').style.display = 'block';
        document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
    }
});


//Features generator

const template = document.getElementById('template');
const featureBox = document.getElementById("featureBox")

features.forEach(name => {
    console.log(name.title);
    const instance = template.content.cloneNode(true);
    const featureFrameWithAnimation = instance.querySelector('#featureFrameWithAnimation')
    const featureName = instance.querySelector('#featureName');
    const featureIcon = instance.querySelector('#featureIcon')

    featureName.textContent = name.title;
    featureIcon.classList.add(name.icon)
    featureFrameWithAnimation.setAttribute('data-wow-delay', name["data-wow-delay"]);


    featureBox.appendChild(instance)
})



