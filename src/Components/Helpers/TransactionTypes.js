import PropTypes from 'prop-types';
import { useState } from 'react';

function TransactionTypes({ id, defaultValue = '', onTransactionChange }) {


    return (
        <>



            <select
                className="form-control"

                onChange={onTransactionChange}


            >
                <option >Select Transaction Type</option>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>

            </select>



        </>
    );
}

TransactionTypes.propTypes = {
    defaultValue: PropTypes.string,
    accounts: PropTypes.arrayOf(PropTypes.string),
};

export default TransactionTypes;
