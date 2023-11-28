import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Pages/Helpers/Layout";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
import Transaction from "./Pages/Transaction";
import Reports from "./Pages/Reports";
import Budgets from "./Pages/Budgets";
import Settings from "./Pages/Settings";
import { useState, useEffect } from "react";
import AppContext from "./Context/AppContext";
import LayoutNew from "./Pages/Helpers/Layout2";

function App() {

  const [transactions, setTransaction] = useState([]);
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  const [networth, setNetworth] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const [accounts, setAccount] = useState([]);

  function clone(o) {
    return JSON.parse(JSON.stringify(o));
  }



  function validator(value) {
    if (value === undefined)
      return false;
    else return true;
  }
  function Addtransaction(from, amount, date, note, type) {
    //From amount date note
    var validateFrom = validator(from)
    if (validateFrom === false) {
      alert("From values is missing or invalid");
      return;
    }
    var validateAmount = validator(amount)
    if (validateAmount === false) {
      alert("Amount values is missing or invalid")
      return;
    }
    var validateDate = validator(date)
    if (validateDate === false) {
      alert("Date values is missing or invalid")
      return;
    }
    var validateNote = validator(note)
    if (validateNote === false) {
      alert("Note values is missing or invalid")
      return;
    }

    var validateType = validator(type)
    if (validateType === false) {
      alert("Type values is missing or invalid")
      return;
    }
    var obj = {
      from,
      amount,
      date,
      note,
      type
    }
    if (validateType === true) {
      if (type === "Expense") {


        let accountClone = clone(accounts)
        let foundaccount = accountClone.filter(account => account.name === from);
        foundaccount = foundaccount[0];
        let newExpense = {
          amount,
          date,
          note,
          type
        }
        // foundaccount.incomes=[...foundaccount.incomesnewIncome,newExpense];

        foundaccount.expenses = [...foundaccount.expenses, newExpense];


        foundaccount.transactions = [...foundaccount.transactions, newExpense];

        accountClone.map(account => {
          if (account.name === foundaccount.name)
            return foundaccount;
        })
        console.log(accountClone)
        //setAccount(accountClone);
        UpdateAccount(accountClone);
      }
      else {

        let accountClone = clone(accounts)
        let foundaccount = accountClone.filter(account => account.name === from);
        foundaccount = foundaccount[0];
        let newIncome = {
          amount,
          date,
          note,
          type
        }
        foundaccount.incomes = [...foundaccount.incomes, newIncome];
        foundaccount.transactions = [...foundaccount.transactions, newIncome];
        accountClone.map(account => {
          if (account.name === foundaccount.name)
            return foundaccount;
        })
        console.log(accountClone)
        // setAccount(accountClone);
        UpdateAccount(accountClone);


      }
    }

  }

  function UpdateAccount(accountClone) {


    accountClone = accountClone.map((account) => {
      console.log(account)
      let expensesum = 0;
      for (let i = 0; i < account.expenses.length; i++) {
        expensesum += Number(account.expenses[i].amount);
      }
      if (account.expenses.length > 0)
        account.totalExpense = expensesum;
      let incomesum = 0;
      //total income+
      for (let i = 0; i < account.incomes.length; i++) {
        incomesum += Number(account.incomes[i].amount);
      }
      if (account.incomes.length > 0)
        account.totalIncome = incomesum;

      account.networth = account.totalIncome - account.totalExpense


      return account;

      //set networth
    })

    setAccount(accountClone)
    // total expenses
  }



  let transactionContext = {
    income: income,
    transactions: transactions,
    expense: expense,
    networth: networth,
    totalIncome: totalIncome,
    totalExpenses: totalExpenses,
    accounts: accounts,
    Addtransaction: Addtransaction,
    setTransaction: setTransaction,
    setIncome: setIncome,
    setExpense: setExpense,
    setNetworth: setNetworth,
    setTotalExpenses: setTotalExpenses,
    setTotalIncome: setTotalIncome,
    setAccount: setAccount,

  }



  //Always calculate Totals
  useEffect(
    () => {
      // UpdateAccount();
    }
    , []
  )

  return (

    <BrowserRouter >
      <AppContext.Provider value={transactionContext}>
        <Routes>

          <Route path="/" element={<LayoutNew />}>
            <Route index element={<Dashboard />} />
            <Route path="Account" element={<Account />} />
            <Route path="Transaction" element={<Transaction />} />
            <Route path="Reports" element={<Reports />} />
            <Route path="Budgets" element={<Budgets />} />
            <Route path="Settings" element={<Settings />} />
          </Route>

        </Routes>
      </AppContext.Provider>
    </BrowserRouter>

  );
}

export default App;
