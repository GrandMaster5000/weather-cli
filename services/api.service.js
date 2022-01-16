import axios from 'axios';
import { getKeyValue, TOKEN_DICTONARY } from './storage.service.js';

export const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTONARY.token);

    if(!token) {
        throw new Error('The API key is not set, set it via the command -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    return data;
};