// try{
//     console.log(x);
// }
// catch(err){
//     console.log(err);
// }

// try {
//     let result = someFunctionThatMightFail();
//     console.log(result);
// } catch (error) {
//     console.error("An error occurred:", error.message);
// } finally {
//     console.log("This will always run.");
// }


function validateUserInput(input) {
    if (input === "") {
      throw new Error("Input cannot be empty");
    }
    return true;
  }
  
  try {
    validateUserInput("");
  } catch (error) {
    console.error("Validation failed:", error.message);
  }
  