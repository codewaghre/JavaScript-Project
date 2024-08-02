const billAmount = document.getElementById('bill-amount')
const tipAmount = document.getElementById('tip-percentage')
const calculate = document.getElementById('calculate')
const totalBill= document.getElementById('total-bill')


calculate.addEventListener('click', (e) => {
    if (!billAmount.value || !tipAmount.value) {
        alert("Please Enter the values")
    } else if (billAmount.value < 0 || tipAmount.value < 0) {
        alert("please enter Postives values ")
    } 
    
    // console.log( billAmount.value);  
    
    const billAmountValue = Number(billAmount.value)  // convert Into Number
    const tipAmountValue = Number(tipAmount.value)
    const tip = billAmountValue * (tipAmountValue / 100)
    console.log(tip);
    const totalBillAmount = billAmountValue + tip
    console.log(totalBill);
    totalBill.innerText =  totalBillAmount
    
    
})