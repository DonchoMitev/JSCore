function solve() {
	let buttons = Array.from(document.getElementsByTagName('button'));
	let sections = Array.from(document.getElementsByTagName('section'));

	buttons[0].addEventListener('click', firstEvent);
	buttons[1].addEventListener('click', secondEvent);
	buttons[2].addEventListener('click', resultEvent);

	let firstAnsewr = document.getElementsByName('softUniYear');
	let secondAnsewr = document.getElementsByName('popularName');
	let thirdAnsewr = document.getElementsByName('softUniFounder');
	let rightAnswer = 0;


	function firstEvent() {

		for	(let btn of firstAnsewr) {
			if (btn.checked) {
				if (btn.value == "2013") {
					rightAnswer++;
				}
				
				sections[1].style.display = 'block';
				buttons[0].removeEventListener();
			}
		}  
	}

	function secondEvent () {
		for (let btn2 of secondAnsewr) {
			if (btn2.checked) {
				if(btn2.value == "Pesho") {
					rightAnswer++;
				}
				
				sections[2].style.display = 'block';
				buttons[1].removeEventListener();
			}
		}
	}

	function resultEvent () {
		for (let btn of thirdAnsewr) {
			if (btn.checked) {
				if(btn.value == "Nakov"){
					rightAnswer++;
				}
				
				let result = document.getElementById('result');

				result.textContent = rightAnswer === 3 ? "You are recognized as top SoftUni fan!" : `You have ${+rightAnswer} right answers`
				buttons[2].removeEventListener();
			}

		}
	}

}