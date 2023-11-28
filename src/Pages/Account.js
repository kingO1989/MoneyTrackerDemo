import { useEffect, useState, useContext } from "react";
import AppContext from "../Context/AppContext";
import CreateAccountForm from "../Components/Account/CreateAccount";
import Body from "./Helpers/Body";
import Button from "../Components/Helpers/Button";
import CreatedAccountsList from "../Components/Account/CreatedAccountsList";
import './css/Account.css';


const Account = () => {

    const { accounts } = useContext(AppContext);
    const [createAccountBtnClicked, setCreateAccountBtnClicked] = useState(false)
    function OpenCreateAccountForm(e) {
        if (createAccountBtnClicked === false)
            setCreateAccountBtnClicked(true)
        else
            setCreateAccountBtnClicked(false)

    }


    useEffect(
        () => {
            console.log(accounts)
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

                    <h3>Create Account</h3>
                    <div className="flex-container">
                        <Button onClick={OpenCreateAccountForm}>
                            Create Account
                        </Button>
                        {
                            createAccountBtnClicked ?
                                (
                                    < CreateAccountForm />
                                ) : ""
                        }


                    </div>

                    <CreatedAccountsList />
                </Body>
            </div>
        </div>

    );

}

export default Account;