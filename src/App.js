import './App.css';
import React from 'react';
import TodoList from './components/TodoList';


function App() {
  
   const appName = "todo-app"

  return (
    //MARK- This is the main function where the application will start
    <div className={appName}>
      <TodoList />
    </div>
  );
}

export default App;
