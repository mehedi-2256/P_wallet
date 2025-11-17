// when to show which section handler
document.getElementById("addmoney-section").addEventListener("click",function(){
    document.getElementById("addMoney").hidden = false;
    document.getElementById("cashOut").hidden = true;
})

document.getElementById("cashOut_section").addEventListener("click",function(){
    document.getElementById("addMoney").hidden = true;
    document.getElementById("cashOut").hidden = false;
})


// Add Money handler
document.getElementById("addMoney_btn").addEventListener("click", function () {
  const amount = document.getElementById("addAmount").value;
  const pin = document.getElementById("pin").value;

  if (pin === "1234") {
    const sum =
      parseFloat(document.getElementById("default_amount").innerText) +
      parseFloat(amount);
    document.getElementById("default_amount").innerText = sum;
  }
});

// Cash Out handler
document.getElementById("cashout_btn").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("cashoutAmount").value);
  const pin = document.getElementById("cashout_pin").value;
  const defaultAmount = parseFloat(
    document.getElementById("default_amount").innerText
  );

  if (pin === "1234") {
    if (defaultAmount < amount) {
      alert("Invalid Amount entered");
    } else {
      const sum = defaultAmount - amount;
      document.getElementById("default_amount").innerText = sum;
    }
  }
});



