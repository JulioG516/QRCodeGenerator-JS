const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");



generateBtn.addEventListener("click", () => {
    const size = document.getElementById("size-select").value;
    console.log(`Esse é o valor: ${size}`);

    let qrValue = qrInput.value;
    if (!qrValue)
    {
        return;
    }

    if (size == 200)
    {
        wrapper.classList.add("dd");

    }
    if (size != 200)
    {
        wrapper.classList.remove("dd");
    }
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
    });
});