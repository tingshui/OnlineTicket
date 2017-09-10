<?php
/*This file is used to get suborder information for a specific order*/
session_start();
	$orderint = $_SESSION['orderid'];
	$orderid = sprintf("%03s", $orderint);
	$orderid = 'od'.$orderid;
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$query = "SELECT COUNT(orderid) as total FROM suborder where orderid='".$orderid."';";
	$result = mysqli_query($conn, $query);
	
	if ($result)
	{
		$row = mysqli_fetch_assoc($result);	
		echo $row['total'];

	}
	else{	
		$row = mysqli_fetch_assoc($result);	
		echo $row['total'];

	}

?>