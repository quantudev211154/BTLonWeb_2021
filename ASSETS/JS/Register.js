const inpTarget = document.querySelectorAll('.inputData')
const supportAnimate = document.querySelectorAll('.sp')
const statusList = document.querySelectorAll('.statusInp')

;(function activeInput(){
  for (let i = 0; i < inpTarget.length; i++){
    inpTarget[i].onfocus = () => {
      inpTarget[i].classList.add('active')
      supportAnimate[i].classList.add('active')
    }
  }
})()

window.onclick = (e) => {
  for (var i = 0; i < inpTarget.length; ++i){
    if (e.target !== inpTarget[i]){
      if (inpTarget[i].value === ''){
        supportAnimate[i].classList.remove('active')
      }
      inpTarget[i].classList.remove('active')
    }
  }
}

const regexFirstName = /^([A-Z]\w+\s?)+$/

function testFirstName(){
  if (inpTarget[0].value.trim() == ''){
    statusList[0].innerHTML = 'Hãy cung cấp họ của bạn'
    inpTarget[0].style.border = '1px solid red'
    return false
  }
  if (regexFirstName.test(inpTarget[0].value.trim())){
    statusList[0].innerHTML = ''
    inpTarget[0].style.border = '1px solid green'
    return true
  }
  else{
    statusList[0].innerHTML = 'Họ không hợp lệ'
    inpTarget[0].style.border = '1px solid red'
    return false
  }
}

;(function checkFirstName(){
  inpTarget[0].onblur = () => {
    testFirstName()
  }
})()

function testLastName(){
  if (inpTarget[1].value.trim() == ''){
    statusList[1].innerHTML = 'Hãy cung cấp tên của bạn'
    inpTarget[1].style.border = '1px solid red'
    return false
  }
  if (regexFirstName.test(inpTarget[1].value.trim())){
    statusList[1].innerHTML = ''
    inpTarget[1].style.border = '1px solid green'
    return true
  }
  else{
    statusList[1].innerHTML = 'Tên không hợp lệ'
    inpTarget[1].style.border = '1px solid red'
    return false
  }
}

;(function checkLastName(){
  inpTarget[1].onblur = () => {
    testLastName()
  }
})()

function testBirthDay(){
  var cusBD = new Date(inpTarget[2].value)
  var currentDate = new Date()
  if (inpTarget[2].value == ''){
    inpTarget[2].style.border = '1px solid red'
    statusList[2].innerHTML = 'Hãy cung cấp ngày sinh của bạn'
    return false
  }
  if (currentDate.getFullYear() - cusBD.getFullYear() < 18){
    inpTarget[2].style.border = '1px solid red'
    statusList[2].innerHTML = 'Bạn chưa đủ tuổi hoặc tuổi không hợp lệ'
    return false
  }
  else {
    inpTarget[2].style.border = '1px solid green'
    statusList[2].innerHTML = ''
    return true
  }
}

;(function checkBirthDay(){
  inpTarget[2].onblur = () => {
    testBirthDay()
  }
})()

const regexEmail = /^[A-Za-z][\w\d.]+@((gmail)|(yahoo)|(outlook))(.com)$/

function testEmail(){
  if (inpTarget[3].value == ''){
    inpTarget[3].style.border = '1px solid red'
    statusList[3].innerHTML = 'Hãy cung cấp email của bạn'
    return false
  }
  if (!regexEmail.test(inpTarget[3].value)){
    inpTarget[3].style.border = '1px solid red'
    statusList[3].innerHTML = 'Email không hợp lệ'
    return false
  }
  else {
    inpTarget[3].style.border = '1px solid green'
    statusList[3].innerHTML = ''
    return true
  }
}

;(function checkEmail(){
  inpTarget[3].onblur = () => {
    testEmail()
  }
})()

function testPassword(){
  if (inpTarget[4].value == ''){
    inpTarget[4].style.border = '1px solid red'
    statusList[4].innerHTML = 'Hãy tạo mật khẩu cho AppleID của bạn'
    return false
  }
  if (inpTarget[4].value.length < 5){
    inpTarget[4].style.border = '1px solid red'
    statusList[4].innerHTML = 'Mật khẩu của bạn quá ngắn'
    return false
  }
  else{
    inpTarget[4].style.border = '1px solid green'
    statusList[4].innerHTML = ''
    return true
  }
}

;(function checkPassword(){
  inpTarget[4].onblur = () => {
    testPassword()
  }
})()

function testRePassword(){
  if (inpTarget[5].value == ''){
    inpTarget[5].style.border = '1px solid red'
    statusList[5].innerHTML = 'Hãy xác nhận mật khẩu cho AppleID của bạn'
    return false
  }
  if (inpTarget[4].value != inpTarget[5].value){
    inpTarget[5].style.border = '1px solid red'
    statusList[5].innerHTML = 'Mật khẩu không khớp nhau'
    return false
  }
  else{
    inpTarget[5].style.border = '1px solid green'
    statusList[5].innerHTML = ''
    return true
  }
}

;(function checkPassword(){
  inpTarget[5].onblur = () => {
    testRePassword()
  }
})()

const regexPhone = /^0\d{9}$/

;(function onlyNumber(){
  inpTarget[6].onkeypress = (e) => {
    if (!/[0-9.]/.test(e.key)){
      e.preventDefault();
    }
  }
})()

function testPhoneNumber(){
  if (inpTarget[6].value == ''){
    inpTarget[6].style.border = '1px solid red'
    statusList[6].innerHTML = 'Hãy cung cấp số điện thoại của bạn'
    return false
  }
  if (!regexPhone.test(inpTarget[6].value)){
    inpTarget[6].style.border = '1px solid red'
    statusList[6].innerHTML = 'Số điện thoại không hợp lệ'
    return false
  }
  else{
    inpTarget[6].style.border = '1px solid green'
    statusList[6].innerHTML = ''
    return true
  }
}

;(function checkPhoneNumber(){
  inpTarget[6].onblur = () => {
    testPhoneNumber()
  }
})()

const verifyWay = document.querySelectorAll('input[name="verification"]:checked').value
const submitBtn = document.getElementById('submit')

function checkAllData(){
  testFirstName()
  testLastName()
  testBirthDay()
  testEmail()
  testPassword()
  testRePassword()
  testPhoneNumber()
  if (testFirstName() &&
  testLastName() &&
  testBirthDay() &&
  testEmail() &&
  testPassword() &&
  testRePassword() &&
  testPhoneNumber()){
    return true
  }
  return false
}

;(function confirmRegister(){
  submitBtn.onclick = () => {
    if (checkAllData() == true){
      alert('Thông tin của bạn được chấp thuận')
    }
    else{
      return
    }
  }

})()
