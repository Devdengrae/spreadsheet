# Google Sheets Clone

A web-based spreadsheet application that mimics core functionalities of Google Sheets, focusing on mathematical operations, data quality functions, and responsive UI interactions.

## Tech Stack & Architecture

### Technologies Used
HTML: For structuring the spreadsheet interface and grid layout
CSS: For styling and creating a responsive grid system
JavaScript: For implementing all functionality and calculations
localStorage: For saving spreadsheet data locally



```


## Core Features Implementation

### 1. Mathematical Functions
- Implementation uses a parser-evaluator pattern
- Supports nested functions
- Handles cell references and ranges

### 2. Data Quality Functions
- Implemented as pure functions
- Optimized for large datasets
- Supports undo/redo operations

### 3. Cell Dependencies
- Uses topological sorting for update order
- Efficiently handles circular references
- Maintains consistency across updates

## Getting Started

### Prerequisites
- Node.js >= 16.x
- npm >= 7.x

### Installation
```bash
git clone https://github.com/Devdengrae/spreadsheet.git
cd spreadsheet
npm install
npm start
```



