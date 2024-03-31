const slider = document.querySelector("input[type='range']");
slider.addEventListener("input", calculateTip);

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

const error = document.getElementById('error');

function calculateTip(){
    let bill1 = document.querySelector("#bill");
    if(isNaN(bill1.value) || bill1.value=='')
    {
        error.innerText = "Enter valid bill amount!";
        return;
    }

    error.innerText = "";

    let bill = parseFloat(billInput.value);

    billInput.value = bill.toFixed(2);

    let tipPercent = document.getElementById("tip").value;

    let tipAmount = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let totalBill = parseFloat((bill + tipAmount).toFixed(2));
    
    document.getElementById("tip_percentage").value = `${tipPercent}%`;
    document.getElementById("tip_amount").value = `\$ ${tipAmount}`;
    document.getElementById("bill_with_tip").value = `\$ ${totalBill}`;
}
calculateTip();