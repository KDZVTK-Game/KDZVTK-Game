let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
}

function generateCode() {
    let gradient = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    outputCode.value = `background-image: ${gradient}`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = gradient;
    localStorage.setItem("backgroundGradient", gradient); // Lưu màu nền vào localStorage
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    alert("Gradient Copied!");
}

function Vetrangchinh() {
    window.location.href = "index.html"
}

generateCode();
