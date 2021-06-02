const inpTarget = document.querySelectorAll('.inputData')
const boxTarget = document.querySelectorAll('.input')

;(function activeInput(){
  for (let i = 0; i < inpTarget.length; i++){
    inpTarget[i].onfocus = () => {
      boxTarget[i].classList.add('active')
      return
    }
  }
})()

window.onclick = (e) => {
  for (var i = 0; i < inpTarget.length; ++i){
    if (e.target !== inpTarget[i]){
      if (inpTarget[i].value === ''){
        boxTarget[i].classList.remove('active')
      }
    }
  }
}
