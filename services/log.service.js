import chalk from 'chalk';
import dedent from 'dedent-js'

export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ' + error));
};

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ' + message));
};

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without parameters - weather output
        -s [CITY] to set the city
        -h for help conclusions
        -t [API_KEY] to save the token
        `
    );
};