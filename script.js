let count = 1;
if (document.getElementById("radio1")) {
    document.getElementById("radio1").checked = true;
}

setInterval(function () {
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    const radio = document.getElementById("radio" + count);
    if (radio) {
        radio.checked = true;
    }
}