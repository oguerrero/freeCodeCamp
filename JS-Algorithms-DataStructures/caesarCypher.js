function rot13 (str) {
  str = str.split('').map((letter) => {
    // A => 65 Z => 90
    if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
      if (letter.charCodeAt() < 78) return String.fromCharCode(letter.charCodeAt() + 13)
      return String.fromCharCode(letter.charCodeAt() - 13)
    }
    return letter
  })
  return str.join('');
}

rot13("SERR PBQR PNZC");