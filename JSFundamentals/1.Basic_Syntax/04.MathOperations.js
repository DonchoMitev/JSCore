function mathOperation (a, b, operator) {
    let result = 0;
    let num1 = +a;
    let num2 = +b;

    switch	(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = a - b;
        break;
        case '*':
        result = a * b;
        break;
        case '/':
        result = a / b;
        break;
        case '%':
        result = a % b;
        break;
        case '**':
        result = a ** b;
        break;
        default:
        console.log("error");
        break;
    }

    console.log(result);
}

mathOperation(3, 5.5, '*');