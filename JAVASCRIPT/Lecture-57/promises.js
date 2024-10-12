let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an operation
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  });

  myPromise
  .then((result) => {
    console.log(result); // "Operation was successful!"
  })
  .catch((error) => {
    console.log(error); // If `reject` was called
  });
