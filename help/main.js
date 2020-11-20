function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

window.onload = function() {
  b.addEventListener("change", function() {
    getBase64(b.files[0]).then(function(a) {
      copy.innerText = "https://hashframe.tripplyons.com/#" + a;
      copy.href = "https://hashframe.tripplyons.com/#" + a;
    });
  });
};
