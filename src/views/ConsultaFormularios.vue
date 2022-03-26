<template>

<body>
    <h1>Formularios de Clientes</h1>
    <div id="info">
        <table>
            <tr>
                <th>Cliente</th>
                <th>Pedido</th>
            </tr>
            <tr>
                <td>(Nombre de los clientes)</td>
                <td>(Pedido de cliente)</td>
            </tr>
          
        </table>
    </div>
    <br>



<h1>Ingredientes disponibles</h1>
<div id="saboresDisponibles">
<h2>Sabores</h2>
    <p id="texto">Cantidad de sabores diponibles para pasteles</p>
    
    <div id="lista1">
        <table>
            <tr>
                <th>Chocolate</th>
                <th>Limón</th>
                <th>Fresa</th>
                <th>Ganache</th>
                <th>Mermelada</th>
                <th>Oreo</th>
                <th>Frutas</th>
                <th>Zanahoria</th>
                <th>Tres Leches</th>
                <th>Almendras</th>
            </tr>
            <tr>
                <td>5</td>
                <td>7</td>
                <td>3</td>
                <td>9</td>
                <td>9</td>
                <td>2</td>
                <td>7</td>
                <td>3</td>
                <td>5</td>
                <td>7</td>
            </tr>
    
        </table>
    </div>
</div>
<div id="adornosDisponibles">
<h2>Adornos</h2>  
    <p id="texto2">Adornos disponibles para la cantidad de pasteles</p>
      
    <div id="lista2">
        <table>
            <tr>
                <th>Galletas de Chocolate</th>
                <th>Nueces</th>
                <th>Frutos Secos</th>
                <th>Pasas</th>
            </tr>
            <tr>
                <td>4</td>
                <td>6</td>
                <td>8</td>
                <td>15</td>
            </tr>
   
        </table>
    </div>
        <br><br>
        
    </div>
        
        
</body>
</template>
<style>
body{
    background: #ffffbd;
}

#todo{
    float:left;
    background: #ff637d;
    border-radius: 10px;
    width: 550px;
    height: 750px;
    margin-left: 200px;
}

#pastel3{
    float:right;
    width: 1000px;
    height: 750px;
}


#Nombre{
    margin-top: 10px;
    font-size: 15px; 
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


#Telefono{
    margin-top: 10px;
    font-size: 15px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}



#Correo{
    margin-top: 10px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
}

#descripcion, p, #correo, #telefono, #descripcion, #nombre{
    font-size: 18px;
    font-weight: bold;
    color: white;
}

#Descripcion{
    margin-top: 10px;
    font-size: 15px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#sabores3, #sabores4, #sabores5, #sabores6 #adornos3{
     margin-top: 10px;
    font-size: 15px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#info{
     background: #ff637d;
    color: white;
    margin-left: 600px;
    margin-right: 600px;
    padding-left: 180px;
    padding-bottom: 20px;
    border-radius: 10px;
    text-align: center;
}

#saboresDisponibles{
    background: #ff637d;
    color: white;
    margin-left: 500px;
    margin-right: 500px;
    padding-bottom: 20px;
    border-radius: 10px;
}

#adornosDisponibles{  
    background: #ff637d;
    color: white;
    margin-left: 500px;
    margin-right: 500px;
    padding-bottom: -20px;
    border-radius: 10px ;
}

#texto{
    font-size: 20px;
    border-top-style: solid;
    border-bottom-style: solid;
    margin-top: -2px;
    padding-top: 10px;
    padding-bottom: 3px;
}

#texto2{
     font-size: 20px;
    border-top-style: solid;
    border-bottom-style: solid;
    margin-top: -2px;
    padding-top: 10px;
    padding-bottom: 3px;
}

#lista1{
    margin-left: 130px;
}

#lista2{
    margin-left:260px;
}






</style>
