
function palindrome (str) {
    const result = document.querySelectorAll('#result')
  
    const array = str.split(' ').join('')
    let j = array.length - 1
    for (let i = 0; i <= j / 2; i++) {
      if (array[i] !== array[j]) {
        return false
      }
      j--
    }
    return true
  }
  
  console.log(palindrome('do gees see god'))
  
  function checkPalindrome () {
    const word = document.getElementById('question').value
    const palindrom = palindrome(word)
    const answer = document.getElementById('result')
  
    if (palindrom) {
      answer.innerHTML = 'The word entered is a Palindrome'
    } else {
      answer.innerHTML = 'The word entered is not a Palindrome'
    }
  }
  
  if (onclick) {
    checkPalindrome()
  }
  