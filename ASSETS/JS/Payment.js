const modalBox = document.querySelector('.modal')
const optionToBuy = document.querySelectorAll('.option')

;(function directToSignIn(){
  optionToBuy[0].onclick = () => {
    window.location.assign('../HTML/Login.html')
  }
})()

;(function continueAsGuest(){
  optionToBuy[1].onclick = () => {
    modalBox.classList.add('hide')
  }
})()

// Input Data Controller
const inpData = document.querySelectorAll('.inputData')
const animate = document.querySelectorAll('.moving')
const statusData = document.querySelectorAll('.status')

;(function activeInput(){
  for (let i = 0; i < inpData.length; ++i){
    inpData[i].onfocus = () => {
      animate[i].classList.add('active')
      inpData[i].classList.add('active')
    }
  }
})()

;(function unactiveInput(){
  window.onclick = (e) => {
    for (let i = 0; i < inpData.length; ++i){
      if (e.target !== inpData[i]){
        if (inpData[i].value === ''){
          animate[i].classList.remove('active')
        }
        inpData[i].classList.remove('active')
      }
    }
  }
})()

const regexName = /^([A-Z]\w+\s?)+$/

function testName(){
  if (inpData[0].value.trim() == ''){
    statusData[0].innerHTML = 'Hãy cung cấp họ tên của bạn'
    inpData[0].style.border = '1px solid red'
    return false
  }
  if (regexName.test(inpData[0].value.trim())){
    statusData[0].innerHTML = ''
    inpData[0].style.border = '1px solid green'
    return true
  }
  else{
    statusData[0].innerHTML = 'Họ tên không hợp lệ'
    inpData[0].style.border = '1px solid red'
    return false
  }
}

;(function checkName(){
  inpData[0].onblur = () => {
    testName()
  }
})()


const regexEmail = /^[A-Za-z][\w\d.]+@((gmail)|(yahoo)|(outlook))(.com)$/

function testEmail(){
  if (inpData[1].value == ''){
    inpData[1].style.border = '1px solid red'
    statusData[1].innerHTML = 'Hãy cung cấp email của bạn'
    return false
  }
  if (!regexEmail.test(inpData[1].value)){
    inpData[1].style.border = '1px solid red'
    statusData[1].innerHTML = 'Email không hợp lệ'
    return false
  }
  else {
    inpData[1].style.border = '1px solid green'
    statusData[1].innerHTML = ''
    return true
  }
}

;(function checkEmail(){
  inpData[1].onblur = () => {
    testEmail()
  }
})()


function testBirthDay(){
  var cusBD = new Date(inpData[2].value)
  var currentDate = new Date()
  if (inpData[2].value == ''){
    inpData[2].style.border = '1px solid red'
    statusData[2].innerHTML = 'Hãy cung cấp ngày tháng năm sinh của bạn'
    return false
  }
  if (currentDate.getFullYear() - cusBD.getFullYear() < 18){
    inpData[2].style.border = '1px solid red'
    statusData[2].innerHTML = 'Bạn chưa đủ tuổi hoặc tuổi không hợp lệ'
    return false
  }
  else {
    inpData[2].style.border = '1px solid green'
    statusData[2].innerHTML = ''
    return true
  }
}

;(function checkBirthDay(){
  inpData[2].onblur = () => {
    testBirthDay()
  }
})()

const regexPhone = /^0\d{9}$/

;(function onlyNumber(){
  inpData[3].onkeypress = (e) => {
    if (!/[0-9.]/.test(e.key)){
      e.preventDefault();
    }
  }
})()

function testPhoneNumber(){
  if (inpData[3].value == ''){
    inpData[3].style.border = '1px solid red'
    statusData[3].innerHTML = 'Hãy cung cấp số điện thoại của bạn'
    return false
  }
  if (!regexPhone.test(inpData[3].value)){
    inpData[3].style.border = '1px solid red'
    statusData[3].innerHTML = 'Số điện thoại không hợp lệ'
    return false
  }
  else{
    inpData[3].style.border = '1px solid green'
    statusData[3].innerHTML = ''
    return true
  }
}

;(function checkPhoneNumber(){
  inpData[3].onblur = () => {
    testPhoneNumber()
  }
})()

function testAddress(){
  if (inpData[4].value === ''){
    inpData[4].style.border = '1px solid red'
    statusData[4].innerHTML = 'Bạn chưa cung cấp địa chỉ giao hàng'
    return false
  }
  else{
    inpData[4].style.border = '1px solid green'
    statusData[4].innerHTML = ''
    return true
  }
}

;(function checkAddress() {
  inpData[4].onblur = () => {
    testAddress()
  }
})()


const continueBtn = document.getElementById('continue')

function checkAllInpData(){
  testName()
  testEmail()
  testBirthDay()
  testPhoneNumber()
  testAddress()
  if (
  testName() &&
  testEmail() &&
  testBirthDay() &&
  testPhoneNumber() &&
  testAddress()){
    return true
  }
  return false
}

const paidBtn = document.getElementById('pay')

;(function confirmUserData(){
  continueBtn.onclick = () => {
    if (checkAllInpData() == true){
      paidBtn.classList.add('active')
      return
    }
    else{
      return
    }
  }
})()

// Load Product To Table
const productInfo = document.querySelectorAll('.prdInfo')
const data = JSON.parse(localStorage.getItem('0'))

window.onload = () => {
  for (let i = 0; i < data.length; ++i){
    productInfo[i].innerHTML = data[i]
  }
}

function openModal(){
  modalSuccess.classList.add('show')
}

;(function showSuccess(){
  paidBtn.onclick = () => {
    alert("Đặt mua thành công. Xin cảm ơn!")
    localStorage.clear()
  }
})()