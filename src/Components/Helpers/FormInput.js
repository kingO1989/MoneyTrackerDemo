import PropTypes from 'prop-types';
import AccountHolders from './AccountHolders';
import TransactionTypes from './TransactionTypes';


function FormInput({ type = 'input', defaultValue, accounts = [], onAccountsChange, onTransactionChange, readOnly, onAction, ...rest }) {

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
            return <input defaultValue={defaultValue} type="number" value={defaultValue} onChange={(e) => onAction(e.target.value)} {...rest} />;

        case 'AccountHolders':
            return <AccountHolders defaultValue={defaultValue} accounts={accounts} {...rest} onAccountsChange={onAccountsChange} />;

        case 'TransactionTypes':
            return <TransactionTypes defaultValue={defaultValue}  {...rest} onTransactionChange={onTransactionChange} />;
        case 'text':
            return <input type="text" onChange={onAction} value={defaultValue} readOnly={readOnly ? true : false} />

        default:

            return <input type="text" onChange={onAction} value={defaultValue} readOnly={readOnly ? true : false}   {...rest} />

    }
}

FormInput.propTypes = {
    type: PropTypes.oneOf(['textarea', 'input', 'date', 'AccountHolders', 'TransactionTypes']),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array,
};

export default FormInput;
