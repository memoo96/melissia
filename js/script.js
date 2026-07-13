var width = $(window).width();

$(document).ready(function () {


    $('[data-toggle="tooltip"]').tooltip();


    $('.navbar-toggler-icon').click(function(){
        $('.Body_overlay').css('display','block');
        $('body').css({
            'height':'100vh',
            'overflow-y':'hidden'
        });
    })

    $('#CloseNavMenu').click(function(){
        $('.Body_overlay').css('display','none');
        $('body').css({
            'height':'auto',
            'overflow-y':'auto'
        });
    })


    $(function () {
        $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).siblings().toggleClass("show");


            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

        });
    });

    $(document).on("click", function (event) {
        if ($(this).width() <= 991) {
            var $trigger = $(".navbar");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $("#navbarContent").removeClass('show');
                $('.navbar-toggler').addClass("collapsed");
                $('.Body_overlay').css('display','none');
                $('body').css({
                    'height':'auto',
                    'overflow-y':'auto'
                });
            }
        }
    });


    $('.search_box_popup .search_input').focus(function(){
        $('.search_box_popup .search_btn').css({
            'visibility':'visible',
            'opacity':'1'
        })
        $(this).css('margin-bottom','20px');
    })


    var scrollButton = $(".scroll_top");
    $(window).scroll(function () {
        if ($('body').css('direction') == 'ltr') {
            if ($(this).scrollTop() > 500) {
                scrollButton.css({
                    'opacity': '1',
                    'visibility': 'visible',
                    'right': '50px'
                })
            }
            else {
                scrollButton.css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'right': '0px'
                })
            }
        }
        else {
            if ($(this).scrollTop() > 500) {
                scrollButton.css({
                    'opacity': '1',
                    'visibility': 'visible',
                    'left': '50px'
                })
            }
            else {
                scrollButton.css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'left': '0px'
                })
            }
        }

    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });   



    $(window).scroll(function () {
        var sc = $(this).scrollTop();
        if ($(this).width() > 991) {
            if (sc > 10) {
                $('.MainNav').css({
                    'background-color': '#FFF',
                    'padding':'.5rem 1rem',
                    'box-shadow':'0px 3px 10px #0000001a'
                });
                $('.MainNav .navbar-brand img').css({
                    'height': '80px'
                });
            }    
            else {
                $('.MainNav').css({
                    'background-color': 'transparent',
                    'padding':'20px 1rem',
                    'box-shadow':'unset'
                });
                $('.MainNav .navbar-brand img').css({
                    'height': '100px'
                });
            }
        }
        else {
            if (sc > 10) {
                $('.MainNav').css({
                    'background-color': '#FFF',
                    'padding':'.5rem 1rem',
                    'box-shadow':'0px 3px 10px #0000001a'
                });
                $('.MainNav .navbar-brand img').css({
                    'height': '65px'
                });
            }    
            else {
                $('.MainNav').css({
                    'background-color': '#FFF',
                    'padding':'.5rem 1rem',
                    'box-shadow':'0px 3px 10px #0000001a'
                });
                $('.MainNav .navbar-brand img').css({
                    'height': '65px'
                });
            }
        }
    });


    $(window).resize(function () {
        var sc = $(this).scrollTop();
        if ($(this).width() != width) {
            if ($(this).width() > 991) {
                if (sc > 10) {
                    $('.MainNav').css({
                        'background-color': '#FFF',
                        'padding':'.5rem 1rem',
                        'box-shadow':'0px 3px 10px #0000001a'
                    });
                    $('.MainNav .navbar-brand img').css({
                        'height': '100px'
                    });
                }    
                else {
                    $('.MainNav').css({
                        'background-color': 'transparent',
                        'padding':'20px 1rem',
                        'box-shadow':'unset'
                    });
                    $('.MainNav .navbar-brand img').css({
                        'height': '100px'
                    });
                }
            }
            else {
                if (sc > 10) {
                    $('.MainNav').css({
                        'background-color': '#FFF',
                        'padding':'.5rem 1rem',
                        'box-shadow':'0px 3px 10px #0000001a'
                    });
                    $('.MainNav .navbar-brand img').css({
                        'height': '65px'
                    });
                }    
                else {
                    $('.MainNav').css({
                        'background-color': '#FFF',
                        'padding':'.5rem 1rem',
                        'box-shadow':'0px 3px 10px #0000001a'
                    });
                    $('.MainNav .navbar-brand img').css({
                        'height': '65px'
                    });
                }
            }
            width = $(window).width();
        }
    });




    $(".collection_item .image img,.product_item .image img").on("error", function () {
        $(this).attr('src', 'images/NoImage.png');
    });





    


    $('#MyAddress .content .NewAddressButton a').click(function(){
        $('#MyAddress .content .Form').slideDown(1000);
        $('html, body').animate({
            scrollTop: $("#MyAddress .content .Form").offset().top-100
        }, 1000);
    })
    $('#MyAddress .content .Form .FormButtons .CancelBtn').click(function(){
        $('#MyAddress .content .Form').slideUp(1000);
        $('html, body').animate({
            scrollTop: $("#MyAddress").offset().top-100
        }, 1000);
    })


    $('#Category_page #FilterBtn').click(function(){
        $('#Category_page .Filter_Mobile').slideToggle();
    })



    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
     
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
        $input.val(value);
        
    });
     
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value < 100) {
            value = value + 1;
        } else {
            value =100;
        }
    
        $input.val(value);
    });


    var FavIcon = 0;  
    $('#ProductDetails .Product_content .AddToFav img').click(function(){
        if (FavIcon == 0) {
            $(this).attr('src', 'images/selectedfavDetails.png');
            FavIcon = 1;
        } 
        else if(FavIcon == 1) {
            $(this).attr('src', 'images/favDetails.png');
            FavIcon = 0;
        }
    });



    $(document).ready(function() {
        $('select').niceSelect();
    });



    $("#Category_page .SortBy ul li").click(function() {
        $("#Category_page .SortBy ul li").removeClass("active");
        $(this).addClass("active");
    });

});






