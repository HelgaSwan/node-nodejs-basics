import fs from 'node:fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import { error } from 'node:console';
import { existsSync } from 'node:fs';

const rootFile = fileURLToPath(import.meta.url);
const rootDir = dirname(rootFile);
const srcDir = path.join(rootDir, 'files');
const newDir = path.join(rootDir, 'files_copy');

const copy = async () => {
    
    function createDir() {

    fs.mkdir(newDir, {
        recursive: true,
    }, err => {
        if (err) throw err('FS operation failed');
    });

    

    }; 

      try {
        const srcDirExists = existsSync(srcDir);
        if (srcDirExists === false) {
            throw error;            
        }
        else {
            const newDirExists = existsSync(newDir);
            // console.log('Exists: ', newDirExists);
            if (newDirExists === false) {
                createDir();
            //   console.log('dir created')
            }
            else throw error;
            }
        
    
      } catch (e) {
          console.error('FS operation failed');
      }
    
    
    
    
};

await copy();
