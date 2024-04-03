const slider = document.querySelector("input[type='range']");
slider.addEventListener("input", calculateTip);

const billInput = document.getElementById("bill");
billInput.addEventListener("input", calculateTip);

const error = document.getElementById("error");

function calculateTip(){
    let tipAmount;
    let totalBill;

    let tipPercent = document.getElementById("tip").value;
    document.getElementById("tip_percentage").value = `${tipPercent}%`;

    let bill1 = document.querySelector("#bill");
    if(isNaN(bill1.value) || bill1.value=='' || bill1.value<0)
    {
        error.innerText = "Enter valid bill amount!";
        document.getElementById("tip_amount").value = "";
        document.getElementById("bill_with_tip").value = "";
        return;
    }

    error.innerText = "";

    let bill = parseFloat(billInput.value);
    //billInput.value = bill.toFixed(2);

    tipAmount = parseFloat((bill * (tipPercent/100)).toFixed(2));
    totalBill = parseFloat((bill + tipAmount).toFixed(2));
    
    document.getElementById("tip_amount").value = `\$ ${tipAmount}`;
    document.getElementById("bill_with_tip").value = `\$ ${totalBill}`;
}
calculateTip();