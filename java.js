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
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    const number = card.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);
    alert(`Number Copied: ${number}`);
    const copyValue = parseInt(document.getElementById("copy-value").innerText);
    // console.log(copyValue)
    document.getElementById("copy-value").innerText = copyValue + 1;
  });
});

document.querySelectorAll(".call-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");
    const name = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".number").innerText;
    const helpLine = card.querySelector(".help-line").innerText;
    let coinValue = parseInt(document.getElementById("coin-value").innerText);
    const callHistory = document.getElementById("call-history");
    const date = new Date().toLocaleTimeString();

    // console.log(helpLine);
    if (coinValue >= 20) {
      document.getElementById("coin-value").innerText = coinValue - 20;
      alert(`📞 Calling ${name} ${number}`);
      const historyItems = document.createElement("div");
      historyItems.id = "call-history";
      historyItems.innerHTML = `
      <div class="flex justify-between items-center bg-[#FAFAFA] rounded-xl p-5 my-5"> 
            <div class="">
                <h1 class="font-bold text-xl">${helpLine}</h1>
            <p class="font-semibold text-gray-500">${number}</p>
        </div>
            <div>${date}</div>
        </div>

      `;
      callHistory.appendChild(historyItems);
    } else {
      alert("❌ Not Enough Coins ❌");
    }
    document.getElementById("clear-btn").addEventListener("click", function () {
      if (callHistory.children.length > 1) {
        callHistory.removeChild(callHistory.lastChild);
      }
    });
  });
});
