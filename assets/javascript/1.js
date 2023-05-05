$(function() {
    width = $(window).width();
    if (width <= 768) {
        $('.so-1').addClass('nenden')
        $('.so-3').addClass('nenden')
        $('.so-2').addClass('nenden')
    } else {
        $('.so-1').removeClass('nenden')
        $('.so-3').removeClass('nenden')
        $('.so-2').removeClass('nenden')
    }
    $(window).resize(function() {
        width = $(window).width();
        if (width <= 768) {
            $('.so-1').addClass('nenden')
            $('.so-3').addClass('nenden')
            $('.so-2').addClass('nenden')
        } else {
            $('.so-1').removeClass('nenden')
            $('.so-3').removeClass('nenden')
            $('.so-2').removeClass('nenden')
        }
    })
    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $('.menu').addClass('dungyen')
        } else {
            $('.menu').removeClass('dungyen')

        }
    })
    $('.search .entrance').click(function() {
        $('.search-area').addClass('appear')
        $('.close').click(function() {
            $('.search-area').removeClass('appear')
        })
    })
    $('.blog .container-fluid .owl-carousel').owlCarousel({
        items: 4,
        margin: 30,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    $('.owl-carousel').owlCarousel({
        items: 4,
        margin: 30,
        dotsEach: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    hieuung = new TimelineMax()
    hieuung
        .fromTo($('.name'), 1, { opacity: 0, x: -350 }, {
            opacity: 1,
            x: 0,
        })
        .fromTo($('.description'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
            visibility: 'visible',
            opacity: 1,
            x: 0,
            delay: -.8
        })
        .fromTo($('.nam'), 1, { visibility: 'hidden', opacity: 0, x: -300 }, {
            visibility: 'visible',
            opacity: 1,
            x: 0,
            delay: -.8
        })
        .fromTo($('.price'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
            visibility: 'visible',
            opacity: 1,
            x: 0,
            delay: -.8
        })
        .fromTo($('.explore'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
            visibility: 'visible',
            opacity: 1,
            x: 0,
            delay: -.9
        })

    $('.carousel-control-next').click(function() {
        hieuung.fromTo($('.name'), 1, { opacity: 0, x: -350 }, {
                opacity: 1,
                x: 0,
            })
            .fromTo($('.description'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.8
            })
            .fromTo($('.nam'), 1, { visibility: 'hidden', opacity: 0, x: -300 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.8
            })
            .fromTo($('.price'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.8
            })
            .fromTo($('.explore'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.9
            })
    })
    $('.carousel-control-prev').click(function() {

        hieuung.fromTo($('.name'), 1, { opacity: 0, x: -350 }, {
                opacity: 1,
                x: 0,
            })
            .fromTo($('.description'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.8
            })
            .fromTo($('.nam'), 1, { visibility: 'hidden', opacity: 0, x: -300 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.8
            })
            .fromTo($('.price'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.8
            })
            .fromTo($('.explore'), 1, { visibility: 'hidden', opacity: 0, x: -350 }, {
                visibility: 'visible',
                opacity: 1,
                x: 0,
                delay: -.9
            })
    })
    $(window).scroll(function() {
        var vitri = $('html').scrollTop()
        var vitripopular = $('.popular').offset().top - 400
        if (vitri >= vitripopular) {
            $('.title').addClass('nholai')
            $('.thanhngang1').addClass('dilen')
        }
    })
    hieuung2 = new TimelineMax({ paused: true })
    hieuung2.staggerFrom($('.sub-menu-item'), 1, { opacity: 0, y: 200 }, .2)
    $(window).scroll(function() {
        var vitri = $('html').scrollTop()
        var vitrisubmenu = $('.sub-menu').offset().top - 380
        if (vitri >= vitrisubmenu) {
            hieuung2.play()
        }
    })
    bestofyear = new TimelineMax({ paused: true })
    bestofyear
        .from($('.best-of-year-title'), 1, { opacity: 0, y: -70 })
        .from($('.best-of-year-buynow'), 1, { opacity: 0, y: 50, delay: -1 })
        .from($('.expired'), .6, { opacity: 0, scale: 0.5 })
    $(window).scroll(function() {
        var vitri = $('html').scrollTop()
        var vitrimost = ($('.best-of-year').offset().top) - 400
        if (vitri >= vitrimost) {
            bestofyear.play();
        }
    })
    intro = new TimelineMax({ paused: true })
    intro
        .from($('.intro-title'), 1, { opacity: 0, y: -50 })
        .from($('.intro-text'), 1, { opacity: 0, x: -200, delay: -1 })
        .from($('.intro-buynow'), 1, { opacity: 0, x: -300, delay: -1 })
    $(window).scroll(function() {
        var vitri = $('html').scrollTop()
        var vitri_intro = ($('.introduct').offset().top) - 200
        if (vitri >= vitri_intro) {
            intro.play();
        }
    })
    quality = new TimelineMax({ paused: true })
    quality
        .staggerFrom($('.best-item'), .8, { opacity: 0, y: 200 }, .2)
    $(window).scroll(function() {
        var vitri = $('html').scrollTop()
        var vitri_quality = ($('.best-quality').offset().top) - 250
        if (vitri >= vitri_quality) {
            quality.play();
        }
    })

    feedback = new TimelineMax({ paused: true })
    feedback
        .from($('.feedback-title'), 1, { opacity: 0, y: -150 })
        .from($('.feedback-area'), 1, { opacity: 0, scale: 1.5, delay: -1 })
        .from($('.feedback-text'), 1, { opacity: 0, y: 100, delay: -1 })
        .staggerFrom($('.contact-item'), .7, { opacity: 0, scale: .3, y: 100 }, .1)
    $(window).scroll(function() {
        var vitri = $('html').scrollTop()
        var vitri_feedback = ($('.feedback').offset().top) - 250
        if (vitri >= vitri_feedback) {
            feedback.play();
        }
    })
})