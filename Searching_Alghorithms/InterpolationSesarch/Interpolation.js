function InterpolationSearch(arr,findingElement) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high && findingElement >= arr[low] && findingElement <= arr[high]) {
        let pos = low + (((high - low) / (arr[high] - arr[low])) * (findingElement - arr[low]));
        if(arr[pos] == findingElement) {
            return pos;
        } else if(arr[pos] < findingElement) {
            low = pos + 1;
        } else {
            high = pos - 1;
        };
    };
    return -1;
};

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(InterpolationSearch(numbers, 70)); 
console.log(InterpolationSearch(numbers, 25)); 

let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(InterpolationSearch(evenNumbers, 10)); 
console.log(InterpolationSearch(evenNumbers, 5)); 