const chatBox = document.getElementById('messageBox')
const customeInp = document.getElementById('customerMessage')

;(function addQuestion(){
  customeInp.onkeypress = (e) => {
    if (e.key == 'Enter'){
      var message = customeInp.value
      if (message != ''){
        chatBox.innerHTML +=
        `
        <div class="container-box-boxChat-mainBox-message cus">
              <p>${message}</p>
        </div>
        `
        customeInp.value = ''
        chatBox.scrollTop = chatBox.scrollHeight
      }
    }
  }
})()