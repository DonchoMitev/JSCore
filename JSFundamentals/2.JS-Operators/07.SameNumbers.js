function solve (input) {

    let num = input.toString();
    let firstElement = num[0];
    let isTrue = true;
    let sum = +firstElement;

    for (let i = 1; i < num.length; i++) {
        if (firstElement != num[i]) {
            isTrue = false;
        }
        sum +=  +num[i];
    }

    console.log(isTrue);
    console.log(sum);
}

solve(2222222);