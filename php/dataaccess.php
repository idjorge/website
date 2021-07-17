<?php
    $server = "lacongre.com";
    $user = "lacongre_paseo";
    $pass = "Zuri1914jr0v3rM1nd";
    $basedatos = "lacongre_paseo";
    $msj = "No se encontró el enlace con el servidor de la base de datos";
    $conexion = mysqli_connect($server, $user, $pass, $basedatos) or 
                die("Ha susecido un error inesperado con la conexión de la base de datos");
    $conexion = new mysqli($server, $user, $pass, $basedatos) or die ($msj);
    $acento = $conexion->query("SET NAME 'utf8'");

    if(mysqli_connect_errno()){
        echo "Conexión fallida: ", mysqli_connect_error(); 
        exit();
    }
    else{
        //echo "conexion exitosa";
        //exit();
    }
?>