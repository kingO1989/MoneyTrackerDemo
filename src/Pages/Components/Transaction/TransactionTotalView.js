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
import AppContext from "../../../Context/AppContext";

export const TransactionTotalView = () => {
    const { accounts, expense, income, networth, setNetworth, totalIncome, totalExpenses } = useContext(AppContext);

    useEffect(
        () => {
            console.log(accounts)
        }
        , [accounts]
    )
    return (
        <div className="Transaction-view">
            <h5> Transaction Summary
            </h5>
            {accounts ? accounts.map((account) => (

                <details>
                    <summary> <b> {account.name + "'s"} summary</b></summary>
                    <table>

                        <tbody>


                            <tr  ><td><b>Total Income</b> ::<span className='income'>
                                {
                                    account.totalIncomeInCurrency
                                }
                            </span></td>


                            </tr>


                            <tr ><td><b>Total Expense</b> ::<span className='expense'>
                                {
                                    account.totalExpenseInCurrency
                                }
                            </span></td>
                            </tr>
                            <tr className='' ><td><b>Networth</b> ::{
                                account.networth
                            }</td>
                            </tr>


                        </tbody>

                    </table>
                </details>


            )) : ""
            }
        </div>
    )
}
