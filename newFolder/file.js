const fs = require('fs');

// fs.writeFileSync('./text.txt', "Hii Karan Text File Created Succesfully")

const result = fs.readFileSync('./read.txt', 'utf-8')

console.log(result);