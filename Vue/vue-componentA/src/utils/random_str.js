export default function (len = 32) {
  const $cahrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $cahrs.length
  let strKey = ''
  for (let index = 0; index < len; index++) {
    strKey += $cahrs.charAt(Math.floor(Math.random() * maxPos))
  }
  return strKey
}
