/* eslint-disable no-var */
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
import { useContext, useState, useRef, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import Button from "../Helpers/Button";
import Form from "../Helpers/Form";
import AppContext from "../../../Context/AppContext";
import './CreateAccount.css';


const CreateAccountForm = ({ setCreateAccountBtnClicked }) => {
    const { accounts, setAccount, currency } = useContext(AppContext);
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    const form = useRef();
    function CreateAccount() {


        let networth = Number(balance)
        let transactions = []
        let incomes = []
        let expenses = []
        let totalExpense = 0
        let totalExpenseInCurrency = currency + " " + totalExpense
        let totalIncome = 0
        let totalIncomeInCurrency = currency + " " + totalIncome

        let newAccount = {
            name,
            networth,
            transactions,
            incomes,
            expenses,
            totalExpense,
            totalExpenseInCurrency,
            totalIncome,
            totalIncomeInCurrency,
            currency

        }
        setAccount((prev) => [...prev, newAccount]);
        setName("")
        setBalance(0)
        setCreateAccountBtnClicked(false)

    }
    useEffect(() => {
        console.log(accounts)
    }, [accounts])
    return (
        <>
            <Form
                ref={form}
                fields={{
                    name: { label: 'Name', type: 'text', onAction: function (e) { return setName(e.target.value) }, defaultValue: name },
                    amount: { label: 'Initial Amount', type: 'number', onAction: function (e) { return setBalance(e.target.value) }, defaultValue: balance }
                }}
            />
            <Button className=".create-account-custom-button" onClick={e => CreateAccount()}>submit</Button>
        </>
    )
}


CreateAccountForm.propTypes = {
    setCreateAccountBtnClicked: PropTypes.func
};

export default CreateAccountForm;
