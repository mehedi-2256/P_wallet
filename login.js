document.getElementById("loginBtn").addEventListener("click", function () {
  const accnum = document.getElementById("accNum").value;
  const accPin = document.getElementById("pin").value;

  if (accnum && accPin === "1234") {
    window.location.href = "./main.html";
  } else {
    alert("Invalid pin for the account entered");
  }
});
