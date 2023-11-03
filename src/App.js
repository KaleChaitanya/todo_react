import React from 'react';
import './App.css';
import Alert from './componet/Alert';
import Todo from './componet/Todo';
import DarkLightMode from './componet/DarkLightMode';

function App() {
  const [alert, setAlert] = React.useState(null);
  const [mode, setMode] = React.useState('light')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#020617'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#f8fafc'
    }
  }
  return (
    <>
      <Alert alert={alert} />
      <DarkLightMode mode={mode} toggleMode={toggleMode} />
      <Todo showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
