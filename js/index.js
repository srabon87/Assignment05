// const btn1 = document.getElementById('calculateone').addEventListener('click',function(){

//     const addMoneyInput = parseFloat(document.getElementById('input-add-money').value);

//     const addMoneyOutput = parseFloat(document.getElementById('donate-balance').innerText);
//     const addMoney = parseFloat(document.getElementById('main_balance').innerText);

//     const newBalance = addMoneyInput + addMoneyOutput;
    
//     document.getElementById('donate-balance').innerText = newBalance;
//     const updateBalance = addMoney - addMoneyInput;
//     document.getElementById('main_balance').innerText = updateBalance;

//     console.log(updateBalance);

//     if(addMoneyInput <= 0){
//         alert('Invalid input')
//     }
    
// })
// const btn2 = document.getElementById('calculateone1').addEventListener('click',function(){

//     const addMoneyInput1 = parseFloat(document.getElementById('input-add-money1').value);

//     const addMoneyOutput1 = parseFloat(document.getElementById('donate-balance1').innerText);
//     const addMoney = parseFloat(document.getElementById('main_balance').innerText);

//     const newBalance1 = addMoneyInput1 + addMoneyOutput1;
    
//     document.getElementById('donate-balance1').innerText = newBalance1;
//     const updateBalance1 = addMoney - addMoneyInput1;
//     document.getElementById('main_balance').innerText = updateBalance1;

//     console.log(updateBalance1);
    
//     if(addMoneyInput1 <= 0){
//         alert('Invalid input')
//     }
// })
// const btn3 = document.getElementById('calculateone2').addEventListener('click',function(){

//     const addMoneyInput2 = parseFloat(document.getElementById('input-add-money2').value);

//     const addMoneyOutput2 = parseFloat(document.getElementById('donate-balance2').innerText);
//     const addMoney = parseFloat(document.getElementById('main_balance').innerText);

//     const newBalance2 = addMoneyInput2 + addMoneyOutput2;
    
//     document.getElementById('donate-balance2').innerText = newBalance2;
//     const updateBalance2 = addMoney - addMoneyInput2;
//     document.getElementById('main_balance').innerText = updateBalance2;

//     console.log(updateBalance2);
    
//     if(addMoneyInput2 <= 0){
//         alert('Invalid input')
//     }
// })


getID("donation-btn").addEventListener("click",()=>{
    getID("donate-section").classList.remove("hidden");
    getID("history-section").classList.add("hidden");
})
getID("history-btn").addEventListener("click",()=>{
    getID("donate-section").classList.add("hidden");
    getID("history-section").classList.remove("hidden");
})


// calculte donate Amount
getID("calculate-one").addEventListener("click",()=>{
    calculateFunc("main-balance","donate-balance-one","add-money-one","title-one")
})
getID("calculate-two").addEventListener("click",()=>{
    calculateFunc("main-balance","donate-balance-two","add-money-two","title-two")
})
getID("calculate-three").addEventListener("click",()=>{
    calculateFunc("main-balance","donate-balance-three","add-money-three","title-three")
})