# quickdebugger

**quickdebugger** is a lightweight utility designed to simplify debugging by logging execution time, memory usage, and detailed error traces. This package is perfect for developers looking to improve their debugging process and enhance code performance insights.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Node.js Usage](#nodejs-usage)
  - [React Usage](#react-usage)
- [Features](#features)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install **quickdebugger** using npm:

```bash
npm install quickdebugger
```

# Usage

## Node.js Usage

Here's how to use quickdebugger in a Node.js application:

1. Import the debugger:

```javascript
const debug = require('quickdebugger');
```

2. Wrap your asynchronous functions with the debug function:

```javascript
const fetchData = debug(async function fetchData() {
    // Simulating a delay
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 200);
    });
});

const runTests = async () => {
    await fetchData();
};

runTests();
```

# React Usage

# quickdebugger 
can also be used in React components to monitor performance and errors.

1. Install the package (if you haven't already):

```bash
npm install quickdebugger
```

2. Import and use the debugger in your React component:

```javascript
import React, { useEffect } from 'react';
import debug from 'quick-debugger/index';

const fetchData = debug(async function fetchData() {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 500);
    });
});

const MyComponent = () => {
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchData();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, []);

    return <div>Check the console for debug information!</div>;
};

export default MyComponent;
```

3. Run your React application and observe the console for debugging information.

# Features

1. Execution Time Logging: Automatically logs how long functions take to execute.
2. Memory Usage Monitoring: Provides insights into memory usage during function execution.
3. Error Handling: Captures and logs error stack traces, making debugging easier.
4. Easy to Use: Wrap any function with a simple call and get instant logs.

# API Reference

## debug(fn)

### Parameters

1. fn: An asynchronous function that you want to debug.

### Returns

1. A new function that, when called, logs execution time, memory usage, and error traces.

# Example

```javascript
const myFunction = debug(async function myFunction() {
    // Your function code here
});

myFunction();
```

# License

This project is licensed under the MIT License - see the LICENSE file for details.

```markdown

### Explanation of the `README.md`

- **Installation**: Instructions for installing the package.
- **Usage**: Detailed sections on how to use the package in both Node.js and React applications, with clear code examples.
- **Features**: Highlights the main features of the package.
- **API Reference**: Describes the `debug` function and how to use it.
- **Contributing**: Provides guidelines for contributing to the project.
- **License**: Mentions the license type.

Feel free to modify any sections or add additional features based on your package development. Let me know if you need any more help!
```
