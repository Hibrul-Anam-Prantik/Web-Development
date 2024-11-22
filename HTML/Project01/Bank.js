console.log("Welcome to Transaction!");

document.getElementById("btn_deposit").addEventListener("click", function(){
    const depositField = document.getElementById("deposit_num");
    const newDepositAccountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAccountString);

    const depositTotalElement = document.getElementById("total_deposit");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById("total_balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
});