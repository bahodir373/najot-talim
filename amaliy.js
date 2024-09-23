function mostFrequentElement(string) {
    let obj = {}
    let frequentElement = null
    let maxCount = 0;

    for (let element of string) {
        if (!obj[element]) {
            obj[element] = 1; 
        } else{
            obj[element]++
        }

        if (obj[element] > maxCount) {
            maxCount = obj[element]
            frequentElement = element
        }
    }

    return frequentElement;
}

console.log(mostFrequentElement("saalom"));












// function mostFrequentElement(arr) {
//   let frequency = {};
//   let maxCount = 0;
//   let mostFrequent = null;

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (frequency[element]) {
//       frequency[element]++;
//     } else {
//       frequency[element] = 1;
//     }

//     if (frequency[element] > maxCount) {
//       maxCount = frequency[element];
//       mostFrequent = element;
//     }
//   }

//   return mostFrequent;
// }

// console.log(mostFrequentElement([1, 3, 1, 3, 2, 1]));

