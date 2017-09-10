<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if(!isset($_POST['concertid']) || !isset($_POST['concertname'])||!isset($_POST['concertPic'])
    ||!isset($_POST['description'])||!isset($_POST['player'])||!isset($_POST['price'])||!isset($_POST['schedule'])){
    echo("One or more fields are missing");
    exit();
}
$con = mysqli_connect("localhost", "root", "root", "Project");
$concertid = $_POST['concertid'];
//$concertid = sprintf("%03d", $_POST['concertid']);
$concertname = mysqli_real_escape_string($con, $_POST['concertname']);
$concertPic = mysqli_real_escape_string($con, $_POST['concertPic']);
$description = mysqli_real_escape_string($con, $_POST['description']);
$player = mysqli_real_escape_string($con, $_POST['player']);
$price = $_POST['price'];
$time = $_POST['schedule'];

$query = "SELECT * FROM suborder WHERE concertid = '$concertid';";
$result = mysqli_query($con, $query);
if(!mysqli_query ($con,$query)){
    echo("Error description: " . mysqli_error($con));
}
else if($result->num_rows == 0){
    $query = "UPDATE concert SET concertname = '$concertname', time = '$time', player = '$player', "
        . "price = '$price', description = '$description', image = '$concertPic' WHERE concertid = '$concertid';";
 
    if(!mysqli_query ($con,$query)){
        echo("Error description: " . mysqli_error($con));
    }
    else{ 
       echo "Concert info has been updated";
    }
}
else{
    $query = "UPDATE concert SET concertname = '$concertname', time = '$time', player = '$player', "
        . "description = '$description', image = '$concertPic' WHERE concertid = '$concertid';";
 
    if(!mysqli_query ($con,$query)){
        echo("Error description: " . mysqli_error($con));
    }
    else{ 
       echo "Some one has already ordered the ticket, so the price cannot be updated";
    }
    
}




?>
