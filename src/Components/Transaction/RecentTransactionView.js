import { useContext, useState, useRef } from "react";
import Actions from "../Helpers/Actions";
import Dialog from "../Helpers/Dialog";
import AppContext from "../../Context/AppContext";
import './Transaction.css';
import Form from "../Helpers/Form";

export const RecentTransactionView = () => {
    const [editClick, setEditClick] = useState(false);
    const [deleteClick, setDeleteClick] = useState(false);
    const [viewDetailsClick, setViewDetailsClick] = useState(false);
    const [viewDialogue, setViewDialogue] = useState();
    const { accounts } = useContext(AppContext);
    const viewForm = useRef();
    function onAction(type, item) {

        console.log("on action clicked")

        console.log(type)
        if (type === 'edit') {
            setEditClick(true);

        }

        else if (type === 'delete') {
            setDeleteClick(true);

        }
        else if (type === 'info') {
            setViewDetailsClick(true);
            setViewDialogue(item)

        }
    }

    const EditDialogueBox = () => {

        return (<Dialog
            modal
            header="Edit Transaction Entry"
            onAction={(type) => {
                setEditClick(false);
                //setExample(null);
            }}></Dialog>)
    }


    const DeleteDialogueBox = () => {

        return (<Dialog
            modal
            header="Confirm Delete Transaction ?"
            hasCancel={false}
            onAction={(type) => {
                setDeleteClick(false);
                //setExample(null);
            }



            }


        />




        )
    }

    const ViewDialogueBox = () => {

        return (<Dialog
            modal
            header="Transaction Details"
            hasCancel={false}
            onAction={(type) => {
                setViewDetailsClick(false);
                //setExample(null);
            }
            }

            data={viewDialogue}


        >

            <Form
                ref={viewForm}
                readonly={false}
                fields={{

                    amount: { label: 'Amount', type: 'number', defaultValue: viewDialogue.amount },
                    date: { label: 'Date', type: 'text', defaultValue: viewDialogue.date },
                    note: { label: 'Note', type: 'text', defaultValue: viewDialogue.note },
                    type: { label: 'Transaction', type: 'text', defaultValue: viewDialogue.type },

                }}
                initialData={{ rateme: 4, freetext: 'Hello' }}

            />


        </Dialog>)
    }


    //const currentTransactions

    return (

        <div className="Transaction">

            {editClick ? <EditDialogueBox /> : ""}
            {deleteClick ? <DeleteDialogueBox /> : ""}
            {viewDetailsClick ? <ViewDialogueBox /> : ""}
            <h3>Recent Transaction</h3>


            {
                accounts ? accounts.map(

                    (account) =>
                    (
                        <>

                            <details>
                                <summary>  {account.name}'s  Transactions</summary>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                Date
                                            </td>
                                            <td>
                                                Note
                                            </td>
                                            <td>
                                                Amount
                                            </td>
                                            <td>
                                                Transaction Type
                                            </td>
                                            <td>
                                                Actions
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>



                                        {account.transactions.length > 0 ? account.transactions.map((singleTransact) => (

                                            <>
                                                <tr button>
                                                    <td>  {singleTransact.date}</td>
                                                    <td> {singleTransact.note}</td>
                                                    <td>{singleTransact.amount} </td>
                                                    <td>{singleTransact.type} </td>
                                                    <td> <Actions item={


                                                        {
                                                            date: singleTransact.date,
                                                            note: singleTransact.note,
                                                            amount: singleTransact.amount,
                                                            type: singleTransact.type,
                                                        }
                                                    } onAction={(type, item) => onAction(type,
                                                        item)} /> </td>
                                                </tr>

                                            </>



                                        ))
                                            : ""
                                        }

                                    </tbody>
                                </table>
                            </details>



                        </>

                    )
                ) : ""
            }



        </div>
    );


}

export default RecentTransactionView;