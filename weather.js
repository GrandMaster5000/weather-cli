#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';


const initCLI = () => {
    const args = getArgs(process.argv)
    
    if(args.h) {
        printHelp();
    } else if (args.s) {
        // Save city
    } else if (args.t) {
        // Save token
    } else {
        // Error
    }
};

initCLI();