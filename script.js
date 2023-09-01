document.addEventListener("DOMContentLoaded", function() {
    const resultArea = document.getElementById("resultArea");
    const submitButton = document.getElementById("submitButton");
    const reiniciar = document.getElementById("reiniciar");
    const inputNum = document.getElementById("inputText");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    var veces = 0;
    var diferencia = 0;
    var result = "";
    let nums = [];
    inputNum.focus();

    reiniciar.style.display = "none";

    function validarInput(input) {
        const regex = /^[0-9]+$/;
        var valido = false;
        if (regex.test(input)) {
            valido = true;
        } return valido;
    }
    inputNum.oninput = function () {
        if (!validarInput(inputNum.value)) {
            inputNum.value = "";
        }
    }    

    reiniciar.addEventListener("click", function () {
        location.reload();
    });

    submitButton.addEventListener("click", function () {        
        if (inputNum.value != "") {
            veces++;
            nums.push(parseInt(inputNum.value, 10));
            if (parseInt(inputNum.value, 10) != randomNumber && veces <= 8) {
                if (randomNumber > parseInt(inputNum.value, 10)) {
                    diferencia = randomNumber - parseInt(inputNum.value, 10);
                } else {
                    diferencia = parseInt(inputNum.value, 10) - randomNumber;
                }
                switch (true) {
                    case (diferencia <= 5): result = "Muy Caliente"; break;
                    case (diferencia > 5 && diferencia <= 10): result = "Caliente"; break;
                    case (diferencia > 10 && diferencia <= 15): result = "Tibio"; break;
                    case (diferencia > 15): result = "Helado"; break;
                }

                resultArea.textContent = result;
                inputNum.focus();
            } else if (veces <= 8) {
                resultArea.textContent = "Felicitaciones!!! Adivinaste!! con " + veces + " intentos " + nums;
                reiniciar.style.display = "block";
            } else {
                resultArea.textContent = "Lo siento demasiados intentos!";
                reiniciar.style.display = "block";
            }

        } else {
            alert("Debes ingresar valor!");
            inputNum.focus();
        }

        
    });
});
