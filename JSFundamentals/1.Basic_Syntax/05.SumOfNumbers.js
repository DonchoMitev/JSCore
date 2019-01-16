function sumNumbers(a, b) {
    let start = +a;
    let end = +b;
    let sum = 0;

    for(let i = start; i <= end; i++){
        sum += i;
    } 

    console.log(sum);
}

sumNumbers('-8', '20' );