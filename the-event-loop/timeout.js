let timerID = null;

function printAppreciation() {
  console.log('Hello, just a moment...');
  timerID = setTimeout(() => {
    console.log("Thanks for waiting!")
  }, 2000)
}

printAppreciation();
