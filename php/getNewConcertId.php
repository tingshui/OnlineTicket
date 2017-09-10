<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$con = mysqli_connect("localhost", "root", "root", "Project");
$query = "SELECT concertid FROM concert;";
 
if(!mysqli_query ($con,$query)){
    echo("Error description: " . mysqli_error($con));
}
else{ 
   $result = mysqli_query ($con,$query);
   $array = array();
   while($row = mysqli_fetch_array($result)){
       array_push($array, $row['concertid']);
   }
   if(count($array) == 0){
       $new_id = 1;
   }
   else{
       $new_id = max($array) + 1;
   }
   echo sprintf("%03d", $new_id);
}
?>
