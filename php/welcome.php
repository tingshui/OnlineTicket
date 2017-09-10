<?php
session_start();
if(!isset($_SESSION['start']) || time() - $_SESSION['start'] > 100*60){
    session_destroy();
    echo 'Login';
}
else{
    echo $_SESSION['firstname'].' '.$_SESSION['lastname']." (Logout)";
}
session_write_close();
?>

