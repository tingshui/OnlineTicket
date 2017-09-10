<?php
session_start();
	$concertid = $_GET['concert'];
	$seatint = $_GET['seat'];
	$orderint = $_SESSION['orderid']; //int
	$userid = $_SESSION['username'];
	$orderid = sprintf("%03s",$orderint);
	$orderid = 'od'.$orderid;
	
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$query = "SELECT * FROM orderinfo where orderid='".$orderid."' and userid='".$userid."';";
	$result = mysqli_query($conn, $query);
	
	if ($result && $result->num_rows == 0)
	{
		$query = "insert into orderinfo(orderid,userid,status) values('".$orderid."','".$userid."','0');";
		if (!mysqli_query($conn, $query))
		{
			echo 'error when inserting a row in orderinfo  '.$query;
			return;
		}
	}
	
	$query = "insert into suborder(orderid,concertid,seatid) values('".$orderid."', '".$concertid."', '".$seatint."');";
	if (mysqli_query($conn, $query))
	{
		echo 'true';
	}
	else
	{
		echo 'error when inserting a row in suborder';
	}
?>