(() => {
	const links = document.querySelector(content).querySelectorAll('a');
	let result = []
	links.forEach(item => {
		if (item.href && (item.href[0] === '/' || item.href.includes(url))) {
			result.push([item.text, item.href]);
		}
	})

	const popup = document.createElement('div')
	popup.setAttribute("id", "internalurlpopup");
	popup.innerHTML = `<div>В статье найдено внутренних ссылок: ${result.length} <br/> ${result.map(item => `—————————— <br/> ${item[0]} <br/> ${item[1]}`)}</div>`;
	popup.setAttribute("style", "display:flex;justify-content:space-between;position: fixed;top: 0;background: white;z-index: 100000;width: calc(100% - 48px);padding: 24px;box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);");

	const closeButton = document.createElement('div');
	closeButton.innerHTML = '×'
	closeButton.setAttribute("style", "font-size: 24px;cursor:pointer");
	closeButton.setAttribute("onclick", "document.getElementById('internalurlpopup').remove()");
	
	popup.appendChild(closeButton);

	document.getElementsByTagName('body')[0].appendChild(popup);
})();
