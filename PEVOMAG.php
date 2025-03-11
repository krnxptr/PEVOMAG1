<?php

function readCSV($filename) {
    $products = [];
    if (($handle = fopen($filename, "r")) !== FALSE) {
        fgetcsv($handle); // Skip the header row
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $products[] = [
                'name' => $data[0],
                'description' => $data[1],
                'price' => $data[2]
            ];
        }
        fclose($handle);
    }
    return $products;
}

$files = ["/Tablets.csv", "/Phones.csv",
 "/Laptops.csv", "/Chargers.csv"];
$allProducts = [];

foreach ($files as $file) {
    if (file_exists($file)) {
        $allProducts = array_merge($allProducts, readCSV($file));
    }
}

?>
