import fs from 'node:fs/promises';

import { appendFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import { error } from 'node:console';
import { existsSync } from 'node:fs';

const rootFile = fileURLToPath(import.meta.url);
const rootDir = dirname(rootFile);
const filePath = path.join(rootDir, 'files', 'fresh.txt')
const fileText = "I am fresh and young";
// console.log(filePath);


const create = async () => {

  try {
    const fileExists = existsSync(filePath);
    // console.log('Exists: ', fileExists);
    if (fileExists === false) {
      appendFile(filePath, fileText);
      console.log('File created')
    }
    else throw error;

} catch (e) {
    console.error('FS operation failed');
}

};

await create();