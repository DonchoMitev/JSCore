function solve (arr) {
    let element = arr[0];
    let newArr = [element];
    for (let i = 0; i < arr.length; i++) {
        
        if (element < arr[i + 1]) {
            element = arr[i + 1];
            newArr.push(element);
        } 
        
    }

    console.log(newArr.join('\n'));
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]    
    );