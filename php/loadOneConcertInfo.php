<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$concertid = $_POST['concertid'];
//$concertid_formated = sprintf("%03d", $concertid);
$con = mysqli_connect("localhost", "root", "root", "Project");

$query = "SELECT * FROM concert WHERE concertid = '$concertid';";
$result = mysqli_query($con, $query);

if(!mysqli_query ($con,$query)){
    echo("Error description: " . mysqli_error($con));
}

else{ 
   
   while($row = mysqli_fetch_array($result)){
        echo json_encode(utf8ize($row));
        //echo '<br>';
   }
}

	function utf8ize($d) {
		if (is_array($d)) 
			foreach ($d as $k => $v) 
				$d[$k] = utf8ize($v);
	
		else if(is_object($d))
			foreach ($d as $k => $v) 
				$d->$k = utf8ize($v);
	
		else 
			return utf8_encode($d);

		return $d;
	}

?>
