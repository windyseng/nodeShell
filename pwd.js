module.exports = function pwd(){
  //process.stdout.write('prompt > ');
  //process.stdin.on('data', (data) => {
  //const cmd = data.toString().trim();

  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
//});
};
