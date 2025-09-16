function iterativeBinarySearch(arr,target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
            return mid;
        };
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }; 
    };
    return -1;
};

let array = [5,2,8,10,34,67,1,23];

array.sort((a, b) => a - b);

let result = iterativeBinarySearch(array,2);
console.log(result);

function sayHi() {
    phrase = "Hello";
    let phrase;
    alert(phrase); // ReferenceError
}
