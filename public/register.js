$(document).ready(function () {
  
  // 중복체크 버튼 클릭했을 때
  $('#idcheckbtn').click(function () {
    // 작성하기
    const id = $('#id').val()
    console.log(id)

    $.post("/idcheck", {
      id : id
    })
    .done( (data) => {
      console.log(data)
      
      if (!data) {
        // 작성하기

        alert('사용가능한 아이디입니다')  
      } else {
        // 작성하기

        alert('이미 사용중인 아디입니다')
      }
    })
  })



});


function moveHome(){
  location.href = "/index";
}

// function idcheck() {
//   const id = document.getElementById('id').value
//   alert(id)
//   location.href = '/idcheck?id=' + id
// }