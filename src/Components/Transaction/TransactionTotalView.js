import { useEffect, useState, useContext } from "react";
import AppContext from "../../Context/AppContext";

export const TransactionTotalView = () => {
    const { accounts, expense, income, networth, setNetworth, totalIncome, totalExpenses } = useContext(AppContext);


    useEffect(
        () => {
            console.log(accounts)
        }
        , [accounts]
    )

    return (
        <>
            {accounts ? accounts.map((account) => (


                <ul>
                    <li><h5>{account.name}</h5></li>
                    <li>Total Income ::{
                        account.totalIncome
                    }</li>
                    <li>Total expenses :: {
                        account.totalExpense
                    }</li>

                    <li>NetWorth  :: {
                        account.networth
                    }</li>
                </ul>

            )) : ""
            }
        </>
    )


}