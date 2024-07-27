const db = require('../models');

const Account = db.Account;
const Transaction = db.Transaction;

exports.transfer = async (req, res) => {
    try {
        const { recieverId, amount } = req.body;
        const senderAccount = await Account.findOne({ where: { userId: req.userId } });
        const recieverAccount = await Account.findOne({ where: { id: recieverId } });
        if (!senderAccount || !receiverAccount) {
            return res.status(404).send({ message: 'Sender or reciever account not found.' });
        }
        

        senderAccount.balance -= parseFloat(amount);
        recieverAccount.balance += parseFloat(amount);

        await senderAccount.save();
        await receiverAccount.save();

        const transaction = await Transaction.create({
            senderId: senderAccount.id,
            receiverId: receiverAccount.id, amount,
            currency: senderAccount.currency,
            status: 'completed',
            timestamp: new Date()
        });

        res.status(200).send({ message: 'Transfer successful!', transaction });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            where: {
                [db.Sequelize.Op.or]: [{ senderId: req.userId },
                    { receiverId: req.userId }
                ]
            }
        });
    }
}