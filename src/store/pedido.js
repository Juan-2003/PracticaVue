
function recogerDatos(){
  let nombreCliente = document.getElementById("Nombre").value;
  let telefonoCliente = document.getElementById("telefono").value;
  let correoCliente = document.getElementById("correo").value;
  let descripcionCliente = document.getElementById("descripcion").value;

  let sabor = "";
  let sabores = document.getElementById("sabores3");
  if(sabores.checked){
    sabor = sabores3.value;
  }

  let sabores2 = document.getElementById("sabores4");
  if(sabores2.checked){
    sabor = sabores4.value;
  }

  let sabores3 = document.getElementById("sabores5");
  if(sabores2.checked){
    sabor = sabores5.value;
  }

  let sabores4 = document.getElementById("sabores6");
  if(sabores2.checked){
    sabor = sabores6.value;
  }

  let adorno="";
  let adornos = document.getElementById("adornos3");
  if(adornos.checked){
    adorno = adornos3.value;
  }

  let adornos2 = document.getElementById("adornos4");
  if(adornos2.checked){
    adorno = adornos4.value;
  }

  let adornos3 = document.getElementById("adornos5");
  if(adornos3.checked){
    adorno = adornos5.value;
  }

  let adornos4 = document.getElementById("adornos6");
  if(adornos4.checked){
    adorno = adornos6.value;
  }



  



  let mensajeFinal = "El cliente: "+nombreCliente+
                      ", telefono: " + telefonoCliente+
                      ", correo: "+correoCliente+
                      " ha elegido su pastel de: "+sabor+
                      "con desripcion: "+descripcionCliente;
  
console.log(mensajeFinal)

}