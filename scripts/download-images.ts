import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const SERVICES_DIR = path.join(process.cwd(), 'public', 'images', 'services');

async function downloadImage(url: string, filepath: string): Promise<void> {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer'
    });

    await writeFile(filepath, response.data);
    console.log(`Downloaded: ${filepath}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
    throw error;
  }
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}

async function main() {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('UNSPLASH_ACCESS_KEY environment variable is required');
  }

  const services = [
    'artificial-grass',
    'concreting',
    'decking',
    // Add other services here
  ];

  for (const service of services) {
    const serviceDir = path.join(SERVICES_DIR, service);
    await ensureDirectoryExists(serviceDir);

    // Download main image
    const mainImageUrl = `https://api.unsplash.com/photos/random?query=${service}&client_id=${UNSPLASH_ACCESS_KEY}`;
    await downloadImage(mainImageUrl, path.join(serviceDir, 'main.jpg'));

    // Download gallery images
    for (let i = 1; i <= 3; i++) {
      const galleryImageUrl = `https://api.unsplash.com/photos/random?query=${service}&client_id=${UNSPLASH_ACCESS_KEY}`;
      await downloadImage(galleryImageUrl, path.join(serviceDir, `gallery-${i}.jpg`));
    }
  }
}

main().catch(console.error); 