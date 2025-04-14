//your code here

let arr = [2 ,1 ,2];
function majorElement(nums) {
    let candidate = null;
    let count = 0;

    // First pass: Find a potential candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Second pass: Verify the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    }

    // In case there's no majority element (though the problem guarantees one exists)
    return null;
}


module.exports =  majorElement;

