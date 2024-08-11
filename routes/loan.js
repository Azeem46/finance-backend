// routes/loan.js
const express = require('express');
const Loan = require('../models/Loan.js');
const router = express.Router();

router.post('/loan', async (req, res) => {
  const { bankName, borrowerName, principal, term, interest } = req.body;

  const totalAmount = principal + (principal * term * interest) / 100;
  const emiAmount = Math.ceil(totalAmount / (term * 12));
  const emisRemaining = Math.ceil(totalAmount / emiAmount);

  const loan = new Loan({
    bankName,
    borrowerName,
    principal,
    interest,
    term,
    emiAmount,
    totalAmount,
    remainingAmount: totalAmount,
    emisRemaining,
  });

  await loan.save();
  res.status(201).send(loan);
});

router.post('/payment', async (req, res) => {
  const { bankName, borrowerName, lumpSumAmount, emiNo } = req.body;

  const loan = await Loan.findOne({ bankName, borrowerName });
  if (!loan) return res.status(404).send('Loan not found');

  loan.lumpSums.push({ amount: lumpSumAmount, emiNo });
  loan.remainingAmount -= lumpSumAmount;
  loan.emisRemaining = Math.ceil(loan.remainingAmount / loan.emiAmount);

  await loan.save();
  res.send(loan);
});

router.get('/balance', async (req, res) => {
  const { bankName, borrowerName, emiNo } = req.query;

  const loan = await Loan.findOne({ bankName, borrowerName });
  if (!loan) return res.status(404).send('Loan not found');

  const amountPaid = loan.emiAmount * emiNo + loan.lumpSums
    .filter((payment) => payment.emiNo <= emiNo)
    .reduce((sum, payment) => sum + payment.amount, 0);

  const emisRemaining = Math.ceil((loan.totalAmount - amountPaid) / loan.emiAmount);

  res.send({
    bankName,
    borrowerName,
    amountPaid,
    emisRemaining,
  });
});

module.exports = router;
