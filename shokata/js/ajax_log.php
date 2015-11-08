<?php
//~ ini_set('display_errors', 1);
//~ ini_set('display_startup_errors', 1);
//~ error_reporting(E_ALL);
//~ print "print() also works without parentheses.";
//~ echo "$_POST";
//~ print_r($_GET);
//~ print_r($_POST);
//~ $NAME = $_POST['data'];
$NAME = $_POST['filename'];
$HANDLE = fopen($NAME, 'w') or die ('CANT OPEN FILE');
//~ fwrite($HANDLE,$_POST["D"]);
$newList = $_POST['data'];
//~ $newList = ereg_replace( "\n",'|', $_POST['data']);
fwrite($HANDLE,$newList);
fclose($HANDLE);
//~ print "print() also works without parentheses.";
?>
