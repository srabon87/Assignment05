// function getInputFieldValueById(){
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }
// function getInputFieldValueById(id){
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber;
// }

// function getTextFieldValueById(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = parseFloat(textValue);
//     return textNumber;
// }
function getId(id){
    return document.getElementById(id);
}

function getValue(id){
    let value = getId(id).value;
    if(isNaN(value)){
        return alert('invalid input');  
    }
    else{
        return parseFloat(value);
    }
}

function convertNumber(id){
   let number = getId(id).innerText;
   if(isNaN(number)){
    return alert('invalid input');
   }
   else{
    return parseFloat(number);
   }
}

function calculateMoney(main_balance,donate_balance,input_balance){
    let mainBalance = convertNumber(main_balance);
    let donateBalance = convertNumber(donate_balance);
    let inputBalance = getValue(input_balance);
}


document.getElementById('calculate_1').onclick = function(){
    alert()
}






