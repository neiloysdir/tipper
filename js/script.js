let container = document.getElementById('container');
if (container) {
    container.addEventListener('input', update);
}

function update() {
    let bill = document.getElementById("yourBill").value;
    let tipPercentage = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    
}