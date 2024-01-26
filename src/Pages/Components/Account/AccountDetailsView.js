/* eslint-disable react/no-unescaped-entities */
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

import { useState, useContext } from "react";
import AppContext from "../../../Context/AppContext";
import AccountTransactionList from "./AccountTransactionList";
import './AccountDetailsView.css';
import AccountDetailsLeftView from "./AccountDetailsLeftView";
import AccountDetailsRightView from "./AccountDetailsRightView";
import CreatedAccountsList from "./CreatedAccountsList";


const AccountDetailsView = () => {
    const { accounts } = useContext(AppContext);
    const [display, setDisplay] = useState(accounts[0] ? accounts[0] : "");
    console.log(accounts[0])

    function accountDisplayHandler(item) {
        console.log(item)
        setDisplay(() => item);
    }
    function showAccordion(classname) {
        console.log(classname)
        var x = document.getElementsByClassName(classname)

        if (x[0].className.indexOf("display") === -1) {
            x[0].className += " display"
        } else {
            x[0].className = x[0].className.replace(" display", "")
        }
    }
    return (
        <>
            <div className="account-view-container">
                <div className="left_view">
                    {accounts ?
                        <AccountDetailsLeftView accountDisplayHandler={accountDisplayHandler} accounts={accounts} />
                        : ""}
                </div>
                <AccountDetailsRightView display={display} showAccordion={showAccordion} />

            </div>

            <div className="account-view-container">
                <div className="left_view">
                    <CreatedAccountsList />
                </div>


            </div>


        </>


    );
}

export default AccountDetailsView
