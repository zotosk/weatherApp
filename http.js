//var obj = JSON.parse('fetch.json');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var obj = JSON.parse(this.responseText);
    document.getElementById("country").innerHTML = obj.name;
 	var temp = obj.main.temp - 273.15; // Kelvin to Celsius | Celsius = kelvin - 273.15
 	var clouds = obj.weather[0].description;
 	var cloudsIcon = obj.weather[0].icon;
	document.getElementById("temp").innerHTML = temp.toFixed(); //Decimal fixed display
	document.getElementById("clouds").innerHTML = clouds; //Decimal fixed display
	//document.getElementById("cloudIcon").innerHTML = cloudsIcon;

  }
};

xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=390903&appid=70aa60b7f4e2937586256465c83b3c57", true);
xmlhttp.send();
