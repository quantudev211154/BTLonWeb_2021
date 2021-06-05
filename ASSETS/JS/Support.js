const expander = document.querySelectorAll('.expandContent')
const moreContent = document.querySelectorAll('.content')

;(function expandContent(){
  for (let i = 0; i < expander.length; ++i){
    expander[i].onclick = () => {
      if (expander[i].classList.contains('active')){
        expander[i].classList.remove('active')
        moreContent[i].classList.remove('active')
      }
      else{
        expander[i].classList.add('active')
        moreContent[i].classList.add('active')
      }
    }
  }
})()