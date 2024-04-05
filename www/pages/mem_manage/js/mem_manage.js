//mem_manage.js

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

    //////////////////////////////////////////////

    $("#menu").change(function() {
        var selectedOption = $(this).val();
        var infoElements = $("#info").children();
    
        if (selectedOption === "none") {
            infoElements.each(function() {
                if ($(this).is("h2")) {
                    $(this).show();
                } else {
                    // p 태그의 아랫쪽 변은 유지하되, 내용을 숨김
                    $(this).find("p").text("");
                }
            });
        } else {
            infoElements.show();
    
            // 각 항목에 대한 정보를 설정합니다. 여기서는 임의의 정보를 넣었습니다.
            switch (selectedOption) {
                case "john-doe":
                    $("#name-info").text("John Doe");
                    $("#nickname-info").text("JD");
                    $("#club-info").text("Speedsters");
                    $("#crew-info").text("Nitro Team");
                    $("#rank-tier-info").text("Diamond");
                    break;
                case "jane-smith":
                    $("#name-info").text("Jane Smith");
                    $("#nickname-info").text("JS");
                    $("#club-info").text("Race Kings");
                    $("#crew-info").text("Turbo Crew");
                    $("#rank-tier-info").text("Gold");
                    break;
            }
        }
    });
});

// 특정 요소의 높이를 설정하는 함수
function setHeightToElement(element, height) {
    element.style.height = height;
}

// p 태그에 높이를 설정하는 함수
function setHeightToPTags() {
    // #info 내부의 모든 p 태그를 선택
    var pTags = document.querySelectorAll('#info div p');

    // 각 p 태그에 대해 처리
    pTags.forEach(function(pTag) {
        // p 태그의 내용이 없는 경우
        if (!pTag.textContent.trim()) {
            // 해당 p 태그의 부모 div 요소의 높이를 가져와서 설정
            var divHeight = pTag.parentElement.clientHeight + 'px';
            setHeightToElement(pTag, divHeight);
        }
    });
}

// 페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 초기화 시 p 태그의 높이 설정
    setHeightToPTags();
});