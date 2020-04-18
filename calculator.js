let runningTotal='0';     //keeps result of       whatever is typed before pressing a new sign and after pressing clear.
let buffer='0';           //source of truth or whatever is being displayed on screen
let previousOperator;   //holds previously pressed sign

const screen= document.querySelector('.screen');

function buttonCLick(value){
    if(isNaN(value)){
        //Not a number
        handleSymbol(value);
    } else{
        //Is number
        handleNumber(value);
    }
    screen.innerText=buffer;
    console.log(`buffer on click=${buffer}
runningTotal on every click=${runningTotal}`)
}
function handleSymbol(symbol){
    console.log('pressed symbol=',symbol);
    // if(symbol==="C"){
    //     buffer='0';
    //     runningTotal="0";
    // }
    switch (symbol){
        case 'C':
            buffer='0';
            runningTotal='0';
            console.log('Screen Cleared');
            break;
        case '=':
            if(previousOperator===null){
                return;//two numbers are required to do maths
            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer=runningTotal;
            runningTotal='0';        
            break;
        case '←':
            if(buffer.length===1){
                buffer='0'
            }else{
                buffer=buffer.substring(0, buffer.length-1)
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
         
    }
}

function handleMath(symbol){
    console.log(`entered handleMath for operation`, symbol);
    if(buffer==='0'){
        //do nothing
        console.log(`nothing done as buffer=0`)
        return;
    }
    const intBuffer = parseInt(buffer);
    console.log('value aquired from screen intBuffer=',intBuffer);

    if(runningTotal==='0'){
        runningTotal=intBuffer;
        console.log(`as runningTotal=0.  runningTotal agquired value from intBuffer=${runningTotal}`);
    }else{
        flushOperation(intBuffer);
    }
    previousOperator=symbol;
    buffer='0';
    console.log('Inside handleMath runningTotal=',runningTotal);
}
//× ÷ -
  
function flushOperation(intBuffer){
    console.log(`entered flush operation with ${intBuffer} as input`)
    if(previousOperator==='+'){
        console.log(`+ operation started`);
        runningTotal= runningTotal + intBuffer;
        console.log(`+ operation finished, runnigTotal final=`);
    } else if (previousOperator==='-'){
        console.log(`- operation started`);
        runningTotal = runningTotal - intBuffer;
        console.log(`- operation finished, runnigTotal final=`);
    } else if (previousOperator==='×'){
        console.log(`x operation started`);
        runningTotal = runningTotal * intBuffer;
        console.log(`x operation finished`);
    }else if (previousOperator==='÷') {
        console.log(`÷ operation started`);
        runningTotal = runningTotal / intBuffer;
        console.log(`divide operation finished, runnigTotal final=`);
    }
}

function handleNumber(numberString){
    
    if(buffer==="0"){
        buffer=numberString;
    }else {
        buffer=buffer+numberString;
    }
    screen.innerText=buffer;
}

function init(){
    document.querySelector('.calc-buttons')
            .addEventListener('click', function(event){
                buttonCLick(event.target.innerText);
            })
}

init();