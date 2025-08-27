// heart button
function heartButton(id) {
  const heartValue = parseInt(document.getElementById("heart-value").innerText);
  const plusValue = 1;
  document.getElementById("heart-value").innerText = heartValue + plusValue;
}

// heart button increase
document.getElementById("1heart-btn").addEventListener("click", function () {
  heartButton("1heart-btn");
});
document.getElementById("2heart-btn").addEventListener("click", function () {
  heartButton("2heart-btn");
});
document.getElementById("3heart-btn").addEventListener("click", function () {
  heartButton("3heart-btn");
});
document.getElementById("4heart-btn").addEventListener("click", function () {
  heartButton("4heart-btn");
});
document.getElementById("5heart-btn").addEventListener("click", function () {
  heartButton("5heart-btn");
});
document.getElementById("6heart-btn").addEventListener("click", function () {
  heartButton("6heart-btn");
});
document.getElementById("7heart-btn").addEventListener("click", function () {
  heartButton("7heart-btn");
});
document.getElementById("8heart-btn").addEventListener("click", function () {
  heartButton("8heart-btn");
});
document.getElementById("9heart-btn").addEventListener("click", function () {
  heartButton("9heart-btn");
});

document.querySelectorAll(".call-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    const name = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".number").innerText;
    let coinValue = parseInt(document.getElementById("coin-value").innerText);
    console.log(coinValue);
    if (coinValue >= 20) {
      document.getElementById("coin-value").innerText = coinValue - 20;
      alert(`📞 Calling ${name} ${number}`);
    }
    else{
        alert("❌ Not Enough Coins ❌")
    }
    
  });
});
