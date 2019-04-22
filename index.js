  /* 1) count unique values O(N) */
  
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

/* 1) count unique values O(N) ends */

  /* 2) compare 2 arrays */
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

 /* 2) compare 2 arrays ends */
