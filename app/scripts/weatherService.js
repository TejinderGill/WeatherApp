'use strict';

// creating class weatherService
function WeatherService($http){

this.searchCity = "";
this.forecast = null;
this.http = $http;

}


WeatherService.prototype.setSearchCity = function(cityName){
		this.searchCity = cityName;
};

WeatherService.prototype.getSearchCity = function(){
		return this.searchCity;
};

WeatherService.prototype.forecastApiRequest = function(){
		
		//this.forecast = api.openweathermap.org/data/2.5/forecast?q=this.searchCity&mode=json


	http.get('api.openweathermap.org/data/2.5/forecast?q='+this.searchCity+'&mode=json').
  		then(function(response) {
  			
  			this.forecast = response;
  		
  		}, function(response) {
    		
  			console.log("error in response");
  	});


};

WeatherService.prototype.getForecast = function(){

	this.forecastApiRequest();

	return this.forecast;

};




