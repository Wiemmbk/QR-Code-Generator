const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector("input");
const button = document.querySelector("button");
const qrImg = document.querySelector("img");

button.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // if qrValue is empty, return nothing
    button.innerText = "Generating QR Code...";
    //getting a QR Code of user entered value using the qrserver
    // api and passing the api returned img src to the qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {

        wrapper.classList.add("active");
        button.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});