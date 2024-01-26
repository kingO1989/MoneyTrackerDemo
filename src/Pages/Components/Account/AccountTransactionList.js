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
//import '';

import PropTypes from 'prop-types';
import './AccountTransactionList.css';
const AccountTransactionList = ({ transaction, currency }) => {

    function convertDate(date) {
        let tempdate = new Date(date)
        return tempdate.toDateString()
    }
    console.log(transaction)
    return (
        <>
            <br></br>
            <div className='container-account-list'>
                <table className="account-list">
                    <thead>

                    </thead>
                    <tbody>

                        {transaction ?
                            transaction.map((transactionItem, id) => {

                                return <tr key={id}>
                                    <td>{convertDate(transactionItem.date)},{" "} </td>

                                    <td> {currency
                                        + "" + transactionItem.amount}</td>
                                </tr>


                            })
                            : ""}


                    </tbody>
                </table>
            </div>

        </>


    );
}

AccountTransactionList.propTypes = {
    transaction: PropTypes.object,
    currency: PropTypes.string

};

export default AccountTransactionList
