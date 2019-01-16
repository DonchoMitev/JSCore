function stringLength(arr1, arr2, arr3) {
    let arr = [arr1, arr2, arr3];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }

    let avarageCount = Math.floor(sum / arr.length);

    console.log(sum);
    console.log(avarageCount);
}

stringLength('pasta', '5', '22.3');