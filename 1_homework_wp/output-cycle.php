<?php 
function htmlTag($tag, $content, $num){
    for ($i=0; $i < $num; $i++) { 
        if(!$tag){
        return;
    }
    echo "<{$tag}>{$content}</{$tag}>";
    }
    
}
