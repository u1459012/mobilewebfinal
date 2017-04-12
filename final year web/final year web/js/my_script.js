$(document).ready(function() {

	$('#btn_city').click(function(){
		$.ajax({
			url: "json/cities.json",
			dataType: "json",
			success: function(result){
				//alert(JSON.stringify(result))
	        	//$("#div1").html(result);
	        	var obj = result.cities;

	        	var table ='<table cellpadding="0" cellspacing="0" width="100%">';
	        	if(obj){

	        		$.each(obj, function( index, value ){
					  table += '<tr><td><a href="javascript:;" onclick="get_store(\''+index+'\')">'+index+'</a></td></tr>';	
					});
	        		
	        	}
	        	else{
	        		table += '<tr><td>No City found.</td></tr>';	
	        	}

	        	table += '</table>';

	        	$('#city_table').html(table).show();
	    	}
		});
	});

});

function get_store(city){
	$.ajax({
		url: "json/cities.json",
		dataType: "json",
		success: function(result){  

        	//alert(JSON.stringify(result))
        	var obj = result.cities;

        	if(obj[city])
        		$('#stores_result').html(obj[city]+ " store(s) in this city").show();
        	else
        		$('#stores_result').html("").show();
    	}
	});
}