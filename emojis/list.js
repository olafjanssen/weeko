const testFolder = './';
const fs = require('fs');

var emojiKeys = {};

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        var f = file.split('.');
        if (f[1]==='png') {
            emojiKeys[f[0]] = 1;
        }
    });
    fs.writeFile('emojikeys.json', JSON.stringify(emojiKeys));
});

