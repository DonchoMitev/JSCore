function solve() {
    
    let buttons = Array.from(document.querySelectorAll('#exercise #operations button')).forEach((btn) => {
        btn.addEventListener('click', event);
    });

    function event (ev) {
        let btn = ev.target;
        let number = document.querySelector('#exercise input');
        if (number == '') {
            number = 0;
        }
        let output = document.querySelector('#exercise p');

        if (btn.textContent == "Chop") {
            output.textContent = +number.value / 2;
        }else if (btn.textContent == "Dice") {
            output.textContent = Math.sqrt(+number.value);
        }else if (btn.textContent == "Spice") {
            output.textContent = +number.value + 1;    
        }else if (btn.textContent == "Bake") {
            output.textContent = +number.value * 3;
        }else if (btn.textContent == "Fillet") {
            output.textContent = +number.value * 0.80;
        }

        number.value = +output.textContent;
    }
}
