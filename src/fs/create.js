// import { error } from 'node:console';
// import * as fs from 'node:fs/promises';
// import { path } from 'node:path';

import { appendFile } from 'node:fs/promises';


const create = async () => {

  try {
    await appendFile('src/fs/files/fresh.txt', "I am fresh and young");
    console.log('successfully created /fs/files/fresh.txt');
  } catch (error) {
    console.error('there was an error:', "Fs ...");
  }
    // const fileText = "I am fresh and young";
    // const filePath = path.join('..', 'files', 'fresh.txt');
    // console.log = filePath;

    // fs.appendFile(filePath, fileText, function (err) {
    //   if (err) throw new Error("Fs ...");
        
    //   console.log("File is created");
    // });
};

await create();