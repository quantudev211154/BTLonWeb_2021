const innerTextPos = document.getElementById('loginStatus')
const loginBtn = document.getElementById('login')

/**
 * Hiển thị ra màn hình thông báo 'không tồn tại tài khoản' nếu tài khoản không khớp
 * @param {boolean} status Tính hợp lệ của tài khoản đăng nhập
 * @param {String} message Thông báo lỗi muốn hiển thị
 */
function announceResult(status){
  if (status == true){
    innerTextPos.innerHTML = ''
  }
  else{
    innerTextPos.innerHTML = 'AppleID hoặc mật khẩu không đúng'
  }
}