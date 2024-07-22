$("footer,.Mobile_header .icon li:nth-child(1),.Mobile_header .icon li:nth-child(3), .menuicon,.mainmenu li:nth-child(2),.mainmenu li:nth-child(3),.mainmenu li:nth-child(4),.mainmenu li:nth-child(5),.mainmenu li:nth-child(6),.mainmenu li:nth-child(7),.menu li:nth-child(2),.menu li:nth-child(3),.menu li:nth-child(4),.menu li:nth-child(5),.menu li:nth-child(6),.menu li:nth-child(7)").click(function(){
    return false;
  })
 
  $("main .but li").click(function(){
    $("main .but li").removeClass("on");
    $(this).addClass("on")
  })
    $("header").addClass("on")

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


    