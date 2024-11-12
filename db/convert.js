const fs = require('fs');
const path = require('path');

// Function to convert a single line to JSON format
function convertToJSON(lines) {
  return lines.map(line => {
    // Extract the line number and verse text
    const lineParts = line.split(' ');
    const lineNumber = lineParts[0]; // Line number part (e.g., 01001000a)
    const verseText = lineParts.slice(1).join(' '); // The verse text

    // Parse the line number to extract book, chapter, verse, and quarter-verse
    const book = lineNumber.substring(0, 2); // First two digits
    const chapter = lineNumber.substring(2, 5); // Next three digits
    const verse = lineNumber.substring(5, 8); // Next three digits
    const quarterVerse = lineNumber[8]; // Last character (a, b, c, A or space for prose)
    const id = lineNumber.substring(0, 9); // First nine digits


    // Return the structured JSON object
    return {
      id: id,
      book: book,
      chapter: chapter,
      verse: verse,
      quarter_verse: quarterVerse === ' ' ? ' ' : quarterVerse, // Handle prose with space
      verse_text: verseText
    };
  });
}

// Function to read lines from a txt file and process them
function processFile(inputFilePath, outputFilePath) {
  // Read the input txt file
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Split the file content by new lines to get the individual verses
    const lines = data.split('\n').filter(line => line.trim() !== '' && !line.startsWith('%')); // Ignore empty lines and lines starting with '%'

    // Convert the lines to JSON format
    const result = convertToJSON(lines);

    // Write the JSON result to the output file
    fs.writeFile(outputFilePath, JSON.stringify(result, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
      } else {
        console.log(`File successfully written to ${outputFilePath}`);
      }
    });
  });
}

// Example usage: specify the input and output file paths
// Read input and output file names from command-line arguments
const fileName = process.argv[2];
const inputFilePath = path.join(__dirname, 'txt/', fileName); // Input text file path
const outputFilePath = path.join(__dirname, 'json/', fileName.substring(0, fileName.lastIndexOf(".")) + '.json'); // Output JSON file path

// Check if the required arguments are provided
if (!inputFilePath || !outputFilePath) {
  console.error('Please provide both input and output file paths.');
  process.exit(1); // Exit the program with an error code
}
processFile(inputFilePath, outputFilePath);
