$(document).ready(function() {
    // 정해진 ID와 비밀번호
    const validId = "junghj96";
    const validPassword = "richard1996";

    // 로그인 버튼 클릭 시
    $("#loginButton").click(function() {
        // 입력된 ID와 비밀번호 가져오기
        const enteredId = $("#userId").val();
        const enteredPassword = $("#userPW").val();

        // ID와 비밀번호 검증
        if (enteredId === validId && enteredPassword === validPassword) {
            // 로그인 성공
            alert("로그인 성공!");
        } else {
            // 로그인 실패 시 모달 팝업
            $(".modal").css("display", "flex");
        }
    });

    // 모달 닫기 버튼 클릭 시
    $(".modal-close").click(function() {
        $(".modal").css("display", "none");
    });
});