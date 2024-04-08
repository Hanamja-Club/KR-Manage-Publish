//race_num.js

$(document).ready(function() {
    var originalTitle = $("#app-title").text(); // 초기 헤더 문구 저장

    // 초기에는 h1이 디스플레이되어 있음
    var isHeaderDisplayed = true;

    $("#menu-toggle").click(function() {
        var mobileNav = $("#mobile-nav");
        mobileNav.slideToggle();

        // 메뉴가 드롭다운되었을 때 h1 태그의 위치 변경
        if (mobileNav.is(":visible")) {
            // 드롭다운 메뉴가 h1을 덮음
            $("#app-title").insertAfter("#mobile-nav");
            isHeaderDisplayed = false; // h1이 현재 디스플레이되지 않음
        } else {
            // 메뉴가 올라갔을 때 h1 태그를 원래 위치로 이동
            $("#app-title").insertBefore("#menu-toggle");
            // h1이 다시 디스플레이됨
            isHeaderDisplayed = true;
            // 원래 헤더 문구로 복원
            $("#app-title").text(originalTitle);
        }
    });

    // 메뉴 항목 클릭 시
    $("#mobile-nav ul li a").click(function() {
        $("#app-title").text($(this).text());
        $("#mobile-nav").slideUp();

        // 메뉴가 다시 올라갔을 때 h1 태그가 디스플레이되어야 함
        if (!isHeaderDisplayed) {
            $("#app-title").insertBefore("#menu-toggle");
            isHeaderDisplayed = true;
            $("#app-title").text(originalTitle); // 원래 헤더 문구로 복원
        }
    });
});