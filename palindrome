// solution 1
function palindrome(str){
  return str === str.split('').reverse().join('');
}

console.log(palindrome('abm'));

// solution 2
function palindrome2(str){
  return str.split('').every((char,i) => {
    return char===str[str.length-i-1];
  })
}

console.log(palindrome2('aba'));
