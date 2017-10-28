var Weather = {};

$(document).ready(function() {
	const apiKey = '48af4314123a406dbc194843172810';
	const location1 = 'London';
	const location2 = 'Vicenza';

	$('.go').on('click', function(){
		$.ajax({
		    url: 'http://api.apixu.com/v1/current.json?key='+apiKey+'&q='+location1,
		    dataType: 'json',
		    success: function(response) {	      
		      Weather = response.current;	
		      console.log(Weather);
		      	$('#conditions').append('<div class="course"><h3>'+Weather.condition.text+'</h3><img src=https:'+Weather.condition.icon+'><h3>Feels-like temperature:</h3>'+Weather.feelslike_c+'°c</div>');
	    	}
		});
	});

	$('.go2').on('click', function(){
		$.ajax({
		    url: 'http://api.apixu.com/v1/current.json?key='+apiKey+'&q='+location2,
		    dataType: 'json',
		    success: function(response) {	      
		      Weather = response.current;	
		      console.log(Weather);
		      	$('#conditions').append('<div class="course"><h3>'+Weather.condition.text+'</h3><img src=https:'+Weather.condition.icon+'><h3>Feels-like temperature:</h3>'+Weather.feelslike_c+'°c</div>');
	    	}
		});
	});

	
});