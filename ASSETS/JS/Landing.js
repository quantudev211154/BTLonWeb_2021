const backToTopIcon = document.querySelector('.backToTop')
const headerPos = document.querySelector('.header')
var lastScrollTop = 0

window.onscroll = () => {
  ;(function customHeader() {
    var scrollTop = window.scrollY
    if (scrollTop > lastScrollTop)
      headerPos.classList.add('active')
    else{
      headerPos.classList.remove('active')
    }
    lastScrollTop = scrollTop
  })()
  ;(function goToTop(){
    if (window.scrollY > 1300)
      backToTopIcon.classList.add('active')
    else
      backToTopIcon.classList.remove('active')
  })()
}

window.onload = () => {
  const figure1 = document.getElementById('animate1')
  figure1.classList.add('active')
}
