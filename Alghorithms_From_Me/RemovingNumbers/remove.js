function removingNumbers(arr) {
    let currentNums = [];
    for(let i = 0; i < arr.length;i++) {
        if(arr[i] == arr[i + 1]) {
            continue;
        } else {
            currentNums.push(arr[i]);
        };
    };
    return currentNums;
};

let nums = [1,1,2,2,2,3,4,5,5];

console.log(removingNumbers(nums));
