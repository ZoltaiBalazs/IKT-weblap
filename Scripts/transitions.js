const layers = document.getElementsByClassName("parlayer");

function zoomOut() {
    for (let i = 0; i < layers.length; i++) {
        layers[i].style.width = "100%";
        layers[i].style.height = "100vh";
        layers[i].style.top = "0";
        layers[i].style.left = "0";
    }
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
}