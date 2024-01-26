/* eslint-disable indent */
/* eslint-disable curly */
/* eslint-disable array-callback-return */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
function clone(o) {
    return JSON.parse(JSON.stringify(o))
}



function validator(value) {
    if (value === undefined) { return false } else return true
}

export function UpdateAccount(accountClone, setAccount) {


    accountClone = accountClone.map((account) => {
        console.log(account)
        let expensesum = 0
        for (let i = 0; i < account.expenses.length; i++) {
            expensesum += Number(account.expenses[i].amount)
        }
        if (account.expenses.length > 0)
            account.totalExpense = expensesum
        let incomesum = 0

        for (let i = 0; i < account.incomes.length; i++) {
            incomesum += Number(account.incomes[i].amount)
        }
        if (account.incomes.length > 0)
            account.totalIncome = incomesum
        account.networth = account.totalIncome - account.totalExpense
        return account
    })

    setAccount(accountClone)
    // total expenses
}


export function wrappCurrency(currency, val) {
    return currency + "" + val
}
