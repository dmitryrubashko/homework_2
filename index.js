// task_1

const getUniqueNumbers_1 = (numbersArray) => {
    return numbersArray.reduce((result, number) => {
        if (!result.includes(number)) {
            result.push(number);
        };
        return result;
    }, []);
};
console.log(getUniqueNumbers_1([1, 1, 2, 3, 3, -4, 5, -4, -4, -4, 5, 5, 5]));


const getUniqueNumbers_2 = (numbersArray) => {
    const result = [];
    for (let i = 0; i < numbersArray.length; i++) {
        if (!result.includes(numbersArray[i])) {
            result.push(numbersArray[i]);
        };
    };
    return result;
};

console.log(getUniqueNumbers_2([1, 1, 2, 3, 3, -4, 5, -4, -4, -4, 5, 5, 5]));

// task_2

const getCubeOfNumber_1 = (numbers) => {
    return numbers.map((number) => Math.pow(number, 3));
};

console.log(getCubeOfNumber_1([-2, 3, 5]));


const getCubeOfNumber_2 = (numbersArray) => {
    const result = [];
    for (let i = 0; i < numbersArray.length; i++) {
        result.push(numbersArray[i]**3)
    };
    return result;
};

console.log(getCubeOfNumber_2([-2, 3, 5]));

// task_3

const getShortArray_1 = (stringsArray, maxLetters) => {
    return stringsArray.reduce((result, item) => {
             if (item.length <= maxLetters) {
                 result.push(item);
             };
            return result;
        }, []);
};

console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], 3));
console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], 1));
console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], 4));
console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], -5));


const getShortArray_2 = (stringsArray, maxLetters) => {
    const result = [];
    for (let i = 0; i < stringsArray.length; i++) {
        if (item.length <= maxLetters) {
            result.push(item);
        };
    };
    return result;
};

console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], 3));
console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], 1));
console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], 4));
console.log(getShortArray_1(["My", "name", "is", "Dima", "!"], -5));

// task_4

const filterOnlyNumbers_1 = (randomArray) => {
    return randomArray.filter((item) => typeof item === 'number'); 
};

console.log(filterOnlyNumbers_1([-3, 4, 7, 'Hello', [1, 2, 3], null, undefined]));


const filterOnlyNumbers_2 = (randomArray) => {
    const result = [];
    for (let i = 0; i < randomArray.length; i++) {
        if (typeof randomArray[i] === 'number') {
            result.push(randomArray[i]);
        };
    }
    return result;
}

console.log(filterOnlyNumbers_2([-3, 4, 7, 'Hello', [1, 2, 3], null, undefined]));

// task_5

const biggestNumber_1 = (numbersArray) => {
    const compareNumers = (a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    };
    numbersArray.sort(compareNumers);
    return numbersArray[numbersArray.length-1];
}

console.log(biggestNumber_1([-4, -77, 333, 0]))


const biggestNumber_2 = (numbersArray) => {
    return Math.max.apply(Math, numbersArray);
}

console.log(biggestNumber_2([-4, -77, 333, 0]))


const biggestNumber_3 = (numbersArray) => {
    let maxNumber = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {   
        if (numbersArray[i] > maxNumber) {
            maxNumber = numbersArray[i]
        };
    };
    return maxNumber;
}

console.log(biggestNumber_3([-4, -77, 333, 0]));