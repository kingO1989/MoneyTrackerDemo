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
