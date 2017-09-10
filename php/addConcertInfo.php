<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if(!isset($_POST['concertId']) || !isset($_POST['concertname'])||!isset($_POST['concertPic'])
    ||!isset($_POST['description'])||!isset($_POST['player'])||!isset($_POST['price'])||!isset($_POST['schedule'])){
    echo("One or more fields are missing");
    exit();
}
$con = mysqli_connect("localhost", "root", "root", "Project");
$concertId = $_POST['concertId'];
$concertname = mysqli_real_escape_string($con, $_POST['concertname']);
$concertPic = mysqli_real_escape_string($con, $_POST['concertPic']);
$description = mysqli_real_escape_string($con, $_POST['description']);
$player = mysqli_real_escape_string($con, $_POST['player']);
$price = $_POST['price'];
$time = $_POST['schedule'];
 $query = "INSERT INTO concert (concertid, concertname, time, player, price, description, image, isshown) "
        . "VALUES ('$concertId','$concertname','$time','$player','$price', '$description', '$concertPic', 1);";
 
if(!mysqli_query ($con,$query)){
    echo("Error description: " . mysqli_error($con));
}
else{ 
   echo "success";
}
?>
