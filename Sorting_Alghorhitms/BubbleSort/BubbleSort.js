// Bubble Sort

function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            // In there We check if the value is biger than next value we change theyre places
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            };
        };
    };
    // In cosnole we print th sorted array
    console.log(array);
};

// Creating Array for test the function

var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// There We calling the function and give her argument whuich is arr

BubbleSort(arr);
