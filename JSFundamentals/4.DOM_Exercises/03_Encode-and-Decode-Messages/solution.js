function solve() {
	
	let buttons = Array.from(document.getElementsByTagName('button'))
				.forEach(function(btn) {
					btn.addEventListener('click', clickEvent);
				});
	
	function clickEvent(e) {
		let sendButton = e.target;

		let text = sendButton.textContent;

		let messages = Array.from(document.getElementsByTagName('textarea'));

		if(text.indexOf('Encode') !== -1) {
			let encodeMessage = messages[0].value;
			
			let newMessage = "";

			//return array of all characters in string => abz = [a, b, c]
			encodeMessage.split("").forEach((char) => {
				let asciiValue = char.charCodeAt(0) + 1;
				newMessage += String.fromCharCode(asciiValue);
			});

			messages[0].value = "";
			messages[1].value = newMessage;

		}else{
			let decodeMessage = messages[1].value;
			let newMessag = "";
			decodeMessage.split("").forEach((el) => {
				let asciiValue = el.charCodeAt(0) - 1;
				newMessag += String.fromCharCode(asciiValue);	
			});

			messages[1].value = "";
			messages[1].value = newMessag;
		}

		

	}
	
	
}