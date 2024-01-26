/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable multiline-ternary */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable curly */
/* eslint-disable indent */
import { useEffect, useState, useContext } from "react"
import AppContext from "../Context/AppContext"
import CreateAccountForm from "./Components/Account/CreateAccount"
import Body from "./Components/Helpers/Body"
import Button from "./Components/Helpers/Button"
import CreatedAccountsList from "./Components/Account/CreatedAccountsList"
import AccountDetailsView from "./Components/Account/AccountDetailsView"
import Dialog from "./Components/Helpers/Dialog"
import "./Account.css"

const Account = () => {
    const { accounts } = useContext(AppContext)
    const [createAccountBtnClicked, setCreateAccountBtnClicked] = useState(false)

    function showAccordion(classname = 'total_income_accordion') {
        var x = document.getElementsByClassName("total_income_accordion")
        if (x[0].className.indexOf("display") === -1) {
            x[0].className += " display"
        } else {
            x[0].className = x[0].className.replace(" display", "")
        }
    }


    function OpenCreateAccountForm(e) {
        if (createAccountBtnClicked === false)
            setCreateAccountBtnClicked(true)
        else
            setCreateAccountBtnClicked(false)
    }
    useEffect(
        () => {
            // console.log(accounts)
        }
        , [accounts]
    )

    return (
        <div className="content">
            <h1>Account</h1>
            <div className="filter">
            </div>
            <div className="content_display">
                <Body>

                    <div className="flex-container">
                        <Button className="acct-btn" onClick={OpenCreateAccountForm}>
                            + Account
                        </Button>

                    </div>
                    {
                        createAccountBtnClicked
                            ? (
                                <Dialog
                                    modal
                                    header="Create Account Profile"
                                    hasCancel
                                    onAction={(type) => {
                                        console.log("Dialog")
                                        setCreateAccountBtnClicked(false)
                                        // setExample(null);
                                    }}>
                                    < CreateAccountForm setCreateAccountBtnClicked={setCreateAccountBtnClicked} />
                                </Dialog>

                            ) : ""
                    }

                    <AccountDetailsView />

                </Body>
            </div>
        </div>

    )
}

export default Account
