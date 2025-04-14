//your code here

let arr = [2 ,1 ,2];
function majorElement(nums) {
     nums.sort((a,b)=> a-b);
    let n = nums.length;
    return nums[Math.floor(n/2)];
}


module.exports =  majorElement;

