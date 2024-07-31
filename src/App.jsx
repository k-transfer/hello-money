import react from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AccountDetails from './components/Account/AccountDetails';
import Deposit from './components/Account/Deposit';
import Withdraw from './components/Account/withdraw';
import Transfer from './components/Transactions/Transfer';
import TransactionHistory from './components/Transactions/TransactionHistory';
import { useAuth } from './context';

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="App">
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {isAuthenticated ? (
                    <>
                    <Route path ="/account" component={AccountDetails} />
                    <Route path="/deposit" component={Deposit} />
                    <Route path="/withdraw" component={Withdraw} />
                    <Route path="/transfer" component={Transfer} />
                    <Route path="/transactions" component={TransactionHistory} />
                    <Redirect from="/" to="/account" />
                </>
                ) : (
                    <Redirect from="/" to="/login" />
                )}
            </Switch>
        </div>
    );
};

export default App;