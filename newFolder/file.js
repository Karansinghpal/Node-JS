const fs = require('fs');




/////////This Is the Synchronous Methods///////////
// fs.writeFileSync('./text.txt', "Hii Karan Text File Created Succesfully")

// const result = fs.readFileSync('./read.txt', 'utf-8')

// console.log(result);



////////////This Is the Asynchronous Methods////////
// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log('File content:', data);
//   }
// });




///////This is Date Append Method in your Txt////////
// const hi =  fs.appendFileSync('./read.txt', new Date().getDate().toLocaleString());
// console.log(hi,);





//////////This is Append Method in your Txt////////
//  fs.appendFileSync('./read.txt', 'This is appended text\n'); // Appending text to the file


// console.log(fs.statSync('./read.txt'));//show u stats of file like size, birthtime, etc.



// fs.cpSync('./read.txt', './Copy.txt     '); // Copying file to new folder

// fs.unlinkSync('./read.txt'); // Deleting file



