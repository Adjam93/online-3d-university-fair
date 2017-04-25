<html>
<body>

    Hello <?php echo $_POST["name"]; ?>!<br>
    Your rating is <?php echo $_POST["rating"]; ?>.

    <?php

    $db = new mysqli('sql8.freemysqlhosting.net', 'sql8169964', 'UsDmED6Ywi', 'sql8169964');
    if($db->connect_errno){
    die('Unable to connect to database: ' . $db->connect_error);
    }

    $international = '';
    $compare = '';
    $travel = '';
    $open = '';
    $audience = '';

    if (isset($_POST['international']))
    {
    $international = $_POST['international'];
    //print_r($international);
    }
    else{
    //$international is not checked and value=0
    $international=0;
    }

    if (isset($_POST['compare']))
    {
    $compare = $_POST['compare'];
    //echo "Hello";
    // print_r($compare);
    }
    else{
    $compare=0;
    }

    if (isset($_POST['travel']))
    {
    $travel = $_POST['travel'];
    }
    else{
    $travel=0;
    }

    if (isset($_POST['open']))
    {
    $open = $_POST['open'];
    }
    else{
    $open=0;
    }

    if (isset($_POST['audience']))
    {
    $audience = $_POST['audience'];
    }
    else{
    $audience=0;
    }

    $positive= mysqli_real_escape_string($db, $_POST['well_feedback']);
    $improve= mysqli_real_escape_string($db, $_POST['improve_feedback']);

    $sql = "INSERT INTO FEEDBACK VALUES('DEFAULT','".$_POST['name']."','".$_POST['rating']."',
    '".$international."','".$compare."','".$travel."','".$open."','".$audience."',
    '".$positive."','".$improve."')";

    $result = $db->query($sql);
    if(!$result)
    {
    die('There was an error running the query ' . $db->error);
    }
    else
    echo "<h2>Thank you for Your feedback</h2>";
    echo "<br>";
    echo "<br>";
    echo "<a href='index.html'>Return to Home Page</a>";

    $db->close();

    ?>

</body>
</html> 