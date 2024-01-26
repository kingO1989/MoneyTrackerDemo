/* eslint-disable react/no-unescaped-entities */
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
import AppContext from "../Context/AppContext";
import RecentTransactionView from "./Components/Transaction/RecentTransactionView";
import AddTranactionForm from "./Components/Transaction/AddTransactionForm";
import Button from "./Components/Helpers/Button";
import Body from "./Components/Helpers/Body";




const Dashboard = () => {

    console.log("DashboardPage")
    const { accounts, expense, setExpense, networth, Addtransaction } = useContext(AppContext);
    const [addTransactionBtnClicked, setAddTransactionBtnClicked] = useState(false)
    function OpenAddTransactionhtmlForm(e) {
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
                                            <summary>{account.name} 's Networth</summary>


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
                                <Button onClick={OpenAddTransactionhtmlForm}>
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

export default Dashboard
