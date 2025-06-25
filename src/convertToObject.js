'use strict';

/**
 * @param {string} sourceString
 *
 * @returns {object}
 */
function convertToObject(sourceString) {
  // Trim the string and split it by semicolons
  const declarations = sourceString.trim().split(';');

  // Initialize the result object
  const result = {};

  // Iterate through the declarations
  declarations.forEach((declaration) => {
    // Clean up the declaration by trimming spaces
    const trimmedDeclaration = declaration.trim();

    // Skip empty declarations
    if (!trimmedDeclaration) {
      return;
    }

    // Split the declaration into property and value
    const parts = trimmedDeclaration.split(':');
    const [property, value] = parts.map((item) => item.trim());

    // If both property and value exist, add to result
    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
