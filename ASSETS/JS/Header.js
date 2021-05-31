;(function activeSearchBar(){
  const activeSearch = document.getElementById('activeSearchBar')
  const searchBar = document.getElementById('searchBar')
  activeSearch.onclick = () => {
    if (searchBar.classList.contains('active')){
      searchBar.classList.remove('active')
    }
    else{
      searchBar.classList.add('active')
    }
  }
})()

;(function unactiveSearchBar(){
  const searchBar = document.getElementById('searchBar')
  const unactiveBtn = document.getElementById('closeSearchBar')
  unactiveBtn.onclick = () => {
    searchBar.classList.remove('active')
  }
})()

;(function activeHamburger(){
  const toggle = document.querySelector('.header-hamburger')
  const menu = document.querySelector('.header-nav')
  const activeBtn = document.getElementById('activeSubMenu')
  const dropdown = document.getElementById('submenu')
  let moveElement = document.getElementById('moving')
  toggle.onclick = () => {
    if (toggle.classList.contains('active')){
      toggle.classList.remove('active')
      menu.classList.remove('active')
      activeBtn.classList.remove('active')
      dropdown.classList.remove('active')
      moveElement.classList.remove('active')
    }
    else{
      toggle.classList.add('active')
      menu.classList.add('active')
      activeBtn.onclick = () => {
        if (activeBtn.classList.contains('active')){
          activeBtn.classList.remove('active')
          dropdown.classList.remove('active')
          moveElement.classList.remove('active')
        }
        else{
          activeBtn.classList.add('active')
          dropdown.classList.add('active')
          moveElement.classList.add('active')
        }
      }
    }
  }
})()

;(function controlDropdownMenu(){
  const activeBtn = document.getElementById('activeSubMenu')
  const dropdown = document.getElementById('submenu')
  activeBtn.onmouseover = () => {
    if (window.innerWidth > 850){
      dropdown.classList.add('active')
    }
  }
  activeBtn.onmouseleave = () => {
    if (window.innerWidth > 850){
      dropdown.classList.remove('active')
    }
  }
})()
