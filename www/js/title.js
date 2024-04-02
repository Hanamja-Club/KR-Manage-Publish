$(document).ready(function() {
    // 로그인 버튼 클릭 시 모달 활성화
    $('#loginButton').click(function() {
        // 입력된 아이디와 패스워드 가져오기
        var userId = $('#userId').val();
        var userPW = $('#userPW').val();
        
        // 아이디와 패스워드 검증 로직 (여기서는 단순히 존재 여부만 확인)
        if (!userId) {
            showModal('ID를 확인해주세요.');
        } else if (!userPW) {
            showModal('패스워드를 확인해주세요.');
        }
    });
    
    // 모달 닫기 버튼 클릭 시 모달 닫기
    $('.modal-close').click(function() {
        closeModal();
    });
});

// 모달 보이기
function showModal(message) {
    // 모달 내용 설정
    $('.modal-content').text(message);
    // 모달 활성화
    $('.modal').addClass('active');
}

// 모달 닫기
function closeModal() {
    // 모달 비활성화
    $('.modal').removeClass('active');
}
