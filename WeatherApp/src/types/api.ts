type Location = {

    "name": string,
        "region": string,
        "country": string,
        "lat": number,
        "lon": number,
        "tz_id": string,
        "localtime_epoch": number,
        "localtime": string
}

export type CityData = {

    "location": Location,
    "current": {
        "last_updated_epoch": number,
        "last_updated": string,
        "temp_c": number,
        "temp_f": number,
        "is_day": number,
        "condition": {
            "text": string,
            "icon": string,
            "code": number
        },
        "wind_mph": number,
        "wind_kph": number,
        "wind_degree": number,
        "wind_dir": string,
        "pressure_mb": number,
        "pressure_in": number,
        "precip_mm": number,
        "precip_in": number,
        "humidity": number,
        "cloud": number,
        "feelslike_c": number,
        "feelslike_f": number,
        "windchill_c": number,
        "windchill_f": number,
        "heatindex_c": number,
        "heatindex_f": number,
        "dewpoint_c": number,
        "dewpoint_f": number,
        "vis_km": number,
        "vis_miles": number,
        "uv": number,
        "gust_mph": number,
        "gust_kph": number
    }
};

export type FollowingDay = {

    "location": Location,
    "current": {
        "last_updated_epoch": 1752176700,
        "last_updated": "2025-07-10 20:45",
        "temp_c": 24.1,
        "temp_f": 75.4,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 8.9,
        "wind_kph": 14.4,
        "wind_degree": 104,
        "wind_dir": "ESE",
        "pressure_mb": 1022.0,
        "pressure_in": 30.18,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 57,
        "cloud": 0,
        "feelslike_c": 25.5,
        "feelslike_f": 77.8,
        "windchill_c": 23.1,
        "windchill_f": 73.5,
        "heatindex_c": 24.9,
        "heatindex_f": 76.8,
        "dewpoint_c": 14.1,
        "dewpoint_f": 57.5,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.2,
        "gust_mph": 12.4,
        "gust_kph": 19.9
    },
    "forecast": {
        "forecastday":
        {
            "date": "2025-07-10",
            "date_epoch": 1752105600,
            "day": {
                "maxtemp_c": 30.1,
                "maxtemp_f": 86.2,
                "mintemp_c": 18.4,
                "mintemp_f": 65.1,
                "avgtemp_c": 24.0,
                "avgtemp_f": 75.2,
                "maxwind_mph": 10.5,
                "maxwind_kph": 16.9,
                "totalprecip_mm": 0.0,
                "totalprecip_in": 0.0,
                "totalsnow_cm": 0.0,
                "avgvis_km": 10.0,
                "avgvis_miles": 6.0,
                "avghumidity": 53,
                "daily_will_it_rain": 0,
                "daily_chance_of_rain": 0,
                "daily_will_it_snow": 0,
                "daily_chance_of_snow": 0,
                "condition": {
                    "text": "Sunny",
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                    "code": 1000
                },
                "uv": 2.1
            },
            "astro": {
                "sunrise": "04:55 AM",
                "sunset": "09:16 PM",
                "moonrise": "09:46 PM",
                "moonset": "03:41 AM",
                "moon_phase": "Full Moon",
                "moon_illumination": 99,
                "is_moon_up": 1,
                "is_sun_up": 0
            },
            "hour":
            {
                "time_epoch": 1752102000,
                "time": "2025-07-10 00:00",
                "temp_c": 21.1,
                "temp_f": 69.9,
                "is_day": 0,
                "condition": {
                    "text": "Partly Cloudy ",
                    "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                    "code": 1003
                },
                "wind_mph": 2.7,
                "wind_kph": 4.3,
                "wind_degree": 230,
                "wind_dir": "SW",
                "pressure_mb": 1022.0,
                "pressure_in": 30.19,
                "precip_mm": 0.0,
                "precip_in": 0.0,
                "snow_cm": 0.0,
                "humidity": 56,
                "cloud": 44,
                "feelslike_c": 21.1,
                "feelslike_f": 69.9,
                "windchill_c": 21.1,
                "windchill_f": 69.9,
                "heatindex_c": 24.4,
                "heatindex_f": 75.9,
                "dewpoint_c": 12.0,
                "dewpoint_f": 53.6,
                "will_it_rain": 0,
                "chance_of_rain": 0,
                "will_it_snow": 0,
                "chance_of_snow": 0,
                "vis_km": 10.0,
                "vis_miles": 6.0,
                "gust_mph": 4.4,
                "gust_kph": 7.0,
                "uv": 0
            },
        }
    }
}