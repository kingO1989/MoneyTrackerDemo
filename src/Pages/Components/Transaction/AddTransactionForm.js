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

import { useContext, useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import Button from "../Helpers/Button";
import FormInput from "../Helpers/FormInput";
import AppContext from "../../../Context/AppContext";
import Form from "../Helpers/Form";

const AddTranactionForm = ({ Addtransaction, setAddTransactionBtnClicked }) => {

    const { accounts } = useContext(AppContext);

    let newTransaction = {
        from: undefined,
        amount: 0,
        date: undefined,
        note: "",
        type: undefined,
        category: undefined
    }

    const [transaction, setTransaction] = useState(newTransaction);

    const form = useRef();
    let curr = new Date();
    curr.setDate(curr.getDate() + 3);

    function FromNameHandler(e) {
        setTransaction({
            ...transaction,
            from: e.target.value
        })
    }

    function AmountHandler(e) {
        setTransaction({
            ...transaction,
            amount: e.target.value
        })
    }

    function DateHandler(e) {
        setTransaction({
            ...transaction,
            date: e.target.value
        })
    }

    function NoteHandler(e) {
        setTransaction({
            ...transaction,
            note: e.target.value
        })
    }

    function TypeHandler(e) {
        setTransaction({
            ...transaction,
            type: e.target.value
        })
    }

    function categoryHandler(e) {

        setTransaction({
            ...transaction,
            category: e.target.value
        })
    }



    useEffect(() => {


    }
        , [transaction])

    return (
        <>
            <Form
                ref={form}
                fields={{
                    AccountHolders: { label: 'From', type: 'AccountHolders', accounts, onAccountsChange: function (e) { FromNameHandler(e) } },
                    amount: { label: 'Amount', type: 'number', onAction: function (e) { AmountHandler(e) } },
                    date: { label: 'Date', type: 'date', onAction: function (e) { DateHandler(e) } },
                    note: { label: 'Note', type: 'text', onAction: function (e) { NoteHandler(e) } },
                    type: { label: 'Transaction', type: 'TransactionTypes', onTransactionChange: function (e) { TypeHandler(e) } },
                    TransactionCategory: { label: 'Category', type: 'TransactionCategory', onCategoryChange: function (e) { categoryHandler(e) } }
                }}
                initialData={{ rateme: 4, freetext: 'Hello' }}
            />
            <Button onClick={e => Addtransaction(transaction)}>Add Expense</Button>
        </>
    )

}

AddTranactionForm.propTypes = {
    Addtransaction: PropTypes.func,
    setAddTransactionBtnClicked: PropTypes.func
}

export default AddTranactionForm;
