<?php
    $usuario = "root";
    $contrasena = "";
    $servidor = "localhost";
    $basededatos = "gioscorp2";

    $conexion = mysqli_connect($servidor,$usuario,$contrasena) or die("No se ha podido conectar al servidor de base de datos.");
    $db = mysqli_select_db($conexion, $basededatos) or die("Parece que ha habido un error.");
    echo "Success";


/*
    if(isset($_POST['search']))
    {

    }
    else {
        $query = "SELECT datostecnicos, descripcion, fecha, masinformacion, titulo FROM anuncio";
        $filter_Result = mysqli_query($conexion, $query);
        //$search_result = filterTable($query);
    }*/

    /*function filterTable($query){
        $filter_Result = mysqli_query($conexion, $query);
        return $filter_Result;
    }*/

?>

<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gio's Company Home</title>
    <link rel="stylesheet" href="../css/foundation.css">
    <link rel="stylesheet" href="../css/app.css">
    <link rel="stylesheet" href="../css/css.css">
</head>
<body>
    <?php include('../controladores/navbar_c.php') ?>
    <div class="mainb" align="center">
    <!-- <form action="filtering.php" method="POST">
    <input type="text" name="search" placeholder="Buscar"><br><br>
    <input type="submit" name="Filter" value="Filtrar"><br><br>
    </form> -->

<?php 

if(isset($_POST['search'])){ 
        
        

      $value=$_POST['search']; 
        
       //echo $sql;
      $sql = "CALL getData('$value')";
      $result=mysqli_query($conexion, $sql);
     
        
        while($row=mysqli_fetch_array($result)){ 
                    $title =$row['titulo'];
                    $tecData = $row['datostecnicos'];
                    $description = $row['descripcion'];
                    $date=$row['fecha']; 
                    $moreInfo = $row['masinformacion'];
                    
            //-display the result of the array 
        echo "<tr>\n"; 
        echo "<table><tr> <th>Titulo</th><th>Datos tecnicos</th><th>Descripcion</th><th>Fecha</th><th>Mas informacion</th></tr>";
                  echo "<tr>\n";  
            echo "<td>"   .$title . "</td><td> " . $tecData .  "</td><td> " . $description .  "</td><td> " . $date .  "</td><td> " . $moreInfo .  "</td>\n"; 
            echo "</tr>"; 
        echo "</table>";
      } 
                         
              }
     
?> 

    </div>

    <?php include('/partials/Footer.php') ?>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>

</body>
</html>
