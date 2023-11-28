import { useEffect, useState, useContext } from "react";
import AppContext from "../Context/AppContext";
import RecentTransactionView from "../Components/Transaction/RecentTransactionView";
import { TransactionTotalView } from "../Components/Transaction/TransactionTotalView";
import AddTranactionForm from "../Components/Transaction/AddTransactionForm";
import { Grid, Paper } from "@mui/material";
import Button from "../Components/Helpers/Button";
import Body from "./Helpers/Body";
import './css/Dashboard.css';



const Dashboard = () => {

    const { accounts, expense, setExpense, networth, Addtransaction } = useContext(AppContext);
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
            <h1>Dashboard</h1>
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
                <Body className="dashboard">

                    <div className="flex-container" >

                        <div className="flex-item-left">
                            <div >

                                <RecentTransactionView />

                            </div>

                            <div >

                                <h3>Networth</h3>
                                <div>

                                    {accounts ? accounts.map((account) => (


                                        <details>
                                            <summary>{account.name}'s Networth</summary>


                                            <div>NetWorth  :: {
                                                account.networth
                                            }</div>
                                        </details>

                                    )) : ""
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="flex-item-right" >

                            <h3>Create Transaction</h3>
                            <div>
                                <Button onClick={OpenAddTransactionForm}>
                                    Add Transaction
                                </Button>
                                {
                                    addTransactionBtnClicked ?
                                        (
                                            < AddTranactionForm Addtransaction={Addtransaction} />
                                        ) : ""
                                }

                            </div>

                        </div>

                    </div>












                </Body>
            </div>
        </div>

    );

}

export default Dashboard;