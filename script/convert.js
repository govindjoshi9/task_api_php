$('document').ready(function() {	
	$("#currency-convert-form").validate({
		rules: {
			amount: {
				required: true,
			},
		},
		messages: {
			amount:{
			  required: ""
			 },			
		},
		submitHandler: currencyConvertFormSubmit	
	});	
	function currencyConvertFormSubmit() {		
		var data = $("#currency-convert-form").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'convert_currency.php',
			dataType:'json',
			data : data,
			beforeSend: function(){	
				$("#convert_currency").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; converting ...');
			},
			success : function(response){
				if(response.error == 1){	
					$("#currency_conversion_rate").html('<span class="form-group has-error">Error: Please select different currency</span>'); 
					$("#converted_currency_amount").html("");
					$("#convert_currency").html('Convert');
					$("#currency_conversion_rate").show();	 
				} else if(response.rate){									
					$("#currency_conversion_rate").html("<span class='alert-success'><strong>Exchange Rate ("+response.currency_to+")</strong> : "+response.rate+"</span>");
					$("#currency_conversion_rate").show();
					$("#converted_currency_amount").html("<span class='alert-success'><strong>Converted Amount ("+response.currency_to+"</strong>) : "+response.total_converted_currency_amount+"</span>");
					$("#converted_currency_amount").show();
					$("#convert_currency").html('Convert');
				} else {	
					$("#currency_conversion_rate").html("No Result");	
					$("#currency_conversion_rate").show();	
					$("#converted_currency_amount").html("");
				}
			}
		});
		return false;
	}   
});