# The Ledger Co. Loan Management System

## Overview

**The Ledger Co. Loan Management System** is a Node.js-based application designed to manage loans between banks and borrowers. The system calculates EMIs, handles lump sum payments, and tracks the total amount paid and remaining EMIs for each borrower. The solution is implemented using the MERN stack (MongoDB, Express, React, Node.js) with a focus on backend functionality.

## Features

- **Loan Management:** Create and manage loans with principal, interest rate, and tenure.
- **EMI Calculation:** Automatically calculate monthly EMIs based on loan details.
- **Lump Sum Payments:** Handle lump sum payments that reduce the remaining loan amount and adjust the number of EMIs.
- **Balance Inquiry:** Query the total amount paid and the remaining number of EMIs for any borrower.

## Technologies Used

- **Node.js**: JavaScript runtime for executing server-side code.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing loan and payment details.
- **Mongoose**: ODM for MongoDB, used to model and interact with the database.

## Project Structure
```plain
.
├── models
│ └── Loan.js # MongoDB schema for loan details
├── routes
│ └── loan.js # Express routes for handling API requests
├── server.js # Entry point for the Node.js server
├── package.json # Node.js project metadata and dependencies
└── README.md # Project documentation

## API Endpoints

### 1. Create a Loan

**Endpoint:** `POST /api/loan`

**Description:** Creates a loan for a borrower.

**Request Body:**

````json
{
  "bankName": "IDIDI",
  "borrowerName": "Dale",
  "principal": 10000,
  "term": 5,
  "interest": 4
}

**Response:**

```json
{
  "_id": "60b5fcd8b4c63409a1e273a4",
  "bankName": "IDIDI",
  "borrowerName": "Dale",
  "principal": 10000,
  "interest": 4,
  "term": 5,
  "emiAmount": 188,
  "totalAmount": 12000,
  "remainingAmount": 11000,
  "emisRemaining": 59,
  "lumpSums": [
    {
      "amount": 1000,
      "emiNo": 5
    }
  ]
}

## 3. Check Loan Balance

**Endpoint:** `GET /api/balance`

**Description:** Retrieves the total amount paid and the remaining EMIs for a borrower.

**Query Parameters:**
- `bankName`: Name of the bank (e.g., `IDIDI`)
- `borrowerName`: Name of the borrower (e.g., `Dale`)
- `emiNo`: The EMI number to calculate up to (e.g., `5`)

**Response:**

```json
{
  "bankName": "IDIDI",
  "borrowerName": "Dale",
  "amountPaid": 1000,
  "emisRemaining": 55
}

## Installation and Setup

### 1 . Clone the repository:

```bash
git clone https://github.com/your-username/ledgerco-loan-system.git
cd ledgerco-loan-system


### 2. Install dependencies:

```bash
npm install

### 3. Set up MongoDB:
Ensure MongoDB is installed and running on your machine. You can use the default configuration, which assumes MongoDB is running on mongodb://localhost:27017/ledgerco.

### 4. Start the server:

```bash
node server.js

**The server will be running on http://localhost:3000.**

# Loan Management System

## Usage

To interact with the API endpoints, you can use tools like [Postman](https://www.postman.com/) or `curl`.

- **Create Loans**: Use the appropriate endpoint to create a new loan.
- **Make Payments**: Use the relevant endpoint to make payments on a loan.
- **Check Balances**: Use the endpoint to check the current balance of a loan.

## Future Improvements

- **Frontend Interface**: Develop a React-based UI for interacting with the system.
- **Advanced Payment Handling**: Implement features for handling partial EMI payments.
- **Reporting**: Add reporting features for banks to track loan performance.

## Conclusion

This project demonstrates a robust solution for managing loans, calculating EMIs, and handling payments using Node.js, Express, and MongoDB. The design is scalable, with a clear separation of concerns, making it easy to extend and maintain.


````
