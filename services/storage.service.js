import { homedir } from 'os';
import { join } from 'path';
import { readFile, stat, writeFile } from 'fs/promises'

const filePath = join(homedir(), 'weather-data.json');

export const TOKEN_DICTONARY = {
    token: 'token',
    city: 'city'
};

export const saveKeyValue = async (key, value) => {
    let data = {};
    if(await isExist(filePath)) {
        const file = await readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value;
    await writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
    if(await isExist(filePath)) {
        const file = await readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
}

const isExist = async (path) => {
  try {
    await stat(path);  
    return true;
  } catch (e) {
    return false;
  }
};