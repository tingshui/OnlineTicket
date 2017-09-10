<?php
session_start();

	$newid = $_SESSION['orderid'];
	$newid += 1;
	$_SESSION['orderid'] = $newid;
	$GLOBALS['maxOrderid'] = $newid;

	echo json_encode($newid) ;

?>