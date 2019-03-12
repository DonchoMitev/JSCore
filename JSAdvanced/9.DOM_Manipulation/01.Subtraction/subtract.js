function subtract() {
    let numberOne = $('#firstNumber');
    let numberTwo = $('#secondNumber');
    let result = $('#result');
    result.text(+numberOne.val() - +numberTwo.val());

}