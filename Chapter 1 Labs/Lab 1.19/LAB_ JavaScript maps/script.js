function calcWordFrequencies() {
    let words = prompt();
    let wordArr = words.split(' ');
    console.log(wordArr);

    let myMap = new Map();

    
    wordArr.forEach((ele, i) => {
        if(!myMap.has(ele)) {
            myMap.set(ele, 1);
        }
        else {
            myMap.set(ele, myMap.get(ele) + 1);
        }
    });

    console.log(myMap);
}

calcWordFrequencies();
