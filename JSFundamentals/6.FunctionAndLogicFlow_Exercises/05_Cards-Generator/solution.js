function solve() {
    let button = document.querySelector('#exercise button').addEventListener('click', event);
    let arr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    function event() {
        let start = document.querySelector('#from').value;
        let end = document.querySelector('#to').value;

        let selectItem = document.querySelector('#exercise select');

        let checked = check(selectItem);

        
        let section = document.getElementById('cards');
        
        for (let i = arr.indexOf(start); i <= arr.indexOf(end); i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'card');
            section.appendChild(div);

            div.appendChild(document.createElement('p')).textContent = checked;
            div.appendChild(document.createElement('p')).textContent = arr[i];
            div.appendChild(document.createElement('p')).textContent = checked;
            
        }
    }


    function check(selectItem) {
        var checkedValue = selectItem.options[selectItem.selectedIndex].value;
        console.log(strUser);
        let uniCod = '';
        if (selectItem.value.includes('Heart')) {
            uniCod = checkedValue.split(' ')[1];
        }else if (selectItem.value.includes('Spades')) {
            uniCod = checkedValue.split(' ')[1];
        }else if (selectItem.value.includes('Diamonds')) {
            uniCod = checkedValue.split(' ')[1];
        }else if (selectItem.value.includes('Clubs')) {
            uniCod = checkedValue.split(' ')[1];
        }

        return uniCod;
    };
}