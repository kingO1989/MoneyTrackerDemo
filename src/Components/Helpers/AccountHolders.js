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
    accounts: PropTypes.arrayOf(PropTypes.string),
};

export default AccountHolders;
