import './App.css';

import Expenses from './Components/Expenses/Expenses';
import ExpenseForm from './Components/NewExpense/NewExpense';


function App() {

  return (
    <div>
      <ExpenseForm />
      <Expenses />
    </div>
  );
}

export default App;