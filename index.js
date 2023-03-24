function CalcImc(params) {
    var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;

    var imc = peso / (altura*altura);
    var totalimc = imc.toFixed(2);

    var condition = ""
    if (totalimc <= 18) {
        condition = "Você está abaixo do peso!"
    }else if (totalimc <= 25) {
        condition= "Você está no peso ideal!"
    }else if (totalimc <= 29.9) {
        condition = "Você está com sobre peso!"
    }else if (totalimc <= 34.9) {
        condition="Você está com obesidade grau I!"
    }else if (totalimc<= 39.9) {
        condition= " Voê está com obesidade grau II!"
    }else if (totalimc >= 40) {
        condition = " Você está com obesidade grau III"
    }
    document.getElementById("resultado").innerText = "Seu imc é: " + totalimc + ", " + condition;


}
