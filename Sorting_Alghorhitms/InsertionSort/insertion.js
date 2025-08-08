function insertionSort(arr) {
    for(let i = 1; i < arr.length;i++) {
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        };
        arr[j + 1] = key;
    };  
    return arr
};

let array = [10,9,8,7,6,5,4,3,2,1,0];
let result = insertionSort(array);
console.log(result);
