<?php
$NAME = $_POST['filename'];
$HANDLE = fopen($NAME, 'w') or die ('CANT OPEN FILE');
//~ fwrite($HANDLE,$_POST["D"]);
$newList = $_POST['data'];
//~ $newList = ereg_replace( "\n",'|', $_POST['data']);
fwrite($HANDLE,$newList);
fclose($HANDLE);
//~ print "print() also works without parentheses.";
?>
