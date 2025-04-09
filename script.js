//your code here

let arr = [2 ,1 ,2];

function majorElements(nums) {
	let n = nums.length-1;
	nums.sort((a,b)=> a-b);
	return nums[Math.floor(n/2)+1];
}

console.log(majorElements(arr));

