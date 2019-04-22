  /* 1) count unique values O(N) [frequency pattern] */
  
  function countUniqueValues(sortedArray) {
     let unique={};
     sortedArray.forEach( e => {
       if(unique[e] === undefined){
         unique[e]=1;
       }  
       else{
         unique[e]+=1;
       }
     })
     return Object.keys(unique).length;
   }
console.log(countUniqueValues([1,2,3,4,4,4,7,4,12,14,13]));

/* 1) count unique values O(N) ends [frequency pattern]*/

  /* 2) compare 2 arrays [frequency pattern]*/
function countFrequency(array) {
    let freq = {};
    array.forEach(e => {
        freq[e] = (freq[e] == undefined)? 1 : freq[e] + 1;
    });
    return freq;
}

function sameElementFrequency(array1, array2) {
    if (array1.length != array2.length) return false;
    const freq1 = countFrequency(array1);
    const freq2 = countFrequency(array2);
    for(let i = 0; i < array1.length; i++) {
        const e = array1[i];
        if (freq1[e] != freq2[e]) return false;
    }
    return true;
}

console.log(sameElementFrequency([1,2,2,3], [2,1,2,3]));

 /* 2) compare 2 arrays ends [frequency pattern] */
/* 3) anagram [frequency pattern]  */
function isAnagram(first,second) {
  let lookup={};
  if(first.length!==second.length){
    return false;
  }
  for(let i=0;i<first.length;i++){
    let letter=first[i];
    lookup[letter] ? lookup[letter]+=1 : lookup[letter]=1;
  }
  console.log(lookup)
  for(let j=0;j<second.length;j++){
  let letter=second[j];
   if(!lookup[letter]) {
   return false;
   }
   else{
     lookup[letter]-=1;
   }
  }
  return true;
}

console.log(isAnagram('anagram','nagaramm'));
/* 3) anagram ends [frequency pattern] */

/* 4) maxsum substring [sliding window] O(n) */

function maxSubString(a,num){
  let maxSum=0;
  let tempSum=0;
  if(a.length<num) return null;
  for(let i=0;i<num;i++){
    maxSum+=a[i]
  }
  tempSum=maxSum;
  for(let j=num;j<a.length;j++){
    tempSum=tempSum - a[j-num] +a[j];
    maxSum= Math.max(tempSum,maxSum);
  }
  return maxSum;
}

console.log(maxSubString([3,5,1,8],2));

/* 4) maxsum substring [sliding window] O(n) ends */
