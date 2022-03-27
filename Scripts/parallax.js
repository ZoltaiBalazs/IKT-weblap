window.addEventListener("scroll", function(){ 
    const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');
    const layer3 = document.querySelector('.layer3');
    const layer4 = document.querySelector('.layer4');
    const layer5 = document.querySelector('.layer5');
    const layer6 = document.querySelector('.layer6');
    const layer7 = document.querySelector('.layer7');

    let scrollPosition = window.pageYOffset;

    layer1.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
    layer2.style.transform = 'translateY(' + scrollPosition * 0.25 + 'px)';
    layer3.style.transform = 'translateY(' + scrollPosition * 0.40 + 'px)';
    layer4.style.transform = 'translateY(' + scrollPosition * 0.55 + 'px)';
    layer5.style.transform = 'translateY(' + scrollPosition * 0.70+ 'px)';
    layer6.style.transform = 'translateY(' + scrollPosition * 0.85 + 'px)';
    layer7.style.transform = 'translateY(' + scrollPosition * 1 + 'px)';

    console.log(scrollPosition);
})