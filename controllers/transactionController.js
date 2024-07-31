import { Account as _Account, Transaction as _Transaction, Sequelize } from '../models';

const Account = _Account;
const Transaction = _Transaction;

export async function transfer(req, res) {
    try {
        const { recieverId, amount } = req.body;
        const senderAccount = await Account.findOne({ where: { userId: req.userId } });
        const recieverAccount = await Account.findOne({ where: { id: recieverId } });
        if (!senderAccount || !recieverAccount) {
            return res.status(404).send({ message: 'Sender or reciever account not found.' });
        }
        

        senderAccount.balance -= parseFloat(amount);
        recieverAccount.balance += parseFloat(amount);

        await senderAccount.save();
        await recieverAccount.save();

        const transaction = await Transaction.create({
            senderId: senderAccount.id,
            receiverId: recieverAccount.id, amount,
            currency: senderAccount.currency,
            status: 'completed',
            timestamp: new Date()
        });

        res.status(200).send({ message: 'Transfer successful!', transaction });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export async function getTransactions(req, res) {
    try {
        const transactions = await Transaction.findAll({
            where: {
                [db.Sequelize.Op.or]: [
                    { senderId: req.userId },
                    { receiverId: req.userId }
                ]
            }
        });

        res.status(200).send({ transactions });
    } catch (err){
        res.status(500).send({ message: err.message });
    }
};