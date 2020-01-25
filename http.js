let xmlhttp = new XMLHttpRequest();
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


// let search = documnet.getElemenetById("search");

// search.addEventListener("keydown", function (e) {
//     if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
// 		var getCity = document.getElementById("cityName").innerText;
// 		xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ getCity + "&appid=70aa60b7f4e2937586256465c83b3c57", true);
// 		xmlhttp.send();
//     }
// });

// xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&appid=70aa60b7f4e2937586256465c83b3c57", true);
		

var getCity = document.getElementById("cityName").innerText;
	xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ getCity + "&appid=70aa60b7f4e2937586256465c83b3c57", true);
	xmlhttp.send();

console.log(getCity);