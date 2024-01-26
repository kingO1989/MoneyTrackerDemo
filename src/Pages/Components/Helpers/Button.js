/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './css/Button.css'

const Button = (props) => {
    return (
        <>
            {props.href
                ? (
                    <a {...props} className={classNames('Button', props.className)}>
                        {props.children}
                    </a>

                )
                : (
                    <>
                        <span><button {...props} className={classNames('Button', props.className)}></button></span>
                    </>
                )
            }

        </>
    )
}
Button.propTypes = {
    href: PropTypes.string
}

export default Button
