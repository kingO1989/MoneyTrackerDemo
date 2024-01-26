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

import React from 'react'
import PropTypes from 'prop-types'
import AccountTransactionList from './AccountTransactionList'


const AccountDetailsRightView = ({ display, showAccordion }) => {
    console.log(display)
    return <>
        <div className="right_view">
            <div className="account_details">
                <div className="total_income">
                    <span className="title">Total Income</span>
                    <span className="value">{display ? display.currency + "" + display.totalIncome : ""}</span>
                    <span className="view arrow_down" onClick={(e) => showAccordion("total_income_accordion")} >
                        <i className="fa-solid fa-angle-down fa-xl"></i>
                    </span>
                </div>

                <div className="total_income_accordion">
                    {
                        display
                            ?
                            <>
                                <AccountTransactionList transaction={display.incomes} currency={display.currency} />
                            </>
                            : ""
                    }
                </div>
                <div className="total_expenses">
                    <span className="title">Total Expense</span>
                    <span className="value">{display ? display.currency + "" + display.totalExpense : ""}</span>
                    <span className="view arrow_down" onClick={() => showAccordion("total_expense_accordion")}>
                        <i className="fa-solid fa-angle-down fa-xl"></i></span>
                </div>
                <div className="total_expense_accordion">
                    {
                        display
                            ?
                            <>
                                <AccountTransactionList transaction={display.expenses} currency={display.currency} />
                            </>
                            : ""
                    }
                </div>
                <div className="networth">
                    <span className="title">Networth {" "}</span>
                    <span className="value">{display ? display.currency + "" + display.networth : ""}</span>
                </div>
            </div>
        </div>


    </>
}

AccountDetailsRightView.propTypes = {
    display: PropTypes.object,
    showAccordion: PropTypes.func
}
export default AccountDetailsRightView
