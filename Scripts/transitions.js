const layers = document.getElementsByClassName("parlayer");

window.onload =  function () {
    
    alert("NYOMD MEG AZt a kurVA F11-t\n koszi :)")

}

function zoomOut() {
    for (let i = 0; i < layers.length; i++) {
        layers[i].style.width = "100%";
        layers[i].style.height = "100vh";
        layers[i].style.top = "0";
        layers[i].style.left = "0";
    }
    document.getElementById("shadow").style.opacity = "0";
    document.getElementById("indie_g").style.opacity = "100%";
    document.getElementById("indie_g").style.transform = "translateY(-200px)";
    setTimeout(function () { 
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
    },
    1000);
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
