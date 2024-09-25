const btn1 = document.getElementById('calculateone').addEventListener('click',function(){

    const addMoneyInput = parseFloat(document.getElementById('input-add-money').value);

    const addMoneyOutput = parseFloat(document.getElementById('donate-balance').innerText);
    const addMoney = parseFloat(document.getElementById('main_balance').innerText);

    const newBalance = addMoneyInput + addMoneyOutput;
    
    document.getElementById('donate-balance').innerText = newBalance;
    const updateBalance = addMoney - addMoneyInput;
    document.getElementById('main_balance').innerText = updateBalance;

    console.log(updateBalance);
    
    
})
