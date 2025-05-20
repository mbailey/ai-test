/**
 * Generates a personalized greeting message
 * @param {string} name - The name to include in the greeting
 * @returns {string} The greeting message
 */
function getGreeting(name) {
  // Validate input
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  
  // Generate greeting message
  return `Hello, ${name}!`;
}

/**
 * Generates a farewell message
 * @param {string} name - The name to include in the farewell
 * @returns {string} The farewell message
 */
function getFarewell(name) {
  // Validate input
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  
  // Generate farewell message
  return `Goodbye, ${name}!`;
}

module.exports = {
  getGreeting,
  getFarewell
};