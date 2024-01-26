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
import deleteImage from './images/close.svg';
import editImage from './images/edit.svg';
import Button from './Button';
import './css/Actions.css';




const Actions = ({ onAction = () => { }, item }) => {

    function InfoClick() {
        console.log("info was clicked")
        onAction('info', item)
    }


    function EditClick() {

    }

    function DeleteClick() {
        onAction('delete', item)
    }

    return (
        <span className="Actions">
            <Button
                className="recent-trans-btn"
                title="More info"
                onClick={(e) => InfoClick(e)}>
                <i className="fa-sharp fa-regular fa-eye"></i>
            </Button>
            <Button
                className="recent-trans-btn"
                title="Edit"
                onClick={() => onAction('edit')}>
                <i className="fa-sharp fa-solid fa-square-pen"></i>
            </Button>
            <Button
                className="recent-trans-btn"
                tabIndex="0"
                title="Delete"
                onClick={DeleteClick.bind(null, 'delete')}>
                <i className="fa-regular fa-rectangle-xmark"></i>
            </Button>
        </span>
    );
};

Actions.propTypes = {
    onAction: PropTypes.func
};

export default Actions;
