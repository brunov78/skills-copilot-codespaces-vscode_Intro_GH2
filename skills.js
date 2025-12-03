// GitHub Copilot Skills - Introduction
// This file demonstrates basic JavaScript functionality

/**
 * Function to calculate the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function calculateSum(a, b) {
    return a + b;
}

/**
 * Function to greet a user
 * @param {string} name - The name of the user
 * @returns {string} A greeting message
 */
function greetUser(name) {
    return `Hello, ${name}! Welcome to GitHub Copilot Skills!`;
}

// Example usage
console.log(calculateSum(5, 3));
console.log(greetUser("Developer"));

module.exports = { calculateSum, greetUser };
