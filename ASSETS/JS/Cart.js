const activeHideCart = document.getElementById('expand')
const listItem = document.querySelector('.demoCart-listItem')
const listItemChild = document.querySelectorAll('.demoCart-listItem-item')
const deleteItem = document.querySelectorAll('.deletePrd')
const listSubtractIcon = document.querySelectorAll('.subtractIcon')
const listAddIcon = document.querySelectorAll('.addIcon')
//
const listPhoneName = document.querySelectorAll('.phoneName')
const listPhoneColor = document.querySelectorAll('.phoneColor')
const listPhoneSto = document.querySelectorAll('.phoneSto')
const listQuantityInp = document.querySelectorAll('.phoneQuantity')
const listPrice = document.querySelectorAll('.phonePrice')
const listTotalPrice = document.querySelectorAll('.phoneTotalPrice')
const listPaymentBtn = document.querySelectorAll('.phonePayment')

;(function expandCart(){
  activeHideCart.onclick = () => {
    if (listItem.classList.contains('active')){
      listItem.classList.remove('active')
      activeHideCart.classList.remove('active')
      listItemChild.forEach(item => {
        item.classList.remove('active')
      });
    }
    else{
      listItem.classList.add('active')
      activeHideCart.classList.add('active')
      listItemChild.forEach(item => {
        item.classList.add('active')
      });
    }
  }
})()

;(function disableInpQuantity(){
  listQuantityInp.forEach(inp => {
    inp.disabled = true
    inp.value = '1'
  });
})()

 function convertFromIntToString(source){
  var tmp = ''
  var count = 0
  var result = ''
  var count2 = 0
  for (let i = source.length - 1; i >= 0; i--){
    if (count != 3){
      tmp += source.charAt(i)
      count++;
      count2++
    }
    if (count == 3 && count2 < source.length){
        count = 0
        tmp += '.'
    }
  }
  for (let i = tmp.length - 1; i >= 0; i--){
    result += tmp.charAt(i)
  }
  return result
}

function convertFromStringToInt(source){
  var result = ''
  for (let i = 0; i < source.length; ++i){
    if (source.charAt(i) != '.'){
      result += source.charAt(i)
    }
  }
  return parseInt(result)
}

;(function editQuantityValue(){
  for (let i = 0; i < listQuantityInp.length; ++i){
    listAddIcon[i].onclick = () => {
      if (listQuantityInp[i].value == '5'){
        listAddIcon[i].classList.add('active')
      }
      else{
        var currenQuan = parseInt(listQuantityInp[i].value) + 1
        listQuantityInp[i].value = currenQuan
        listSubtractIcon[i].classList.remove('active')
        var prdPrice = convertFromStringToInt(listPrice[i].innerHTML)
        var currentTotalPrice = prdPrice * currenQuan
        var convertTotalPrice = convertFromIntToString(currentTotalPrice + '')
        listTotalPrice[i].innerHTML = convertTotalPrice
      }
    }
    listSubtractIcon[i].onclick = () => {
      if (listQuantityInp[i].value == '1'){
        listSubtractIcon[i].classList.add('active')
        listAddIcon[i].classList.remove('active')
      }
      else{
        var currenQuan = parseInt(listQuantityInp[i].value) - 1
        listQuantityInp[i].value = currenQuan
        listAddIcon[i].classList.remove('active')
        var prdPrice = convertFromStringToInt(listPrice[i].innerHTML)
        var currentTotalPrice = prdPrice * currenQuan
        var convertTotalPrice = convertFromIntToString(currentTotalPrice + '')
        listTotalPrice[i].innerHTML = convertTotalPrice
      }
    }
  }
})()

;(function deletePrd(){
  for (let i = 0; i < listItemChild.length; i++){
    deleteItem[i].onclick = () => {
      listItem.removeChild(listItem.childNodes[i + 1])
    }
  }
  if (listItemChild.length == 0)
    alert('Gio hang rong')
})()

;(function activePayment(){
  for (let i = 0; i < listPaymentBtn.length; ++i){
    listPaymentBtn[i].onclick = () => {
      localStorage.clear()
      var data = [listPhoneName[i].innerHTML,
                  listPhoneColor[i].innerHTML,
                  listPhoneSto[i].innerHTML,
                  listQuantityInp[i].value,
                  listTotalPrice[i].innerHTML
                  ]
      localStorage.setItem(i, data)
      location.assign('../HTML/Payment.html')
    }
  }
})()