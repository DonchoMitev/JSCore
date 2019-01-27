function validate() {

    let arr = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    
    let btn = document.querySelector('#exercise > fieldset > div > button').addEventListener('click', checkNumber);

    function checkNumber(){
        let number = document.querySelector('#exercise > fieldset > div > input').value;

        let lastDigit = number[number.length - 1];

        for (let i = 0; i < 9; i++) {
            let temp1 = number[i];
            let temp2 = arr[i];

            sum += temp1 * temp2;
        }

        let reminder = sum % 11;

        if(reminder === 10) {
            reminder = 0;
        }

        if (+lastDigit === reminder) {
            document.querySelector('#response').textContent = 'This number is Valid!';
        }else {
            document.querySelector('#response').textContent = 'This number is NOT Valid!';
        }
    }

}