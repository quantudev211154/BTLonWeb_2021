const menu = document.querySelector('.container-menu')
const menuController = document.querySelector('.container-menu-openMenu')
const popup = document.querySelectorAll('.container-menu-listOption-option-box-text')
const wrapper = document.querySelector('.container-wrapper')

;(function controlMenu(){
  menuController.onclick = () => {
    if (menuController.classList.contains('active')){
      menu.classList.remove('active')
      menuController.classList.remove('active')
      for (let i = 0; i < popup.length; ++i){
        popup[i].classList.remove('active')
      }
      wrapper.classList.remove('active')
    }
    else{
      menu.classList.add('active')
      menuController.classList.add('active')
      for (let i = 0; i < popup.length; ++i){
        popup[i].classList.add('active')
      }
      wrapper.classList.add('active')
    }
  }
})()

// Tool Bar
const clearBtn = document.getElementById('clearSearch')
const inpSearch = document.getElementById('search')

;(function controlSearchBar(){
  inpSearch.onfocus = () => {
    clearBtn.classList.add('active')
  }
})()

;(function clearSearchBar(){
  clearBtn.onclick = () => {
    inpSearch.value = ''
    inpSearch.focus()
  }
})()

// User List Option Drop Down
const userCoverPhoto = document.getElementById('user')
const userListOption = document.querySelector('.container-wrapper-toolBar-user-box-listOption')
const options = document.querySelectorAll('.container-wrapper-toolBar-user-box-listOption-option')

;(function controlUserListOption(){
  window.onclick = (e) => {
    if (e.target === userCoverPhoto){
      if (userListOption.classList.contains('active')){
        userListOption.classList.remove('active')
      }
      else{
        userListOption.classList.add('active')
      }
    }
    if (e.target !== userCoverPhoto && e.target !== userListOption){
      if (userListOption.classList.contains('active')){
        userListOption.classList.remove('active')
      }
    }
    if (e.target !== inpSearch && e.target !== clearBtn){
      clearBtn.classList.remove('active')
    }
  }
})()

;(function logout(){
  options[1].onclick = () => {
    window.location.assign('./Landing.html')
  }
})()

// Direction
const mainDashBoard = document.querySelectorAll('.container-menu-listOption-option-box')

;(function direction(){
  mainDashBoard[0].onclick = () => {
    window.location.assign('./Admin.html')
  }
  mainDashBoard[1].onclick = () => {
    window.location.assign('./Admin_Analystic.html')
  }
  mainDashBoard[2].onclick = () => {
    window.location.assign('./Admin_Statitic.html')
  }
  mainDashBoard[3].onclick = () => {
    window.location.assign('./Admin_Inventory.html')
  }
  mainDashBoard[4].onclick = () => {
    window.location.assign('./Admin_Staff.html')
  }
  mainDashBoard[5].onclick = () => {
    window.location.assign('./Admin_Product.html')
  }
})()