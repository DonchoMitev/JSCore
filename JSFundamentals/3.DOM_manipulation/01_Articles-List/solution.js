function solve() {
	let createTitleElement = document.getElementById('createTitle');
	let createContentElement = document.getElementById('createContent');

	let createTitleValue = createTitleElement.value;
	let createContentValue = createContentElement.value;

	if (createTitleValue && createContentValue) {
		//console.log("Hello");
		let titleElment = document.createElement('h3');
		let contentElement = document.createElement('p');

		titleElment.textContent = createTitleValue;
		contentElement.textContent = createContentValue;

		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElment);
		articleElement.appendChild(contentElement);

		let articlesElement = document.getElementById('articles');
		articlesElement.appendChild(articleElement);

		createTitleElement.value = "";
		createContentElement.value = "";
	}
}