<?php
/*This file is used to get suborder information for a specific order*/
session_start();
	$orderid = $_GET['orderid'];
	$conn=mysqli_connect("localhost","root","root","project");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$query = "SELECT * FROM orderinfo where orderid='".$orderid."';";
	$result = mysqli_query($conn, $query);
	
	if ($result && $result->num_rows == 0)
	{
		echo ' ';
	}
	else{		
		$query2 = "SELECT * FROM suborder where orderid='".$orderid."';";
		$result2 =mysqli_query($conn, $query2);
		if ($result2->num_rows > 0){			
			while($row2 = mysqli_fetch_array($result2)){
				echo json_encode(utf8ize($row2));
				echo '<br>';
			}
		}
		else {
			echo 'error in finding suborder with current orderid.';
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