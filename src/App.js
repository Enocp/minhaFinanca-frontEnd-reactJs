import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends React.Component {

  state = {
    numero1: 'null',
    nnumero2: 'null',
    resultado: 'null'
  }

  render() {
    return (
      <div>
        <label> primeiro Numero:</label>
        <input type="texte" value={this.state.numero1}
          onChange={(e) => this.setState({ numero1: e.target.value })} />
        <br />
        <label> segundo numero:</label>
        <input type="texte" value={this.state.numero2}
          onChange={(e) => this.setState({ numero2: e.target.value })} />
        <br />
        <button
          onClick={() => this.setState({ resultado: parseInt(this.state.numero1) + parseInt(this.state.numero2) })} >
          Somar</button>
        <br />
        O resultado è :{this.state.resultado}

      </div>
    )
  }

}

export default App;
