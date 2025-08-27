function heartButton(id){
    const heartValue = parseInt(document.getElementById("heart-value").innerText);
  const plusValue = 1;
  document.getElementById("heart-value").innerText = heartValue + plusValue;
}

document.getElementById("1heart-btn").addEventListener("click", function () {
  heartButton("1heart-btn")
});
document.getElementById("2heart-btn").addEventListener("click", function () {
  heartButton("2heart-btn")
});
document.getElementById("3heart-btn").addEventListener("click", function () {
  heartButton("3heart-btn")
});
document.getElementById("4heart-btn").addEventListener("click", function () {
  heartButton("4heart-btn")
});
document.getElementById("5heart-btn").addEventListener("click", function () {
  heartButton("5heart-btn")
});
document.getElementById("6heart-btn").addEventListener("click", function () {
  heartButton("6heart-btn")
});
document.getElementById("7heart-btn").addEventListener("click", function () {
  heartButton("7heart-btn")
});
document.getElementById("8heart-btn").addEventListener("click", function () {
  heartButton("8heart-btn")
});
document.getElementById("9heart-btn").addEventListener("click", function () {
  heartButton("9heart-btn")
});
