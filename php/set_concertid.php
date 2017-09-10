<?php
session_start();
if(isset($_SESSION['concertid'])){
    array_push($_SESSION['concertid'],$_POST['concertId']);
}
session_write_close();
?>


