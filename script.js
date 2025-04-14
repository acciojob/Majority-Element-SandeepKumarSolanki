//your code here

let arr = [2 ,1 ,2];

function majorElements(nums) {
	let map = new Map();
	for(let t of nums){
		if(map.has(t)){
			map.set(t , map.get(t)+1);
		}else{
			map.set(t , 1);
		}
	}
	let maxElement = 0;
	let maximum = -1;
	for(let [key,value] of map){
		if(maximum < value){
			maximum = value;
			maximumElements = key;
		}
	}
	return maxElement;
}

console.log(majorElements(arr));

