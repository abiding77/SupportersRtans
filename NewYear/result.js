function back(){
    let url = window.location.href;
    let new_url = url.split('result.html')[0] + 'index.html';
    window.location.href= new_url;
}
document.addEventListener("DOMContentLoaded", function(){
    let animals = ['쥐띠','소띠','호랑이띠','토끼띠','용띠','뱀띠','말띠','양띠','원숭이띠','닭띠','개띠','돼지띠'];
    let year = getParameter('year') == '' ? 1 : getParameter('year');
    let id = `rtan${year}`;
    let animal = animals[year-1];
    document.getElementById(id).style.display = 'block';
    document.getElementsByClassName('rtan')[0].innerHTML = animal;
    document.getElementsByClassName('rtan')[0].style.backgroundImage = `url('https://new-year.spartacodingclub.kr/images/yearS${year}.png')`;
    document.getElementsByTagName('h1')[0].innerHTML = `2022년 ${animal}의 운세는!`;
});
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}