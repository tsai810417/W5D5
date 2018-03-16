const readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



let addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('What number to add on?', (answer) => {
      sum += parseInt(answer);

      numsLeft -= 1;
      console.log(`The partial sum is ${sum}.`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
