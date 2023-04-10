<?php 
include_once("functions.php");
if(isset($_POST['convert_currency'])) {
	$currency_from = trim($_POST['currency_from']);
	$currency_to = trim($_POST['currency_to']);
	$amount = trim($_POST['amount']);	
	if($currency_from == $currency_to) {
	 	$data = array('error' => '1');
		echo json_encode( $data );	
		exit;
	}
	$converted_currency=convertCurrency($currency_from, $currency_to, $amount);
	// Print outout
	echo $converted_currency;
}
?>