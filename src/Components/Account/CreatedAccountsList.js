import { useEffect, useState, useContext } from "react";
import AppContext from "../../Context/AppContext";
import './CreateAccount.css';


const CreatedAccountsList = () => {
    const { accounts } = useContext(AppContext);
    return (
        <>
            <br></br>
            <table className="account-list">
                <thead>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Owner</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>



                    {accounts ?
                        accounts.map((item, id) => {

                            return <tr><td><input type="checkbox" /></td><td>{item.name}</td><td> {item.networth}</td></tr>


                        })
                        : ""}


                </tbody>
            </table>

        </>


    );
}


export default CreatedAccountsList;