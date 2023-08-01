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
	popup.innerHTML = `<div style="overflow-y: scroll; width: 100%">В статье найдено внутренних ссылок: <b>${result.length}</b> <br/> ${result.map(item => `—————————— <br/> <b>${item[0]}</b> <br/><br/> <a href=${item[1]}">${item[1]}</a>`).join('<br>')}</div>`;
	popup.setAttribute("style", "display:flex;justify-content:space-between;max-height: 500px;overflow-y: hidden;position: fixed;top: 0;background: white;z-index: 100000;width: calc(100% - 48px);padding: 24px;box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);");

	const closeButton = document.createElement('div');
	closeButton.innerHTML = '×'
	closeButton.setAttribute("style", "font-size: 24px;cursor:pointer");
	closeButton.setAttribute("onclick", "document.getElementById('internalurlpopup').remove()");
	
	function removeEvent() {
		document.removeEventListener('keydown', removePopup); 
	}
	
	function removePopup(event) {
		if (event.key === 'Escape') {
			document.getElementById('internalurlpopup').remove()
			removeEvent();
		}
	}
	
	document.addEventListener('keydown', removePopup);

	popup.appendChild(closeButton);

	document.getElementsByTagName('body')[0].appendChild(popup);
})();
