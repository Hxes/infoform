<?php

// Get form data
$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];

// Format data
$data = "Name: $firstName $lastName | Email: $email" . PHP_EOL;

// Save to file
file_put_contents("submissions.txt", $data, FILE_APPEND);

// Redirect to thank you page
header("Location: thankyou.html");
exit();

?>
