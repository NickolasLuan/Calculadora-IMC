function calcularImc() {

        var altura = document.getElementById("altura").value;
        var peso   = document.getElementById("peso").value;
        var imc = (peso / (altura * altura)).toFixed(2);
        
        if (imc <18.5) {
            document.getElementById("resultado").innerHTML = `Seu IMC  é de ${imc}, você está abaixo do peso.`
        } else if (imc >= 18.5 && imc <=24.9) {
            document.getElementById("resultado").innerHTML = `Seu IMC  é de ${imc}, você está com peso normal.`
        } else if (imc >= 25.0 && imc <=29.9) {
            document.getElementById("resultado").innerHTML = `Seu IMC  é de ${imc}, você está com sobrepeso.`
        } else if (imc >= 30.0 && imc <=39.9) {
            document.getElementById("resultado").innerHTML = `Seu IMC  é de ${imc}, você está com obesidade.`
        } else {
            document.getElementById("resultado").innerHTML = `Seu IMC  é de ${imc}, você está com obesidade grave.`
        }


        }