import * as fs from 'fs';

const raw = fs.readFileSync('hello.txt', 'utf8');
const hello = raw.split('\n');
hello.forEach((line: string) => {
  console.log(line);
});
