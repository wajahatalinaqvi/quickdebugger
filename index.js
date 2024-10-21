// index.js
function logMemoryUsage() {
    const memoryUsage = process.memoryUsage();
    console.log(`[DEBUG] Memory used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)}MB`);
}

function debug(fn) {
    return async function (...args) {
        const start = process.hrtime();
        try {
            const result = await fn(...args);
            const end = process.hrtime(start);
            const executionTime = (end[0] * 1e3 + end[1] * 1e-6).toFixed(2);
            console.log(`[DEBUG] ${fn.name} executed in ${executionTime}ms`);
            logMemoryUsage();
            return result;
        } catch (error) {
            console.error(`[DEBUG] Error in ${fn.name}: ${error.stack}`);
            throw error; // rethrow the error after logging
        }
    };
}

module.exports = debug;
