<?php
session_start();
if(isset($_SESSION['authority'])){
    echo $_SESSION['authority'];
}
else{
    echo 'guest';
}
session_write_close();
?>
