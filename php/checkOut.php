<?php
/*This file is used to check out the current order.*/
session_start();
	$orderid = $_GET['orderid'];
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$query = "UPDATE orderinfo SET status=1, paytime=Now() where orderid='".$orderid."';";
	$result = mysqli_query($conn, $query);

	
	if ($result)
	{
		echo 'true';
	}
	else{		
		echo 'error when updating a row in orderinfo';
	}

?>