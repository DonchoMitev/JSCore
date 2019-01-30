function solve(arr) {
    let countRotate = +arr.pop();

    for (let i = 0; i < countRotate; i++) {
        let firstElement = arr[arr.length - 1];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[arr.length - 1 - j] = arr[arr.length - 2 - j];
        }
        arr[0] = firstElement;
    }

    console.log(arr.join(' '));
    
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);