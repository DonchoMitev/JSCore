function solve() {
	let numbers = document.querySelector('input[type="text"]');
	let button = document.querySelector('button');

	button.addEventListener('click', event);

	function event() {
		let allNmbers = numbers.value.split(' ').map((e) => {return +e});
		let fillterResult = allNmbers.filter((e) => {return e <= 49 && e > 0});

		if (allNmbers.length == 6 && fillterResult.length == 6) {
			let parent = document.getElementById('allNumbers');
			for (let i = 1; i <= 49; i++) {
				let div = document.createElement('div');
				div.textContent = `${i}`;
				div.setAttribute('class', 'numbers');
		
				if (allNmbers.includes(i)) {
					div.style.background = 'orange'
				}
				parent.appendChild(div);
				
			}
			button.disabled = true;
			numbers.disabled = true;
		}
		
	}
}