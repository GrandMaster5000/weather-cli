#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if(!token.length) {
        printError('No token passed')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTONARY.token, token);
        printSuccess("Token saved");
    } catch (e) {
        printError(e.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)

    if(args.h) {
        printHelp();
    } else if (args.s) {
        // Save city
    } else if (args.t) {
      return saveToken(args.t)
    } else {
        getWeather('moscow')
    }
};

initCLI(); 