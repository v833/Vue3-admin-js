// 手机号码验证
export function checkPhone(value) {
  let regPhone = /^1[3456789]\d{9}$/
  return regPhone.test(value)
}

// 密码验证
export function checkPassword(value) {
  let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return regPassword.test(value)
}

// 验证码验证
export function checkCode(value) {
  let regCode = /[a-zA-Z0-9]{6}/;
  return regCode.test(value)
}