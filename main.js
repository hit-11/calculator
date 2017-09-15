var html=document.querySelector('html');
var themeSwitcher=document.querySelector('.themeSwitcher');
var numberInput=document.querySelector('.numberInput');
var btn=document.querySelectorAll('button');
var add=document.querySelector('.add');
var subtract=document.querySelector('.subtract');
var multiply=document.querySelector('.multiply');
var divide=document.querySelector('.divide');
var equals=document.querySelector('.equalto');
var clear=document.querySelector('.clear');
var cancel=document.querySelector('.cancel');
var result=0;
var operator=0;
var cntEqClick=0;
var cntCancel=0;
var prev;
var flag=0;
var cntFlag=0;

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
    if(isNaN(btn[i].textContent) && btn[i].textContent!=='-'){
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

/*adding functinality to the non-number buttons*/

add.onclick=function () {
    if(numberInput.value !== ''){
    result=Number(numberInput.value);
    numberInput.value='';}
    operator=1;
    if(cntEqClick >=1){
        flag=1;
        cntFlag=1;}

}
subtract.onclick=function () {
    if(numberInput.value !== ''){
    result=Number(numberInput.value);
    numberInput.value='';}
    operator=2;
    if(cntEqClick >=1) {
        flag = 1;
        cntFlag = 1;
     }
    }
multiply.onclick=function () {
    if(numberInput.value !== ''){
    result=Number(numberInput.value);
    numberInput.value='';}
    operator=3;
    if(cntEqClick >=1){
        flag=1;
        cntFlag=1;}
}
divide.onclick=function () {
    if(numberInput.value !== ''){
    result=Number(numberInput.value);
    numberInput.value='';}
    operator=4;
    if(cntEqClick >=1){
        flag=1;
        cntFlag=1;}
}
equals.onclick=function () {
    cntEqClick++;
    if((cntEqClick === 1) || (cntCancel !== 0) && (flag === 1) || (flag ===1) && (cntFlag === 1)){
        prev=Number(numberInput.value);
        cntFlag=0;
        cntCancel=0;
        if(operator === 1)
            result+=Number(numberInput.value);
        else if(operator === 2)
            result-=Number(numberInput.value);
        else if(operator === 3)
            result*=Number(numberInput.value);
        else if(operator === 4)
            result/=Number(numberInput.value);
        else
            result=Number(numberInput.value);
    }
    else if(flag === 1 || cntEqClick >1) {
        if(operator === 1)
            result+=prev;
        else if(operator === 2)
            result-=prev;
        else if(operator === 3)
            result*=prev;
        else if(operator === 4)
            result/=prev;
        else
            result=prev;  
    }
       numberInput.value = result;
 }
clear.onclick=function () {
    numberInput.value='';
    result=0;
    operator=0;
    cntEqClick=0;
    cntCancel=0;
    flag=0;
    prev=0;
}
cancel.onclick=function () {
    numberInput.value=numberInput.value.slice(0,numberInput.value.length-1);
    cntCancel++;
}