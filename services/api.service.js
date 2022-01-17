import axios from 'axios';
import { getKeyValue, TOKEN_DICTONARY } from './storage.service.js';

export const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

export const getWeather = async () => {
    const token = await getKeyValue(TOKEN_DICTONARY.token);
    const city = await getKeyValue(TOKEN_DICTONARY.city);

    if(!token) {
        throw new Error('The API key is not set, set it via the command -t [API_KEY]');
    }
    if(!city) {
        throw new Error('The City is not set, set it via command -s [CITY]')
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