<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">

     <!-- Bootstrap CSS -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">



    <title>La Congre | Paseo del Valle</title>
    <link rel="stylesheet" href="css/login.css">
   <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>
    <div class="bg-img">
      <div class="content">
        <header>INGRESAR</header>

        <form action="php/login.php" method="POST">
            <div class="field">
                <span class="fa fa-user"></span>
                <input id="user" type="text" required placeholder="Usuario">
            </div>

            <div class="field space">
                <span class="fa fa-lock"></span>
                <input id="pass" type="password" class="pass-key" required placeholder="Contraseña">
                <span class="show">SHOW</span>
            </div>

            <div class="pass">
                <a href="#">Olvidaste la contraseña?</a>
            </div>

            <div class="field">
                <input type="submit" value="ENTRAR">
            </div>

        </form>

        <?php
            if(isset($_GET['mensaje'])){
                $msj=$_GET['mensaje'];
        ?>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error!</strong> <?php echo $msj;}?>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

      </div>
    </div>

    <script>
      const pass_field = document.querySelector('.pass-key');
      const showBtn = document.querySelector('.show');
      showBtn.addEventListener('click', function(){
       if(pass_field.type === "password"){
         pass_field.type = "text";
         showBtn.textContent = "HIDE";
         showBtn.style.color = "#3498db";
       }else{
         pass_field.type = "password";
         showBtn.textContent = "SHOW";
         showBtn.style.color = "#222";
       }
      });
    </script>


       <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>



  </body>
</html>
