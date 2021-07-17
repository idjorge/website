<?php
    include ('dataaccess.php');
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $query="SELECT * 
            FROM usuarios 
           WHERE idusuario = '$user' 
             AND password = '$pass'";
    $respuesta = $conexion->query($query);
    $fila = $respuesta->fetch_row();
    print_r($fila);
    if($user == $fila[0] and $pass == $fila[1] and !empty($fila)){
        $url = "location:../preachingwork.html";
        header($url);
    } else {
        $msj = "El usuario o la contraseña son incorrectos";
        $url = "location:../acceso.php?mensaje=".$msj;
        header($url);
        echo $msj;
    }
?>