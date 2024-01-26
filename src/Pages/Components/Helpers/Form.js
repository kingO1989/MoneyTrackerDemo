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

import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import './css/Form.css';

const Form = forwardRef(({ fields, initialData = {}, readonly = false }, ref) => {
  return (
    <form className="Form" ref={ref}>
      {Object.keys(fields).map((id) => {
        const prefilled = initialData[id];
        const { label, type, accounts, onAccountsChange, onAction, onTransactionChange, defaultValue, onCategoryChange } = fields[id];
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
                onCategoryChange={onCategoryChange}
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
              onCategoryChange={onCategoryChange}

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
      type: PropTypes.oneOf(['textarea', 'input', 'year', 'AccountHolders', 'TransactionCategory']),
      options: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
  initialData: PropTypes.object,
  readonly: PropTypes.bool,
};

export default Form;
