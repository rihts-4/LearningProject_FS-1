import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch('http://localhost:5173/api/transactions');
            const data = await response.json();
            setTransactions(data);
        };

        fetchTransactions();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
            <ul className="mt-4">
                {transactions.map(transaction => (
                    <li key={transaction.id} className="p-2 border-b">
                        {transaction.description} - ${transaction.amount} on {transaction.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;