import React from 'react'
import Footer from './Footer'
import AddTodos from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodos />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
