window.onload = function() {
    if (location.hash) {
		frame.src = location.hash.substr(1)
		frame.style.display = 'block'
    } else {
		window.location.href = '/help'
	}
}
