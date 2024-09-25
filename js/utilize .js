function getInputFieldValueById(){
    const addMoney = document.getElementById('input-add-money').value;
    return addMoney;
}
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// function getTextFieldValueById(id){
//     const textValue = document.getElementById(id).innerText;
//     const textNumber = parseFloat(textValue);
//     return textNumber;
// }
// function getId(id){
//     return document.getElementById(id);
// }

// function getValue(id){
//     let value = getId(id).value;
//     if(isNaN(value)){
//         return alert('invalid input');  
//     }
//     else{
//         return parseFloat(value);
//     }
// }

// function convertNumber(id){
//    let number = getId(id).innerText;
//    if(isNaN(number)){
//     return alert('invalid input');
//    }
//    else{
//     return parseFloat(number);
//    }
// }

// function calculateMoney(main_balance,donate_balance,input_balance){
//     let mainBalance = convertNumber(main_balance);
//     let donateBalance = convertNumber(donate_balance);
//     let inputBalance = getValue(input_balance);
//     console.log(mainBalance,donateBalance,inputBalance)
// }
// console.log(calculateMoney());

// console.log(calculateMoney);
// document.getElementById('calculate_1').onclick = function(){
//     alert()
// }

const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");
    donationBtn.addEventListener('click',function(){

    donationBtn.classList.add(
            "text-black",
            "bg-lime-400",

        )
    historyBtn.classList.remove("text-gray-600")
       
    historyBtn.classList.remove(
        "text-black",
        "bg-lime-400",
    )
    historyBtn.classList.add("text-gray-600");

    document.getElementById("sections").classList.add("hidden");
    document.getElementById("sections-new").classList.remove("hidden");
})         


    historyBtn.addEventListener('click',function(){

        historyBtn.classList.add(
            "text-black",
            "bg-lime-400",

        )
       
        donationBtn.classList.remove(
        "text-black",
        "bg-lime-400",
    )
    

    document.getElementById("sections").classList.remove("hidden");
    document.getElementById("sections-new").classList.add("hidden");
})         









