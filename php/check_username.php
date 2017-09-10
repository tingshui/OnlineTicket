<?php
$con = mysqli_connect("localhost", "root", "root", "Project");
if(mysqli_connect_errno()){
    echo 'error';
}
$username = mysqli_real_escape_string($con, $_POST['username']);
$query = "SELECT UserID FROM Users WHERE UserID = '$username';";
$result = mysqli_query ($con,$query);
if($result->num_rows == 0){
    echo 'true';
}
else{
    echo 'false';
}
?>
