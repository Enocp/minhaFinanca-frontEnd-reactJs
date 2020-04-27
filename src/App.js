import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login'
import './custom.css'
import CadastroUsuario from './views/cadastroUsuario'
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {



  render() {
    return (
      <div>
        <CadastroUsuario />
      </div>
    )
  }

}

export default App;
