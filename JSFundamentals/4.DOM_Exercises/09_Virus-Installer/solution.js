function solve() {

    let buttons = Array.from(document.getElementsByTagName('button'));
    console.log(buttons);

    buttons.forEach((btn) => {
        btn.addEventListener('click', event);

    })
    function event(ev) {
        let btn = ev.target;
        console.log(btn);
        if (btn.textContent === "Next") {
            let contentElemnt = document.getElementById('content');
            let firsStep = document.getElementById('firstStep');
            contentElemnt.style.background = 'none';
            firsStep.style.display = 'block';

            let radioBtn = document.querySelectorAll('input[type="radio"]')[0];

            if (radioBtn.checked) {
                firsStep.style.display = 'none';
                document.getElementById('secondStep').style.display = 'block';
            }

            nextBtn.style.display = 'none';
            setTimeout(function () {
                nextBtn.style.display = "inline";
            }, 3000);

        }

        if (btn.textContent === 'Cancel' || btn.textContent === 'Finish') {
            document.getElementById('main').style.display = 'none';
        }
    }
}