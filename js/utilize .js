function getID(id){
    return document.getElementById(id);
}
function getValue(id){
    let inputValue = getID(id).value;
    return parseFloat(inputValue);
}

function calculateFunc(abalance,donatedBalance,donateNowBalance,title){
    let inputAmout = getID(donateNowBalance).value;
    // condition check
    if(!isNaN(inputAmout) ){
        let allDontedBalance = parseFloat(getID(donatedBalance).innerText); 
        let accoundBalance = parseFloat(getID(abalance).innerText);
        let userDonateAmount = getValue(donateNowBalance);
        if(accoundBalance > userDonateAmount && userDonateAmount > 0){
            let newABalance = (accoundBalance - userDonateAmount);
            let newDonatedAdd = (allDontedBalance + userDonateAmount);

        // new account balance add
        getID(abalance).innerText = newABalance;

        // donated balance add you userdonateAmount
        getID(donatedBalance).innerText = newDonatedAdd;

        // date 
        let makeDate = new Date()
        // replace title 
        let titleText = getID(title).innerText;
        let repTitle = titleText.replace("Donate for",'')
        // create history transition
        let div = document.createElement("div");
        div.classList.add(
            "space-y-3",
            "border-2",
            "p-4",
            "rounded-lg",
            "border-zinc-500",
            "text-black"
        )
        div.innerHTML = `
            <h3 class="font-semibold text-2xl ">${userDonateAmount} tk donated for ${repTitle}</h3>
            <p class="text-lg font-light p-3 bg-blue-200 rounded-lg">Date: ${makeDate}</p>
        `;
        let showHistory = getID("all-history")
        showHistory.insertBefore(div,showHistory.childNodes[0])

        getID(donateNowBalance).value = '';

        // modal show
        getID("my_modal_6").checked = true;
        } else{
            return getID("my_modal_3").checked = true;
        }
        
        }

        else{
            return getID("my_modal_5").checked = true;
        }
    }