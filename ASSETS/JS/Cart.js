// const activeHideCart = document.getElementById('expand')
// const listItem = document.querySelector('.demoCart-listItem')

// ;(function expandCart(){
//   activeHideCart.onclick = () => {
//     if (listItem.classList.contains('active')){
//       listItem.classList.remove('active')
//       activeHideCart.classList.remove('active')
//     }
//     else{
//       listItem.classList.add('active')
//       activeHideCart.classList.add('active')
//     }
//   }
// })()

var x = "27499000"

function convert(x){
  var y = ''
  var count = 0
  var re = ''
  for (let i = x.length - 1; i >= 0; i--){
    if (count != 3){
      y += x.charAt(i)
      count++
    }
    if (count == 3){
      count = 0
      y += '.'
    }
  }
  for (let i = y.length - 1; i > 0; i--){
    re += y.charAt(i)
  }
  return re
}

var pr = convert(x)
console.log(pr)