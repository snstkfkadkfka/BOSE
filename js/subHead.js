$("section article,footer,.Mobile_header .icon li:nth-child(1),.Mobile_header .icon li:nth-child(3), .menuicon,.mainmenu li:nth-child(1),.mainmenu li:nth-child(2),.mainmenu li:nth-child(3),.mainmenu li:nth-child(4),.mainmenu li:nth-child(5),.mainmenu li:nth-child(6),.menu li:nth-child(1),.menu li:nth-child(2),.menu li:nth-child(3),.menu li:nth-child(4),.menu li:nth-child(5),.menu li:nth-child(6)").click(function(){
    return false;
  })
  
  
    $("header").addClass("on")

    const menuIcon = $('.menu_icon');
    const menuicon = $('.menuicon');
    menuIcon.click(function(e) {
        e.preventDefault();
        menuIcon.toggleClass('active');
        $(".mainmenu").toggleClass('on');

    });
    // $(".menuicon").click(function(e) {
    //     //내가 지금 클릭한 곳이 layerSnb_mo 안쪽이니?
    //     if ($(".menu").has(e.target).length === 0) {
    //         $(".menu").animate({
    //             left: "-400px"
    //         }, function() {
    //             $(".menu").hide();
    //         });
    //     }
    // });
    menuicon.click(function() {
       $(".menu").addClass('Action');
    });
    $(".menu .bg").click(function() {
       $(".menu").removeClass('Action');
    });

  
    $("main section article .img .pic li:first-child").siblings().hide();
    $("main section article .img .color li a").hover(function(e) {
        e.preventDefault(); 
    
        // 현재 아티클 요소를 찾기 위해 부모를 탐색
        const currentArticle = $(this).closest('article');
        
        // 현재 아티클 내의 이미지만 숨김
        currentArticle.find(".img .pic li").fadeOut(200);
        
        // 현재 아티클 내의 특정 이미지만 보이게 함
        currentArticle.find($(this).attr("href")).stop().fadeIn(200);
        
        return false;
    });

    // $("main section article .img .pic li:not(1)").hide();
    // $("main section article .img .color li a").hover(function(e){
    //     e.preventDefault;
    //     $("main section article .img .pic li").stop().fadeOut(200)
    //    $($(this).attr("href")).stop().fadeIn(200)
    // })

	
        const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모 요소명
            itemSelector: "article", //배치할 요소명
            columnWidth: "article", //넓이값을 구할 요소명
            transitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도
        });	
    
        //클릭할 모든 버튼 요소 변수에 저장
        const btns = document.querySelectorAll("main .but li");
    
        //버튼의 갯수만큼 반복을 돌면서 
        for(let el of btns){
    
            //각 버튼에 클릭 이벤트 연결
            el.addEventListener("click", e=>{
                e.preventDefault();
    
                //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
                const sort = e.currentTarget.querySelector("a").getAttribute("href");
    
                //grid에 저장된 결과값을 불러와 재정렬 기능 연결
                grid.arrange({
                    //옵션값으로 sort변수값 지정
                    filter : sort
                });
    
                //다시 모든 버튼의 갯수만큼 반복을 돌면서
                for(let el of btns){
                    //각 버튼의 클래스명 "on"을 제거해 비활성화
                    el.classList.remove("on");
                }
                
                //클릭한 대상만 선택해서 클래스명 "on"을 추가해 활성화
                e.currentTarget.classList.add("on");
            })
        }	
    