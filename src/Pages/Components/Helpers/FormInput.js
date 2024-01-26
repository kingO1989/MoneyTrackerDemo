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
import AccountHolders from './AccountHolders';
import TransactionTypes from './TransactionTypes';
import TransactionCategory from './TransactionCategory';


function FormInput({ type = 'input', defaultValue, accounts = [], onAccountsChange, onTransactionChange, onCategoryChange, readOnly, onAction, ...rest }) {

    function GetDate() {
        var curr = new Date();
        curr.setDate(curr.getDate() + 3);
        var currdate = curr.toISOString().substring(0, 10);
        return currdate;
    }

    switch (type) {
        case 'date':
            return (
                <input
                    {...rest}
                    onChange={onAction}
                    type="date"
                    defaultValue={

                        GetDate()
                    }
                />
            );

        case 'textarea':
            return <textarea defaultValue={defaultValue} onChange={onAction} {...rest} />;

        case 'number':
            return <input type="number" value={defaultValue} onChange={onAction} {...rest} />;

        case 'AccountHolders':
            return <AccountHolders defaultValue={defaultValue} accounts={accounts} {...rest} onAccountsChange={onAccountsChange} />;

        case 'TransactionTypes':
            return <TransactionTypes defaultValue={defaultValue}  {...rest} onTransactionChange={onTransactionChange} />;

        case 'TransactionCategory':
            return <TransactionCategory defaultValue={defaultValue}  {...rest} onCategoryChange={onCategoryChange} />;

        case 'text':
            return <input type="text" onChange={onAction} value={defaultValue} readOnly={readOnly ? true : false} />

        default:

            // eslint-disable-next-line no-multi-spaces
            return <input type="text" onChange={onAction} value={defaultValue} readOnly={readOnly ? true : false}   {...rest} />

    }
}

FormInput.propTypes = {
    type: PropTypes.oneOf(['textarea', 'input', 'date', 'AccountHolders', 'TransactionTypes']),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array,
};

export default FormInput;
