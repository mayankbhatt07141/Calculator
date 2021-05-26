let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenvalue='';
let back=''
for (const item of buttons) {
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=='C'){
            screenvalue='';
            screen.value=screenvalue;
        }
        else if(buttontext =='='){
            screen.value=eval(screenvalue)
        }
        else if(buttontext=='D'){
            screen.value=back;
            screenvalue=screen.value;
        }
        else{
            back=screenvalue;
            screenvalue=screenvalue+buttontext;
            screen.value=screenvalue;

        }

    })
}