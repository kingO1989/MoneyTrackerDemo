import { useContext, useEffect, useState, useRef } from "react";
import Button from "../Helpers/Button";
import FormInput from "../Helpers/FormInput";
import AppContext from "../../Context/AppContext";
import Form from "../Helpers/Form";

const AddTranactionForm = (props) => {
    const { accounts } = useContext(AppContext);

    const [from, setFrom] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [note, setNote] = useState();
    const [type, setType] = useState();

    const form = useRef();
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var currdate = curr.toISOString().substring(0, 10);


    function FromNameHandler(e) {

        console.log("This clicked")
        console.log(e.target.value)
        setFrom(e.target.value);
    }

    function AmountHandler(e) {

        console.log("This clicked")
        console.log(e.target.value)
        setAmount(e.target.value);
    }

    function DateHandler(e) {

        console.log("This clicked")
        console.log(e.target.value)
        setDate(e.target.value);
    }

    function NoteHandler(e) {

        console.log("This clicked")
        console.log(e.target.value)
        setNote(e.target.value);
    }

    function TypeHandler(e) {

        console.log("This clicked")
        console.log(e.target.value)
        setType(e.target.value);
    }


    useEffect(() => {

        console.log(amount)
    }
        , [amount])


 

    return (

        <>

            <Form
                ref={form}
                fields={{
                    AccountHolders: { label: 'From', type: 'AccountHolders', accounts: accounts, onAccountsChange: function (e) { FromNameHandler(e) } },
                    amount: { label: 'Amount', type: 'number', onAction: function (e) { AmountHandler(e) } },
                    date: { label: 'Date', type: 'date', onAction: function (e) { DateHandler(e) } },
                    note: { label: 'Note', type: 'text', onAction: function (e) { NoteHandler(e) } },
                    type: { label: 'Transaction', type: 'TransactionTypes', onTransactionChange: function (e) { TypeHandler(e) } },

                }}
                initialData={{ rateme: 4, freetext: 'Hello' }}

            />


            <Button onClick={e => props.Addtransaction(from, amount, date, note, type)}>Add Expense</Button>
        </>
    )

}


export default AddTranactionForm;
