function solve() {
    let buttons = Array.from(document.getElementsByClassName('seat')).forEach((btn) => {
        btn.addEventListener('click', event);
    });
    let textarea = document.getElementById('output');
    let summary = document.getElementById('summary');
    summary.children[0].addEventListener('click', summaryFunc);

    let obj = {
        "Levski" : {
            "A" : 10,
            "B" : 7,
            "C" : 5
        },
        "Litex" : {
            "A" : 10,
            "B" : 7,
            "C" : 5
        },
        "VIP" : {
            "A" : 25,
            "B" : 15,
            "C" : 10
        },
    }

    let sum = 0;
    let fans = 0;
    
    function event (ev) {
        let btn = ev.target;
        let zone = btn.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = btn.parentNode.cellIndex == 0 ? 'A' : (btn.parentNode.cellIndex == 1 ? 'B' : 'C');

        if (btn.style.backgroundColor === '') {
            sum += +obj[zone][sector];
            fans++;
            btn.style.backgroundColor = 'rgb(255,0,0)';
            btn.removeEventLestener;
            textarea.value += ` Seat ${btn.textContent} in zone ${zone} sector ${sector} was taken.\n`;
        }else{
            textarea.value += ` Seat ${btn.textContent} in zone ${zone} sector ${sector} is unavailable.\n`;
        }
    }

    function summaryFunc () {
        summary.children[1].textContent = `${sum} leva, ${fans} fans`;
    }
}