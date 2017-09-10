<?php
/*This file is used to delete specific concert information.*/
session_start();
	$concertid = $_GET['concertid'];
	$seatid = $_GET['seatid'];
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$query = "DELETE FROM suborder where concertid='".$concertid."' AND seatid='".$seatid."';";
	$result = mysqli_query($conn, $query);
	
	if ($result)
	{
		echo 'true';
	}
	else{		
		echo 'error when deleting a row in suborder';
	}

?>