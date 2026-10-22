const { add } = require('./index');

if (add(10, 20) === 30) {
    console.log("Test Passed");
} else {
    throw new Error("Test Failed");
}
