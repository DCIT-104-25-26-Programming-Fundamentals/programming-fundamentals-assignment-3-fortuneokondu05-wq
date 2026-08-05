// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
function readMatrix(rows, cols, matrixName) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const input = readlineSync.question('Enter row ' + (i + 1) + ': ');
    const row = input.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

function displayMatrix(matrix, name) {
  console.log('\n' + name + ':');
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('\t'));
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];
  
  for (let i = 0; i < cols; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i]);
    }
    transposed.push(newRow);
  }
  
  return transposed;
}

function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];
  
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }
  
  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];
  
  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  
  return result;
}

function main() {
  console.log('PART A - Transpose a Matrix');
  const m = parseInt(readlineSync.question('Enter number of rows: '));
  const n = parseInt(readlineSync.question('Enter number of columns: '));
  
  const matrixA = readMatrix(m, n, 'Matrix A');
  const transposed = transposeMatrix(matrixA);
  
  displayMatrix(matrixA, 'Original Matrix');
  displayMatrix(transposed, 'Transposed Matrix');
  
  console.log('\n' + '='.repeat(50));
  console.log('PART B - Add Two Matrices');
  const m2 = parseInt(readlineSync.question('Enter number of rows: '));
  const n2 = parseInt(readlineSync.question('Enter number of columns: '));
  
  const matrixB1 = readMatrix(m2, n2, 'Matrix B1');
  const matrixB2 = readMatrix(m2, n2, 'Matrix B2');
  const sumResult = addMatrices(matrixB1, matrixB2);
  
  displayMatrix(matrixB1, 'Matrix B1');
  displayMatrix(matrixB2, 'Matrix B2');
  displayMatrix(sumResult, 'Sum (B1 + B2)');
  
  console.log('\n' + '='.repeat(50));
  console.log('PART C - Multiply Two Matrices');
  const m3 = parseInt(readlineSync.question('Enter rows for Matrix C1: '));
  const n3 = parseInt(readlineSync.question('Enter columns for Matrix C1 (= rows for C2): '));
  const p3 = parseInt(readlineSync.question('Enter columns for Matrix C2: '));
  
  const matrixC1 = readMatrix(m3, n3, 'Matrix C1');
  const matrixC2 = readMatrix(n3, p3, 'Matrix C2');
  const product = multiplyMatrices(matrixC1, matrixC2);
  
  displayMatrix(matrixC1, 'Matrix C1');
  displayMatrix(matrixC2, 'Matrix C2');
  displayMatrix(product, 'Product (C1 × C2)');
}

main();
