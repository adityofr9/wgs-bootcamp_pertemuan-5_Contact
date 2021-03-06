//File System
const fs = require('fs');
//Readline
const readline = require('readline');

const { rejects } = require('assert');
const { resolve } = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Membuat folder "data" apabila folder tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//Membuat file "contacts.json" apabila file tidak ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

//Membuat fungsi ask menggunakan promise
const questions = (ask) => {
    return new Promise((resolve, reject) => {
        rl.question(ask, (inputVariable) => {
            resolve(inputVariable);
        });
    });
};

module.exports = {rl, questions};