jQuery(document).ready(function(){
    (function () {
        function init() {
            var speed = 330,
                easing = mina.backout;

            [].slice.call(document.querySelectorAll('.grid > a')).forEach(function (el) {
                var s = Snap(el.querySelector('svg')), path = s.select('path'),
                    pathConfig = {
                        from: path.attr('d'),
                        to: el.getAttribute('data-path-hover')
                    };

                el.addEventListener('mouseenter', function () {
                    path.animate({ 'path': pathConfig.to }, speed, easing);
                });

                el.addEventListener('mouseleave', function () {
                    path.animate({ 'path': pathConfig.from }, speed, easing);
                });
            });
        }

        init();

    })();

/*----------------------------------------------------- Newssleter and contact Form -------------------------*/
    $("#newsletter, #request, #slider_form").submit(function() {
        var elem = $(this);
        var urlTarget = $(this).attr("action");
        $.ajax({
            type : "POST",
            url : urlTarget,
            dataType : "html",
            data : $(this).serialize(),
            beforeSend : function() {
                elem.prepend("<div class='loading alert'>" + "<a class='close' data-dismiss='alert'>×</a>" + "Loading" + "</div>");
                //elem.find(".loading").show();
            },
            success : function(response) {
                elem.prepend(response);
                //elem.find(".response").html(response);
                elem.find(".loading").hide();
                elem.find("input[type='text'],input[type='email'],textarea").val("");
            }
        });
        return false;
    });

/*--------------------------------------------------------------------------- Nav -------------------------------*/
    $('.nav').onePageNav({
    filter: ':not(.external)',
    scrollThreshold: 0.25,
    scrollOffset: 50,
    });

/*--------------------------------------------------------------------------- Responsive Video -------------------------------*/
    jQuery(".video").fitVids();


/*--------------------------------------------------------------------------- Tooltips -------------------------------*/
    jQuery('.social  li').tooltip();


/*--------------------------------------------------------------------------- Scroll to top arrow-------------------------------*/
    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#scroll_up').fadeIn();
        } else {
            jQuery('#scroll_up').fadeOut();
        }
    });

    jQuery('#scroll_up').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    var screen= window.innerWidth;
    if(screen>=980){
        jQuery('#scroll_up').removeClass('hidden');
    }else{
        jQuery('#scroll_up').addClass('hidden');
    }

    jQuery(window).resize(function(){
        var screen= window.innerWidth;
        if(screen>=980){
            $('#scroll_up').removeClass('hidden');
        }else{
            $('#scroll_up').addClass('hidden');
        }
    });


/*--------------------------------------------------------------------------- Animations -------------------------------*/
    $('#features').waypoint(function() {
        setTimeout(function(){$('#features .special_font').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#features .item').addClass('animated fadeInUp')},300);
    }, { offset: '50%' });

    $('#classes').waypoint(function() {
        setTimeout(function(){$('#classes .special_font').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#classes .sub-title').addClass('animated fadeInLeft')},0);
        setTimeout(function(){$('#classes .grid').addClass('animated fadeInUp')},1100);
    }, { offset: '50%' });

    $('#video').waypoint(function() {
        setTimeout(function(){$('#video').addClass('animated fadeInDown')},0);
    }, { offset: '50%' });

    $('#teachers').waypoint(function() {
        setTimeout(function(){$('#teachers .special_font').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#teachers .sub-title').addClass('animated fadeInRight')},0);
        setTimeout(function(){$('#teachers article').addClass('animated fadeInUp')},700);
    }, { offset: '50%' });

    $('#prices').waypoint(function() {
        setTimeout(function(){$('#prices .special_font').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#prices .sub-title').addClass('animated fadeInLeft')},0);
        setTimeout(function(){$('#prices article').addClass('animated fadeInUp')},700)
    }, { offset: '50%' });

    $('#twitter').waypoint(function() {
        setTimeout(function(){$('#twitter .special_font').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#twitter .item').addClass('animated fadeInUp')},700)
    }, { offset: '50%' });

    $('#information').waypoint(function() {
        setTimeout(function(){$('#information .special_font').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#information .sub-title').addClass('animated fadeInDown')},0);
        setTimeout(function(){$('#information .item').addClass('animated fadeInUp')},700)
    }, { offset: '50%' });



/*--------------------------------------------------------------------------- Twitter -------------------------------*/

    $('.twitterfeed').tweet({
        modpath: 'twitter/',
        username: "envato",
        count: 1,
        loading_text: 'Loading twitter feed...',
        template : function(data){            
            var d = new Date(data.tweet_time),
            container=$("#twitter");
            container.find(".username").html("@"+data.screen_name);
            container.find(".tweet").html(data.tweet_text);
            container.find(".date").html(d.getDate()+", "+get_month(d.getMonth())+" "+d.getFullYear());           
        }  
    });


});
