import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import './css/Form.css';

const Form = forwardRef(({ fields, initialData = {}, readonly = false }, ref) => {
  return (
    <form className="Form" ref={ref}>
      {Object.keys(fields).map((id) => {
        const prefilled = initialData[id];
        const { label, type, accounts, onAccountsChange, onAction, onTransactionChange, defaultValue } = fields[id];
        if (readonly) {

          return (
            <div className="FormRow" key={id}>
              <label className="FormLabel" htmlFor={id}>
                {label}
              </label>
              <FormInput
                id={id}
                type={type}
                accounts={accounts}
                onAccountsChange={onAccountsChange}
                onAction={onAction}
                onTransactionChange={onTransactionChange}
                defaultValue={defaultValue}
                readOnly={true}

              />
            </div>
          );
        }
        return (
          <div className="FormRow" key={id}>
            <label className="FormLabel" htmlFor={id}>
              {label}
            </label>
            <FormInput
              id={id}
              type={type}
              accounts={accounts}
              onAccountsChange={onAccountsChange}
              onAction={onAction}
              onTransactionChange={onTransactionChange}
              defaultValue={defaultValue}

            />
          </div>
        );
      })}
    </form>
  );
});

Form.propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['textarea', 'input', 'year', 'AccountHolders']),
      options: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
  initialData: PropTypes.object,
  readonly: PropTypes.bool,
};

export default Form;
