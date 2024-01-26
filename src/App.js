/* eslint-disable curly */
/* eslint-disable array-callback-return */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { Suspense, useState, useEffect } from "react"
import { HashRouter as HRouter, BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "./Pages/Components/Helpers/ErrorFallBack"
import AppContext from "./Context/AppContext"
import LayoutNew from "./Pages/Layout"


const Dashboard = (React.lazy(() => import('./Pages/Dashboard')))
const Account = (React.lazy(() => import('./Pages/Account')))
const Transaction = (React.lazy(() => import('./Pages/Transaction')))
const Reports = (React.lazy(() => import('./Pages/Reports')))
const Budgets = (React.lazy(() => import('./Pages/Budgets')))
const Settings = (React.lazy(() => import('./Pages/Settings')))
function App() {

  const [transactions, setTransaction] = useState([])
  const [expense, setExpense] = useState([])
  const [income, setIncome] = useState([])
  const [networth, setNetworth] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)

  const [accounts, setAccount] = useState([])
  const [currency, setCurrency] = useState("$")
  // stubbed below const navigate = useNavigate()

  function navigate() {

  }

  const transactionContext = {
    income,
    transactions,
    expense,
    networth,
    totalIncome,
    totalExpenses,
    accounts,
    currency,
    setCurrency,
    setTransaction,
    setIncome,
    setExpense,
    setNetworth,
    setTotalExpenses,
    setTotalIncome,
    setAccount

  }


  return (

    <HRouter >
      <AppContext.Provider value={transactionContext}>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate('/')} >
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path="/" element={<LayoutNew />}>
                <Route index element={<Dashboard />} />
                <Route path="Account" element={<Account />} />
                <Route path="Transaction" element={<Transaction />} />
                <Route path="Reports" element={<Reports />} />
                <Route path="Budgets" element={<Budgets />} />
                <Route path="Settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AppContext.Provider>
    </HRouter>

  )
}

export default App
