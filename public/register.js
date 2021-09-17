$(document).ready(function () {
  
  $('#idcheckbtn').click(function () {
    const id = $('#id').val()
    console.log(id)

    $.post("/idcheck", {
      id : id
    })
    .done( (data) => {
      console.log(data)
      
      if (!data) {
        alert('사용가능한 아이디입니다')  
      } else {
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