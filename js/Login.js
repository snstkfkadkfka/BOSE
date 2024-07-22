$("footer,.Mobile_header .icon li:nth-child(1),.Mobile_header .icon li:nth-child(3), .menuicon,.mainmenu li:nth-child(2),.mainmenu li:nth-child(3),.mainmenu li:nth-child(4),.mainmenu li:nth-child(5),.mainmenu li:nth-child(6),.menu li:nth-child(2),.menu li:nth-child(3),.menu li:nth-child(4),.menu li:nth-child(5),.menu li:nth-child(6),main").click(function(){
    return false;
  })
 
  

    const menuIcon = $('.menu_icon');
    const menuicon = $('.menuicon');
    menuIcon.click(function(e) {
        e.preventDefault();
        menuIcon.toggleClass('active');
        $(".mainmenu").toggleClass('on');

    });
   
    menuicon.click(function() {
       $(".menu").addClass('Action');
    });
    $(".menu .bg").click(function() {
       $(".menu").removeClass('Action');
    });

$("main .log .input li").click(function(){
   $("main .log .input li").css({borderColor:" #878787"});
   $(this).css({borderColor:" #000"});
}) 
$("main .Login .log .small .check").click(function(){
   $("main .Login .log .small .check").toggleClass("on")
})