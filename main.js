var html=document.querySelector('html');
var themeSwitcher=document.querySelector('.themeSwitcher');
var numberInput=document.querySelector('.numberInput');
var btn=document.querySelectorAll('button');
var add=document.querySelector('.add');
var subtract=document.querySelector('.subtract');
var multiply=document.querySelector('.multiply');
var divide=document.querySelector('.divide');
var clear=document.querySelector('.clear');
var cancel=document.querySelector('.cancel');
var result=0;

/*changing the theme*/
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
/*onclick input buttons*/
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




