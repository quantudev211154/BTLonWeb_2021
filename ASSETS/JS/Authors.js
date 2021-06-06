const modalActive = document.querySelector('.modal')
const modalChild = document.querySelector('.modal-body')

;(function removeModal(){
  window.onclick = (e) => {
    if (e.target !== modalChild){
      modalActive.classList.add('hide')
    }
  }
})()

const target1 = document.getElementById('gmail1')
const target2 = document.getElementById('gmail2')

target1.value = 'quantu211154@gmail.com'

;(function copyGm1ToClipBoard(){
  target1.onclick = () => {
    target1.setSelectionRange(0, 99999)
    document.execCommand('copy')
    console.log('Copied')
    alert('Đã copy email vừa rồi vào bộ nhớ đệm')
  }
})()