<?php 

$massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function massEven($massive){

    for ($i = 0; $i < count($massive); $i++) { 
        if($massive[$i] % 2 === 0){
            echo $massive[$i] . " ";
        }
    }
    
    
}
