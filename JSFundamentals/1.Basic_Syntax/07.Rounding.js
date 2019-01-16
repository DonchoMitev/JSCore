function rounding(arr) {
    
    let number = +arr[0];
    let precision = +arr[1];

    if (precision > 15) {
        precision = 15;
    }

    console.log(+number.toFixed(precision));
}

rounding([10.5, 3]);