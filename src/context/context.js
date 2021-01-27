import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  [
    {
      amount: 21,
      category: 'Extra income',
      type: 'Income',
      date: '2021-01-27',
      id: '441c1c2f-f219-4030-a67e-c129df7cb6a0',
    },
    {
      amount: 50,
      category: 'Savings',
      type: 'Income',
      date: '12-18-2020',
      id: '1',
    },
  ],
];
export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Actions creators
  const deleteTransaction = (id) =>
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });

  const addTransaction = (transaction) =>
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
