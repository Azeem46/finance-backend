// models/Loan.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  bankName: String,
  borrowerName: String,
  principal: Number,
  interest: Number,
  term: Number,
  emiAmount: Number,
  totalAmount: Number,
  totalPaid: { type: Number, default: 0 },
  remainingAmount: Number,
  emisRemaining: Number,
  lumpSums: [
    {
      amount: Number,
      emiNo: Number,
    },
  ],
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
