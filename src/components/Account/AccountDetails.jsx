import React, { useState, useEffect } from 'react';
import api from '../../api';

const AccountDetails = () => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const response = await api.get('/api/account');
                setAccount(response.data.account);
            } catch (error) {
                console.error('Error fetching account details: ', error);
            }
        };

        fetchAccountDetails();
    }, []);

    if (!account) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Deatils</h2>
            <p>Balance: {account.balance}</p>
            <p>Currency: {account.currency}</p>
        </div>
    );
};

export default AccountDetails;