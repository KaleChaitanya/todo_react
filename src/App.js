import React from 'react';
import './App.css';
import Alert from './componet/Alert';
import Todo from './componet/Todo';

function App() {
  const [alert, setAlert] = React.useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  return (
    <>
      <Alert alert={alert} />
      <Todo showAlert={showAlert} />
    </>
  );
}

export default App;
