/* eslint-disable prefer-const */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState, useRef } from 'react'
import Actions from '../Helpers/Actions'
import Dialog from '../Helpers/Dialog'
import AppContext from '../../../Context/AppContext'
import './Transaction.css'
import Form from '../Helpers/Form'
import { wrappCurrency } from '../Helpers/Utilities'
// import { UpdateAccount } from '../Helpers/Utilities'

export const RecentTransactionView = () => {
    // eslint-disable-next-line indent
    const [editClick, setEditClick] = useState(false)
    const [deleteClick, setDeleteClick] = useState(false)
    const [viewDetailsClick, setViewDetailsClick] = useState(false)
    const [viewDialogue, setViewDialogue] = useState()
    const { accounts, setAccount, currency } = useContext(AppContext)
    const viewForm = useRef()
    function convertDate(date) {
        let tempdate = new Date(date)
        return tempdate.toDateString()
    }
    function onAction(type, item) {
        console.log('on action clicked')

        console.log(type)
        if (type === 'edit') {
            setEditClick(true)
        } else if (type === 'delete') {
            setDeleteClick(true)
            setViewDialogue(item)
        } else if (type === 'info') {
            setViewDetailsClick(true)
            setViewDialogue(item)
        }
    }

    const EditDialogueBox = () => {
        return (<Dialog
            modal
            header="Edit Transaction Entry"
            onAction={(type) => {
                setEditClick(false)
                // setExample(null);
            }}></Dialog>)
    }

    const DeleteDialogueBox = () => {
        return (<Dialog
            modal
            header="Confirm Delete Transaction ?"
            hasCancel={true}
            onAction={(type) => {
                if (type === 'dismiss') { setDeleteClick(false) }

                if (type === 'confirm') {
                    setDeleteClick(false)
                    let accTemp = accounts.map(account => {
                        let transactionTemp = account.transactions.filter(item => {
                            console.log(item.amount)
                            console.log(viewDialogue.amount)
                            return item.amount !== viewDialogue.amount
                            // if type is expense adjust expens

                            // if type is income adjust
                        })
                        let incomeTemp = account.incomes.filter(item => {
                            console.log(item.amount)
                            console.log(viewDialogue.amount)
                            return item.amount !== viewDialogue.amount
                            // if type is expense adjust expens

                            // if type is income adjust
                        })
                        let expenseTemp = account.expenses.filter(item => {
                            console.log(item.amount)
                            console.log(viewDialogue.amount)
                            return item.amount !== viewDialogue.amount
                            // if type is expense adjust expens

                            // if type is income adjust
                        })
                        account.transactions = transactionTemp
                        account.incomes = incomeTemp
                        account.expenses = expenseTemp
                        console.log(account)
                        let expensesum
                        for (let i = 0; i < account.expenses.length; i++) {
                            expensesum += Number(account.expenses[i].amount)
                            console.log(expensesum)
                        }
                        if (account.expenses.length > 0) { account.totalExpense = expensesum } else { account.totalExpense = 0 }
                        let incomesum = 0

                        for (let i = 0; i < account.incomes.length; i++) {
                            incomesum += Number(account.incomes[i].amount)
                            console.log(incomesum)
                        }
                        if (account.incomes.length > 0) { account.totalIncome = incomesum } else { account.totalIncome = 0 }
                        account.networth = account.totalIncome - account.totalExpense

                        account.totalExpenseInCurrency = wrappCurrency(currency, account.totalExpense)

                        account.totalIncomeInCurrency = wrappCurrency(currency, account.totalIncome)

                        console.log(account.totalIncome)
                        console.log(account.totalExpense)
                        console.log(account.networth)
                        console.log(account)
                        return account
                    })
                    //  console.log(accTemp)
                    // UpdateAccount(accTemp, setAccount)
                    setAccount(accTemp)

                    // item => item.id !== id
                }
                // setExample(null);
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
                setViewDetailsClick(false)
                // setExample(null);
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
                    type: { label: 'Transaction', type: 'text', defaultValue: viewDialogue.type }
                }}
                initialData={{ rateme: 4, freetext: 'Hello' }}

            />

        </Dialog>)
    }

    // const currentTransactions

    return (

        <div className="Transaction-view">

            {editClick ? <EditDialogueBox /> : ''}
            {deleteClick ? <DeleteDialogueBox /> : ''}
            {viewDetailsClick ? <ViewDialogueBox /> : ''}
            <h5>Recent Transaction</h5>

            {
                accounts
                    ? accounts.map(

                        (account) =>
                        (
                            <>
                                <details>
                                    <summary>  {account.name}'s  Transactions</summary>
                                    <table>

                                        <tbody>

                                            {account.transactions.length > 0
                                                ? account.transactions.map((singleTransact) => (

                                                    <>
                                                        <tr >
                                                            {singleTransact.type === 'Income'
                                                                ? <>
                                                                    <td className='income'>+</td>
                                                                    <td className='income'>{singleTransact.amountInCurrency} </td>
                                                                </>
                                                                : <>
                                                                    <td className='expense'>-</td>
                                                                    <td className='expense'>{singleTransact.amountInCurrency} </td>
                                                                </>}

                                                            <td>  {convertDate(singleTransact.date)}</td>
                                                            <td> {singleTransact.category}</td>
                                                            <td> <Actions item={

                                                                {
                                                                    date: singleTransact.date,
                                                                    note: singleTransact.note,
                                                                    amount: singleTransact.amount,
                                                                    type: singleTransact.type
                                                                }
                                                            } onAction={(type, item) => onAction(type,
                                                                item)} /> </td>
                                                        </tr>

                                                    </>

                                                ))
                                                : ''
                                            }

                                        </tbody>
                                    </table>
                                </details>

                            </>

                        )
                    )
                    : ''
            }

        </div>
    )
}

export default RecentTransactionView
