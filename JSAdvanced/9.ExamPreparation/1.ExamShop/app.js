function solution() {
	let section = $('#christmasGiftShop');

	let toyType = $('#toyType');
	let toyPrice = $('#toyPrice');
	let toyDescription = $('#toyDescription');


	if (toyType.val() && +toyPrice.val() && toyDescription.val()) {
		
		let div = $('<div>');
		div.addClass('gift');

		let image = $('<img src="gift.png" />');

		let giftName = $('<h2>');
		giftName.text(toyType.val());

		let giftDescription = $('<p>');
		giftDescription.text(toyDescription.val());
		
		let button = $('<button>');
		button.text(`Buy it for $${toyPrice.val()}`);
		button.on('click', () => div.remove());

		div.append(image);
		div.append(giftName);
		div.append(giftDescription);
		div.append(button);

		section.append(div);
	}

}