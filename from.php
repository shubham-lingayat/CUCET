<?php
$servername = "localhost";
$username = "Shubhamzz";
$password = "Shubham55@";
$dbname = "student_details";

// Create connection
$conn = new mysqli($servername, 
    $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " 
        . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact_number = $_POST['contact_number'];
    $message = $_POST['message'];
    
    // Format the data
    $contactData = "Name: $name\nEmail: $email\nContact Number: $contact_number\nMessage: $message\n\n";

    // Save the data to a file
    $file = './contacts.txt';
    file_put_contents($file, $contactData, FILE_APPEND | LOCK_EX);

    // Redirect back to the index page
    header("Location: ./index.html");
    exit;
}
else {
    // Redirect back to the index page
    header("Location: ./index.html");
    exit;
}




$sql = "INSERT INTO `student` VALUES ('test1', 'test1@test.com', 1111111111);";

if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>
