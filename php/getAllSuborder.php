<?php
/*This file is used to get all suborder information for a specific order.*/
session_start();
	$orderid = $_GET['orderid'];
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$query = "SELECT seat.row, seat.col, concert.concertname, concert.price, orderinfo.orderid, orderinfo.paytime FROM (((orderinfo INNER JOIN suborder ON orderinfo.orderid=suborder.orderid) INNER JOIN seat ON suborder.seatid=seat.seatid) INNER JOIN concert ON suborder.concertid=concert.concertid) where orderinfo.orderid='".$orderid."';";
	$result = mysqli_query($conn, $query);
	
	if ($result && $result->num_rows == 0)
	{
		echo ' ';
	}
	else{		
		while($row = mysqli_fetch_array($result)){
			echo json_encode($row);
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