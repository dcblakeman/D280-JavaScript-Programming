// Put your solution here

arr = [5, 3];

function divideArray(arr) {
    let evenNums = [];
    let oddNums = [];

    arr.forEach(ele => {
        if(ele % 2 === 0) {
            evenNums.push(ele);
        }
        if(ele % 2 !== 0) {
            oddNums.push(ele);
        }
    });

    if (evenNums.length === 0) {
        evenNums.push('None');
    }

    if(oddNums.length === 0) {
        oddNums.push('None');
    }

    console.log('Even Numbers: ' , evenNums);
    console.log('Odd Numbers: ', oddNums);
}

divideArray(arr);