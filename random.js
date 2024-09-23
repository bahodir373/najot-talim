// function randomSon(son) {
//     let randInt = Math.floor(Math.random() * son);
//     let oddOrEven, xonaSoni;

//     if (randInt % 2 === 0) {
//         oddOrEven = 'Juft';
//     } else{
//         oddOrEven = 'Toq';
//     }

//     let strNum = randInt.toString();
//     let length = strNum.split("").length;

//     return `${randInt} random soni ${oddOrEven} son va uning xonalari soni ${length}`;
// }

// console.log(randomSon(999));


function myFunc(...array) {
    let maxSum = 0;
    let pairs = []

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] > maxSum) {
                maxSum = array[i] + array[j];
                pairs = [array[i],array[j]];
            }
        }
    }

    return pairs;
}

console.log(myFunc(1,2,3));
