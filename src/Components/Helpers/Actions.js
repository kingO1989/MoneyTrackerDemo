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

    }

    return (
        <span className="Actions">
            <Button
                className="ActionsInfo"
                title="More info"
                onClick={(e) => InfoClick(e)}>
                View Details
            </Button>
            <Button
                title="Edit"
                onClick={() => onAction('edit')}>
                <img src={editImage} alt="Edit" />
            </Button>
            <Button
                tabIndex="0"
                title="Delete"
                onClick={onAction.bind(null, 'delete')}>
                <img src={deleteImage} alt="Delete" />
            </Button>
        </span>
    );
};

Actions.propTypes = {
    onAction: PropTypes.func,
};

export default Actions;
