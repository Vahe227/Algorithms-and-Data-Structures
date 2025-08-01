function selectionSort(arr) {
    let n = arr.length;

    for(let i = 0;i < n - 1;i++) {
        let little_idx = i;

        for(let j = i + 1; j < n;j++) {
            if(arr[j] < arr[little_idx]) {
                little_idx = j;
            };
        };
        let temp = arr[i];
        arr[i] = arr[little_idx];
        arr[little_idx] = temp;
    };
    return arr;
};

let array = [78,13,345,23,90,1,91,2,3,21,89];
let result = selectionSort(array);
console.log(result);

