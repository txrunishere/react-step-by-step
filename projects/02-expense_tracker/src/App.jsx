import ExpenceList from "./components/ExpenceList"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  return (
    <div className="flex h-[100vh] p-[20px]">
      <Sidebar />
      <ExpenceList />
    </div>
  )
}

export default App