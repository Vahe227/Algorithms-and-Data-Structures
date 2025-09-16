function NaiveStringAlghorithm(string, pattern) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== string[i + j]) break;
            if (j === pattern.length - 1) count++;
        };
    };
    return count;
};

let str = 'helloWorldMyNameIsVaheXachatryanImProgrammer';
let ptr = 'ghhud';
console.log(NaiveStringAlghorithm(str, ptr));

// function MaximumSubarray(nums, k) {
//     let total = 0;
//     for(let i = 0; i < k; i++) {
//         total += nums[i];
//     };
//     let maxTotal = total;
//     for(let i = k; i < nums.length; i++) {
//         total = nums[i] - nums[i - k];
//         maxTotal = Math.max(maxTotal, total);
//     };
//     return maxTotal / k;
// };

// function validPathenieses(s) {
//     let oppened = [],sonu = true;
//     for(let i = 0; i < s.length; i++) {
//         let value = s[i];
//         if(value == '(' || value == '[' || value == '{') {
//             oppened.push(value);
//         } else {
//             let prev = oppened.pop(), cal = prev + value;
//             if(!(cal == '()' || cal == '[]' || cal == '{}')) {
//                 sonu = false;
//                 break;
//             };
//         };
//     };
//     return sonu && !oppened.length;
// };

// function twoSum(nums, target) {
//     const map = new Map();
//     for(let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         let comploment = target - num;
//         if(map.has(comploment)) {
//             return [map.get(comploment), i];
//         };
//         map.set(num, i);
//     };
//     return [];
// }


// function canConstruct(ransomNote, magazine) {
//     const map = new Map();
//     let result = [];
//     for(let i = 0; i < ransomNote.length; i++) {
//         let word = ransomNote.slice(i, ransomNote.length);
//         result.push(word);
//     }
//     console.log(result);
// };


// let ransome = 'aab';
// let magazine = 'baa';
// console.log(canConstruct(ransome,magazine));


// function canConstruct(ransomNote, magazine) {
//     const map = new Map();
//     map.set('ransomeNote', ransomNote);
//     map.set('magazine', magazine);
//     let valOfMagazine = map.get('magazine');
//     let ransomNoteVal = map.get('ransomeNote');
//     for(let i = 0; i < valOfMagazine.length;i++) {
//         let sliceingValOfMagazine = valOfMagazine.slice(i, ransomNoteVal.length);
//         if(ransomNoteVal === sliceingValOfMagazine) {
//             return true;
//         } else if(sliceingValOfMagazine === undefined) {
//             return false;
//         } else {
//             continue;
//         };
//     };
//     return false;
// };

// let ransome = 'aab';
// let magazine = 'baa';
// console.log(canConstruct(ransome,magazine));
