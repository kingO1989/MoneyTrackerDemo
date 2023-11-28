import { useEffect, useState, useContext } from "react";
import RecentTransactionView from "../Components/Transaction/RecentTransactionView";
import { TransactionTotalView } from "../Components/Transaction/TransactionTotalView";
import AppContext from "../Context/AppContext";
import AddTranactionForm from "../Components/Transaction/AddTransactionForm";
import Body from "./Helpers/Body";
import './css/Transaction.css';



const Transaction = () => {


    // let transactionContext = useContext(AppContext)



    const { expense, accounts, Addtransaction } = useContext(AppContext);
    const [addTransactionBtnClicked, setAddTransactionBtnClicked] = useState(false)



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
                    <label for="">label 1</label>
                    <select name="" className="">
                        <option value="">sample</option>
                        <option value="">sample</option>
                    </select>
                </div>
                <div className="options_filter">
                    <label for="">label 2</label>
                    <select name="" className="">
                        <option value="">sample</option>
                        <option value="">sample</option>
                    </select>
                </div>
            </div>
            <div className="content_display">
                <Body className="transaction">

                    <h3>Create a Transaction</h3>
                    <div className="flex-container">

                        <div className="flex-item-left">
                            <button onClick={OpenAddTransactionForm}>
                                Add Transaction
                            </button>
                            {
                                addTransactionBtnClicked ?
                                    (
                                        < AddTranactionForm Addtransaction={Addtransaction} />
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

export default Transaction;