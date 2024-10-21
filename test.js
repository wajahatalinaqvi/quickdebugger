// test.js
const debug = require('./index');

const fetchData = debug(async function fetchData() {
    // Simulating a delay and memory usage
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 200);
    });
});

const faultyFunction = debug(async function faultyFunction() {
    throw new Error("This is a simulated error!");
});

async function runTests() {
    try {
        await fetchData();
    } catch (e) {
        console.error(e);
    }

    try {
        await faultyFunction();
    } catch (e) {
        console.error(e);
    }
}

runTests();
