<?php
$db_hostname = '127.0.0.1';
$db_username = 'root';
$db_password = '';
$db_database = 'mydb';

// Database Connection String
$con = new PDO ("mysql:host=$db_hostname;dbname=$db_database",$db_username,$db_password);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
		<main>
<form action="" method="post">  
Search: <input type="text" name="term" /><br />  
<input type="submit" name="submit" />  
</form>  
<?php
if (isset($_POST['submit'])) {

$search = $_POST['term'];
$statement = $con->prepare("SELECT * FROM verkauf WHERE Kaeufer_idKaeufer = ?");
$statement->execute(array($search));   
while($row = $statement->fetch()) {
   echo $row['verkaufdat'];
}
}
?>
</main>
    </body>
</html>