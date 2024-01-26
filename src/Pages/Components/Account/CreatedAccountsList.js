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
import AppContext from "../../../Context/AppContext";
import './CreateAccount.css';


const CreatedAccountsList = () => {
    const { accounts } = useContext(AppContext);
    return (
        <>
            <br></br>
            <h4>Total</h4>
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


export default CreatedAccountsList
