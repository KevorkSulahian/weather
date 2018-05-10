import axios from 'axios';
http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=a90ca6491ed13b720fdf27a2fa0a136d
const API_KEY = 'a90ca6491ed13b720fdf27a2fa0a136d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}&q=${city},am`;

    const request = axios.get(url);



    return {
        type: FETCH_WEATHER,
        payload: request
    };
} 