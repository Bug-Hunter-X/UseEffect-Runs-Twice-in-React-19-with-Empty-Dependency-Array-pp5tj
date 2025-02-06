# React 19 useEffect Bug

This repository demonstrates an unusual behavior in React 19 where the `useEffect` hook runs twice even when provided with an empty dependency array `[]`.  This is unexpected as empty dependency arrays are designed to ensure that the effect runs only once after the initial render.

## Bug Description
The `useEffect` hook within `App.js` and `MyComponent.js` is intended to log a message to the console only once when the component mounts. However, the log message appears twice in the console, indicating the effect runs twice.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output. You will see the log messages from the useEffect hooks in both components printed twice.

## Potential Cause
The root cause is likely related to some internal React 19 update or optimization which affects how it manages component mounting and effect execution, potentially under specific circumstances like component composition or interactions with other lifecycle methods.

## Solution
This issue is resolved by using the dependency array correctly by adding relevant dependencies to the array.