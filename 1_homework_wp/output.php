<?php 
function htmlTag($tag, $content){
    if(!$tag){
        return;
    }
    echo "<{$tag}>{$content}</{$tag}>";
}
