function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

window.onload = function() {
	b.addEventListener('change', function() {
	    getBase64(b.files[0]).then(function(a) {
			copy.innerText = "https://hashframe.tripplyons.com/#" + a
		})
	})
    // copyBtn.addEventListener('click', function () {
    //     let input = document.createElement('input')
    //     input.type = 'text'
    //     input.value = copy.innerText
    //
    //     input.focus()
    //     input.select()
    //     // input.setSelectionRange(0, 99999)
    //
    //     let success = document.execCommand("copy")
    //
    //     console.log(success ? "successfully copied" : "failed to copy")
    //
    //     alert('Copied Link')
    // })
}
