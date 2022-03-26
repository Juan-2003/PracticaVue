<template>
  <img src="@/assets/logo.png" alt="Pasteleria" width="300">
  <div class="Pedidos">
    <h1>Menú</h1>
    <!-- Derecha-->
    <div id="cupcake"><img src="@/assets/cupcake.png" style="width: 100px;"></div>
    <div id="cupcake2"><img src="@/assets/cupcake2.png" style="width: 100px;"></div>
    <div id="cupcake3"><img src="@/assets/cupcake3.png" style="width: 100px;"></div>

    <!-- Izquierda -->
    <div id="cupcake4"><img src="@/assets/cupcake.png" style="width: 100px;"></div>
    <div id="cupcake5"><img src="@/assets/cupcake2.png" style="width: 100px;"></div>
    <div id="cupcake6"><img src="@/assets/cupcake3.png" style="width: 100px;"></div>

    <body>
    <h1></h1>
    <div id="sabores">
    <h2>Sabores</h2>

      <div id="sabores2">
        <ul>
            <li>Chocolate ----------------------- Pequeño: $180 Mediano: $300 Grande: $380</li> 
            <br>
            <li>Limón --------------------------- Pequeño: $150 Mediano: $280 Grande: $380</li> 
            <br>
            <li>Fresa ----------------------------- Pequeño: $180 Mediano: $300 Grande: $380</li> 
            <br>
            <li>Ganache ------------------------- Pequeño: $140 Mediano: $250 Grande: $350</li> 
            <br>
            <li>Mermelada ---------------------- Pequeño: $180 Mediano: $300 Grande: $380</li> 
            <br>
            <li>Oreo ------------------------------ Pequeño: $180 Mediano: $300 Grande: $380</li> 
            <br>
            <li>Frutas ---------------------------- Pequeño: $200 Mediano: $320 Grande: $400</li> 
            <br>
            <li>Zanahoria ----------------------- Pequeño: $180 Mediano: $300 Grande: $380</li> 
            <br>
            <li>Tres Leches --------------------- Pequeño: $180 Mediano: $300 Grande: $380</li> 
            <br>
            <li>Almedras ------------------------ Pequeño: $170 Mediano: $270 Grande: $350</li> 
        </ul>
        </div>
    </div>
    <div id="adornos">
    <h2>Adornos</h2>
      <div id="adornos2">
        <ul>
            <li>Galletas de Chocolate ------ $80</li>
            <li>Nueces ------------------------ $60</li>
            <li>Frutos Secos ----------------- $90</li>
            <li>Pasas -------------------------- $50</li>
            <li>Chocolate -------------------------- $50</li>
            <li>Vainila -------------------------- $50</li>
            <li>Fresa -------------------------- $50</li>
        </ul>
      </div>
    </div>
    
    <a href="Pedido.vue">
        <input id="realizarPedido" type="button" value="Para realizar el Pedido, dirijase a la pestaña 'Pedido'" target="_blank">
    </a>
    <br><br><br>

<footer>
    <ul>
        <li>Horario
            <ul>
              <div id="horario">
                <li>Lunes: 9:00 a.m - 8:00 p.m</li>
                <li>Martes: 9:00 a.m - 8:00 p.m</li>
                <li>Miercoles: 9:00 a.m - 8:00 p.m</li>
                <li>Jueves: 9:00 a.m - 8:00 p.m</li>
                <li>Viernes: 9:00 a.m - 8:00 p.m</li>
                <li>Sabado: 10:00 a.m - 8:00 p.m</li>
              </div>
            </ul>
        </li>
    </ul>
  <p id="tel">Tel: 3358374496</p>
  <div class="direccion">Calle Argentina 20, Col Americana, Americana, 44160 Guadalajara, Jal.</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8208359532996!2d-103.35976531705366!3d20.676866848406842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae02d6ee25b5%3A0x7bea8ec5b5c39758!2sPeko%20Peko!5e0!3m2!1ses!2smx!4v1646260337153!5m2!1ses!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>

</footer>

</body>
  </div>
</template>
<style>
#cupcake{
  position: fixed;
  margin-top:-170px;
}

#cupcake2{
  position: fixed;
  margin-top:-170px;
  margin-left: 120px;
}

#cupcake3{
  position: fixed;
  margin-top:-170px;
  margin-left: 240px;
}

#cupcake4{
  position: fixed;
  margin-top:-170px;
  margin-left: 1470px;
}

#cupcake5{
  position: fixed;
  margin-top:-170px;
  margin-left: 1590px;
}

#cupcake6{
  position: fixed;
  margin-top:-170px;
  margin-left: 1710px;
}


body{
  background: #ffffbd;
}
li{
  font-size: 20px;
  list-style: none;
}


#realizarPedido{
  font-size: 20px;
  font-weight: bold;
  background-color: #ffffbd;
  margin-left: 40px;
  border-style: none;

  
}

#sabores{
  float: left;
  margin-left: 350px;
}

#sabores2{
  margin-left: -30px;
  padding-right:  10px;
  margin-left: 0px ;
  border:solid;
  border-color: #ff637d;
  border-width: 10px;
}

#adornos{
  float: left;
  padding-right: 300px;
  padding-bottom: 171px;
}

#adornos2{
  margin-left: -10px;
  border:solid;
  border-color: #ff637d;
  border-width: 10px;
  padding-bottom: 171px;
}
#adornos li{
  margin-top: 10px;
}


h2{
  border: solid;
  border-color: #ff637d;
  background: #ff637d;
  color: white;
  border-bottom-color: #ff637d;
  margin-bottom: 0px;
  margin-top: 60px;
}

#horario{
  line-height: 30px;
  margin-left: -20px;
}

#tel{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
}



.direccion{
  font-weight: 20px;
}


</style>
