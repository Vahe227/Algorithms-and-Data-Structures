function getRandomId() {
    let currentId = '';
    let symbols = ['a','A','b','B','c','C',
                   'd','D','e','E','f','F',
                   'g','G','h','H','i','I',
                   'j','J','k','K','l','L',
                   'm','M','n','N','o','O',
                   'p','P','q','Q','r','R',
                   's','S','t','T','u','U',
                   'v','V','w','W','x','X',
                   'y','Y','z','Z',1,2,3,4,
                   5,6,7,8,9,'!','#','$','%',
                   '^','&'];
    for(let i = 0;i < 25;i++) {
        let symbol = Math.floor(Math.random() * symbols.length);
        currentId += symbols[symbol];
    };
    return currentId;
};

let result = getRandomId();
console.log(result);