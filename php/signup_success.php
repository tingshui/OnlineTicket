<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function RandomString()
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < 10; $i++) {
        $randstring .= $characters[rand(0, strlen($characters))];
    }
    return $randstring;
}

if(!isset($_POST['firstname']) || !isset($_POST['lastname'])||!isset($_POST['username'])
    ||!isset($_POST['password'])||!isset($_POST['password2'])||!isset($_POST['email'])){
    alert("One or more fields are missing");
    header('Location: login.html');
    exit();
}
$con = mysqli_connect("localhost", "root", "root", "Project");
$firstname = mysqli_real_escape_string($con, $_POST['firstname']);
$lastname = mysqli_real_escape_string($con, $_POST['lastname']);
$username = mysqli_real_escape_string($con, $_POST['username']);
$email = mysqli_real_escape_string($con, $_POST['email']);
$password = mysqli_real_escape_string($con, $_POST['password']);
$salt = RandomString();
$hash = hash('sha256', $salt.hash('sha256', $password));
$query = "INSERT INTO Users (FirstName, LastName, UserID, Password, Email, Authority, salt)"
       . "VALUES ('$firstname','$lastname','$username','$hash','$email','guest', '$salt');";
if(!mysqli_query ($con,$query)){
    die('error inserting new record');
}
echo "<p> You have successfully set up your account. Please click the following link to log in</p>";
echo "<p><a href='../login.html'>Log in to my account</a></p>";

?>
