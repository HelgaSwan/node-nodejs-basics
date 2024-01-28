import fs from 'node:fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import { error } from 'node:console';
import { existsSync } from 'node:fs';


import { readdir } from 'node:fs/promises';

import { copyFile, constants } from 'node:fs';


const rootFile = fileURLToPath(import.meta.url);
const rootDir = dirname(rootFile);
const srcDir = path.join(rootDir, 'files');
const newDir = path.join(rootDir, 'files_copy');

const copy = async () => {
    try {
        const srcDirExists = existsSync(srcDir);
        if (srcDirExists === false) {
            throw error;  
        }
        else {
            const newDirExists = existsSync(newDir);
            // console.log('Exists: ', newDirExists);
            if (newDirExists === false) {
                console.log('New dir created');
                
            }
            else throw error;
    }      
    
    } catch (e) {
        console.error('FS operation failed');
        return;
    }

    (function createDir() {            

        fs.mkdir(newDir, {
            recursive: true,
        }, err => {
            if (err) throw error;            
        });
        // console.log("1");
    })(); 

    try {
      const files = await readdir(srcDir);
      for (const file of files) {

    function callback(err) {
    if (err) throw err('file exists');
    }
        copyFile(path.join(srcDir, file), path.join(newDir, file), callback);
    }
    } catch (err) {
      console.error(err);
    return;
    }


//   console.log("2");

    
};

await copy();
