<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
session_start();
$con = mysqli_connect("localhost", "root", "root", "Project");
if(mysqli_connect_errno()){
    echo 'error';
}
$username = mysqli_real_escape_string($con, $_POST['username']);
$password = mysqli_real_escape_string($con, $_POST['password']);
$query = "SELECT UserID, Password, salt, FirstName, LastName, Email, Authority FROM Users WHERE UserID = '$username';";
$result = mysqli_query ($con,$query);
if($result->num_rows == 0){
    echo 'false';
}
else{
    $row = mysqli_fetch_array($result);
    $hash = hash('sha256', $row['salt'].hash('sha256', $password));
    if($row['Password'] == $hash){
        echo 'true';
        session_regenerate_id();
        $_SESSION['username'] = $row['UserID'];
        $_SESSION['firstname'] = $row['FirstName'];
        $_SESSION['lastname'] = $row['LastName'];
        $_SESSION['email'] = $row['Email'];
        $_SESSION['authority'] = $row['Authority'];
        $_SESSION['start'] = time();
		
		if (!isset($GLOBALS['maxOrderid'])){
			$query = "select orderid from orderinfo;";
			$result = mysqli_query($con, $query);
			$maxorderid = 0;
			
			if ($result->num_rows > 0)
			{
				while($row = mysqli_fetch_array($result))
				{
					$orderstr = substr($row['orderid'], 2, 3);
					$orderint = (int)(ltrim($orderstr, '0'));
					if ($orderint > $maxorderid)
					{
						$maxorderid = $orderint;
					}
				}
			}
			else{
				die('error loading max orderid');
			}
			
			$maxorderid += 1;
			$_SESSION['orderid'] = $maxorderid;
			$GLOBALS['maxOrderid'] = $maxorderid;
		}
		else{
			$GLOBALS['maxOrderid']+=1;
		}
		
        session_write_close();
    }
    else{
        echo 'false';
    }
}
?>
