/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(/\s+/);

  let result = [];

  for(let x=arr.length-1; x>=0; x--){
   
    if(arr[x] !== ''){
      result.push(arr[x]);
    }

  }
    
  return result.join(' ');
};
console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));