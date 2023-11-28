import { useContext, useState, useRef, useEffect, useCallback } from "react";
import Button from "../Helpers/Button";
import Form from "../Helpers/Form";
import AppContext from "../../Context/AppContext";
import './CreateAccount.css';

function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
}

const CreateAccountForm = (props) => {
    const { accounts, setAccount } = useContext(AppContext);

    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);




    const form = useRef();


    function CreateAccount() {
        var newAccount = {
            name: name,
            networth: Number(balance),
            transactions: [],
            incomes: [],
            expenses: [],
            totalExpense: 0,
            totalIncome: 0,

        }


        setAccount((prev) => [...prev, newAccount]);
        setName("")
        setBalance(0)

    }





    return (

        <>

            <Form
                ref={form}
                fields={{



                    name: { label: 'Name', type: 'text', onAction: function (e) { return setName(e.target.value) }, defaultValue: name },

                    amount: { label: 'Initial Amount', type: 'number', onAction: setBalance, defaultValue: balance },


                }}
                initialData={{ rateme: 4, freetext: 'Hello' }}

            />


            <Button className=".create-account-custom-button" onClick={e => CreateAccount()}>submit</Button>




        </>
    )

}


export default CreateAccountForm;
