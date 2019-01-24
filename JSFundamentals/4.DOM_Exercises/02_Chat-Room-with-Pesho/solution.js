function solve() {

    // let myMessage = document.getElementById('myChatBox').textContent;
    // let otherMessage = document.getElementById('peshoChatBox').textContent;

    // let buttons = Array.from(document.getElementsByTagName('button'))
    // .forEach((button) => {
    //     button.addEventListener('click', clickButton);
    // });


    // function clickButton(e) {
    //     let button = e.target;

    //     if(button.name == 'myBtn'){
    //         //document.getElementById('chatChronology').appendChild('span').textContent = 'Me';
    //         document.getElementById('chatChronology').appendChild('p').textContent = myMessage;
    //     }else{

    //     }
    // } 

    let buttons = Array.from(document.getElementsByTagName('button'));
    let inputs = Array.from(document.getElementsByTagName('input'));

    //add event listener to each of buttons
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (e) {

            let divElemnt = document.createElement('div');
            let spanElement = document.createElement('span');
            let paragraphElement = document.createElement('p');

            let senderButton = e.target;
            let isMe = false;

            if (senderButton.name === 'myBtn') {
                isMe = true;
                spanElement.textContent = 'Me';
                paragraphElement.textContent = document.getElementById('myChatBox').value;

            } else if(senderButton.name === 'peshoBtn'){
                spanElement.textContent = 'Pesho';
                paragraphElement.textContent = document.getElementById('peshoChatBox').value;
            }else {
                document.getElementById('myChatBox').removeAttribute('div');
            
            }


            divElemnt.appendChild(spanElement);
            divElemnt.appendChild(paragraphElement);
            //divElemnt.style.textAlign = "left"
            divElemnt.style.textAlign = isMe ? "left" : "right";

            // if (!isMe) {
            //     divElemnt.style.textAlign = "right";
            // }

            document.getElementById('chatChronology').appendChild(divElemnt);

            inputs[0].value = "";
            inputs[1].value = "";

        });
    });
}