#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if(!token.length) {
        printError('No token passed')
        return;
    }
    try {
        const tokenResponse = await saveKeyValue(TOKEN_DICTONARY.token, token);
        printSuccess("Token saved");
        return tokenResponse;
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if(!city.length) {
        printError('No city passed')
        return;
    }
    try {        
        const cityResponse = await saveKeyValue(TOKEN_DICTONARY.city, city)
        printSuccess('City saved');
        return cityResponse;
    } catch (e) {
        printError(e.message);
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather();
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (e) {
        if(e?.response?.status == 404) {
            printError('Invalid city')
        } else if(e?.response?.status == 401) {
            printError('Invalid token')
        } else {
            printError(e.message);
        }
    }
}

const initCLI = async () => {
    const args = getArgs(process.argv)

    if(args.h) {
        printHelp();
    } else if (args.s && args.t) {
        await saveCity(args.s);
        await saveToken(args.t);
    } else if (args.s) {
        saveCity(args.s);
    } else if (args.t) {
        saveToken(args.t);
    } else {
       getForcast();
    }
};

initCLI(); 