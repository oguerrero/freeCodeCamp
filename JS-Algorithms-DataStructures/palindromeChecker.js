function palindrome (str) {
  const regex = /[A-Za-z0-9]/g;
  str = str.toLowerCase().match(regex).join('')
  return str === [...str].reverse().join('')
}

palindrome("eye");