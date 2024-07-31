import { Account as _Account } from '../models';

const Account = _Account;

export async function getAccount(req, res) {
    try {
        const account = await Account.findOne({ where: { userId: req.userId } });
        if (!account) {
            return res.status(404).send({ message: 'Account not found.' });
        }
        res.status(200).send({ account });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export async function deposit(req, res) {
    try {
        const { amount } = req.body;
        const account = await Account.findOne({ where: { userId: req.userId } });
        if (!account) {
            return res.status(404).send({ message: 'Account not found.' });
        }
        account.balance += parserFloat(amount);
        await account.save();
        res.status(200).send({ message: 'Deposit successful.', balance: account.balance });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export async function withdraw(req, res) {
    try {
        const { amount } = req.body;
        const account = await Account.findOne({ where: { userId: req.userId } });
        if (!account) {
            return res.status(404).send({ message: 'Account not found! Please try again.' });
        }
            if (account.balance < amount) {
                return res.status(400).send({ message: 'Insufficient funds.' });
            }


            account.balance -= parseFloat(amount);
            await account.save();
            res.status(200).send({ message: 'Withdrawal successful!', balance: account.balance });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    };