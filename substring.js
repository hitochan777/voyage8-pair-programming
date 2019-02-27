function searchForSubstring(stringToSearch, stringToFind) {
  if (stringToSearch === null || stringToFind === null) {
      return -1
  }

  if (stringToFind.length === 0) {
      return -1
  }

  for (let i = 0; i < stringToSearch.length; ++i) {
      let isMatch = true
      for (let j = 0; j < stringToFind.length; ++j) {
          if (stringToSearch[i+j] !== stringToFind[j]) {
              isMatch = false
              break
          }
      }
      if (isMatch) {
          return i
      }
  }
  return -1;
}

/*
                    i
                   012345
stringToSearch     abbaba
                    j
                   01
stringToFind       bb
*/


console.log(searchForSubstring("aababb", null) === -1)
console.log(searchForSubstring("aababb", "bb") === 4)
console.log(searchForSubstring("abcdef", "fdasfdas") === -1)
console.log(searchForSubstring("abcdef", "cde") === 2)
console.log(searchForSubstring("abcdef", "abcdef") === 0)
console.log(searchForSubstring("abcdef", "") === -1)