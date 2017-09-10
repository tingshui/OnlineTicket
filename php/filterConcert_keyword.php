<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$con = mysqli_connect("localhost", "root", "root", "Project");
$keyword = mysqli_real_escape_string($con, $_POST['value']);
$query = "SELECT * FROM concert WHERE isshown = 1 AND (description LIKE '%$keyword%' OR player LIKE '%$keyword%' OR concertname LIKE '%$keyword%');";
$result = mysqli_query($con, $query);

if(!mysqli_query ($con,$query)){
    echo("Error description: " . mysqli_error($con));
}

else{ 
   
   while($row = mysqli_fetch_array($result)){
        echo json_encode($row);
        echo '<br>';
   }
}
?>
