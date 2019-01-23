function solve() {
    //We get all elemnts whit tag- img, and add on each of them click event, We use arra from to change htmtl collection to array
    Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.addEventListener('click', clickEvent)
    });

    //clickEvent
    function clickEvent(e) {
        //target click on the card
        let card = e.target;
        //change src - white
        card.src = './images/whiteCard.jpg';

        //we remove event listener
        card.removeEventListener('click', clickEvent);
        let parent = card.parentNode;

        //let resultChildren = document.getElementById('result');
        let spans = document.getElementById('result').children;

        let leftSpan = spans[0];
        let rightSpan = spans[2];

        if (parent.id === 'player1Div') {
            spans[0].textContent = card.name;
        } else if(parent.id === "player2Div") {
            spans[2].textContent = card.name;
        }

        if(leftSpan.textContent && rightSpan.textContent) {
            let winner;
            let looser;

            if(+leftSpan.textContent > +rightSpan.textContent) {
                winner = document.querySelector(`#player1Div img[name='${leftSpan.textContent}']`);
                looser = document.querySelector(`#player2Div img[name='${rightSpan.textContent}']`);
            }else {
                looser = document.querySelector(`#player1Div img[name='${leftSpan.textContent}']`);
                winner = document.querySelector(`#player2Div img[name='${rightSpan.textContent}']`);
            }

            winner.style.border = '2px solid green';
            looser.style.border = '2px solid darkred';

            document.getElementById('history').textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}]`;
            
            setTimeout(() => {
                leftSpan.textContent = "";
                rightSpan.textContent = "";
            }, 2000);
        }
        

    }
}