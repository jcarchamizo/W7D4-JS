function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      resultado.innerHTML = "Por favor, introduce valores válidos para altura y peso.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let mensaje = `Para la altura ${altura} m y el peso ${peso} kg, tu IMC es: ${imc.toFixed(2)}.<br>`;
  
    if (imc < 18.5) {
      mensaje += "Estás por debajo del peso recomendado.";
    } else if (imc >= 18.5 && imc < 25) {
      mensaje += "Estás en un peso saludable.";
    } else if (imc >= 25 && imc < 30) {
      mensaje += "Estás en sobrepeso.";
    } else {
      mensaje += "Estás en un rango de obesidad.";
    }
  
    resultado.innerHTML = mensaje;
  }