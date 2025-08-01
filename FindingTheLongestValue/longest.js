// Find the most letters have word from array

function findingLongestWord(arr) {
    let maxLength = 0;
    let longestWord = "";
    for(let i = 0;i < arr.length;i++) {
        let newElement = arr[i];
        if(newElement.length > maxLength) {
            maxLength = newElement.length;
            longestWord = newElement;
        };
    };
    console.log(longestWord);
};

let array = ['vasauygv','gsadig','fgwy'];

findingLongestWord(array);