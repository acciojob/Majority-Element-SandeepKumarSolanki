//your code here

function majorityElements(nums) {
	let n = nums.length-1;
	nums.sort((a,b)=> a-b);
	return nums[Math.floor(n/2)+1];
}

