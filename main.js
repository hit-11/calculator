var themeSwitcher=document.querySelector('.themeSwitcher');
var numberInput=document.querySelector('.numberInput');
var btn=document.querySelectorAll('button');
var html=document.querySelector('html');

themeSwitcher.onclick=function () {
    if (themeSwitcher.textContent === 'Darken') {
        themeSwitcher.textContent = 'Lighten';
        html.style.backgroundColor = 'black';
        themeSwitcher.style.backgroundColor = 'blanchedalmond';
    }
    else {
        themeSwitcher.textContent = 'Darken';
        html.style.backgroundColor = 'blanchedalmond';
        themeSwitcher.style.backgroundColor = 'black';
    }
}
for(var i=0;i<btn.length;i++){
    if(isNaN(btn[i].textContent)){
        continue;
    }
    btn[i].onclick=function (e) {
       var text=e.target.textContent;
       clickToInput(text);
    }
}
function clickToInput(text) {
      numberInput.value+=text;
}
