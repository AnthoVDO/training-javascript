const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const customerTxt = document.querySelector('#customer-text');
const customerName = document.querySelector('#customer-name');
const customerImg = document.querySelector('#customer-img');

function Customer(img, name, txt) {
    this.img = img;
    this.name = name;
    this.txt = txt;
}

let julien = new Customer('0', 'Julien', 'Vendor correct and fast delivery');
let mathieu = new Customer('1', 'Mathieu', 'Quick delivery and good quality, I recommand');
let alexandra = new Customer('2', 'Alexandra', 'Object received as described and fast delivery');
let mathilde = new Customer('3', 'Mathilde', 'I was looking for this for a moment');
let john = new Customer('4', 'John', 'Good quality, cheap and fast delivery');

let customerDataBase = [julien, mathieu, alexandra, mathilde, john];

let i = 0;
let customerImgUrl = 'img/customer-' + i + ".jpg";
customerTxt.textContent = customerDataBase[i].txt;
customerName.textContent = customerDataBase[i].name;
customerImg.setAttribute('src', customerImgUrl);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    i++;
    if (i >= customerDataBase.length) {
        i = 0;
    }
    customerImgUrl = 'img/customer-' + i + ".jpg";
    customerTxt.textContent = customerDataBase[i].txt;
    customerName.textContent = customerDataBase[i].name;
    customerImg.setAttribute('src', customerImgUrl);
    return i;

}

function prevSlide() {
    i--;
    if (i < 0) {
        i = customerDataBase.length - 1;
    }
    customerImgUrl = 'img/customer-' + i + ".jpg";
    customerTxt.textContent = customerDataBase[i].txt;
    customerName.textContent = customerDataBase[i].name;
    customerImg.setAttribute('src', customerImgUrl);
    return i;
}