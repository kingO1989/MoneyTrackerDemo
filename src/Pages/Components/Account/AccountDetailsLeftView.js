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
const AccountDetailsLeftView = ({ accounts, accountDisplayHandler }) => {
    return <>
        {accounts.map((item, id) => {
            return <div key={id} className="account_holder" onClick={(e) => accountDisplayHandler(item)}>
                <div className="name"> {item.name}</div>
                <div className="right_arrow"></div>
            </div>
        })}


    </>
}

AccountDetailsLeftView.propTypes = {
    accounts: PropTypes.array,
    accountDisplayHandler: PropTypes.func,
    item: PropTypes.object
}
export default AccountDetailsLeftView
