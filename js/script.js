let container = document.getElementById('container');
if (container) {
    container.addEventListener('input', update);
}

function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercentage = document.getElementById("tipInput").value;
    let splitAmount = document.getElementById("splitInput").value;
    
    let tipValue = bill * (tipPercentage/100);
    let newtipEach = tipValue / splitAmount;
    let newBillEach = (bill + tipValue) / splitAmount;
    
    document.getElementById("tipPercent").innerHTML = tipPercentage + "%";
    document.getElementById("tipValue").innerHTML = tipValue;
    document.getElementById("totalWithTip").innerHTML = bill + tipValue;
    document.getElementById("splitValue").innerHTML = splitAmount + " person";
    document.getElementById("billEach").innerHTML = newBillEach;
    document.getElementById("tipEach").innerHTML = newtipEach;
}