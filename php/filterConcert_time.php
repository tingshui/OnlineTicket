<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$concertid = $_POST['concertid'];
//$concertid_formated = sprintf("%03d", $concertid);
$interval = $_POST['value'];
$con = mysqli_connect("localhost", "root", "root", "Project");

//$query = "SELECT * FROM concert WHERE isshown = 1;";
$query = "SELECT * FROM concert WHERE isshown = 1 AND time <= (CURDATE() + INTERVAL '$interval' DAY);";
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
