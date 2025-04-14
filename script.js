//your code here

let arr = [2 ,1 ,2];
function majorElement(nums) {
    let n = nums.length;
	nums.sort((a,b)=> a-b);
	return nums[Math.floor(n/2)+1];
}


module.exports =  majorElement;

