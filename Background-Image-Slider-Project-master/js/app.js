const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const img = document.querySelector('.img-container');

let images = {
    pic0: 'contBcg-0.jpeg',
    pic1: 'contBcg-1.jpeg',
    pic2: 'contBcg-2.jpeg',
    pic3: 'contBcg-3.jpeg',
    pic4: 'contBcg-4.jpeg'
}

let actualImg = 0;
let showImg = 'pic' + actualImg;
let imgNumber = Object.keys(images).length;
showImg = 'pic' + actualImg;
img.style.background = "url(../img/" + images[showImg] + ") center/cover fixed no-repeat";
console.log(imgNumber);



btnLeft.addEventListener('click', leftSlide);
btnRight.addEventListener('click', rightSlide);

function rightSlide() {
    actualImg = actualImg + 1;
    if (actualImg >= imgNumber) {
        actualImg = 0;
    }
    showImg = 'pic' + actualImg;
    img.style.background = "url(../img/" + images[showImg] + ") center/cover fixed no-repeat";
    console.log(actualImg);
    return actualImg;
}

function leftSlide() {
    actualImg = actualImg - 1;
    if (actualImg < 0) {
        actualImg = imgNumber - 1;
    }
    showImg = 'pic' + actualImg;
    img.style.background = "url(../img/" + images[showImg] + ") center/cover fixed no-repeat";
    console.log(actualImg);
    return actualImg;
}