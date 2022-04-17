window.addEventListener("scroll", function(){ 
    const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');
    const layer3 = document.querySelector('.layer3');
    const layer4 = document.querySelector('.layer4');
    const layer5 = document.querySelector('.layer5');
    const layer6 = document.querySelector('.layer6');
    const layer7 = document.querySelector('.layer7');
    const layer8 = document.querySelector('.layer8');

    let scrollPosition = window.pageYOffset;

    layer1.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
    layer2.style.transform = 'translateY(' + scrollPosition * 0.62 + 'px)';
    layer3.style.transform = 'translateY(' + scrollPosition * 0.78 + 'px)';
    layer4.style.transform = 'translateY(' + scrollPosition * 0.80 + 'px)';
    layer5.style.transform = 'translateY(' + scrollPosition * 0.84+ 'px)';
    layer6.style.transform = 'translateY(' + scrollPosition * 0.92 + 'px)';
    layer7.style.transform = 'translateY(' + scrollPosition * 1 + 'px)';
})