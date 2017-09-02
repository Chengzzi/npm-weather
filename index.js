#!/usr/bin/env node
var axios = require('axios');
var data = {};
if(process.argv[2]){
	data.params = {
		city:process.argv[2]
	};
}
axios.get("http://api.jirengu.com/weather.php",data).then(function(res){
	if(res.data.status === 302){
		console.log("查询天配额超限，请明天再访问");
	}else if(res.data.error!=0){
		console.log("城市输入有误");
	}else{
		var weather = res.data.results[0]
		console.log("城市：",weather.currentCity)
		console.log("温度：",weather.weather_data[0].temperature)
		console.log("日期：",weather.weather_data[0].date)
		console.log("天气：",weather.weather_data[0].weather)
		console.log("风向：",weather.weather_data[0].wind)
		console.log("PM2.5：",weather.pm25)
	}
	
}).catch(function (error) {
    console.log(error);
});