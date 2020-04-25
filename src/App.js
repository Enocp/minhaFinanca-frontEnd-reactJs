import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {

  state = {
    nome: ''
  }

  render() {
    return (
      <div>
        <label> Nome:</label>
        <input type="texte" value={this.state.nome}
          onChange={(e) => this.setState({ nome: e.target.value })} />

       O nome digitado foi :{this.state.nome}

      </div>
    )
  }

}

export default App;
