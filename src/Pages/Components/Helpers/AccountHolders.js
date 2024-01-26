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
function AccountHolders({ id, defaultValue = '', accounts = [], onAccountsChange }) {
    return (
        <>
            <select
                className="form-control"
                onChange={onAccountsChange}
                defaultValue={accounts[0]}
            >
                <option >Select account holder</option>
                {
                    accounts.map((account) => (
                        <>
                            <option value={account.name}>{account.name}</option>
                        </>
                    ))
                }

            </select>
        </>
    );
}

AccountHolders.propTypes = {
    defaultValue: PropTypes.string,
    accounts: PropTypes.arrayOf(PropTypes.string)
};

export default AccountHolders;
