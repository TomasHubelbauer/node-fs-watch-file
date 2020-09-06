import fs from 'fs';

fs.watch('.', { recursive: true }, (event, path) => {
  console.log(event, path, fs.readFileSync(path).toString('utf-8'));
});

setInterval(() => fs.writeFileSync('./demo.txt', new Date().toISOString()), 500);
