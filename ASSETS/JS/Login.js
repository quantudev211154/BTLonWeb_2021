const listSpanInInp = document.querySelectorAll('.moving')
const listInput = document.querySelectorAll('.inputData')
const listStatusField = document.querySelectorAll('.statusDataInp')
const submitBtn = document.getElementById('submit')

;(function createAnimationForInput(){
  for (let i = 0; i < listInput.length; ++i){
    listInput[i].onfocus = () => {
      listSpanInInp[i].classList.add('active')
    }
  }
})()

;(function resetAnimation(){
  window.onclick = (e) => {
    for (let i = 0; i < listInput.length; i++){
      if (e.target !== listInput[i]){
        if (listInput[i].value === ''){
          listSpanInInp[i].classList.remove('active')
        }
      }
    }
  }
})()

function makeNotifyForAppleIDInp(){
  if (listInput[0].value == ''){
    listStatusField[0].innerHTML = 'Bạn chưa cung cấp AppleID'
    listInput[0].style.border = '1px solid red'
  }
}

function makeNotifyForPasswordInp(){
  if (listInput[1].value == ''){
    listStatusField[1].innerHTML = 'Bạn chưa cung cấp mật khẩu'
    listInput[1].style.border = '1px solid red'
  }
}

;(function checkAppleIdData(){
  listInput[0].onblur = () => {
    makeNotifyForAppleIDInp()
  }
  listInput[0].onkeypress = () => {
    listStatusField[0].innerHTML = ''
    listInput[0].style.border = '1px solid #989699'
  }
})()

;(function checkPasswordData(){
  listInput[1].onblur = () => {
    makeNotifyForPasswordInp()
  }
  listInput[1].onkeypress = () => {
    listStatusField[1].innerHTML = ''
    listInput[1].style.border = '1px solid #989699'
  }
})()

;(function preTestAllDataInput(){
  submitBtn.onclick = () => {
    if (listInput[0].value == ''){
      makeNotifyForAppleIDInp()
    }
    if (listInput[1].value == ''){
      makeNotifyForPasswordInp()
    }
    else{
      alert('Tài khoản của bạn được chấp thuận')
    }
  }
})()

