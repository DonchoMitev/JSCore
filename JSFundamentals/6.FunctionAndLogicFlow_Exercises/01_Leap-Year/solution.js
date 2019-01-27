function leapYear() {
    let button = document.querySelector('#exercise button').addEventListener('click', checkYear);

    function checkYear() {
        
        let year = document.querySelector('#exercise input');
        
        let isTrue = isLeap(year.value);

        let header = document.querySelector('#year h2');
        header.textContent = isTrue ? "Leap Year" : "Not Leap Year";

        let div = document.querySelector('#year div');
        div.textContent = year.value;

        year.value = "";
    }

    function isLeap(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }


}