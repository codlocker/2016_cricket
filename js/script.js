var main=function(){
    $('.icon-menu').click(function(){
        $('.sub-menu').animate({left : "0px"},200);
        $('body').animate({left : "285px"},200);
        $('.icon-menu').css("visibility","hidden");
    });
    var ip_add='XXX.XXX.XXX.XXX';
    $.get("http://ipinfo.io", function(response) {
        ip_add=response.ip;
    }, "jsonp")
    $('.icon-close').click(function(){
        $('.sub-menu').animate({left : "-285px"},200);
        $('body').animate({left : "0px"},200);
        $('.icon-menu').css("visibility","visible");
    });
    $('article').click(
        function()
        {
            $('article').removeClass('current');
            $('.description').hide();
            $(this).addClass('current');
            $(this).children('.description').show();
        }
    );
    $(document).keypress(function(event)
        {
        if(event.which === 111)
        {
            $('.description').hide();
            $('.current').children('.description').toggle();
        }
        else if(event.which === 97)
        {
            $('.current').children('.description').hide();
        }
        else if(event.which === 110)
        {
            var curr = $('.current');
            if(curr.next().length === 0){nex=$('article').first();}
            else{var nex = curr.next();}
            curr.removeClass('current');
            $('.description').hide();
            nex.addClass('current');
        }
    });
    $('.btn').addClass('disabled');
    $('.btn').click(function(e)
    {
        e.preventDefault();
        var post=$('.comments').val();
        if(post.length === 0){return false;}
        $('<li>').text(ip_add+" says "+post).prependTo('.posts');
        $('.comments').val('');
    });
    $(document).keyup(function()  
    {
        var post=$('.comments').val();
        if(post.length==0){
            $('.btn').addClass('disabled');
        }
        else{$('.btn').removeClass('disabled');}
    });
    
    $('.arrow-next').click(function(e) {
    e.preventDefault();
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function(e) {
    e.preventDefault();
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
$(".image-slider h2").hover(function()
{
    $(this).css("background-color","black");
},
function()
{
    $(this).css("background-color","gray");
    $(this).css("opacity","1");
}
);
};
$(document).ready(main);