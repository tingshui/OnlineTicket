<?php
session_start();

$orderint = $_SESSION['orderid'];
$orderid = sprintf("%03s", $orderint);
$orderid = 'od'.$orderid;
echo $orderid;

?>