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

export const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlue(' WEATHER ')} Погода в городе ${res.name}
        ${icon}  ${res.weather[0].description}
        Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}
        `
    );
}