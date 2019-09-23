module.exports = function ls(){
    process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
  //const files = ['bash.js', 'pwd.js'];
  const fs = require('fs');
  fs.readdir('./', 'utf8', (err, files) => {
          if(err){
            throw err;
          } else {
        process.stdout.write(files.join('\n'));
      }
});
});
};

/* const fs = require('fs');
  process.stdout.write(fs.readdir('./', 'utf8', (err, files) => {
          if(err){
            throw err;
          } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('\nprompt > ');
        }
      })
  );
}; */
