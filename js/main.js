/* 
 * main JS 
 */


'use strict';
jQuery(function () {

    jQuery(window).resize(function () {

//        init_size();
    });

    jQuery('.nav.nav-masthead .nav-link').click(function () {
        var parent = jQuery(this).parent();
        jQuery(parent).find('.nav-link').each(function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
            }
        });

        jQuery(this).addClass('active');

    });

    setTimeout(function () {
        jQuery('h3.masthead-brand img').animate({width: '60px', color: '#fff'}, 1000);
        if (!jQuery('.masthead-brand').hasClass('white')) {
            jQuery('.masthead-brand').addClass('white');
        }

        setTimeout(function () {
            jQuery('h3.masthead-brand img').animate({width: '45px', color: '#fff'}, 1000);
            if (jQuery('.masthead-brand').hasClass('white')) {
                jQuery('.masthead-brand').removeClass('white');
                jQuery('.masthead-brand').addClass('gold');
            }

//                    alert('working');
        }, 1000);
    }, 2000);


    jQuery('#fullpage').fullpage({
//                    sectionsColor: ['#06C', '#C06', '#930', '#06C'],
        anchors: ['introduction', 'qualifications', 'portfolios', 'dd'],
        menu: '#menu',
        navigation: false,
        scrollOverflow: false,
        scrollBar: true,
        slidesNavigation: false,
        css3: true,
        scrollingSpeed: 1000,
        responsive: true,
        resize: true,
        verticalCentered: true,
        //Scrolling       

        autoScrolling: false,
        fitToSection: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        touchSensitivity: 15,
        afterResize: function () {

            init_size();
        },
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {
            init_size();
        },
    });

    function init_size() {
        var height = parseInt(jQuery('.vertical-bottom .container-fluid').outerHeight());
        if (parseInt(jQuery(window).height()) > height) {
            height = parseInt(jQuery(window).height());
//            height -= 50;
        }
        jQuery('.vertical-bottom').height(height);

        height = parseInt(jQuery('.qualification .container').outerHeight());
        if (parseInt(jQuery(window).height()) > height) {
            height = parseInt(jQuery(window).height());
//            height -= 50;
        }
        jQuery('.qualification').height(height);

        height = parseInt(jQuery('.intro .container').outerHeight());
        if (parseInt(jQuery(window).height()) > height) {
            height = parseInt(jQuery(window).height());
//            height -= 50;
        }
        jQuery('.intro').height(height);

        height = parseInt(jQuery('.portfolio .container').outerHeight());
        console.log('window =' + height);
        if (parseInt(parseInt(jQuery(window).height())) > height) {
            height = parseInt(jQuery(window).height());
            console.log('container =' + height);
//            height -= 50;

        }

        jQuery('.portfolio').height(height);

        var width = $(window).width(), height = $(window).height();
        if ((width <= 1023) && (height >= 768)) {
//            alert('Remove my nav!');
        } else {
//            alert('Do nothing');
        }

    }

    init_size();
});