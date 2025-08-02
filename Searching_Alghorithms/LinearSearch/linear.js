function linearSearch(arr,findingElement) {
    for(let i = 0; i < arr.length;i++) {
        if(arr[i] === findingElement) {
            return i;
        } else {
            continue;
        };
    };
    return -1;
};

let array = ['apple','banana','watermelon'];
let trueElement = 'watermelon';
let falseElement = 'mango';

let result1 = linearSearch(array,trueElement);
console.log(result1);

let result2 = linearSearch(array,falseElement);
console.log(result2);
