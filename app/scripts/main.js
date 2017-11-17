(function() {
    'use strict';
    // Your custom JavaScript goes here

    /**
     * scrollreveal
     */

    window.sr = ScrollReveal({
        reset: true
    })
    sr.reveal('.ui.block.story .content')
    sr.reveal('.ui.spec .statistic', 100)
    sr.reveal('.ui.spec .details .content', 100)
    sr.reveal('.ui.action .header')
    sr.reveal('.ui.action .action')

    /**
     * navbar
     */

    $('.ui.navbar .search-icon > i')
        .click(function() {
            let icon = $(this)
            if (icon.text() === 'search') {
                icon.text('close').parents('.content').addClass('searching')
            } else {
                icon.text('search').parents('.content').removeClass('searching')
            }
        })


    $('.ui.sub.navbar')
        .visibility({
            type: 'fixed'
        })

    $('.ui.sub.navbar .menu .item')
        .click(function() {
            let id = $(this).attr('href')
            let $element = $(id)
            let position = $element.offset().top - 70
            $('html,body').animate({
                scrollTop: position
            }, 500)
        })

    $('.ui.section')
        .visibility({
            observeChange: false,
            once: false,
            offset: 120,
            onTopPassed: sectionHandle,
            onBottomPassedReverse: sectionHandle,
        })

    function sectionHandle() {
        let $currentSection = $(this)
        let index = $('.ui.section').index($currentSection)
        let $subNavMenuItem = $('.ui.sub.navbar .menu > .item')
        let $subNavMenuActiveItem = $subNavMenuItem.eq(index)

        $subNavMenuItem.filter('.active').removeClass('active')
        $subNavMenuActiveItem.addClass('active')
    }
    /**
     * hero
     */
    $('.ui.hero video.image')
        .visibility({
            once: false,
            continuous: true,
            onPassing(calculations) {
                if (calculations.percentagePassed >= 0.3) {
                    $(this).get(0).pause()
                } else {
                    $(this).get(0).play()
                }
            }
        })


    /**
     * sidebar
     */

    $('.ui.sidebar')
        .sidebar('setting', 'dimPage', false)
        .sidebar('attach events', '.ui.navbar .menu-icon')
        .sidebar('attach events', '.ui.sidebar .close-icon')

    $('#navigation .menu')
        .clone()
        .appendTo('.ui.sidebar')


    /**
     * slick carousel
     */

    $('.ui.hero.carousel')
        .slick({
            prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
            nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',

            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: true
                }
            }]
        })

    $('.ui.vertical.story .ui.carousel.for')
        .slick({
            asNavFor: '.ui.vertical.story .ui.carousel.nav',
            arrows: false,
            slidesToShow: 1,
        })

    $('.ui.vertical.story .ui.carousel.nav')
        .slick({
            asNavFor: '.ui.vertical.story .ui.carousel.for',
            slidesToShow: 3,
            dots: true,
            prevArrow: '<button class="ui prev  button"><i class="material-icons">chevron_left</i></button>',
            nextArrow: '<button class="ui next  button"><i class="material-icons">chevron_right</i></button>',
            centerMode: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        })


    $('#exterior-design .carousel.text')
        .slick({
            asNavFor: '#exterior-design .carousel.image',
            arrows: false,
            slidesToShow: 1,
        })

    $('#exterior-design .carousel.image')
        .slick({
            asNavFor: '#exterior-design .carousel.text',
            slidesToShow: 2,
            dots: true,
            prevArrow: '<button class="ui prev  button"><i class="material-icons">chevron_left</i></button>',
            nextArrow: '<button class="ui next  button"><i class="material-icons">chevron_right</i></button>',
            // centerMode: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        })


    $('#interior-design .carousel.text')
        .slick({
            asNavFor: '#interior-design .carousel.image',
            arrows: false,
            slidesToShow: 1,
        })

    $('#interior-design .carousel.image')
        .slick({
            asNavFor: '#interior-design .carousel.text',
            slidesToShow: 1,
            dots: true,
            prevArrow: '<button class="ui prev  button"><i class="material-icons">chevron_left</i></button>',
            nextArrow: '<button class="ui next  button"><i class="material-icons">chevron_right</i></button>',
            // centerMode: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }]
        })


    /**
     * bottom
     */

    enquire.register("screen and (max-width: 767px)", {
        match() {
            $('.ui.bottom')
                .addClass('accordion')
                .accordion({
                    selector: {
                        title: '.header',
                        trigger: '.header',
                        content: '.content'
                    }
                })


            $('.ui.sub.navbar .content')
                .addClass('accordion')
                .accordion({
                    selector: {
                        title: '.header',
                        trigger: '.header',
                        content: '.menu'
                    }
                })
        },
        unmatch() {
            $('.ui.bottom')
                .removeClass('accordion')

            $('.ui.sub.navbar .content')
                .removeClass('accordion')
        }
    })
})();
