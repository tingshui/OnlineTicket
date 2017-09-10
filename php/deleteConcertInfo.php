<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$con = mysqli_connect("localhost", "root", "root", "Project");
$concertid = $_POST['concertid'];
//$concertid = sprintf("%03d", $_POST['concertid']);
$query = "SELECT * FROM suborder WHERE concertid = '$concertid';";
$result = mysqli_query($con, $query);
if(!mysqli_query ($con,$query)){
    echo("Error description: " . mysqli_error($con));
}
else if($result->num_rows == 0){
    $query = "UPDATE concert SET isshown = 0 WHERE concertid = '$concertid';";
    if(!mysqli_query ($con,$query)){
        echo("Error description: " . mysqli_error($con));
    }
    else{ 
       echo "deleted";
    }
}
else{
    echo "Cannot delete concert, someone has already reserved a seat!";
}
?>
