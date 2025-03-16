<?php
$hiba = mysqli_connect("localhost", "root", "");
mysqli_select_db($hiba, "pevomag");

if (isset($_POST['g1'])) {
    $f_nev = $_POST['f-name'];
    $k_nev = $_POST['l-name'];  // Corrected field name
    $address = $_POST['address'];  // Corrected field name
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $credit_card_no = $_POST['card-num'];
    $exp = $_POST['expire'];
    $CVV = $_POST['security'];

    $insert = "INSERT INTO shipping_details (First, Last, Street, City, State, Zip, `Credit card no.`, Exp, CVV) 
               VALUES ('$f_nev', '$k_nev', '$address', '$city', '$state', '$zip', '$credit_card_no', '$exp', '$CVV')";

if (mysqli_query($hiba, $insert)) {
    echo "<h1>A rendelést rögzítettük!</h1>";
    echo '<script src="orders.js"></script>';    
    echo '<link rel="stylesheet" href="orders.css">';
    echo '<br>';
    echo '<br>';
    echo '<br>';
    echo '<input class="vissza" type="button" onclick="submitclick()" value="Back to the menu page">';


    } else {
        echo "Hiba történt a rendelés rögzítése során.";
    }
}
?>
