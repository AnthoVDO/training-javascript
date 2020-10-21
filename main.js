var addLink = function() {
    var h2 = document.querySelector('h2');

    h2.textContent = 'other text';

    var a = document.createElement('a');
    a.setAttribute("href", "http://youtube.com");
    a.textContent = "youtube.com";

    h2.appendChild(a);
}
addLink();

var changeSection = function() {
    var sect = document.querySelector("#section1");
    var para = document.createElement('p');
    para.textContent = "hello world";
    sect.appendChild(para);
    para.setAttribute('class', "test123");
    var text = document.createTextNode('-finishing with class')
    var linkPara = document.querySelector('.test123');
    linkPara.appendChild(text);

}

changeSection();

var mySwap = function() {
    var salut = document.querySelector('.salut');
    var lol = document.querySelector('.lol');
    lol.appendChild(salut);
}