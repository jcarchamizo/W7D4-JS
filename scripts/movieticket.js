function rellenarTicket() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const fila = document.getElementById("fila").value;
    const asiento = document.getElementById("asiento").value;
  
    document.getElementById("t-nombre").textContent = nombre || "________";
    document.getElementById("t-fecha").textContent = fecha || "________";
    document.getElementById("t-fila").textContent = "Fila " + (fila || "__");
    document.getElementById("t-asiento").textContent = "Asiento " + (asiento || "__");
  }