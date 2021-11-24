$(function(){
    var $menu = $("header ul li"), // 메뉴 변수
        $contents = $("section > div"); // 컨텐츠 변수
        console.log($menu);
        console.log($contents);
    $menu.click(function(x){
        x.preventDefault(); // 모든 이벤트 삭제
        var idx = $(this).index(); // 각 메뉴별 index 번호를 가져온다.
        console.log(idx);
        var section = $contents.eq(idx); // 배열로 되어있는 idx를 참조하여 section 변수를 선언한다.
        /*
        var section0 = $contents.eq(0) >> profile
        var section1 = $contents.eq(1) >> work
        var section2 = $contents.eq(2) >> email
        */
       console.log(section);
       var sectionDistance = section.offset().top-(115);
       console.log(sectionDistance);
       $("html, body").stop().animate({scrollTop:sectionDistance});
    });
    $(window).scroll(function(){ // 윈도우를 스크롤 했을 때
        $contents.each(function(){ // 컨텐츠 마다 할 일
            if($(this).offset().top <= $(window).scrollTop()+(115)){
                var idx = $(this).index();
                $menu.removeClass("on");
                $menu.eq(idx).addClass("on");
            }
        });
    });
});