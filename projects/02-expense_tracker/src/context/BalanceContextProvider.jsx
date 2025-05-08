import { createContext } from "react"

export const BalanceContext = createContext(null)

const BalanceContextProvider = ({ children, values }) => {
  return (
    <BalanceContext.Provider value={values}>
      {children}
    </BalanceContext.Provider>
  )
}

export default BalanceContextProvider