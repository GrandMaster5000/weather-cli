#!/usr/bin/env node
import { getArgs } from './helpers/args.js';


const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args);
    if(args.h) {
        // Write help
    } else if (args.s) {
        // Save city
    } else if (args.t) {
        // Save token
    } else {
        // Error
    }
};

initCLI();