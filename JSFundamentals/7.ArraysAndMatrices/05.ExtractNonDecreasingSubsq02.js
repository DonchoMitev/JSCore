function solve(arr) {
    let element = arr[0];
    let newArr = arr.reduce((acc, el) => {
        if (el >= element) {
            acc.push(el);
            element = el;
        }

        return acc;
    }, []);

    console.log(newArr.join('\n'));
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );