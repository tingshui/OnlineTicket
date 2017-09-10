<?php
/*This file is used to get specific seat information.*/
session_start();
	$seatid = $_GET['seatid'];
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$query = "SELECT * FROM seat where seatid='".$seatid."';";
	$result = mysqli_query($conn, $query);
	
	if ($result && $result->num_rows == 0)
	{
		echo ' ';
	}
	else{		
		while($row = mysqli_fetch_array($result)){
			echo json_encode(utf8ize($row));
			echo '<br>';
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