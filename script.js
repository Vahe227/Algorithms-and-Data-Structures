function canConstruct(ransomNote, magazine) {
    const map = new Map();
    let result = [];
    for(let i = 0; i < ransomNote.length; i++) {
        let word = ransomNote.slice(i, ransomNote.length);
        result.push(word);
    }
    console.log(result);
};


let ransome = 'aab';
let magazine = 'baa';
console.log(canConstruct(ransome,magazine));


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
