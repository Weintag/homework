<?php 
// require_once "output.php";
require_once "output-cycle.php";
require_once "output-even.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For</title>
</head>
<body>
    <?php
    htmlTag('h1', 'Xbox game showcase!', 1);
    htmlTag('p', 'World Premiere', 3);
    htmlTag('div', 'Gears of War E-DAY', 1);
    
    massEven($massive);
    ?>
</body>
</html>


