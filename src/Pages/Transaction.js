/* eslint-disable no-multi-spaces */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/display-name */
/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-key */
/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable curly */
/* eslint-disable array-callback-return */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { useEffect, useState, useContext } from "react";
import RecentTransactionView from "./Components/Transaction/RecentTransactionView";
import { TransactionTotalView } from "./Components/Transaction/TransactionTotalView";
import AppContext from "../Context/AppContext";
import AddTranactionForm from "./Components/Transaction/AddTransactionForm";
import Body from "./Components/Helpers/Body";
import Button from "./Components/Helpers/Button";
import "./Transaction.css"
import Dialog from "./Components/Helpers/Dialog";

const Transaction = () => {
    const { currency, accounts, setAccount } = useContext(AppContext);
    const [addTransactionBtnClicked, setAddTransactionBtnClicked] = useState(false)


    function clone(o) {
        return JSON.parse(JSON.stringify(o))
    }



    function validator(value) {
        if (value === undefined) { return false } else return true
    }


    function wrappCurrency(val) {
        return currency + "" + val
    }

    function UpdateAccount(accountClone) {


        accountClone = accountClone.map((account) => {
            console.log(account)
            let expensesum = 0
            for (let i = 0; i < account.expenses.length; i++) {
                expensesum += Number(account.expenses[i].amount)
            }
            if (account.expenses.length > 0)
                account.totalExpense = expensesum
            let incomesum = 0

            for (let i = 0; i < account.incomes.length; i++) {
                incomesum += Number(account.incomes[i].amount)
            }
            if (account.incomes.length > 0)
                account.totalIncome = incomesum

            account.networth = account.totalIncome - account.totalExpense

            account.totalExpenseInCurrency = wrappCurrency(account.totalExpense)

            account.totalIncomeInCurrency = wrappCurrency(account.totalIncome)
            return account
        })

        setAccount(accountClone)
        // total expenses
    }




    function Addtransaction({ from, amount, date, note, type, category }) {

        const validateFrom = validator(from)
        if (validateFrom === false) {
            console.log("from")
            alert("From values is missing or invalid")
            return
        }
        const validateAmount = validator(amount)
        if (validateAmount === false) {
            alert("Amount values is missing or invalid")
            return
        }
        const validateDate = validator(date)
        if (validateDate === false) {
            alert("Date values is missing or invalid")
            return
        }
        const validateNote = validator(note)
        if (validateNote === false) {
            alert("Note values is missing or invalid")
            return
        }

        const validateCategory = validator(category)
        if (validateCategory === false) {
            alert("Category values is missing or invalid")
            return
        }

        const validateType = validator(type)
        if (validateType === false) {
            alert("Type values is missing or invalid")
            return
        }

        if (validateType === true) {
            if (type === "Expense") {
                const accountClone = clone(accounts)
                let foundaccount = accountClone.filter(account => account.name === from)
                foundaccount = foundaccount[0]
                const newExpense = {
                    amount,
                    date,
                    note,
                    type,
                    category,
                    amountInCurrency: currency + "" + amount
                }
                // foundaccount.incomes=[...foundaccount.incomesnewIncome,newExpense];

                foundaccount.expenses = [...foundaccount.expenses, newExpense]

                foundaccount.transactions = [...foundaccount.transactions, newExpense]

                accountClone.map(account => {
                    if (account.name === foundaccount.name)
                        return foundaccount
                })
                console.log(accountClone)

                UpdateAccount(accountClone)
            } else {

                const accountClone = clone(accounts)
                let foundaccount = accountClone.filter(account => account.name === from)
                foundaccount = foundaccount[0]
                const newIncome = {
                    amount,
                    date,
                    note,
                    type,
                    amountInCurrency: currency + "" + amount
                }
                foundaccount.incomes = [...foundaccount.incomes, newIncome]
                foundaccount.transactions = [...foundaccount.transactions, newIncome]
                accountClone.map(account => {
                    if (account.name === foundaccount.name)
                        return foundaccount
                })
                console.log(accountClone)
                // setAccount(accountClone);
                UpdateAccount(accountClone)


            }
        }
        setAddTransactionBtnClicked(false)

    }


    function OpenAddTransactionForm(e) {
        if (accounts.length < 1) {
            alert("Must create at least one account")
            return;
        }
        if (addTransactionBtnClicked === false)
            setAddTransactionBtnClicked(true)
        else
            setAddTransactionBtnClicked(false)
    }
    return (

        <div className="content">
            <h1>Transaction</h1>
            <div className="filter">
                <div className="options_filter">
                    <label htmlFor="">label 1</label>
                    <select name="" className="">
                        <option value="">sample</option>
                        <option value="">sample</option>
                    </select>
                </div>
                <div className="options_filter">
                    <label htmlFor="">label 2</label>
                    <select name="" className="">
                        <option value="">sample</option>
                        <option value="">sample</option>
                    </select>
                </div>
            </div>
            <div className="content_display">
                <Body className="transaction">

                    <div className="flex-container">

                        <div className="flex-item-left">

                            <Button className="trans-btn" onClick={OpenAddTransactionForm}>
                                + Transaction
                            </Button>
                            {
                                addTransactionBtnClicked ?
                                    (
                                        <Dialog
                                            modal
                                            header="Add Transaction"
                                            hasCancel
                                            onAction={() => {

                                                setAddTransactionBtnClicked(false)
                                                // setExample(null);
                                            }}>
                                            < AddTranactionForm
                                                Addtransaction={Addtransaction}
                                                setAddTransactionBtnClicked={setAddTransactionBtnClicked}
                                            />
                                        </Dialog>
                                    ) : ""
                            }

                        </div>
                        <div className="flex-item-right">
                            <RecentTransactionView />
                            <TransactionTotalView />
                        </div>

                    </div>
                </Body>
            </div>
        </div>
    )
}
export default Transaction
