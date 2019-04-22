function reverseInt(num){
  return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);  
}

console.log(reverseInt(-51));
