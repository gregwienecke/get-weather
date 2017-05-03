var http = require('http');

var city = process.argv[process.argv.length - 1];

http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=', function(response){
	var body = '';
	response.on('data', function(data){
		body += data.toString();
	});

	response.on('end', function(){
		body = JSON.parse(body);
		var tempK = body.main.temp;
		var tempF = tempK * (9/5) - 459.67;
		tempF = parseInt(tempF);
		
		console.log('');
		console.log(body.name);
		console.log('Current temperature: ' + tempF);
		console.log(body.weather[0].description);
		console.log('Wind: ' + body.wind.speed);
	});
});



