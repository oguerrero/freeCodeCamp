function telephoneCheck (str) {
  const regex2 = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/gm
  return regex2.test(str)
}

console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("(555)555-5555"))
console.log(telephoneCheck("555-5555"))
console.log(telephoneCheck("5555555"))
console.log(telephoneCheck("1 555-555-5555"))
console.log(telephoneCheck("(555-555-5555"))