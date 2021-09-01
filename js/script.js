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
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
    document.getElementById("splitValue").innerHTML = numberOfPeople(splitAmount);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatMoney(newtipEach);
}

function formatMoney(value)
{
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$ " + value;
}

function numberOfPeople(value)
{
    if (value === "1") return value + " person"
    return value + " people"
}