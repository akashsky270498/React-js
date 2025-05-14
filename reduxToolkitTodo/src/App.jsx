import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {


  return (
    <>
      <div className="bg-black text-white text-2xl font-bold text-center px-6 py-4 mt-8 mb-4 rounded-md shadow-md">
        Learn about redux toolkit
      </div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
