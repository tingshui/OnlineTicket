<?php
session_start();
if (isset($_SESSION['username']) && isset($_SESSION['orderid'])){
	echo 'true';
}
else
{
	echo 'false';
}


?>