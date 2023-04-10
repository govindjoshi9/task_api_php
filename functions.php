<?php
function convertCurrency($currency_from,$currency_to,$convert_amount) {	
	$currency_from = urlencode($currency_from);
	$currency_to = urlencode($currency_to);	
	$currencyUrl = "https://www.google.com/search?q=".$currency_from."+to+".$currency_to;
	$currencyDetails = file_get_contents($currencyUrl);
	$currencyData = preg_split('/\D\s(.*?)\s=\s/',$currencyDetails);
	$conversion_rate = (float) substr($currencyData[1],0,7);	
	$total_converted_currency_amount = $convert_amount*$conversion_rate;
	$currencyJsonData = array( 'rate' => $conversion_rate, 'total_converted_currency_amount' =>$total_converted_currency_amount, 'currency_from' => strtoupper($currency_from), 'currency_to' => strtoupper($currency_to));
	echo json_encode( $currencyJsonData );	
}
?> 