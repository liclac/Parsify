function injectData(data) {
	document.dispatchEvent(new CustomEvent('onOverlayDataUpdate', { detail: data }));
}
