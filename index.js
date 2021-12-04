let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';                   //declaring screenvalue variable
for(items of buttons){
    items.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if (buttonText == '×') {
            buttonText = '*';
            screen.value += buttonText;//herer screen is a id, and we put button text value inside screen
        }
        else if(buttonText == 'C'){
            screen.value = '';          //empty the screen value
        }
        else if(buttonText == '='){
            screen.value = '';          //first empty the screen value then evaluate
            screen.value += eval(screenValue)
        }
        else{
            screen.value += buttonText;//assinging button text value to  screen.value
            screenValue = screen.value;//assigning screenValue to screen.value without this assignment to screenValue variable this gives errors
        }
    })
}
