
const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
    if(cmd === 'pwd') pwd();
    else if(cmd === 'ls') ls();
  });

/* ls();
pwd(); */

/* process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  if(data === 'pwd'){
    pwd();
  } else if(data === 'ls'){
    ls();
  }
}); */
